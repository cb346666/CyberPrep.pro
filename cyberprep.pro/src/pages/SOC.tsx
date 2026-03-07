import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldAlert,
  Activity,
  Terminal,
  FileText,
  ChevronRight,
  AlertTriangle,
  HelpCircle,
  Target,
  Map,
} from "lucide-react";
import InterviewQA from "../components/soc/InterviewQA";
import Roadmap from "../components/soc/Roadmap";

const tabs = [
  { id: "roadmap", label: "SOC L1 Roadmap", icon: Map },
  { id: "flow", label: "Incident Flow", icon: Activity },
  { id: "qa", label: "Interview Q&A", icon: HelpCircle },
  { id: "attacks", label: "Attack Methods", icon: AlertTriangle },
  { id: "commands", label: "Commands & Tools", icon: Terminal },
];

export default function SOC() {
  const [activeTab, setActiveTab] = useState("roadmap");

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-emerald-400">
          <ShieldAlert className="w-6 h-6" />
          <h1 className="text-3xl font-bold tracking-tight text-white">
            SOC L1 Analyst Preparation
          </h1>
        </div>
        <p className="text-zinc-400 max-w-3xl leading-relaxed">
          Master the fundamentals of Security Operations Center (SOC) Level 1.
          Learn incident triage, log analysis, and common attack vectors.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex space-x-2 border-b border-white/10 pb-px overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium transition-colors relative whitespace-nowrap flex-shrink-0 ${
              activeTab === tab.id
                ? "text-emerald-400"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="soc-tab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"
                initial={false}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait">
          {activeTab === "roadmap" && <Roadmap key="roadmap" />}
          {activeTab === "flow" && <FlowDiagram key="flow" />}
          {activeTab === "qa" && <InterviewQA key="qa" />}
          {activeTab === "attacks" && <AttackMethods key="attacks" />}
          {activeTab === "commands" && <Commands key="commands" />}
        </AnimatePresence>
      </div>
    </div>
  );
}

function FlowDiagram() {
  const steps = [
    {
      title: "Preparation",
      desc: "Establish policies, procedures, and tools.",
      color: "border-zinc-700",
    },
    {
      title: "Identification",
      desc: "Detect and validate security events (Triage).",
      color: "border-blue-500/50",
    },
    {
      title: "Containment",
      desc: "Isolate affected systems to prevent spread.",
      color: "border-amber-500/50",
    },
    {
      title: "Eradication",
      desc: "Remove the root cause and artifacts.",
      color: "border-rose-500/50",
    },
    {
      title: "Recovery",
      desc: "Restore systems to normal operation.",
      color: "border-emerald-500/50",
    },
    {
      title: "Lessons Learned",
      desc: "Document and improve processes.",
      color: "border-purple-500/50",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8"
    >
      <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <Activity className="w-5 h-5 text-emerald-400" />
          Incident Response Lifecycle (NIST SP 800-61)
        </h3>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-zinc-800 lg:hidden"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative pl-12 lg:pl-0 p-4 rounded-xl border bg-zinc-950/50 ${step.color} hover:bg-zinc-800/50 transition-colors group`}
              >
                {/* Mobile Dot */}
                <div className="absolute left-[1.375rem] top-8 w-3 h-3 rounded-full bg-zinc-700 lg:hidden -translate-x-1/2 border-2 border-zinc-900"></div>

                <div className="text-xs font-mono text-zinc-500 mb-2">
                  Phase 0{i + 1}
                </div>
                <h4 className="font-semibold text-zinc-200 mb-2 group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>

                {i % 3 !== 2 && i < steps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            SOC L1 Daily Workflow
          </h3>
          <ul className="space-y-4">
            {[
              "Monitor SIEM dashboards for alerts.",
              "Acknowledge and assign tickets.",
              "Perform initial triage (False Positive vs True Positive).",
              "Gather context (IP reputation, user behavior, endpoint logs).",
              "Escalate to L2 if malicious activity is confirmed.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-zinc-300"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs mt-0.5">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Key Triage Questions
          </h3>
          <ul className="space-y-3">
            {[
              "What triggered the alert? (Rule name, logic)",
              "Who is the user/host involved? (VIP, critical server?)",
              "When did it happen? (Is it ongoing?)",
              "Where did it originate? (Internal vs External IP)",
              "Why is it suspicious? (Deviation from baseline)",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-zinc-400 bg-zinc-950/50 p-3 rounded-lg border border-white/5"
              >
                <FileText className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function AttackMethods() {
  const mitreTactics = [
    {
      tactic: "Initial Access (TA0001)",
      desc: "The adversary is trying to get into your network.",
      techniques: [
        { name: "Phishing (T1566)", desc: "Sending deceptive emails to users to gain access." },
        { name: "Exploit Public-Facing Application (T1190)", desc: "Exploiting a vulnerability in an internet-facing system." },
        { name: "Valid Accounts (T1078)", desc: "Using compromised or default credentials to log in." }
      ]
    },
    {
      tactic: "Execution (TA0002)",
      desc: "The adversary is trying to run malicious code.",
      techniques: [
        { name: "Command and Scripting Interpreter (T1059)", desc: "Using PowerShell, cmd, or bash to execute commands." },
        { name: "Scheduled Task/Job (T1053)", desc: "Abusing task scheduling to execute code at a specific time." },
        { name: "Windows Management Instrumentation (T1047)", desc: "Using WMI to execute malicious payloads." }
      ]
    }
  ];

  const attacks = [
    {
      name: "Phishing / Spear Phishing",
      desc: "Deceptive emails aiming to steal credentials or deliver malware.",
      indicators: [
        "Suspicious sender domain",
        "Urgent language",
        "Malicious attachments (.docm, .exe, .js)",
        "Mismatched URLs",
      ],
      mitigation:
        "Email filtering, user awareness training, MFA, DMARC/SPF/DKIM.",
    },
    {
      name: "SQL Injection (SQLi)",
      desc: "Injecting malicious SQL queries via input fields to manipulate databases.",
      indicators: [
        "Error messages containing SQL syntax",
        "Unusual characters in URL parameters (', --, UNION)",
        "Multiple failed login attempts followed by success",
      ],
      mitigation: "Prepared statements, input validation, WAF.",
    },
    {
      name: "Brute Force / Credential Stuffing",
      desc: "Automated guessing of passwords or using leaked credentials.",
      indicators: [
        "High volume of failed logins from single/multiple IPs",
        "Logins at unusual hours",
        "Successful login after many failures",
      ],
      mitigation:
        "Account lockout policies, MFA, strong password requirements, CAPTCHA.",
    },
    {
      name: "Ransomware",
      desc: "Malware that encrypts files and demands payment for the decryption key.",
      indicators: [
        "Mass file modifications/renaming",
        "Known ransomware extensions (.encrypted, .locky)",
        "High CPU/Disk I/O",
        "Connections to known C2 servers",
      ],
      mitigation:
        "Offline backups, EDR, network segmentation, patch management.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8"
    >
      <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-400" />
          MITRE ATT&CK Framework
        </h3>
        <p className="text-sm text-zinc-400 mb-6">
          A globally-accessible knowledge base of adversary tactics and techniques based on real-world observations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mitreTactics.map((tactic, i) => (
            <div key={tactic.tactic} className="bg-zinc-950/50 border border-white/5 rounded-xl p-5">
              <h4 className="font-bold text-blue-400 mb-1">{tactic.tactic}</h4>
              <p className="text-xs text-zinc-400 mb-4">{tactic.desc}</p>
              
              <div className="space-y-3">
                <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Common Techniques</div>
                {tactic.techniques.map((tech, j) => (
                  <div key={j} className="bg-zinc-900/80 border border-white/5 rounded-lg p-3">
                    <div className="text-sm font-medium text-zinc-200 mb-1">{tech.name}</div>
                    <div className="text-xs text-zinc-500">{tech.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-rose-400" />
          Common Attack Vectors
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {attacks.map((attack, i) => (
            <motion.div
              key={attack.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors"
            >
              <h3 className="text-xl font-semibold text-rose-400 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                {attack.name}
              </h3>
              <p className="text-sm text-zinc-400 mb-6">{attack.desc}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Indicators of Compromise (IoCs)
                  </h4>
                  <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1">
                    {attack.indicators.map((ind, j) => (
                      <li key={j}>{ind}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-3">
                  <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                    Mitigation
                  </h4>
                  <p className="text-sm text-emerald-200/70">{attack.mitigation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Commands() {
  const categories = [
    {
      title: "Network Troubleshooting (Windows/Linux)",
      commands: [
        { cmd: "ping <ip>", desc: "Test connectivity to a host." },
        {
          cmd: "tracert <ip> / traceroute <ip>",
          desc: "Trace the path packets take to a destination.",
        },
        {
          cmd: "netstat -ano / netstat -tulpn",
          desc: "View active network connections and listening ports.",
        },
        {
          cmd: "nslookup <domain>",
          desc: "Query DNS to resolve domain to IP.",
        },
      ],
    },
    {
      title: "Log Analysis (Linux CLI)",
      commands: [
        {
          cmd: 'grep -i "failed" /var/log/auth.log',
          desc: "Search for failed login attempts (SSH).",
        },
        { cmd: "tail -f /var/log/syslog", desc: "View logs in real-time." },
        {
          cmd: "awk '{print $1}' access.log | sort | uniq -c | sort -nr",
          desc: "Count unique IP addresses in an Apache/Nginx access log.",
        },
      ],
    },
    {
      title: "Ethical Hacking / Recon (Educational)",
      commands: [
        {
          cmd: "nmap -sV -sC -p- <ip>",
          desc: "Scan all ports, detect service versions, and run default scripts.",
        },
        {
          cmd: 'sqlmap -u "http://example.com/page?id=1" --dbs',
          desc: "Automated SQL injection tool to enumerate databases.",
        },
        {
          cmd: "hydra -l admin -P rockyou.txt ssh://<ip>",
          desc: "Brute-force SSH login using a wordlist.",
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8"
    >
      <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-semibold text-rose-400">
            Educational Purpose Only
          </h4>
          <p className="text-xs text-rose-300/70 mt-1">
            The hacking commands listed below are for educational purposes to
            understand how attackers operate. Never run these commands against
            targets without explicit, written permission.
          </p>
        </div>
      </div>

      {categories.map((cat, i) => (
        <div
          key={cat.title}
          className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden"
        >
          <div className="bg-zinc-950/50 px-6 py-4 border-b border-white/5">
            <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
          </div>
          <div className="divide-y divide-white/5">
            {cat.commands.map((c, j) => (
              <div
                key={j}
                className="p-6 flex flex-col md:flex-row md:items-center gap-4 hover:bg-zinc-800/30 transition-colors"
              >
                <div className="flex-1">
                  <div className="bg-black/50 border border-zinc-800 rounded-lg p-3 font-mono text-sm text-emerald-400 overflow-x-auto">
                    $ {c.cmd}
                  </div>
                </div>
                <div className="flex-1 text-sm text-zinc-400">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
