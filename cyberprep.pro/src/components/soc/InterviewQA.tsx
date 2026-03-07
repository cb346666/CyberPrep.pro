import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Shield, Server, Globe, Database, AlertCircle, Target, Users, Search, Lock, CheckCircle, Activity, Bug, AlertTriangle } from 'lucide-react';

const qaData = [
  {
    category: 'Concepts',
    icon: Shield,
    questions: [
      {
        level: 'Basic',
        q: 'What is the Principle of Least Privilege (PoLP)?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">A security concept in which a user is given the minimum levels of access – or permissions – needed to perform his/her job functions. It reduces the attack surface and limits the potential damage of a compromised account.</p>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is a SOC (Security Operations Center)?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">A centralized function within an organization employing people, processes, and technology to continuously monitor and improve an organization's security posture while preventing, detecting, analyzing, and responding to cybersecurity incidents.</p>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is the CIA Triad?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">The core principles of information security:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl text-center flex flex-col items-center">
                <Lock className="w-6 h-6 text-emerald-400 mb-2" />
                <div className="font-bold text-emerald-400 mb-2">Confidentiality</div>
                <div className="text-xs text-zinc-400">Only authorized users can access data (Encryption, ACLs).</div>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl text-center flex flex-col items-center">
                <CheckCircle className="w-6 h-6 text-blue-400 mb-2" />
                <div className="font-bold text-blue-400 mb-2">Integrity</div>
                <div className="text-xs text-zinc-400">Data is accurate and unaltered (Hashing, Signatures).</div>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl text-center flex flex-col items-center">
                <Activity className="w-6 h-6 text-amber-400 mb-2" />
                <div className="font-bold text-amber-400 mb-2">Availability</div>
                <div className="text-xs text-zinc-400">Data and systems are accessible when needed (Redundancy, DDoS protection).</div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'Explain True Positive, False Positive, True Negative, and False Negative.',
        a: (
          <div className="space-y-4">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
                  <div className="font-bold text-emerald-400 mb-1">True Positive (TP)</div>
                  <div className="text-sm text-zinc-300 font-medium mb-1">Alert + Attack</div>
                  <div className="text-xs text-zinc-400">A real threat was correctly identified. (Good catch!)</div>
                </div>
                <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl">
                  <div className="font-bold text-rose-400 mb-1">False Negative (FN)</div>
                  <div className="text-sm text-zinc-300 font-medium mb-1">No Alert + Attack</div>
                  <div className="text-xs text-zinc-400">A real threat was missed. (Most Dangerous!)</div>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl">
                  <div className="font-bold text-amber-400 mb-1">False Positive (FP)</div>
                  <div className="text-sm text-zinc-300 font-medium mb-1">Alert + No Attack</div>
                  <div className="text-xs text-zinc-400">Normal behavior flagged as malicious. (Causes Alert Fatigue)</div>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-xl">
                  <div className="font-bold text-zinc-300 mb-1">True Negative (TN)</div>
                  <div className="text-sm text-zinc-300 font-medium mb-1">No Alert + No Attack</div>
                  <div className="text-xs text-zinc-400">Normal behavior correctly ignored.</div>
                </div>
             </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'Difference between Threat, Vulnerability, and Risk?',
        a: (
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-zinc-900/50 p-6 rounded-xl border border-white/5">
            <div className="flex-1 text-center w-full flex flex-col items-center">
              <Bug className="w-8 h-8 text-rose-400 mb-2" />
              <div className="text-rose-400 font-bold mb-1 text-lg">Threat</div>
              <div className="text-xs text-zinc-400">Attacker / Malware</div>
            </div>
            <div className="text-zinc-500 font-bold text-xs bg-zinc-800 px-2 py-1 rounded-full">EXPLOITS</div>
            <div className="flex-1 text-center w-full flex flex-col items-center">
              <AlertTriangle className="w-8 h-8 text-amber-400 mb-2" />
              <div className="text-amber-400 font-bold mb-1 text-lg">Vulnerability</div>
              <div className="text-xs text-zinc-400">Weakness / Flaw</div>
            </div>
            <div className="text-zinc-500 font-bold text-xs bg-zinc-800 px-2 py-1 rounded-full">EQUALS</div>
            <div className="flex-1 text-center w-full flex flex-col items-center">
              <Shield className="w-8 h-8 text-emerald-400 mb-2" />
              <div className="text-emerald-400 font-bold mb-1 text-lg">Risk</div>
              <div className="text-xs text-zinc-400">Potential Impact / Loss</div>
            </div>
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'What is the Cyber Kill Chain model?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">Developed by Lockheed Martin, it describes the stages of a cyberattack from early reconnaissance to the final objective. Defenders use it to identify and stop attackers at various stages.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-zinc-900/50 border border-white/10 p-3 rounded-xl">
                <div className="font-bold text-blue-400 text-sm mb-1">1. Reconnaissance</div>
                <div className="text-xs text-zinc-400">Researching the target (OSINT, scanning).</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-3 rounded-xl">
                <div className="font-bold text-blue-400 text-sm mb-1">2. Weaponization</div>
                <div className="text-xs text-zinc-400">Creating the malicious payload (e.g., infected PDF).</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-3 rounded-xl">
                <div className="font-bold text-blue-400 text-sm mb-1">3. Delivery</div>
                <div className="text-xs text-zinc-400">Sending the weapon to the target (email, USB, web).</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-3 rounded-xl">
                <div className="font-bold text-rose-400 text-sm mb-1">4. Exploitation</div>
                <div className="text-xs text-zinc-400">Triggering the payload to exploit a vulnerability.</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-3 rounded-xl">
                <div className="font-bold text-rose-400 text-sm mb-1">5. Installation</div>
                <div className="text-xs text-zinc-400">Installing malware/backdoors for persistence.</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-3 rounded-xl">
                <div className="font-bold text-rose-400 text-sm mb-1">6. Command & Control (C2)</div>
                <div className="text-xs text-zinc-400">Establishing a communication channel with the attacker.</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-3 rounded-xl sm:col-span-2 lg:col-span-2">
                <div className="font-bold text-rose-400 text-sm mb-1">7. Actions on Objectives</div>
                <div className="text-xs text-zinc-400">Achieving the goal (data exfiltration, encryption, destruction).</div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is the difference between Encoding, Encryption, and Hashing?',
        a: (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
              <div className="font-bold text-blue-400 mb-1 text-lg">Encoding</div>
              <div className="text-xs text-zinc-400 mb-3">Changes data format for usability, NOT security.</div>
              <div className="bg-black/30 p-2 rounded text-xs font-mono text-zinc-500">Base64, URL Encoding</div>
              <div className="mt-2 text-xs text-emerald-400">Reversible? Yes (No key needed)</div>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
              <div className="font-bold text-emerald-400 mb-1 text-lg">Encryption</div>
              <div className="text-xs text-zinc-400 mb-3">Scrambles data for confidentiality. Requires a key.</div>
              <div className="bg-black/30 p-2 rounded text-xs font-mono text-zinc-500">AES, RSA</div>
              <div className="mt-2 text-xs text-emerald-400">Reversible? Yes (With key)</div>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
              <div className="font-bold text-amber-400 mb-1 text-lg">Hashing</div>
              <div className="text-xs text-zinc-400 mb-3">One-way mathematical function for integrity.</div>
              <div className="bg-black/30 p-2 rounded text-xs font-mono text-zinc-500">SHA-256, MD5</div>
              <div className="mt-2 text-xs text-rose-400">Reversible? No</div>
            </div>
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'What is the difference between Symmetric and Asymmetric Encryption?',
        a: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Lock className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="font-bold text-emerald-400 text-lg">Symmetric Encryption</div>
              </div>
              <div className="flex items-center justify-center gap-2 mb-4 text-xs font-mono bg-black/40 p-2 rounded border border-white/5">
                <span className="text-zinc-400">Data</span>
                <span className="text-emerald-400 font-bold px-2 py-1 bg-emerald-500/10 rounded">1 Shared Key</span>
                <span className="text-zinc-400">Encrypted</span>
              </div>
              <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li>Uses the <strong>SAME key</strong> for encryption and decryption.</li>
                <li>Very fast, ideal for encrypting large amounts of data.</li>
                <li>Challenge: Securely sharing the key.</li>
                <li>Examples: AES, DES.</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Shield className="w-5 h-5 text-blue-400" />
                </div>
                <div className="font-bold text-blue-400 text-lg">Asymmetric Encryption</div>
              </div>
              <div className="flex items-center justify-center gap-2 mb-4 text-xs font-mono bg-black/40 p-2 rounded border border-white/5">
                <span className="text-zinc-400">Data</span>
                <span className="text-blue-400 font-bold px-2 py-1 bg-blue-500/10 rounded">Public + Private Key</span>
                <span className="text-zinc-400">Encrypted</span>
              </div>
              <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li>Uses a <strong>KEY PAIR</strong> (Public key to encrypt, Private key to decrypt).</li>
                <li>Slower, requires more computational power.</li>
                <li>Solves the key distribution problem; used for digital signatures.</li>
                <li>Examples: RSA, ECC.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'Explain ARP Spoofing (ARP Poisoning).',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">A Man-in-the-Middle (MITM) attack on a local network.</p>
            <div className="bg-zinc-900/80 p-5 rounded-xl border border-rose-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                <div className="flex-1 space-y-3 text-sm text-zinc-300">
                  <p><strong>How it works:</strong> The attacker sends falsified ARP (Address Resolution Protocol) messages over a Local Area Network (LAN).</p>
                  <p><strong>The Goal:</strong> Link the attacker's MAC address with the IP address of a legitimate computer or server (usually the default gateway/router).</p>
                  <p><strong>The Result:</strong> Traffic meant for the legitimate IP is sent to the attacker instead. The attacker can then intercept, modify, or drop the data.</p>
                </div>
                <div className="w-full md:w-1/3 bg-black/40 p-4 rounded-lg border border-white/5 font-mono text-xs text-rose-400">
                  <div>Attacker MAC: AA:BB:CC</div>
                  <div>Gateway IP: 192.168.1.1</div>
                  <div className="my-2 text-zinc-500">--- Spoofed ARP Reply ---</div>
                  <div>"Hey everyone, 192.168.1.1 is at AA:BB:CC"</div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is a SOC (Security Operations Center) and what are the different analyst roles?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">A SOC is a centralized team that continuously monitors, detects, and responds to cybersecurity incidents.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
                <div className="font-bold text-emerald-400 mb-1 text-lg">Tier 1 (Triage)</div>
                <div className="text-xs text-zinc-400">Monitors SIEM alerts, performs initial triage, and filters out false positives. Escalates real threats.</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
                <div className="font-bold text-blue-400 mb-1 text-lg">Tier 2 (Responder)</div>
                <div className="text-xs text-zinc-400">Deep-dives into escalated alerts, analyzes malware/logs, and formulates a remediation plan.</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
                <div className="font-bold text-rose-400 mb-1 text-lg">Tier 3 (Hunter)</div>
                <div className="text-xs text-zinc-400">Proactively hunts for hidden threats (Threat Hunting), reverse engineers malware, and handles critical incidents.</div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is a SIEM and how does it fit into the SOC ecosystem?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300"><strong>SIEM (Security Information and Event Management)</strong> is the core tool of a SOC. It collects, aggregates, and analyzes log data from across the entire network (firewalls, servers, endpoints) in real-time.</p>
            <div className="bg-zinc-900/80 p-5 rounded-xl border border-white/5">
              <div className="font-bold text-blue-400 mb-2 text-sm">Key Functions:</div>
              <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li><strong>Log Aggregation:</strong> Centralizes logs from thousands of devices.</li>
                <li><strong>Normalization:</strong> Converts different log formats into a standard, readable format.</li>
                <li><strong>Correlation:</strong> Links seemingly unrelated events to detect complex attacks.</li>
                <li><strong>Alerting:</strong> Notifies analysts when suspicious patterns match predefined rules.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'What is Data Orchestration and SOAR?',
        a: (
          <div className="space-y-4">
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="font-bold text-amber-400 mb-2 text-lg">SOAR (Security Orchestration, Automation, and Response)</div>
              <p className="text-sm text-zinc-300 mb-3">SOAR platforms integrate with SIEMs and other security tools to automate repetitive tasks and orchestrate complex incident response workflows.</p>
              <ul className="text-sm text-zinc-400 space-y-2 list-disc list-inside">
                <li><strong>Orchestration:</strong> Connecting different tools (e.g., SIEM, Firewall, EDR) so they can talk to each other.</li>
                <li><strong>Automation:</strong> Running playbooks automatically (e.g., automatically blocking a malicious IP on the firewall).</li>
                <li><strong>Response:</strong> Helping analysts manage and resolve incidents faster.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        level: 'Advanced',
        q: 'What is the MITRE ATT&CK Framework? Explain Defense Evasion and Obfuscated Files.',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300"><strong>MITRE ATT&CK</strong> is a globally accessible knowledge base of adversary tactics and techniques based on real-world observations.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
                <div className="font-bold text-rose-400 mb-1 text-sm">Tactic: Defense Evasion (TA0005)</div>
                <div className="text-xs text-zinc-400">Techniques adversaries use to avoid detection throughout their compromise. This includes uninstalling security software or encrypting data.</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
                <div className="font-bold text-amber-400 mb-1 text-sm">Technique: Obfuscated Files (T1027)</div>
                <div className="text-xs text-zinc-400">Adversaries may make their payloads difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating them (e.g., Base64 encoding a PowerShell script).</div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Advanced',
        q: 'What are the 14 Tactics of the MITRE ATT&CK Enterprise Matrix?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">Tactics represent the "why" of an ATT&CK technique (the adversary's tactical goal). The 14 tactics are:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {[
                'Reconnaissance', 'Resource Development', 'Initial Access', 'Execution',
                'Persistence', 'Privilege Escalation', 'Defense Evasion', 'Credential Access',
                'Discovery', 'Lateral Movement', 'Collection', 'Command and Control',
                'Exfiltration', 'Impact'
              ].map((tactic, i) => (
                <div key={i} className="bg-zinc-900/50 border border-white/10 p-2 rounded-lg text-xs text-zinc-300 text-center flex items-center justify-center h-12 hover:bg-zinc-800 transition-colors">
                  {tactic}
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'How does the MITRE ATT&CK Framework differ from the Cyber Kill Chain?',
        a: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="font-bold text-blue-400 mb-2 text-lg">Cyber Kill Chain</div>
              <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li>Developed by Lockheed Martin.</li>
                <li>Focuses on the <strong>high-level stages</strong> of an attack (Reconnaissance to Actions on Objectives).</li>
                <li>Linear and chronological model.</li>
                <li>Good for executive summaries and understanding the "what" and "when".</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="font-bold text-rose-400 mb-2 text-lg">MITRE ATT&CK</div>
              <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li>Developed by MITRE.</li>
                <li>Focuses on the <strong>granular details</strong> of an attack (Tactics, Techniques, and Procedures - TTPs).</li>
                <li>Matrix model (non-linear, attackers can jump between tactics).</li>
                <li>Good for SOC analysts and threat hunters to understand the "how".</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'Explain the first three stages of the Cyber Kill Chain.',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">The Cyber Kill Chain models the stages of a cyberattack. The first three stages are crucial for early detection:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
                <div className="font-bold text-blue-400 mb-1 text-sm">1. Reconnaissance</div>
                <div className="text-xs text-zinc-400">The attacker gathers information about the target (e.g., scanning for open ports, harvesting email addresses via OSINT).</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
                <div className="font-bold text-amber-400 mb-1 text-sm">2. Weaponization</div>
                <div className="text-xs text-zinc-400">The attacker couples a remote access trojan with an exploit into a deliverable payload (e.g., creating a malicious PDF or Office doc).</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
                <div className="font-bold text-rose-400 mb-1 text-sm">3. Delivery</div>
                <div className="text-xs text-zinc-400">The attacker transmits the weaponized payload to the target environment (e.g., via a phishing email or a compromised USB drive).</div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'What is SIEM Log Normalization and why is it important?',
        a: (
          <div className="space-y-4">
            <div className="bg-zinc-900/80 p-5 rounded-xl border border-white/5">
              <div className="font-bold text-emerald-400 mb-2 text-sm">Log Normalization</div>
              <p className="text-sm text-zinc-300 mb-3">Normalization is the process of converting log data from various disparate sources (firewalls, Windows, Linux, web servers) into a common, standardized format.</p>
              <div className="text-xs text-zinc-400 border-t border-white/5 pt-3">
                <strong>Why it's important:</strong> It allows analysts to search across different log types using a single set of fields (e.g., mapping <code className="bg-black/30 px-1 rounded">src_ip</code>, <code className="bg-black/30 px-1 rounded">source_address</code>, and <code className="bg-black/30 px-1 rounded">IP_Src</code> all to a single field like <code className="bg-black/30 px-1 rounded text-emerald-300">src_ip</code>), making correlation and alerting possible.
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'What is SIEM Log Correlation?',
        a: (
          <div className="space-y-4">
            <div className="bg-zinc-900/80 p-5 rounded-xl border border-white/5">
              <div className="font-bold text-blue-400 mb-2 text-sm">Log Correlation</div>
              <p className="text-sm text-zinc-300 mb-3">Correlation is the process of linking multiple seemingly unrelated log events from different sources to identify a broader attack pattern or security incident.</p>
              <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                <div className="text-xs font-bold text-zinc-300 mb-2">Example Scenario:</div>
                <ol className="text-xs text-zinc-400 space-y-1 list-decimal list-inside">
                  <li>A firewall log shows a blocked connection from an external IP.</li>
                  <li>A Windows event log shows a failed login from the same IP.</li>
                  <li>An EDR log shows a malicious process execution shortly after.</li>
                </ol>
                <div className="mt-2 text-xs text-emerald-400">Correlation rules can trigger a high-severity alert when these events happen in a specific sequence within a short timeframe.</div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'Explain Kerberoasting and Pass-the-Hash attacks in Active Directory.',
        a: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="font-bold text-rose-400 mb-2 text-lg">Kerberoasting</div>
              <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li>An attacker requests a service ticket (TGS) for a service account.</li>
                <li>The ticket is encrypted with the service account's password hash.</li>
                <li>The attacker extracts the ticket from memory and attempts to crack the password hash offline.</li>
                <li><strong>Goal:</strong> Gain the service account's plaintext password.</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="font-bold text-rose-400 mb-2 text-lg">Pass-the-Hash (PtH)</div>
              <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li>An attacker steals a hashed user credential (usually an NTLM hash).</li>
                <li>They use the hash to authenticate to a remote server or service.</li>
                <li><strong>Key Point:</strong> The attacker does NOT need to know or crack the plaintext password to authenticate.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What are common indicators of a Phishing or Spear-Phishing email?',
        a: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: 'Urgency / Threats', desc: '"Your account will be suspended in 24 hours!"', color: 'rose' },
              { title: 'Suspicious Sender', desc: 'support@paypa1-security.com instead of paypal.com', color: 'amber' },
              { title: 'Mismatched Links', desc: 'Hovering over a link shows a different, weird URL.', color: 'blue' },
              { title: 'Unexpected Attachments', desc: 'Invoices or receipts you didn\'t expect (.exe, .zip, .docm).', color: 'emerald' },
              { title: 'Generic Greetings', desc: '"Dear Customer" instead of your actual name.', color: 'zinc' },
              { title: 'Requests for Credentials', desc: 'Asking for passwords, OTPs, or sensitive data directly.', color: 'purple' },
            ].map((ind, i) => (
              <div key={i} className={`bg-${ind.color}-500/5 border border-${ind.color}-500/20 p-4 rounded-xl flex flex-col gap-1`}>
                <div className={`font-bold text-sm text-${ind.color}-400`}>{ind.title}</div>
                <div className="text-xs text-zinc-400">{ind.desc}</div>
              </div>
            ))}
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'How do you set up an index in Splunk, and why is it important?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">An index is a repository for Splunk data. Setting it up correctly is crucial for performance and data retention.</p>
            <div className="bg-zinc-900/80 p-5 rounded-xl border border-emerald-500/20">
              <div className="font-bold text-emerald-400 mb-3 text-lg">Steps to Create an Index:</div>
              <ol className="text-sm text-zinc-300 space-y-2 list-decimal list-inside">
                <li>Navigate to <strong>Settings</strong> &gt; <strong>Indexes</strong>.</li>
                <li>Click <strong>New Index</strong>.</li>
                <li>Provide an <strong>Index Name</strong> (e.g., <code className="bg-black/30 px-1 rounded text-emerald-300">web_logs</code>).</li>
                <li>Configure <strong>Data Type</strong> (Events or Metrics).</li>
                <li>Set <strong>Max Size</strong> and <strong>Retention Policy</strong> (e.g., keep logs for 90 days).</li>
                <li>Save and assign appropriate user roles to access it.</li>
              </ol>
              <div className="mt-4 text-xs text-zinc-400 border-t border-white/5 pt-3">
                <strong>Why it's important:</strong> Indexes separate data logically, speeding up search performance and allowing granular access control (RBAC).
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What are some basic Splunk search queries you would use for log analysis?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">Common SPL (Splunk Processing Language) queries used by SOC Analysts:</p>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-zinc-950 p-4 rounded-xl border border-white/5">
                <div className="text-xs text-zinc-500 mb-1">Find failed logins (Windows Event ID 4625)</div>
                <code className="text-sm text-emerald-400 font-mono">index=windows EventCode=4625 | stats count by user, src_ip</code>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-white/5">
                <div className="text-xs text-zinc-500 mb-1">Search for a specific IP address across all web logs</div>
                <code className="text-sm text-blue-400 font-mono">index=web_logs src_ip="192.168.1.50" | table _time, url, status</code>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-white/5">
                <div className="text-xs text-zinc-500 mb-1">Identify top 5 IP addresses generating 404 errors</div>
                <code className="text-sm text-amber-400 font-mono">index=web_logs status=404 | top limit=5 src_ip</code>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'How do you configure log ingestion in Splunk?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">Methods to get data into Splunk (Data Onboarding):</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
                <div className="font-bold text-blue-400 mb-2">1. Forwarders</div>
                <div className="text-xs text-zinc-400">Install a <strong>Universal Forwarder (UF)</strong> on endpoint machines (Windows/Linux) to securely send local logs to the Splunk Indexer.</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
                <div className="font-bold text-emerald-400 mb-2">2. Network Inputs</div>
                <div className="text-xs text-zinc-400">Configure Splunk to listen on a specific port (e.g., UDP 514) to receive <strong>Syslog</strong> data from firewalls, routers, and switches.</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
                <div className="font-bold text-amber-400 mb-2">3. Scripted / API</div>
                <div className="text-xs text-zinc-400">Use Splunk Add-ons, REST APIs, or HTTP Event Collector (HEC) to pull data from cloud services (AWS, Azure) or custom apps.</div>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  {
    category: 'Networking',
    icon: Server,
    questions: [
      {
        level: 'Advanced',
        q: 'What is ARP and how does ARP Spoofing work?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300"><strong>Address Resolution Protocol (ARP)</strong> maps a known IP address to an unknown MAC address on a local network.</p>
            <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl">
              <div className="font-bold text-rose-400 mb-2 text-sm">ARP Spoofing (Poisoning)</div>
              <p className="text-xs text-zinc-400 mb-2">An attacker sends falsified ARP messages over a local area network. This links the attacker's MAC address with the IP address of a legitimate computer or server on the network (often the default gateway).</p>
              <ul className="text-xs text-zinc-400 space-y-1 list-disc list-inside">
                <li>Allows the attacker to intercept, modify, or stop traffic (Man-in-the-Middle attack).</li>
                <li>Mitigation: Use static ARP entries, Dynamic ARP Inspection (DAI) on switches.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'Explain the concept of a VLAN and why it is used.',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">A <strong>Virtual Local Area Network (VLAN)</strong> is a logical grouping of devices on the same physical network so they act as if they are on separate, isolated networks.</p>
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
              <div className="font-bold text-emerald-400 mb-2 text-sm">Why it is used:</div>
              <ul className="text-xs text-zinc-400 space-y-2 list-disc list-inside">
                <li><strong>Security:</strong> Isolates sensitive devices (e.g., HR computers separated from Guest Wi-Fi).</li>
                <li><strong>Performance:</strong> Reduces broadcast traffic by breaking up large broadcast domains.</li>
                <li><strong>Management:</strong> Easier to group users logically rather than physically moving cables.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'What is a VPN and how does it secure traffic?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">A <strong>Virtual Private Network (VPN)</strong> creates a secure, encrypted tunnel over a less secure network (like the public internet).</p>
            <ul className="text-xs text-zinc-400 space-y-2 list-disc list-inside">
              <li><strong>Encryption:</strong> Scrambles data so it cannot be read if intercepted (often using IPsec or SSL/TLS).</li>
              <li><strong>Authentication:</strong> Verifies the identity of the user and the VPN server.</li>
              <li><strong>Tunneling:</strong> Encapsulates the original network packets inside new packets to hide the source and destination.</li>
            </ul>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is the difference between a Hub, Switch, and Router?',
        a: (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
              <div className="font-bold text-rose-400 mb-1">Hub (Layer 1)</div>
              <div className="text-xs text-zinc-400">Dumb device. Broadcasts all data to every port. Highly insecure and causes network collisions.</div>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
              <div className="font-bold text-amber-400 mb-1">Switch (Layer 2)</div>
              <div className="text-xs text-zinc-400">Smart device. Learns MAC addresses and forwards data only to the specific port where the destination device is connected.</div>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
              <div className="font-bold text-emerald-400 mb-1">Router (Layer 3)</div>
              <div className="text-xs text-zinc-400">Connects different networks together (e.g., your home network to the internet). Routes traffic based on IP addresses.</div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is DNS and how does it work?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300"><strong>Domain Name System (DNS)</strong> translates human-readable domain names (like www.google.com) to machine-readable IP addresses (like 192.0.2.44).</p>
            <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
              <div className="font-bold text-blue-400 mb-2 text-sm">How it works:</div>
              <ol className="text-xs text-zinc-400 space-y-2 list-decimal list-inside">
                <li>Your computer checks its local cache.</li>
                <li>If not found, it queries a Recursive Resolver (usually your ISP).</li>
                <li>The resolver queries the Root Server, then the TLD Server (.com), and finally the Authoritative Name Server.</li>
                <li>The IP is returned and cached for future use.</li>
              </ol>
            </div>
          </div>
        )
      },
      {
        level: 'Advanced',
        q: 'What is BGP (Border Gateway Protocol) and what is BGP Hijacking?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300"><strong>BGP</strong> is the routing protocol used to route traffic across the internet. It determines the best path for data to travel between autonomous systems (AS).</p>
            <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl">
              <div className="font-bold text-rose-400 mb-1">BGP Hijacking</div>
              <div className="text-xs text-zinc-400">Occurs when a malicious entity intentionally broadcasts false routing information to corrupt the routing tables, redirecting internet traffic to the attacker's servers.</div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is a Proxy Server?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">A proxy server acts as a gateway or intermediary between a user and the internet. It can provide varying levels of functionality, security, and privacy depending on the use case, company policy, or whether it is a forward proxy or a reverse proxy.</p>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What are the most common Network Ports and Protocols you should know?',
        a: (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { port: 21, proto: 'FTP', desc: 'File Transfer Protocol (Insecure)', color: 'rose' },
              { port: 22, proto: 'SSH', desc: 'Secure Shell (Remote Access)', color: 'emerald' },
              { port: 23, proto: 'Telnet', desc: 'Unencrypted Remote Access', color: 'rose' },
              { port: 25, proto: 'SMTP', desc: 'Email Routing', color: 'blue' },
              { port: 53, proto: 'DNS', desc: 'Domain Name System', color: 'amber' },
              { port: 80, proto: 'HTTP', desc: 'Unencrypted Web Traffic', color: 'rose' },
              { port: 443, proto: 'HTTPS', desc: 'Encrypted Web Traffic', color: 'emerald' },
              { port: 445, proto: 'SMB', desc: 'Windows File Sharing', color: 'purple' },
              { port: 3389, proto: 'RDP', desc: 'Remote Desktop Protocol', color: 'blue' },
            ].map(p => (
              <div key={p.port} className={`bg-${p.color}-500/5 border border-${p.color}-500/20 p-3 rounded-xl flex items-center gap-3 hover:bg-${p.color}-500/10 transition-colors`}>
                <div className={`font-mono font-bold text-sm text-${p.color}-400 bg-${p.color}-500/10 w-10 h-10 flex items-center justify-center rounded`}>{p.port}</div>
                <div>
                  <div className="font-bold text-zinc-200 text-sm">{p.proto}</div>
                  <div className="text-xs text-zinc-400">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'What is Subnetting and CIDR?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300"><strong>Subnetting</strong> is the process of dividing a large network into smaller, more manageable sub-networks. It improves performance and security.</p>
            <div className="bg-zinc-900/80 p-5 rounded-xl border border-white/5">
              <div className="font-bold text-emerald-400 mb-2 text-sm">CIDR (Classless Inter-Domain Routing)</div>
              <p className="text-sm text-zinc-300 mb-3">A method for allocating IP addresses and IP routing. It uses a slash notation to indicate the number of bits used for the network portion.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                  <div className="text-xs text-zinc-500 font-mono mb-1">/24 Subnet</div>
                  <div className="text-sm text-zinc-300">255.255.255.0</div>
                  <div className="text-xs text-emerald-400 mt-1">256 total IPs (254 usable)</div>
                </div>
                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                  <div className="text-xs text-zinc-500 font-mono mb-1">/16 Subnet</div>
                  <div className="text-sm text-zinc-300">255.255.0.0</div>
                  <div className="text-xs text-emerald-400 mt-1">65,536 total IPs</div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'How does DNS work and what are common DNS attacks?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300"><strong>DNS (Domain Name System)</strong> translates human-readable domain names (google.com) into machine-readable IP addresses (142.250.190.46).</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
                <div className="font-bold text-rose-400 mb-1 text-sm">DNS Spoofing / Cache Poisoning</div>
                <div className="text-xs text-zinc-400">Attacker alters the DNS cache to redirect users to a malicious website instead of the legitimate one.</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
                <div className="font-bold text-rose-400 mb-1 text-sm">DNS Tunneling</div>
                <div className="text-xs text-zinc-400">Attacker encodes data of other programs or malicious payloads within DNS queries and responses to bypass firewalls.</div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is DHCP and how does the DORA process work?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300"><strong>DHCP (Dynamic Host Configuration Protocol)</strong> automatically assigns IP addresses and network settings to devices on a network.</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 bg-zinc-900/80 p-3 rounded-xl border border-white/5">
                <div className="w-8 h-8 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">D</div>
                <div>
                  <div className="font-bold text-sm text-zinc-200">Discover</div>
                  <div className="text-xs text-zinc-400">Client broadcasts a message looking for a DHCP server.</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-zinc-900/80 p-3 rounded-xl border border-white/5">
                <div className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">O</div>
                <div>
                  <div className="font-bold text-sm text-zinc-200">Offer</div>
                  <div className="text-xs text-zinc-400">Server responds with an available IP address offer.</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-zinc-900/80 p-3 rounded-xl border border-white/5">
                <div className="w-8 h-8 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">R</div>
                <div>
                  <div className="font-bold text-sm text-zinc-200">Request</div>
                  <div className="text-xs text-zinc-400">Client requests the offered IP address.</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-zinc-900/80 p-3 rounded-xl border border-white/5">
                <div className="w-8 h-8 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">A</div>
                <div>
                  <div className="font-bold text-sm text-zinc-200">Acknowledge</div>
                  <div className="text-xs text-zinc-400">Server confirms the IP assignment and provides lease details.</div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'Explain the TCP 3-Way Handshake.',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">How a TCP connection is established reliably:</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between bg-zinc-900/80 p-4 rounded-xl border border-white/5">
                <div className="text-emerald-400 font-mono text-sm font-bold w-16 text-center">Client</div>
                <div className="flex-1 mx-4 relative flex items-center justify-center">
                   <div className="absolute w-full h-px bg-zinc-700"></div>
                   <div className="bg-zinc-800 px-3 py-1 rounded-full text-xs text-zinc-300 z-10 font-mono border border-zinc-700">1. SYN &rarr;</div>
                </div>
                <div className="text-blue-400 font-mono text-sm font-bold w-16 text-center">Server</div>
              </div>
              <div className="flex items-center justify-between bg-zinc-900/80 p-4 rounded-xl border border-white/5">
                <div className="text-emerald-400 font-mono text-sm font-bold w-16 text-center">Client</div>
                <div className="flex-1 mx-4 relative flex items-center justify-center">
                   <div className="absolute w-full h-px bg-zinc-700"></div>
                   <div className="bg-zinc-800 px-3 py-1 rounded-full text-xs text-zinc-300 z-10 font-mono border border-zinc-700">&larr; 2. SYN-ACK</div>
                </div>
                <div className="text-blue-400 font-mono text-sm font-bold w-16 text-center">Server</div>
              </div>
              <div className="flex items-center justify-between bg-zinc-900/80 p-4 rounded-xl border border-white/5">
                <div className="text-emerald-400 font-mono text-sm font-bold w-16 text-center">Client</div>
                <div className="flex-1 mx-4 relative flex items-center justify-center">
                   <div className="absolute w-full h-px bg-zinc-700"></div>
                   <div className="bg-zinc-800 px-3 py-1 rounded-full text-xs text-zinc-300 z-10 font-mono border border-zinc-700">3. ACK &rarr;</div>
                </div>
                <div className="text-blue-400 font-mono text-sm font-bold w-16 text-center">Server</div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is the OSI Model? Name the layers.',
        a: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-xs text-emerald-400 mb-3 font-mono bg-emerald-500/10 p-2 rounded border border-emerald-500/20 inline-block">Mnemonic: Please Do Not Throw Sausage Pizza Away</p>
              {[
                { n: 7, name: 'Application', desc: 'HTTP, FTP, DNS' },
                { n: 6, name: 'Presentation', desc: 'SSL/TLS, JPEG' },
                { n: 5, name: 'Session', desc: 'NetBIOS, RPC' },
                { n: 4, name: 'Transport', desc: 'TCP, UDP (Ports)' },
                { n: 3, name: 'Network', desc: 'IP, ICMP (Routers)' },
                { n: 2, name: 'Data Link', desc: 'MAC, ARP (Switches)' },
                { n: 1, name: 'Physical', desc: 'Cables, Hubs, Bits' },
              ].map(l => (
                <div key={l.n} className="flex items-center gap-3 bg-zinc-900/50 p-2.5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-sm font-bold text-zinc-400 border border-zinc-700">{l.n}</div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-zinc-200">{l.name}</div>
                  </div>
                  <div className="text-xs text-zinc-500 font-mono">{l.desc}</div>
                </div>
              ))}
            </div>
            <div className="bg-zinc-900/30 rounded-xl border border-white/5 p-4 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Globe className="w-12 h-12 text-zinc-600 mx-auto" />
                <p className="text-sm text-zinc-400">The OSI model is a conceptual framework used to understand and standardize how different network protocols interact and communicate.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is the difference between TCP and UDP?',
        a: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                <div className="font-bold text-blue-400 text-lg">TCP</div>
              </div>
              <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li>Connection-oriented (3-way handshake).</li>
                <li>Reliable: Guarantees delivery of packets.</li>
                <li>Slower due to overhead.</li>
                <li>Use cases: Web browsing (HTTP), Email (SMTP), File transfer (FTP).</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                  <Activity className="w-5 h-5 text-amber-400" />
                </div>
                <div className="font-bold text-amber-400 text-lg">UDP</div>
              </div>
              <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li>Connectionless (Fire and forget).</li>
                <li>Unreliable: No guarantee of delivery.</li>
                <li>Faster due to low overhead.</li>
                <li>Use cases: Video streaming, Gaming, DNS queries.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'What is the difference between a Firewall, IDS, and IPS?',
        a: (
          <div className="space-y-4">
            <div className="flex flex-col gap-3">
              <div className="bg-zinc-900/80 p-4 rounded-xl border border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="font-bold text-emerald-400 mb-1">Firewall</div>
                  <div className="text-sm text-zinc-300">Acts as a security guard at the door. It blocks or allows traffic based on predefined rules (IPs, Ports). It does not deeply inspect the payload.</div>
                </div>
              </div>
              <div className="bg-zinc-900/80 p-4 rounded-xl border border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="font-bold text-amber-400 mb-1">IDS (Intrusion Detection System)</div>
                  <div className="text-sm text-zinc-300">Acts as a security camera. It monitors traffic, inspects payloads for malicious signatures, and generates alerts, but it <strong>cannot block</strong> the attack.</div>
                </div>
              </div>
              <div className="bg-zinc-900/80 p-4 rounded-xl border border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center flex-shrink-0 border border-rose-500/20">
                  <Target className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <div className="font-bold text-rose-400 mb-1">IPS (Intrusion Prevention System)</div>
                  <div className="text-sm text-zinc-300">Acts as an armed guard. It monitors traffic, inspects payloads, and actively <strong>blocks or drops</strong> malicious packets before they reach the target.</div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is the difference between a Stateful and Stateless Firewall?',
        a: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="font-bold text-emerald-400 mb-2 text-lg">Stateful Firewall</div>
              <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li><strong>Remembers context:</strong> Tracks the state of active connections (e.g., TCP handshake).</li>
                <li>If it allows an outgoing request (e.g., browsing a website), it automatically allows the incoming response.</li>
                <li>More secure and intelligent.</li>
                <li>Operates primarily at Layer 3 and Layer 4, but understands connection states.</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="font-bold text-blue-400 mb-2 text-lg">Stateless Firewall</div>
              <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li><strong>No memory:</strong> Examines each packet individually in isolation.</li>
                <li>Requires separate rules for incoming and outgoing traffic.</li>
                <li>Faster processing, but less secure (susceptible to spoofing).</li>
                <li>Operates strictly at Layer 3 (Network) and Layer 4 (Transport) using ACLs.</li>
              </ul>
            </div>
          </div>
        )
      }
    ]
  },
  {
    category: 'SIEM & Logs',
    icon: Database,
    questions: [
      {
        level: 'Intermediate',
        q: 'What is a Use Case in the context of a SIEM?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">A <strong>Use Case</strong> is a specific scenario or threat that the SIEM is configured to detect and alert on.</p>
            <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
              <div className="font-bold text-blue-400 mb-2 text-sm">Components of a Use Case:</div>
              <ul className="text-xs text-zinc-400 space-y-2 list-disc list-inside">
                <li><strong>Objective:</strong> What are we trying to detect? (e.g., Brute Force Attack).</li>
                <li><strong>Log Sources:</strong> What data do we need? (e.g., Windows Security Logs, VPN Logs).</li>
                <li><strong>Logic/Rule:</strong> The actual query (e.g., &gt; 5 failed logins from the same IP within 5 minutes).</li>
                <li><strong>Response:</strong> What happens when the alert fires? (e.g., Create a ticket, page the on-call analyst).</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'How do you write a basic search query in Splunk to find failed logins?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">To find failed Windows logins, you would search for Event ID 4625. A basic query looks like this:</p>
            <div className="bg-black/60 border border-white/10 p-4 rounded-xl font-mono text-xs text-emerald-400 overflow-x-auto">
              index=windows sourcetype=WinEventLog:Security EventCode=4625<br/>
              | stats count by user, src_ip<br/>
              | sort - count
            </div>
            <p className="text-xs text-zinc-400">This query searches the Windows index for failed logins, counts them grouped by the username and source IP, and sorts them in descending order to identify brute-force attempts.</p>
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'What are Windows Event Logs and which IDs are most critical to monitor?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">Windows Event Logs are records of system, security, and application events on a Windows machine. Critical Security Event IDs include:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-zinc-900/50 border border-white/10 p-3 rounded-lg">
                <div className="font-bold text-emerald-400 text-sm">4624</div>
                <div className="text-xs text-zinc-400">Successful Logon</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-3 rounded-lg">
                <div className="font-bold text-rose-400 text-sm">4625</div>
                <div className="text-xs text-zinc-400">Failed Logon</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-3 rounded-lg">
                <div className="font-bold text-amber-400 text-sm">4688</div>
                <div className="text-xs text-zinc-400">A new process has been created (Crucial for malware detection)</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-3 rounded-lg">
                <div className="font-bold text-blue-400 text-sm">4720</div>
                <div className="text-xs text-zinc-400">A user account was created</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-3 rounded-lg">
                <div className="font-bold text-purple-400 text-sm">4728 / 4732 / 4756</div>
                <div className="text-xs text-zinc-400">A member was added to a security-enabled group (e.g., Domain Admins)</div>
              </div>
              <div className="bg-zinc-900/50 border border-white/10 p-3 rounded-lg">
                <div className="font-bold text-rose-400 text-sm">1102</div>
                <div className="text-xs text-zinc-400">The audit log was cleared (Huge red flag)</div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'Explain the concept of Log Retention and why it matters.',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300"><strong>Log Retention</strong> is the policy and practice of keeping log data for a specific period before archiving or deleting it.</p>
            <ul className="text-xs text-zinc-400 space-y-2 list-disc list-inside">
              <li><strong>Compliance:</strong> Frameworks like PCI-DSS, HIPAA, or GDPR require logs to be kept for specific durations (e.g., 1 year).</li>
              <li><strong>Incident Investigation:</strong> Advanced Persistent Threats (APTs) can dwell in a network for months. Retained logs are necessary to trace the full attack lifecycle.</li>
              <li><strong>Storage Costs:</strong> Balancing security needs with the high cost of storing massive amounts of log data (Hot vs. Cold storage).</li>
            </ul>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is the difference between a SIEM and a Log Management System (LMS)?',
        a: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
              <div className="font-bold text-blue-400 mb-1">Log Management System (LMS)</div>
              <div className="text-xs text-zinc-400">Collects, stores, and organizes log data. Primarily used for compliance, historical analysis, and basic search. It lacks advanced real-time alerting.</div>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl">
              <div className="font-bold text-emerald-400 mb-1">SIEM</div>
              <div className="text-xs text-zinc-400">Does what an LMS does, but adds real-time correlation, threat intelligence integration, alerting, and incident response capabilities.</div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is a SIEM?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300"><strong>Security Information and Event Management (SIEM)</strong> is a software solution that aggregates and analyzes activity from many different resources across your entire IT infrastructure. It provides real-time analysis of security alerts generated by applications and network hardware.</p>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What are the most important Windows Event IDs to monitor?',
        a: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 4624, desc: 'Successful Logon', color: 'emerald' },
              { id: 4625, desc: 'Failed Logon', color: 'rose' },
              { id: 4688, desc: 'Process Creation', color: 'blue' },
              { id: 4720, desc: 'User Account Created', color: 'amber' },
              { id: 1102, desc: 'Audit Log Cleared', color: 'rose' },
              { id: 7045, desc: 'New Service Installed', color: 'purple' },
            ].map(e => (
              <div key={e.id} className={`bg-${e.color}-500/5 border border-${e.color}-500/20 p-4 rounded-xl flex items-center gap-4 hover:bg-${e.color}-500/10 transition-colors`}>
                <div className={`font-mono font-bold text-lg text-${e.color}-400 bg-${e.color}-500/10 px-2 py-1 rounded`}>{e.id}</div>
                <div className="text-sm font-medium text-zinc-200">{e.desc}</div>
              </div>
            ))}
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'What is the difference between a SIEM Forwarder, Indexer, and Search Head?',
        a: (
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-zinc-900/80 p-5 rounded-xl border border-white/5 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-3 border border-blue-500/20">
                <Server className="w-6 h-6 text-blue-400" />
              </div>
              <div className="font-bold text-zinc-200 mb-2 text-lg">Forwarder</div>
              <div className="text-sm text-zinc-400">Collects logs from endpoints and sends them to the SIEM.</div>
            </div>
            <div className="flex-1 bg-zinc-900/80 p-5 rounded-xl border border-white/5 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 mx-auto bg-amber-500/10 rounded-full flex items-center justify-center mb-3 border border-amber-500/20">
                <Database className="w-6 h-6 text-amber-400" />
              </div>
              <div className="font-bold text-zinc-200 mb-2 text-lg">Indexer</div>
              <div className="text-sm text-zinc-400">Parses, stores, and indexes the logs for fast searching.</div>
            </div>
            <div className="flex-1 bg-zinc-900/80 p-5 rounded-xl border border-white/5 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center mb-3 border border-emerald-500/20">
                <Globe className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="font-bold text-zinc-200 mb-2 text-lg">Search Head</div>
              <div className="text-sm text-zinc-400">The UI where analysts run queries, view dashboards, and alerts.</div>
            </div>
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'What is the difference between Log Normalization and Log Correlation?',
        a: (
          <div className="space-y-4">
            <div className="flex flex-col gap-4">
              <div className="bg-zinc-900/80 p-5 rounded-xl border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <div className="font-bold text-blue-400 mb-2 text-lg">1. Normalization (Formatting)</div>
                <div className="text-sm text-zinc-300 mb-3">The process of converting logs from various different formats (Windows, Linux, Cisco, AWS) into a single, standard format.</div>
                <div className="bg-black/40 p-3 rounded-lg border border-white/5 font-mono text-xs text-zinc-400">
                  <div><span className="text-rose-400">Raw 1:</span> src_ip=10.0.0.1</div>
                  <div><span className="text-rose-400">Raw 2:</span> SourceIPAddress: 10.0.0.1</div>
                  <div className="my-1 text-emerald-400">&darr; Normalization &darr;</div>
                  <div><span className="text-emerald-400">Standard:</span> src_ip="10.0.0.1"</div>
                </div>
              </div>
              <div className="bg-zinc-900/80 p-5 rounded-xl border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                <div className="font-bold text-emerald-400 mb-2 text-lg">2. Correlation (Connecting the Dots)</div>
                <div className="text-sm text-zinc-300 mb-3">The process of analyzing normalized logs to find relationships between seemingly unrelated events to detect a broader attack.</div>
                <div className="bg-black/40 p-3 rounded-lg border border-white/5 font-mono text-xs text-zinc-400">
                  <div><span className="text-amber-400">Event A:</span> 5 failed logins from IP X</div>
                  <div><span className="text-amber-400">Event B:</span> 1 successful login from IP X</div>
                  <div className="my-1 text-emerald-400">&darr; Correlation Rule &darr;</div>
                  <div><span className="text-rose-400 font-bold">ALERT:</span> Brute Force Success Detected!</div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'In Splunk, what is a Sourcetype and why is it important?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">A <strong>Sourcetype</strong> determines how Splunk formats the incoming data stream into individual events.</p>
            <div className="bg-zinc-900/80 p-5 rounded-xl border border-white/5">
              <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li>It tells Splunk what kind of data it is (e.g., <code className="bg-black/30 px-1 rounded text-amber-300">cisco:asa</code>, <code className="bg-black/30 px-1 rounded text-amber-300">WinEventLog:Security</code>, <code className="bg-black/30 px-1 rounded text-amber-300">access_combined</code>).</li>
                <li>It controls how Splunk breaks the data stream into distinct events (line breaking).</li>
                <li>It determines how Splunk extracts the timestamp for each event.</li>
                <li>If the sourcetype is wrong, logs will be unreadable or parsed incorrectly, breaking searches and alerts.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        level: 'Advanced',
        q: 'What is the difference between the "stats" and "timechart" commands in Splunk?',
        a: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="font-bold text-blue-400 mb-2 text-lg">stats</div>
              <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li>Calculates aggregate statistics over the <strong>entire dataset</strong>.</li>
                <li>Outputs a table of results.</li>
                <li>Does NOT group results by time automatically.</li>
                <li>Example: <code className="bg-black/30 px-1 rounded text-blue-300 font-mono text-xs">stats count by src_ip</code> (Total count per IP).</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="font-bold text-emerald-400 mb-2 text-lg">timechart</div>
              <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li>Calculates aggregate statistics grouped by <strong>time intervals</strong> (buckets).</li>
                <li>Outputs data formatted for a time-series chart (line/bar chart).</li>
                <li>Time is always the X-axis.</li>
                <li>Example: <code className="bg-black/30 px-1 rounded text-emerald-300 font-mono text-xs">timechart count by src_ip</code> (Count per IP over time).</li>
              </ul>
            </div>
          </div>
        )
      }
    ]
  },
  {
    category: 'Web Attacks',
    icon: AlertCircle,
    questions: [
      {
        level: 'Advanced',
        q: 'What is the difference between a Bind Shell and a Reverse Shell?',
        a: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Server className="w-5 h-5 text-blue-400" />
                </div>
                <div className="font-bold text-blue-400 text-lg">Bind Shell</div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono bg-black/40 p-2 rounded border border-white/5">
                <span className="text-rose-400">Attacker</span>
                <span className="text-zinc-500">{"--->"}</span>
                <span className="text-emerald-400">Victim (Listening)</span>
              </div>
              <div className="text-sm text-zinc-400">The attacker connects to the victim. The victim opens a port and waits for the attacker to connect to it. Often blocked by firewalls because inbound connections are usually restricted.</div>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                  <Activity className="w-5 h-5 text-rose-400" />
                </div>
                <div className="font-bold text-rose-400 text-lg">Reverse Shell</div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono bg-black/40 p-2 rounded border border-white/5">
                <span className="text-emerald-400">Victim</span>
                <span className="text-zinc-500">{"--->"}</span>
                <span className="text-rose-400">Attacker (Listening)</span>
              </div>
              <div className="text-sm text-zinc-400">The victim connects to the attacker. The attacker sets up a listener, and the victim machine is forced to connect back to the attacker. Often bypasses firewalls because outbound traffic is usually allowed.</div>
            </div>
          </div>
        )
      },
      {
        level: 'Intermediate',
        q: 'What is the difference between XSS and SQLi?',
        a: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/80 border border-rose-500/20 p-5 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full blur-xl -mr-10 -mt-10"></div>
              <div className="font-bold text-rose-400 mb-3 text-lg flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Cross-Site Scripting (XSS)
              </div>
              <ul className="text-sm text-zinc-300 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">&bull;</span>
                  <span>Targets the <strong>User (Browser)</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">&bull;</span>
                  <span>Injects malicious JavaScript.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">&bull;</span>
                  <span>Goal: Steal session cookies, redirect users.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">&bull;</span>
                  <span className="text-emerald-400/80">Mitigation: Output encoding, input validation.</span>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900/80 border border-amber-500/20 p-5 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl -mr-10 -mt-10"></div>
              <div className="font-bold text-amber-400 mb-3 text-lg flex items-center gap-2">
                <Database className="w-5 h-5" />
                SQL Injection (SQLi)
              </div>
              <ul className="text-sm text-zinc-300 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">&bull;</span>
                  <span>Targets the <strong>Database (Backend)</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">&bull;</span>
                  <span>Injects malicious SQL queries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">&bull;</span>
                  <span>Goal: Dump database, bypass login, modify data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">&bull;</span>
                  <span className="text-emerald-400/80">Mitigation: Prepared statements (Parameterized queries).</span>
                </li>
              </ul>
            </div>
          </div>
        )
      }
    ]
  },
  {
    category: 'Threat Intel & Hunting',
    icon: Target,
    questions: [
      {
        level: 'Advanced',
        q: 'What is YARA?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">YARA is a tool aimed at (but not limited to) helping malware researchers to identify and classify malware samples. With YARA you can create descriptions of malware families (or whatever you want to describe) based on textual or binary patterns.</p>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is the difference between an IOC and an IOA?',
        a: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="font-bold text-rose-400 mb-2 text-lg">IOC (Indicator of Compromise)</div>
              <div className="text-sm text-zinc-300 mb-3">Evidence that an attack <strong>has already happened</strong>. It's reactive.</div>
              <div className="bg-black/30 p-3 rounded-lg border border-white/5 font-mono text-xs text-zinc-400 space-y-1">
                <div>&bull; Malicious IP Addresses</div>
                <div>&bull; Known Malware Hashes (MD5/SHA256)</div>
                <div>&bull; Bad Domains / URLs</div>
                <div>&bull; Exploit Signatures</div>
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="font-bold text-amber-400 mb-2 text-lg">IOA (Indicator of Attack)</div>
              <div className="text-sm text-zinc-300 mb-3">Evidence of the <strong>intent or strategy</strong> of an attacker. It's proactive. Focuses on behavior.</div>
              <div className="bg-black/30 p-3 rounded-lg border border-white/5 font-mono text-xs text-zinc-400 space-y-1">
                <div>&bull; Multiple failed logins followed by success</div>
                <div>&bull; Internal host scanning the network</div>
                <div>&bull; Execution of PowerShell with encoded commands</div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'Explain the difference between the Cyber Kill Chain and the MITRE ATT&CK framework.',
        a: (
          <div className="space-y-4">
            <div className="bg-zinc-900/80 p-5 rounded-xl border border-white/5">
              <div className="font-bold text-blue-400 mb-2 text-lg">Lockheed Martin Cyber Kill Chain</div>
              <p className="text-sm text-zinc-300 mb-2">A high-level, linear model describing the stages of an attack. Good for understanding the "what" and "when".</p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                <span className="bg-zinc-800 px-2 py-1 rounded">1. Recon</span> &rarr;
                <span className="bg-zinc-800 px-2 py-1 rounded">2. Weaponize</span> &rarr;
                <span className="bg-zinc-800 px-2 py-1 rounded">3. Deliver</span> &rarr;
                <span className="bg-zinc-800 px-2 py-1 rounded">4. Exploit</span> &rarr;
                <span className="bg-zinc-800 px-2 py-1 rounded">5. Install</span> &rarr;
                <span className="bg-zinc-800 px-2 py-1 rounded">6. C2</span> &rarr;
                <span className="bg-zinc-800 px-2 py-1 rounded">7. Actions</span>
              </div>
            </div>
            <div className="bg-zinc-900/80 p-5 rounded-xl border border-white/5">
              <div className="font-bold text-emerald-400 mb-2 text-lg">MITRE ATT&CK Framework</div>
              <p className="text-sm text-zinc-300 mb-2">A detailed, matrix-based knowledge base of adversary Tactics, Techniques, and Procedures (TTPs). Good for understanding the "how".</p>
              <ul className="text-sm text-zinc-300 space-y-1 list-disc list-inside">
                <li><strong>Tactics:</strong> The attacker's goal (e.g., Initial Access, Privilege Escalation).</li>
                <li><strong>Techniques:</strong> How they achieve the goal (e.g., Phishing, Valid Accounts).</li>
                <li><strong>Procedures:</strong> The specific implementation or tool used.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is the difference between Static and Dynamic Malware Analysis?',
        a: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Search className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="font-bold text-emerald-400 text-lg">Static Analysis</div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono bg-black/40 p-2 rounded border border-white/5 text-zinc-400">
                <span className="text-emerald-400 font-bold">Action:</span> Inspect Code (No Execution)
              </div>
              <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li>Analyzing the file <strong>WITHOUT executing it</strong>.</li>
                <li>Safe to perform on any machine.</li>
                <li>Techniques: Getting hashes, extracting strings, reverse engineering code, checking headers.</li>
                <li>Drawback: Can be bypassed if the malware is packed or obfuscated.</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                  <Activity className="w-5 h-5 text-rose-400" />
                </div>
                <div className="font-bold text-rose-400 text-lg">Dynamic Analysis</div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono bg-black/40 p-2 rounded border border-white/5 text-zinc-400">
                <span className="text-rose-400 font-bold">Action:</span> Run in Sandbox (Execution)
              </div>
              <ul className="text-sm text-zinc-300 space-y-2 list-disc list-inside">
                <li>Analyzing the file by <strong>EXECUTING it</strong> in a safe environment (Sandbox).</li>
                <li>Requires an isolated VM.</li>
                <li>Techniques: Monitoring file system changes, registry edits, network connections.</li>
                <li>Drawback: Malware might detect the sandbox and hide its malicious behavior.</li>
              </ul>
            </div>
          </div>
        )
      }
    ]
  },
  {
    category: 'Active Directory',
    icon: Users,
    questions: [
      {
        level: 'Advanced',
        q: 'What is a DCSync Attack?',
        a: (
          <div className="space-y-4">
            <div className="bg-zinc-900/80 p-5 rounded-xl border border-rose-500/20">
              <div className="font-bold text-rose-400 mb-2 text-lg">DCSync</div>
              <p className="text-sm text-zinc-300 mb-3">An attack where an adversary simulates the behavior of a Domain Controller (DC) to request password data from the targeted DC.</p>
              <ul className="text-sm text-zinc-400 space-y-2 list-disc list-inside">
                <li>The attacker must have high privileges (e.g., Domain Admin or specific replication rights).</li>
                <li>They use the Directory Replication Service (DRS) Remote Protocol to request the password hashes of any user (including the KRBTGT account).</li>
                <li>It does not require code execution on the DC itself, making it stealthy.</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        level: 'Basic',
        q: 'What is Active Directory (AD) and what are its core components?',
        a: (
          <div className="space-y-4">
            <p className="text-sm text-zinc-300">Active Directory is Microsoft's directory service used for centralized domain management and identity authentication.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-zinc-900/80 p-4 rounded-xl border border-white/5">
                <div className="font-bold text-blue-400 mb-1">Domain Controller (DC)</div>
                <div className="text-xs text-zinc-400">The server that runs AD DS. It stores directory data and manages user authentication (the "bouncer" of the network).</div>
              </div>
              <div className="bg-zinc-900/80 p-4 rounded-xl border border-white/5">
                <div className="font-bold text-emerald-400 mb-1">Kerberos</div>
                <div className="text-xs text-zinc-400">The default authentication protocol used by AD. It uses tickets instead of sending passwords over the network.</div>
              </div>
              <div className="bg-zinc-900/80 p-4 rounded-xl border border-white/5">
                <div className="font-bold text-amber-400 mb-1">Group Policy (GPO)</div>
                <div className="text-xs text-zinc-400">A feature that controls the working environment of user accounts and computer accounts (e.g., enforcing password complexity).</div>
              </div>
              <div className="bg-zinc-900/80 p-4 rounded-xl border border-white/5">
                <div className="font-bold text-purple-400 mb-1">NTLM</div>
                <div className="text-xs text-zinc-400">An older, legacy authentication protocol. Less secure than Kerberos, vulnerable to relay and pass-the-hash attacks.</div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Advanced',
        q: 'Explain Kerberoasting and how to detect it.',
        a: (
          <div className="space-y-4">
            <div className="bg-zinc-900/80 p-5 rounded-xl border border-rose-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="font-bold text-rose-400 mb-2 text-lg">Kerberoasting Attack</div>
              <p className="text-sm text-zinc-300 mb-4">An attack where a valid domain user requests a service ticket (TGS) for a service account, extracts the ticket from memory, and attempts to crack the service account's password offline.</p>
              
              <div className="bg-black/40 p-4 rounded-lg border border-white/5 mb-4">
                <div className="font-bold text-zinc-200 mb-2 text-sm">How it works:</div>
                <ol className="text-xs text-zinc-400 space-y-2 list-decimal list-inside">
                  <li>Attacker logs in as a normal user.</li>
                  <li>Queries AD for Service Principal Names (SPNs).</li>
                  <li>Requests a TGS ticket for a target SPN.</li>
                  <li>Extracts the TGS (which is encrypted with the service account's NTLM hash).</li>
                  <li>Takes the ticket offline and brute-forces it using Hashcat/John the Ripper.</li>
                </ol>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg">
                <div className="font-bold text-emerald-400 mb-1 text-sm">Detection (SIEM / Logs):</div>
                <div className="text-xs text-zinc-300">
                  Monitor for <strong>Windows Event ID 4769</strong> (A Kerberos service ticket was requested) where the <strong>Ticket Encryption Type is 0x17 (RC4)</strong>. Attackers prefer RC4 because it's much easier to crack than AES (0x12).
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Advanced',
        q: 'What is a Pass-the-Hash (PtH) attack and how do you detect it?',
        a: (
          <div className="space-y-4">
            <div className="bg-zinc-900/80 p-5 rounded-xl border border-amber-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="font-bold text-amber-400 mb-2 text-lg">Pass-the-Hash (PtH)</div>
              <p className="text-sm text-zinc-300 mb-4">An attack where an attacker steals a hashed user credential (usually NTLM) and uses it directly to authenticate to a remote server or service, without ever needing to know the plaintext password.</p>
              
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg">
                <div className="font-bold text-emerald-400 mb-1 text-sm">Detection (SIEM / Logs):</div>
                <ul className="text-xs text-zinc-300 space-y-2 list-disc list-inside">
                  <li><strong>Event ID 4624 (Successful Logon):</strong> Look for Logon Type 9 (NewCredentials) or Logon Type 3 (Network).</li>
                  <li><strong>Authentication Package:</strong> NTLM (instead of Kerberos).</li>
                  <li><strong>Key Indicator:</strong> The <code>KeyLength</code> field is 0, and the <code>LogonProcessName</code> is <code>seclogo</code>.</li>
                  <li>Look for lateral movement patterns: One admin account suddenly logging into multiple workstations rapidly.</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Advanced',
        q: 'What is a Golden Ticket Attack?',
        a: (
          <div className="space-y-4">
            <div className="bg-zinc-900/80 p-5 rounded-xl border border-amber-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="font-bold text-amber-400 mb-2 text-lg">Golden Ticket Attack</div>
              <p className="text-sm text-zinc-300 mb-4">A post-compromise attack where an adversary gains complete control over an Active Directory domain by forging a Ticket Granting Ticket (TGT).</p>
              
              <div className="bg-black/40 p-4 rounded-lg border border-white/5 mb-4">
                <div className="font-bold text-zinc-200 mb-2 text-sm">How it works:</div>
                <ol className="text-xs text-zinc-400 space-y-2 list-decimal list-inside">
                  <li>Attacker compromises the Domain Controller (DC).</li>
                  <li>They extract the password hash of the <strong>KRBTGT</strong> account (the account that encrypts all TGTs).</li>
                  <li>Using the KRBTGT hash, they forge a TGT that grants them Domain Admin privileges.</li>
                  <li>They can now access any resource in the domain, and the ticket is valid for a long time (often 10 years).</li>
                </ol>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg">
                <div className="font-bold text-emerald-400 mb-1 text-sm">Detection:</div>
                <div className="text-xs text-zinc-300">
                  Extremely difficult to detect because the forged ticket looks perfectly valid to the DC. Look for <strong>Event ID 4624</strong> where the account name is anomalous, or monitor for TGTs with a lifespan exceeding the domain policy (e.g., &gt; 10 hours).
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        level: 'Advanced',
        q: 'What is BloodHound and how do attackers use it?',
        a: (
          <div className="space-y-4">
            <div className="bg-zinc-900/80 p-5 rounded-xl border border-blue-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="font-bold text-blue-400 mb-2 text-lg">BloodHound</div>
              <p className="text-sm text-zinc-300 mb-3">BloodHound is an open-source tool that uses graph theory to reveal the hidden and often unintended relationships within an Active Directory environment.</p>
              <ul className="text-sm text-zinc-400 space-y-2 list-disc list-inside">
                <li><strong>Data Collection:</strong> Attackers run an ingestor (like SharpHound) to query AD for users, groups, computers, sessions, and ACLs.</li>
                <li><strong>Visualization:</strong> BloodHound maps out these relationships visually.</li>
                <li><strong>Attack Paths:</strong> It automatically finds the shortest path for an attacker to escalate privileges from a standard user to a Domain Admin.</li>
                <li><strong>Defense:</strong> Defenders also use BloodHound (BlueHound) to identify and fix these misconfigurations before attackers can exploit them.</li>
              </ul>
            </div>
          </div>
        )
      }
    ]
  }
];

export default function InterviewQA() {
  const [activeCategory, setActiveCategory] = useState(qaData[0].category);
  const [expandedQ, setExpandedQ] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = useMemo(() => {
    const categoryQuestions = qaData.find(c => c.category === activeCategory)?.questions || [];
    if (!searchQuery.trim()) {
      return [...categoryQuestions].sort((a, b) => {
        const order: Record<string, number> = { 'Basic': 1, 'Intermediate': 2, 'Advanced': 3 };
        return (order[a.level] || 0) - (order[b.level] || 0);
      });
    }

    const lowerQuery = searchQuery.toLowerCase();
    return [...categoryQuestions]
      .filter(q => q.q.toLowerCase().includes(lowerQuery))
      .sort((a, b) => {
        const order: Record<string, number> = { 'Basic': 1, 'Intermediate': 2, 'Advanced': 3 };
        return (order[a.level] || 0) - (order[b.level] || 0);
      });
  }, [activeCategory, searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-6 sm:space-y-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {qaData.map(cat => (
            <button
              key={cat.category}
              onClick={() => {
                setActiveCategory(cat.category);
                setExpandedQ(null);
              }}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.category
                  ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'bg-zinc-900/50 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-white/5'
              }`}
            >
              <cat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">{cat.category}</span>
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64 flex-shrink-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-zinc-500" />
          </div>
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900/50 border border-white/10 text-zinc-200 text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-zinc-600"
          />
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12 text-zinc-500 text-sm">
            No questions found matching "{searchQuery}" in this category.
          </div>
        ) : (
          filteredQuestions.map((q, i) => {
            const isExpanded = expandedQ === q.q;
            
            const levelColors: Record<string, string> = {
              'Basic': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
              'Intermediate': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
              'Advanced': 'bg-rose-500/10 text-rose-400 border-rose-500/20'
            };
            const levelColor = levelColors[q.level] || 'bg-zinc-800 text-zinc-400 border-white/5';

            return (
              <motion.div
                key={q.q}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded 
                    ? 'bg-zinc-900/80 border-emerald-500/30 shadow-[0_4px_20px_rgba(16,185,129,0.05)]' 
                    : 'bg-zinc-900/30 border-white/10 hover:border-white/20 hover:bg-zinc-900/50'
                }`}
              >
                <button
                  onClick={() => setExpandedQ(isExpanded ? null : q.q)}
                  className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-start sm:items-center justify-between gap-3 sm:gap-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-1">
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border ${levelColor} whitespace-nowrap w-fit`}>
                      {q.level}
                    </span>
                    <span className={`font-semibold text-sm sm:text-base lg:text-lg transition-colors leading-snug ${isExpanded ? 'text-emerald-400' : 'text-zinc-200'}`}>
                      {q.q}
                    </span>
                  </div>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 mt-0.5 sm:mt-0 ${
                    isExpanded ? 'bg-emerald-500/20 text-emerald-400 rotate-180' : 'bg-zinc-800 text-zinc-400'
                  }`}>
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-white/5">
                        {q.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </div>
    </motion.div>
  );
}
