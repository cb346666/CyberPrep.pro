import { Search, Bell, User, Menu } from "lucide-react";

export default function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="h-16 border-b border-white/5 bg-zinc-950/50 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 z-20">
      <div className="flex items-center gap-3 sm:gap-4 flex-1">
        <button 
          onClick={onMenuClick}
          className="sm:hidden p-2 -ml-2 text-zinc-400 hover:text-white transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="relative w-full max-w-[200px] sm:max-w-xs md:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-1.5 pl-9 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-zinc-600"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-zinc-400 hover:text-zinc-100 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full border border-zinc-950"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
          <User className="w-4 h-4 text-zinc-400" />
        </div>
      </div>
    </header>
  );
}
