import { motion } from "motion/react";
import {
  ShieldAlert,
  Terminal,
  Network,
  Target,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const modules = [
  {
    title: "SOC L1 Preparation",
    desc: "Master SIEM, log analysis, incident response, and triage.",
    icon: ShieldAlert,
    colorClasses: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    path: "/soc",
    progress: 65,
  },
  {
    title: "Interview Simulator",
    desc: "AI-driven mock interviews for cybersecurity roles.",
    icon: Terminal,
    colorClasses: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    path: "/interview",
    progress: 10,
  },
  {
    title: "Networking Basics",
    desc: "TCP/IP, OSI Model, Routing, and Protocols.",
    icon: Network,
    colorClasses: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    path: "#",
    progress: 0,
    disabled: true,
  },
  {
    title: "VAPT & Hacking",
    desc: "Ethical hacking, penetration testing, and vulnerability assessment.",
    icon: Target,
    colorClasses: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    path: "#",
    progress: 0,
    disabled: true,
  },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            SOC L1 Track Active
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Master{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Cybersecurity
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Advanced animated learning platform for SOC, Networking, and Ethical
            Hacking. Prepare for your next interview with real-world scenarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <Link
              to="/soc"
              className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Start SOC L1 Training <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/interview"
              className="px-6 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium border border-white/10 transition-colors text-center"
            >
              Mock Interview
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Modules Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white tracking-tight">
            Learning Modules
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={mod.disabled ? "#" : mod.path}
                className={`block p-6 rounded-2xl border bg-zinc-900/40 backdrop-blur-sm transition-all group ${
                  mod.disabled
                    ? "border-white/5 opacity-60 cursor-not-allowed"
                    : "border-white/10 hover:border-emerald-500/30 hover:bg-zinc-800/50"
                }`}
                onClick={(e) => mod.disabled && e.preventDefault()}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border ${mod.colorClasses.split(" ").slice(0, 2).join(" ")}`}
                  >
                    <mod.icon
                      className={`w-6 h-6 ${mod.colorClasses.split(" ")[2]}`}
                    />
                  </div>
                  {mod.disabled && (
                    <span className="text-xs font-medium px-2 py-1 rounded bg-zinc-800 text-zinc-400">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {mod.desc}
                </p>

                {!mod.disabled && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-zinc-500">
                      <span>Progress</span>
                      <span className="text-emerald-400">{mod.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-emerald-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${mod.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      />
                    </div>
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
