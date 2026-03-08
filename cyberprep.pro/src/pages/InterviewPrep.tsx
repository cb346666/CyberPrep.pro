import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Send, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });


type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function InterviewPrep() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome to the SOC L1 Mock Interview. I will ask you a series of technical and scenario-based questions. Are you ready to begin?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatRef = useRef(
    ai.chats.create({
      model: "gemini-2.0-flash",
      config: {
        systemInstruction: `You are an expert Cybersecurity Hiring Manager conducting an interview for a SOC L1 Analyst position.
      
      Guidelines:
      1. Ask ONE question at a time. Wait for the user's response.
      2. Questions should cover: SIEM, Incident Triage, Networking (TCP/IP, OSI), Phishing analysis, and basic malware behavior.
      3. When the user answers, EVALUATE their answer briefly (Correct, Partially Correct, or Incorrect), explain why, and then ask the NEXT question.
      4. Keep your responses concise and professional.
      5. If the user asks for a hint, provide a small clue without giving away the answer.
      6. Format your evaluation clearly using markdown (e.g., **Evaluation:** Correct).
      7. The user is preparing for an interview, so be encouraging but realistic.`,
      },
    }),
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMsg });
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.text || "" },
      ]);
    } catch (error) {
      console.error("Failed to send message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col pb-4 sm:pb-0">
      <header className="mb-4 sm:mb-6 flex-shrink-0">
        <div className="flex items-center gap-2 sm:gap-3 text-indigo-400">
          <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            AI Interview Simulator
          </h1>
        </div>
        <p className="text-sm sm:text-base text-zinc-400 mt-1 sm:mt-2">
          Practice your SOC L1 interview skills with an AI hiring manager.
        </p>
      </header>

      <div className="flex-1 bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden flex flex-col backdrop-blur-sm shadow-2xl min-h-[400px]">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex \${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 \${
                    msg.role === 'user'
                      ? 'bg-indigo-500 text-white rounded-br-sm'
                      : 'bg-zinc-800/80 border border-white/10 text-zinc-200 rounded-bl-sm'
                  }`}
                >
                  <div className="prose prose-invert prose-sm max-w-none">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-zinc-800/80 border border-white/10 rounded-2xl rounded-bl-sm p-4 flex items-center gap-2 text-zinc-400">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Analyzing response...
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 sm:p-4 bg-zinc-950/50 border-t border-white/5 flex-shrink-0">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your answer..."
              disabled={isLoading}
              className="w-full bg-zinc-900 border border-white/10 rounded-xl py-2.5 sm:py-3 pl-4 pr-12 text-sm sm:text-base text-zinc-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-1.5 sm:right-2 p-1.5 sm:p-2 bg-indigo-500 hover:bg-indigo-400 disabled:bg-zinc-800 disabled:text-zinc-600 text-white rounded-lg transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[10px] sm:text-xs text-zinc-500 mt-2 text-center">
            Press Enter to send. The AI may take a moment to evaluate your
            answer.
          </p>
        </div>
      </div>
    </div>
  );
}
