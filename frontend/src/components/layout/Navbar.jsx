

import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Brain, 
  History, 
  Target, 
  LogOut, 
  Menu, 
  X 
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navItems = [
    { label: "Home", path: "/", icon: <Home size={18} /> },
    { label: "Evaluate", path: "/evaluate", icon: <Brain size={18} /> },
    { label: "History", path: "/evaluations", icon: <History size={18} /> },
    { label: "Projects", path: "/my-projects", icon: <Target size={18} /> },
    { label: "AI Assistant", path: "/ai-assistant", icon: <Brain size={18} /> },
    { label: "Builder", path: "/milestones", icon: <Target size={18} /> },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => navigate("/")}
          >
            <div className="w-11 h-11 bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-black text-xl text-[#0F172A] tracking-tight">PitchAI</div>
              <div className="text-[9px] font-bold text-[#6D28D9] tracking-wider uppercase">Intelligence</div>
            </div>
          </motion.div>

          {/* DESKTOP MENU */}
          {token && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex items-center gap-2 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200"
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive 
                        ? "text-[#6D28D9]" 
                        : "text-slate-600 hover:text-[#6D28D9]"
                    }`}
                  >
                    {item.icon}
                    <span className="hidden lg:block">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white rounded-xl shadow-lg border border-slate-200 -z-10"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
            </motion.div>
          )}

          {/* RIGHT ACTIONS */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            {token && (
              <button
                onClick={logout}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#6D28D9] text-white text-sm font-semibold rounded-xl hover:bg-[#5B21B6] transition-all shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30"
              >
                <LogOut size={16} />
                <span className="hidden lg:block">Logout</span>
              </button>
            )}
            
            {/* MOBILE MENU TOGGLE */}
            <button 
              className="md:hidden p-2.5 text-slate-600 hover:text-[#6D28D9] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && token && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-6 pb-2 space-y-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <button
                      key={item.path}
                      onClick={() => { navigate(item.path); setIsOpen(false); }}
                      className={`w-full flex items-center gap-4 p-4 rounded-2xl font-semibold transition-all ${
                        isActive
                          ? "bg-[#C4B5FD]/20 text-[#6D28D9] border-2 border-[#C4B5FD]/40"
                          : "bg-white text-slate-600 hover:bg-slate-50 border-2 border-slate-200"
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        isActive 
                          ? "bg-[#6D28D9] text-white" 
                          : "bg-slate-100 text-slate-600"
                      }`}>
                        {item.icon}
                      </div>
                      {item.label}
                    </button>
                  );
                })}
                
                <div className="pt-4 border-t-2 border-slate-200 mt-4">
                  <button 
                    onClick={() => { logout(); setIsOpen(false); }}
                    className="w-full flex items-center gap-4 p-4 rounded-2xl bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition-all border-2 border-red-200"
                  >
                    <div className="p-2 bg-red-100 rounded-lg">
                      <LogOut size={18} />
                    </div>
                    Logout
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}