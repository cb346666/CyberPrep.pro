import { Link, useLocation } from "react-router-dom";
import {
  ShieldAlert,
  Terminal,
  BookOpen,
  Activity,
  Network,
  Target,
  ShieldCheck,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { name: "Dashboard", path: "/", icon: Activity },
  { name: "SOC Preparation", path: "/soc", icon: ShieldAlert },
  { name: "Interview Simulator", path: "/interview", icon: Terminal },
  { name: "Networking", path: "/networking", icon: Network, disabled: true },
  { name: "VAPT / Hacking", path: "/vapt", icon: Target, disabled: true },
  { name: "DFIR", path: "/dfir", icon: ShieldCheck, disabled: true },
];

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (v: boolean) => void }) {
  const location = useLocation();

  const SidebarContent = (
    <div className="w-64 h-full bg-zinc-950/90 sm:bg-zinc-900/50 border-r border-white/5 backdrop-blur-xl flex flex-col z-40 relative">
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
            <Terminal className="w-5 h-5 text-emerald-400" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">
            CyberPrep<span className="text-emerald-500">.pro</span>
          </span>
        </div>
        <button className="sm:hidden text-zinc-400 hover:text-white" onClick={() => setIsOpen(false)}>
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.disabled ? "#" : item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all relative ${
                item.disabled
                  ? "opacity-50 cursor-not-allowed text-zinc-500"
                  : isActive
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
              }`}
              onClick={(e) => {
                if (item.disabled) e.preventDefault();
                else setIsOpen(false);
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute left-0 w-1 h-full bg-emerald-500 rounded-r-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              <item.icon
                className={`w-4 h-4 ${isActive ? "text-emerald-400" : ""}`}
              />
              {item.name}
              {item.disabled && (
                <span className="ml-auto text-[10px] uppercase tracking-wider bg-white/5 px-1.5 py-0.5 rounded">
                  Soon
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 m-4 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 mt-auto">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
            Study Goal
          </span>
        </div>
        <p className="text-xs text-zinc-400">SOC L1 Analyst</p>
        <div className="w-full h-1.5 bg-zinc-800 rounded-full mt-3 overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: "65%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden sm:block h-full">
        {SidebarContent}
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 sm:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 left-0 z-40 sm:hidden"
            >
              {SidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
