import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import SOC from "./pages/SOC";
import InterviewPrep from "./pages/InterviewPrep";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen bg-zinc-950 text-zinc-50 overflow-hidden font-sans selection:bg-emerald-500/30">
        <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        <div className="flex-1 flex flex-col overflow-hidden relative w-full">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-zinc-950 to-zinc-950 pointer-events-none"></div>
          <Navbar onMenuClick={() => setIsMobileMenuOpen(true)} />
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/soc" element={<SOC />} />
              <Route path="/interview" element={<InterviewPrep />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
