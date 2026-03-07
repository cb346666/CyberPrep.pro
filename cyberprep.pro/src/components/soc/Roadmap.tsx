import { motion } from 'motion/react';
import { Network, Monitor, Shield, Activity, Bug, Award, CheckCircle2 } from 'lucide-react';

const roadmapData = [
  {
    phase: "Phase 1",
    title: "Networking Fundamentals",
    icon: Network,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    topics: [
      "OSI & TCP/IP Models",
      "Protocols (DNS, HTTP/S, FTP, SSH)",
      "IP Addressing & Subnetting",
      "Routing & Switching Basics",
      "VPNs & Proxies"
    ]
  },
  {
    phase: "Phase 2",
    title: "Operating Systems",
    icon: Monitor,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    topics: [
      "Windows Internals & Registry",
      "Windows Event Logs (Sysmon)",
      "Linux Command Line (CLI)",
      "Linux File System & Permissions",
      "Active Directory Basics"
    ]
  },
  {
    phase: "Phase 3",
    title: "Security Fundamentals",
    icon: Shield,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    topics: [
      "CIA Triad & Risk Management",
      "Cryptography (Symmetric, Asymmetric, Hashing)",
      "Identity & Access Management (IAM)",
      "Firewalls, IDS, and IPS",
      "Endpoint Detection & Response (EDR)"
    ]
  },
  {
    phase: "Phase 4",
    title: "Security Operations & SIEM",
    icon: Activity,
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
    topics: [
      "Incident Response Lifecycle",
      "Log Aggregation & Normalization",
      "SIEM Basics (Splunk, Elastic, Sentinel)",
      "Writing Basic Search Queries",
      "MITRE ATT&CK & Cyber Kill Chain"
    ]
  },
  {
    phase: "Phase 5",
    title: "Threat Intel & Analysis",
    icon: Bug,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    topics: [
      "Phishing Email Analysis (Headers, Links)",
      "Indicators of Compromise (IoCs)",
      "Static vs Dynamic Malware Analysis",
      "Threat Intelligence Platforms (MISP)",
      "YARA Rules Basics"
    ]
  },
  {
    phase: "Phase 6",
    title: "Certifications & Practice",
    icon: Award,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    topics: [
      "CompTIA Security+ / CySA+",
      "Cisco CyberOps Associate",
      "TryHackMe (SOC Level 1 Path)",
      "Blue Team Labs Online (BTLO)",
      "LetsDefend.io"
    ]
  }
];

export default function Roadmap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8"
    >
      <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 sm:p-8">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl font-bold text-white mb-3">SOC Analyst L1 Roadmap</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            A structured learning path to go from zero to a hired Security Operations Center Tier 1 Analyst. 
            Focus on mastering the fundamentals before diving into complex tools.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-zinc-800 -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12">
            {roadmapData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.phase} className="relative flex flex-col md:flex-row items-center gap-6 md:gap-0">
                  
                  {/* Left Side (Empty for odd, Content for even) */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 lg:pr-16 text-left md:text-right' : 'md:order-3 md:pl-12 lg:pl-16 text-left'}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      className={`bg-zinc-950/50 border ${item.borderColor} rounded-2xl p-6 hover:bg-zinc-900/80 transition-colors relative group`}
                    >
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
                          <item.icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <div>
                          <div className={`text-xs font-bold tracking-wider uppercase ${item.color} mb-1`}>{item.phase}</div>
                          <h3 className="text-lg font-bold text-zinc-100">{item.title}</h3>
                        </div>
                      </div>
                      
                      <ul className={`space-y-2 ${isEven ? 'md:flex md:flex-col md:items-end' : ''}`}>
                        {item.topics.map((topic, i) => (
                          <li key={i} className={`flex items-start gap-2 text-sm text-zinc-400 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            <CheckCircle2 className="w-4 h-4 text-emerald-500/50 flex-shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-zinc-900 border-4 border-zinc-800 items-center justify-center z-10">
                    <div className={`w-2.5 h-2.5 rounded-full ${item.bgColor.replace('/10', '')}`}></div>
                  </div>

                  {/* Right Side (Content for odd, Empty for even) */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'md:order-3' : ''}`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
