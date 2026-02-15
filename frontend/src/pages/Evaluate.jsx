// // // // import { useState } from "react";
// // // // import { motion } from "framer-motion";
// // // // import TextEvaluationForm from "../components/evaluation/TextEvaluationForm";
// // // // import PdfUploadForm from "../components/evaluation/PdfUploadForm";
// // // // import EvaluationOverview from "../components/evaluation/EvaluationOverview";

// // // // export default function Evaluate() {
// // // //   const [activeTab, setActiveTab] = useState("text");
// // // //   const [resultData, setResultData] = useState(null);

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 py-12 px-6">
// // // //       <div className="max-w-6xl mx-auto space-y-8">

// // // //         {/* PAGE TITLE */}
// // // //         <div>
// // // //           <h1 className="text-3xl font-bold text-gray-800">
// // // //             Evaluate Startup Pitch
// // // //           </h1>
// // // //           <p className="text-gray-600 mt-2">
// // // //             Structured investor-grade scoring powered by AI intelligence.
// // // //           </p>
// // // //         </div>

// // // //         {/* TOGGLE TABS */}
// // // //         <div className="bg-white rounded-2xl shadow p-4 flex space-x-4 w-fit">
// // // //           <button
// // // //             onClick={() => setActiveTab("text")}
// // // //             className={`px-6 py-2 rounded-xl text-sm font-medium transition ${
// // // //               activeTab === "text"
// // // //                 ? "bg-indigo-600 text-white"
// // // //                 : "text-gray-600 hover:bg-gray-100"
// // // //             }`}
// // // //           >
// // // //             Text Script
// // // //           </button>

// // // //           <button
// // // //             onClick={() => setActiveTab("pdf")}
// // // //             className={`px-6 py-2 rounded-xl text-sm font-medium transition ${
// // // //               activeTab === "pdf"
// // // //                 ? "bg-indigo-600 text-white"
// // // //                 : "text-gray-600 hover:bg-gray-100"
// // // //             }`}
// // // //           >
// // // //             PDF Upload
// // // //           </button>
// // // //         </div>

// // // //         {/* FORM CARD */}
// // // //         <motion.div
// // // //           key={activeTab}
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.3 }}
// // // //           className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
// // // //         >
// // // //           {activeTab === "text" ? (
// // // //             <TextEvaluationForm onResult={setResultData} />
// // // //           ) : (
// // // //             <PdfUploadForm onResult={setResultData} />
// // // //           )}
// // // //         </motion.div>

// // // //         {/* RESULT OVERVIEW BELOW */}
// // // //         {resultData && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             transition={{ duration: 0.5 }}
// // // //           >
// // // //             <EvaluationOverview data={resultData} />
// // // //           </motion.div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { FileText, UploadCloud, ShieldCheck, Sparkles, Activity } from "lucide-react";
// // // import TextEvaluationForm from "../components/evaluation/TextEvaluationForm";
// // // import PdfUploadForm from "../components/evaluation/PdfUploadForm";
// // // import EvaluationOverview from "../components/evaluation/EvaluationOverview";

// // // export default function Evaluate() {
// // //   const [activeTab, setActiveTab] = useState("text");
// // //   const [resultData, setResultData] = useState(null);

// // //   return (
// // //     <div className="min-h-screen bg-[#F9FAFB] pt-32 pb-20 px-6 relative overflow-hidden">
// // //       {/* ADVANCED BACKGROUND DECOR */}
// // //       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/30 blur-[120px] rounded-full -z-10" />
// // //       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50/40 blur-[100px] rounded-full -z-10" />

// // //       <div className="max-w-7xl mx-auto">
// // //         <div className="grid lg:grid-cols-12 gap-12">
          
// // //           {/* LEFT COLUMN: CONTROL PANEL */}
// // //           <div className="lg:col-span-4 space-y-8">
// // //             <motion.div
// // //               initial={{ opacity: 0, x: -20 }}
// // //               animate={{ opacity: 1, x: 0 }}
// // //             >
// // //               <h1 className="text-4xl font-extrabold text-[#111827] leading-tight">
// // //                 Pitch <span className="text-[#4F46E5]">Analyzer</span>
// // //               </h1>
// // //               <p className="text-slate-500 mt-4 text-lg">
// // //                 Upload your pitch deck or paste your script to receive investor-ready analytics.
// // //               </p>
// // //             </motion.div>

// // //             {/* STATUS CARDS (Makes page look busy and advanced) */}
// // //             <div className="grid grid-cols-1 gap-4">
// // //               <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center gap-4">
// // //                 <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
// // //                   <ShieldCheck size={20} />
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Engine Status</p>
// // //                   <p className="text-sm font-bold text-slate-700">Neural Matrix Active</p>
// // //                 </div>
// // //               </div>
              
// // //               <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center gap-4">
// // //                 <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
// // //                   <Activity size={20} />
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Accuracy</p>
// // //                   <p className="text-sm font-bold text-slate-700">99.2% Tier-1 Analysis</p>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* UPGRADED TOGGLE */}
// // //             <div className="bg-slate-200/50 p-1.5 rounded-2xl flex gap-2 w-full">
// // //               <button
// // //                 onClick={() => setActiveTab("text")}
// // //                 className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
// // //                   activeTab === "text"
// // //                     ? "bg-white text-[#4F46E5] shadow-md"
// // //                     : "text-slate-500 hover:text-slate-700"
// // //                 }`}
// // //               >
// // //                 <FileText size={18} /> Text
// // //               </button>
// // //               <button
// // //                 onClick={() => setActiveTab("pdf")}
// // //                 className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
// // //                   activeTab === "pdf"
// // //                     ? "bg-white text-[#4F46E5] shadow-md"
// // //                     : "text-slate-500 hover:text-slate-700"
// // //                 }`}
// // //               >
// // //                 <UploadCloud size={18} /> PDF Deck
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {/* RIGHT COLUMN: INTERACTIVE FORM */}
// // //           <div className="lg:col-span-8">
// // //             <motion.div
// // //               layout
// // //               initial={{ opacity: 0, scale: 0.95 }}
// // //               animate={{ opacity: 1, scale: 1 }}
// // //               className="bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] overflow-hidden relative"
// // //             >
// // //               {/* Decorative "Scanning" Line */}
// // //               <motion.div 
// // //                 animate={{ top: ["0%", "100%", "0%"] }}
// // //                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
// // //                 className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-20 z-0 pointer-events-none"
// // //               />

// // //               <div className="p-10 relative z-10">
// // //                 <div className="flex items-center gap-3 mb-8">
// // //                   <div className="p-2 bg-indigo-600 rounded-lg">
// // //                     <Sparkles size={20} className="text-white" />
// // //                   </div>
// // //                   <h2 className="text-xl font-bold text-slate-800">
// // //                     {activeTab === "text" ? "AI Script Analysis" : "Deck Intelligence"}
// // //                   </h2>
// // //                 </div>

// // //                 <AnimatePresence mode="wait">
// // //                   <motion.div
// // //                     key={activeTab}
// // //                     initial={{ opacity: 0, y: 10 }}
// // //                     animate={{ opacity: 1, y: 0 }}
// // //                     exit={{ opacity: 0, y: -10 }}
// // //                     transition={{ duration: 0.3 }}
// // //                   >
// // //                     {activeTab === "text" ? (
// // //                       <TextEvaluationForm onResult={setResultData} />
// // //                     ) : (
// // //                       <PdfUploadForm onResult={setResultData} />
// // //                     )}
// // //                   </motion.div>
// // //                 </AnimatePresence>
// // //               </div>
// // //             </motion.div>
// // //           </div>
// // //         </div>

// // //         {/* FULL WIDTH RESULT AREA */}
// // //         <AnimatePresence>
// // //           {resultData && (
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 50 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               className="mt-16 pt-16 border-t border-slate-200"
// // //             >
// // //               <div className="flex items-center gap-4 mb-10">
// // //                 <div className="h-px flex-1 bg-slate-200"></div>
// // //                 <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Analysis Results</span>
// // //                 <div className="h-px flex-1 bg-slate-200"></div>
// // //               </div>
// // //               <EvaluationOverview data={resultData} />
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import { useState, useEffect } from "react";
// // import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
// // import { FileText, UploadCloud, ShieldCheck, Sparkles, Activity, Zap, Brain, Cpu, TrendingUp, Target, Lock } from "lucide-react";
// // import TextEvaluationForm from "../components/evaluation/TextEvaluationForm";
// // import PdfUploadForm from "../components/evaluation/PdfUploadForm";
// // import EvaluationOverview from "../components/evaluation/EvaluationOverview";

// // export default function Evaluate() {
// //   const [activeTab, setActiveTab] = useState("text");
// //   const [resultData, setResultData] = useState(null);
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
// //   const mouseX = useMotionValue(0);
// //   const mouseY = useMotionValue(0);
  
// //   const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
// //   const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       const rect = document.body.getBoundingClientRect();
// //       const x = e.clientX - rect.width / 2;
// //       const y = e.clientY - rect.height / 2;
// //       setMousePosition({ x, y });
// //       mouseX.set(x);
// //       mouseY.set(y);
// //     };
// //     window.addEventListener("mousemove", handleMouseMove);
// //     return () => window.removeEventListener("mousemove", handleMouseMove);
// //   }, [mouseX, mouseY]);

// //   const statusMetrics = [
// //     { 
// //       icon: <Brain className="w-5 h-5" />, 
// //       label: "Neural Engine", 
// //       value: "GPT-4 Turbo",
// //       gradient: "from-violet-500 to-purple-500",
// //       glow: "rgba(139, 92, 246, 0.3)"
// //     },
// //     { 
// //       icon: <Activity className="w-5 h-5" />, 
// //       label: "Accuracy Rate", 
// //       value: "99.2%",
// //       gradient: "from-emerald-500 to-teal-500",
// //       glow: "rgba(16, 185, 129, 0.3)"
// //     },
// //     { 
// //       icon: <Zap className="w-5 h-5" />, 
// //       label: "Processing", 
// //       value: "<2.4s",
// //       gradient: "from-amber-500 to-orange-500",
// //       glow: "rgba(245, 158, 11, 0.3)"
// //     },
// //     { 
// //       icon: <Lock className="w-5 h-5" />, 
// //       label: "Security", 
// //       value: "AES-256",
// //       gradient: "from-blue-500 to-cyan-500",
// //       glow: "rgba(59, 130, 246, 0.3)"
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-28 pb-20 px-6 relative overflow-hidden">
// //       {/* ANIMATED GRADIENT MESH BACKGROUND */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         <motion.div
// //           animate={{
// //             scale: [1, 1.2, 1],
// //             opacity: [0.2, 0.3, 0.2],
// //           }}
// //           transition={{
// //             duration: 8,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //           className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[120px]"
// //         />
// //         <motion.div
// //           animate={{
// //             scale: [1, 1.3, 1],
// //             opacity: [0.15, 0.25, 0.15],
// //           }}
// //           transition={{
// //             duration: 10,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //           className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-fuchsia-500/15 rounded-full blur-[120px]"
// //         />
// //         <motion.div
// //           animate={{
// //             scale: [1, 1.15, 1],
// //             opacity: [0.2, 0.3, 0.2],
// //           }}
// //           transition={{
// //             duration: 12,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //           className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px]"
// //         />
        
// //         {/* GRID OVERLAY */}
// //         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
// //       </div>

// //       {/* FLOATING PARTICLES */}
// //       {[...Array(15)].map((_, i) => (
// //         <motion.div
// //           key={i}
// //           className="absolute w-1 h-1 bg-violet-400 rounded-full"
// //           style={{
// //             left: `${Math.random() * 100}%`,
// //             top: `${Math.random() * 100}%`,
// //           }}
// //           animate={{
// //             y: [0, -30, 0],
// //             opacity: [0, 0.8, 0],
// //             scale: [0, 1.5, 0],
// //           }}
// //           transition={{
// //             duration: 3 + Math.random() * 2,
// //             repeat: Infinity,
// //             delay: Math.random() * 2,
// //           }}
// //         />
// //       ))}

// //       <div className="max-w-7xl mx-auto relative z-10">
// //         {/* HEADER SECTION */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-16"
// //         >
// //           {/* STATUS BADGE */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.5 }}
// //             className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 backdrop-blur-sm mb-6"
// //           >
// //             <span className="relative flex h-2.5 w-2.5">
// //               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
// //               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-violet-400 to-fuchsia-400"></span>
// //             </span>
// //             <span className="text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
// //               Analysis Engine Online
// //             </span>
// //             <Sparkles className="w-4 h-4 text-violet-400" />
// //           </motion.div>

// //           <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
// //             <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
// //               Pitch Intelligence
// //             </span>
// //             <br />
// //             <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
// //               Evaluation Suite
// //             </span>
// //           </h1>
          
// //           <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
// //             Upload your pitch deck or paste your presentation script to receive{" "}
// //             <span className="text-violet-300 font-semibold">institutional-grade analytics</span> and
// //             comprehensive scoring in seconds.
// //           </p>
// //         </motion.div>

// //         {/* METRICS BAR */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.2 }}
// //           className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
// //         >
// //           {statusMetrics.map((metric, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
// //               whileHover={{ scale: 1.05, y: -5 }}
// //               className="relative group"
// //             >
// //               {/* GLOW EFFECT */}
// //               <div
// //                 className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"
// //                 style={{
// //                   background: `linear-gradient(135deg, ${metric.glow}, transparent)`,
// //                 }}
// //               />
              
// //               {/* CARD */}
// //               <div className="relative p-5 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10">
// //                 <div className="flex items-center gap-4">
// //                   <div className={`w-12 h-12 bg-gradient-to-br ${metric.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
// //                     <div className="text-white">{metric.icon}</div>
// //                   </div>
// //                   <div>
// //                     <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
// //                       {metric.label}
// //                     </p>
// //                     <p className="text-sm font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
// //                       {metric.value}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         <div className="grid lg:grid-cols-12 gap-8">
// //           {/* LEFT SIDEBAR - INPUT METHOD SELECTOR */}
// //           <div className="lg:col-span-4 space-y-6">
// //             <motion.div
// //               initial={{ opacity: 0, x: -20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.6, delay: 0.4 }}
// //             >
// //               {/* MODE SELECTOR */}
// //               <div className="relative">
// //                 {/* GLOW */}
// //                 <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 rounded-3xl blur-xl opacity-50" />
                
// //                 <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 p-2">
// //                   <div className="space-y-2">
// //                     <motion.button
// //                       onClick={() => setActiveTab("text")}
// //                       whileHover={{ scale: 1.02 }}
// //                       whileTap={{ scale: 0.98 }}
// //                       className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all ${
// //                         activeTab === "text"
// //                           ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30"
// //                           : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
// //                       }`}
// //                     >
// //                       <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
// //                         activeTab === "text" 
// //                           ? "bg-white/20" 
// //                           : "bg-white/5"
// //                       }`}>
// //                         <FileText className="w-6 h-6" />
// //                       </div>
// //                       <div className="flex-1 text-left">
// //                         <div className="font-bold text-sm">Text Input</div>
// //                         <div className={`text-xs ${activeTab === "text" ? "text-white/70" : "text-slate-500"}`}>
// //                           Paste your pitch script
// //                         </div>
// //                       </div>
// //                       {activeTab === "text" && (
// //                         <motion.div
// //                           layoutId="activeIndicator"
// //                           className="w-2 h-2 rounded-full bg-white"
// //                         />
// //                       )}
// //                     </motion.button>

// //                     <motion.button
// //                       onClick={() => setActiveTab("pdf")}
// //                       whileHover={{ scale: 1.02 }}
// //                       whileTap={{ scale: 0.98 }}
// //                       className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all ${
// //                         activeTab === "pdf"
// //                           ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30"
// //                           : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
// //                       }`}
// //                     >
// //                       <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
// //                         activeTab === "pdf" 
// //                           ? "bg-white/20" 
// //                           : "bg-white/5"
// //                       }`}>
// //                         <UploadCloud className="w-6 h-6" />
// //                       </div>
// //                       <div className="flex-1 text-left">
// //                         <div className="font-bold text-sm">PDF Upload</div>
// //                         <div className={`text-xs ${activeTab === "pdf" ? "text-white/70" : "text-slate-500"}`}>
// //                           Upload pitch deck
// //                         </div>
// //                       </div>
// //                       {activeTab === "pdf" && (
// //                         <motion.div
// //                           layoutId="activeIndicator"
// //                           className="w-2 h-2 rounded-full bg-white"
// //                         />
// //                       )}
// //                     </motion.button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             {/* INFO CARDS */}
// //             <motion.div
// //               initial={{ opacity: 0, x: -20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.6, delay: 0.5 }}
// //               className="space-y-4"
// //             >
// //               <div className="relative group">
// //                 <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all" />
// //                 <div className="relative p-5 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm rounded-2xl border border-white/10">
// //                   <div className="flex items-start gap-4">
// //                     <div className="w-10 h-10 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-lg flex items-center justify-center border border-white/10">
// //                       <Cpu className="w-5 h-5 text-violet-400" />
// //                     </div>
// //                     <div className="flex-1">
// //                       <h4 className="text-sm font-bold text-white mb-1">AI Processing</h4>
// //                       <p className="text-xs text-slate-400 leading-relaxed">
// //                         Advanced NLP with multi-dimensional scoring matrix
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="relative group">
// //                 <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all" />
// //                 <div className="relative p-5 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm rounded-2xl border border-white/10">
// //                   <div className="flex items-start gap-4">
// //                     <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center border border-white/10">
// //                       <Target className="w-5 h-5 text-emerald-400" />
// //                     </div>
// //                     <div className="flex-1">
// //                       <h4 className="text-sm font-bold text-white mb-1">Instant Results</h4>
// //                       <p className="text-xs text-slate-400 leading-relaxed">
// //                         Comprehensive evaluation with actionable insights
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="relative group">
// //                 <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all" />
// //                 <div className="relative p-5 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm rounded-2xl border border-white/10">
// //                   <div className="flex items-start gap-4">
// //                     <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-white/10">
// //                       <ShieldCheck className="w-5 h-5 text-blue-400" />
// //                     </div>
// //                     <div className="flex-1">
// //                       <h4 className="text-sm font-bold text-white mb-1">Secure & Private</h4>
// //                       <p className="text-xs text-slate-400 leading-relaxed">
// //                         Enterprise-grade encryption and data protection
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>

// //           {/* MAIN CONTENT - EVALUATION FORM */}
// //           <div className="lg:col-span-8">
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.3 }}
// //               style={{
// //                 rotateX,
// //                 rotateY,
// //                 transformStyle: "preserve-3d",
// //               }}
// //               className="relative group"
// //             >
// //               {/* HOLOGRAPHIC GLOW */}
// //               <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500" />
              
// //               {/* MAIN CARD */}
// //               <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
// //                 {/* ANIMATED SCAN LINE */}
// //                 <motion.div 
// //                   animate={{ 
// //                     top: ["0%", "100%"],
// //                   }}
// //                   transition={{ 
// //                     duration: 3, 
// //                     repeat: Infinity, 
// //                     ease: "linear",
// //                     repeatDelay: 1 
// //                   }}
// //                   className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-50 z-0 pointer-events-none"
// //                 />

// //                 {/* CORNER ACCENTS */}
// //                 <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-transparent rounded-br-full" />
// //                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-fuchsia-500/10 to-transparent rounded-bl-full" />
// //                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full" />
// //                 <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-full" />

// //                 <div className="relative z-10 p-10">
// //                   {/* HEADER */}
// //                   <div className="flex items-center justify-between mb-8">
// //                     <div className="flex items-center gap-4">
// //                       <div className="relative">
// //                         <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl blur-md opacity-75" />
// //                         <div className="relative w-14 h-14 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg">
// //                           <Sparkles className="w-7 h-7 text-white" />
// //                         </div>
// //                       </div>
// //                       <div>
// //                         <h2 className="text-2xl font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
// //                           {activeTab === "text" ? "Script Analysis" : "Deck Intelligence"}
// //                         </h2>
// //                         <p className="text-sm text-slate-500 font-medium">
// //                           {activeTab === "text" ? "Neural language processing" : "Visual content extraction"}
// //                         </p>
// //                       </div>
// //                     </div>

// //                     {/* LIVE STATUS INDICATOR */}
// //                     <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
// //                       <span className="relative flex h-2 w-2">
// //                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
// //                         <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
// //                       </span>
// //                       <span className="text-xs font-bold text-emerald-400">LIVE</span>
// //                     </div>
// //                   </div>

// //                   {/* FORM CONTENT */}
// //                   <AnimatePresence mode="wait">
// //                     <motion.div
// //                       key={activeTab}
// //                       initial={{ opacity: 0, x: 20 }}
// //                       animate={{ opacity: 1, x: 0 }}
// //                       exit={{ opacity: 0, x: -20 }}
// //                       transition={{ duration: 0.4 }}
// //                     >
// //                       {activeTab === "text" ? (
// //                         <TextEvaluationForm onResult={setResultData} />
// //                       ) : (
// //                         <PdfUploadForm onResult={setResultData} />
// //                       )}
// //                     </motion.div>
// //                   </AnimatePresence>
// //                 </div>

// //                 {/* SHIMMER EFFECT */}
// //                 <motion.div
// //                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
// //                   initial={{ x: "-100%" }}
// //                   animate={{ x: "100%" }}
// //                   transition={{
// //                     duration: 2,
// //                     repeat: Infinity,
// //                     repeatDelay: 3,
// //                     ease: "easeInOut",
// //                   }}
// //                 />
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>

// //         {/* RESULTS SECTION */}
// //         <AnimatePresence>
// //           {resultData && (
// //             <motion.div
// //               initial={{ opacity: 0, y: 60 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: 60 }}
// //               transition={{ duration: 0.8, ease: "easeOut" }}
// //               className="mt-20"
// //             >
// //               {/* SECTION DIVIDER */}
// //               <div className="flex items-center gap-6 mb-12">
// //                 <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
// //                 <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 backdrop-blur-sm">
// //                   <TrendingUp className="w-4 h-4 text-violet-400" />
// //                   <span className="text-sm font-black uppercase tracking-[0.2em] bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
// //                     Evaluation Results
// //                   </span>
// //                 </div>
// //                 <div className="h-px flex-1 bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />
// //               </div>

// //               <EvaluationOverview data={resultData} />
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
// import { FileText, UploadCloud, ShieldCheck, Sparkles, Activity, Zap, Brain, Cpu, TrendingUp, Target, Lock } from "lucide-react";
// import TextEvaluationForm from "../components/evaluation/TextEvaluationForm";
// import PdfUploadForm from "../components/evaluation/PdfUploadForm";
// import EvaluationOverview from "../components/evaluation/EvaluationOverview";

// export default function Evaluate() {
//   const [activeTab, setActiveTab] = useState("text");
//   const [resultData, setResultData] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
  
//   const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
//   const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const rect = document.body.getBoundingClientRect();
//       const x = e.clientX - rect.width / 2;
//       const y = e.clientY - rect.height / 2;
//       setMousePosition({ x, y });
//       mouseX.set(x);
//       mouseY.set(y);
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [mouseX, mouseY]);

//   const statusMetrics = [
//     { 
//       icon: <Brain className="w-5 h-5" />, 
//       label: "Neural Engine", 
//       value: "GPT-4 Turbo",
//       gradient: "from-violet-500 to-purple-500",
//       glow: "rgba(139, 92, 246, 0.3)"
//     },
//     { 
//       icon: <Activity className="w-5 h-5" />, 
//       label: "Accuracy Rate", 
//       value: "99.2%",
//       gradient: "from-emerald-500 to-teal-500",
//       glow: "rgba(16, 185, 129, 0.3)"
//     },
//     { 
//       icon: <Zap className="w-5 h-5" />, 
//       label: "Processing", 
//       value: "<2.4s",
//       gradient: "from-amber-500 to-orange-500",
//       glow: "rgba(245, 158, 11, 0.3)"
//     },
//     { 
//       icon: <Lock className="w-5 h-5" />, 
//       label: "Security", 
//       value: "AES-256",
//       gradient: "from-blue-500 to-cyan-500",
//       glow: "rgba(59, 130, 246, 0.3)"
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-28 pb-20 px-6 relative overflow-hidden">
//       {/* ANIMATED GRID BACKGROUND */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Base grid pattern */}
//         <div className="absolute inset-0" style={{
//           backgroundImage: `
//             linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
//           `,
//           backgroundSize: '60px 60px'
//         }} />
        
//         {/* Animated grid lines - horizontal */}
//         {[...Array(4)].map((_, i) => (
//           <motion.div
//             key={`h-${i}`}
//             className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"
//             style={{ top: `${25 + i * 25}%` }}
//             animate={{
//               opacity: [0.2, 0.5, 0.2],
//               scaleX: [0.8, 1, 0.8],
//             }}
//             transition={{
//               duration: 3 + i * 0.4,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: i * 0.3,
//             }}
//           />
//         ))}
        
//         {/* Animated grid lines - vertical */}
//         {[...Array(4)].map((_, i) => (
//           <motion.div
//             key={`v-${i}`}
//             className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-fuchsia-500/30 to-transparent"
//             style={{ left: `${25 + i * 25}%` }}
//             animate={{
//               opacity: [0.2, 0.5, 0.2],
//               scaleY: [0.8, 1, 0.8],
//             }}
//             transition={{
//               duration: 3 + i * 0.4,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: i * 0.4,
//             }}
//           />
//         ))}

//         {/* Subtle gradient accents */}
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[140px]" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/8 rounded-full blur-[140px]" />
//         <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-cyan-500/8 rounded-full blur-[120px]" />
        
//         {/* Diagonal scanline */}
//         <motion.div
//           className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent"
//           animate={{
//             top: ["0%", "100%"],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       </div>

//       {/* FLOATING PARTICLES */}
//       {[...Array(15)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 bg-violet-400 rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, -30, 0],
//             opacity: [0, 0.8, 0],
//             scale: [0, 1.5, 0],
//           }}
//           transition={{
//             duration: 3 + Math.random() * 2,
//             repeat: Infinity,
//             delay: Math.random() * 2,
//           }}
//         />
//       ))}

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* HEADER SECTION */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           {/* STATUS BADGE */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 backdrop-blur-sm mb-6"
//           >
//             <span className="relative flex h-2.5 w-2.5">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-violet-400 to-fuchsia-400"></span>
//             </span>
//             <span className="text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
//               Analysis Engine Online
//             </span>
//             <Sparkles className="w-4 h-4 text-violet-400" />
//           </motion.div>

//           <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
//             <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
//               Pitch Intelligence
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
//               Evaluation Suite
//             </span>
//           </h1>
          
//           <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
//             Upload your pitch deck or paste your presentation script to receive{" "}
//             <span className="text-violet-300 font-semibold">institutional-grade analytics</span> and
//             comprehensive scoring in seconds.
//           </p>
//         </motion.div>

//         {/* METRICS BAR */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
//         >
//           {statusMetrics.map((metric, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="relative group"
//             >
//               {/* GLOW EFFECT */}
//               <div
//                 className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"
//                 style={{
//                   background: `linear-gradient(135deg, ${metric.glow}, transparent)`,
//                 }}
//               />
              
//               {/* CARD */}
//               <div className="relative p-5 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10">
//                 <div className="flex items-center gap-4">
//                   <div className={`w-12 h-12 bg-gradient-to-br ${metric.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
//                     <div className="text-white">{metric.icon}</div>
//                   </div>
//                   <div>
//                     <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
//                       {metric.label}
//                     </p>
//                     <p className="text-sm font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
//                       {metric.value}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <div className="grid lg:grid-cols-12 gap-8">
//           {/* LEFT SIDEBAR - INPUT METHOD SELECTOR */}
//           <div className="lg:col-span-4 space-y-6">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               {/* MODE SELECTOR */}
//               <div className="relative">
//                 {/* GLOW */}
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 rounded-3xl blur-xl opacity-50" />
                
//                 <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 p-2">
//                   <div className="space-y-2">
//                     <motion.button
//                       onClick={() => setActiveTab("text")}
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all ${
//                         activeTab === "text"
//                           ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30"
//                           : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
//                       }`}
//                     >
//                       <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
//                         activeTab === "text" 
//                           ? "bg-white/20" 
//                           : "bg-white/5"
//                       }`}>
//                         <FileText className="w-6 h-6" />
//                       </div>
//                       <div className="flex-1 text-left">
//                         <div className="font-bold text-sm">Text Input</div>
//                         <div className={`text-xs ${activeTab === "text" ? "text-white/70" : "text-slate-500"}`}>
//                           Paste your pitch script
//                         </div>
//                       </div>
//                       {activeTab === "text" && (
//                         <motion.div
//                           layoutId="activeIndicator"
//                           className="w-2 h-2 rounded-full bg-white"
//                         />
//                       )}
//                     </motion.button>

//                     <motion.button
//                       onClick={() => setActiveTab("pdf")}
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all ${
//                         activeTab === "pdf"
//                           ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30"
//                           : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
//                       }`}
//                     >
//                       <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
//                         activeTab === "pdf" 
//                           ? "bg-white/20" 
//                           : "bg-white/5"
//                       }`}>
//                         <UploadCloud className="w-6 h-6" />
//                       </div>
//                       <div className="flex-1 text-left">
//                         <div className="font-bold text-sm">PDF Upload</div>
//                         <div className={`text-xs ${activeTab === "pdf" ? "text-white/70" : "text-slate-500"}`}>
//                           Upload pitch deck
//                         </div>
//                       </div>
//                       {activeTab === "pdf" && (
//                         <motion.div
//                           layoutId="activeIndicator"
//                           className="w-2 h-2 rounded-full bg-white"
//                         />
//                       )}
//                     </motion.button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* INFO CARDS */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               className="space-y-4"
//             >
//               <div className="relative group">
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all" />
//                 <div className="relative p-5 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm rounded-2xl border border-white/10">
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-lg flex items-center justify-center border border-white/10">
//                       <Cpu className="w-5 h-5 text-violet-400" />
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="text-sm font-bold text-white mb-1">AI Processing</h4>
//                       <p className="text-xs text-slate-400 leading-relaxed">
//                         Advanced NLP with multi-dimensional scoring matrix
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative group">
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all" />
//                 <div className="relative p-5 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm rounded-2xl border border-white/10">
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center border border-white/10">
//                       <Target className="w-5 h-5 text-emerald-400" />
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="text-sm font-bold text-white mb-1">Instant Results</h4>
//                       <p className="text-xs text-slate-400 leading-relaxed">
//                         Comprehensive evaluation with actionable insights
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative group">
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all" />
//                 <div className="relative p-5 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm rounded-2xl border border-white/10">
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-white/10">
//                       <ShieldCheck className="w-5 h-5 text-blue-400" />
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="text-sm font-bold text-white mb-1">Secure & Private</h4>
//                       <p className="text-xs text-slate-400 leading-relaxed">
//                         Enterprise-grade encryption and data protection
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* MAIN CONTENT - EVALUATION FORM */}
//           <div className="lg:col-span-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               style={{
//                 rotateX,
//                 rotateY,
//                 transformStyle: "preserve-3d",
//               }}
//               className="relative group"
//             >
//               {/* HOLOGRAPHIC GLOW */}
//               <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500" />
              
//               {/* MAIN CARD */}
//               <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
//                 {/* ANIMATED SCAN LINE */}
//                 <motion.div 
//                   animate={{ 
//                     top: ["0%", "100%"],
//                   }}
//                   transition={{ 
//                     duration: 3, 
//                     repeat: Infinity, 
//                     ease: "linear",
//                     repeatDelay: 1 
//                   }}
//                   className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-50 z-0 pointer-events-none"
//                 />

//                 {/* CORNER ACCENTS */}
//                 <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-violet-500/10 to-transparent rounded-br-full" />
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-fuchsia-500/10 to-transparent rounded-bl-full" />
//                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full" />
//                 <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-full" />

//                 <div className="relative z-10 p-10">
//                   {/* HEADER */}
//                   <div className="flex items-center justify-between mb-8">
//                     <div className="flex items-center gap-4">
//                       <div className="relative">
//                         <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl blur-md opacity-75" />
//                         <div className="relative w-14 h-14 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg">
//                           <Sparkles className="w-7 h-7 text-white" />
//                         </div>
//                       </div>
//                       <div>
//                         <h2 className="text-2xl font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
//                           {activeTab === "text" ? "Script Analysis" : "Deck Intelligence"}
//                         </h2>
//                         <p className="text-sm text-slate-500 font-medium">
//                           {activeTab === "text" ? "Neural language processing" : "Visual content extraction"}
//                         </p>
//                       </div>
//                     </div>

//                     {/* LIVE STATUS INDICATOR */}
//                     <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
//                       <span className="relative flex h-2 w-2">
//                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                         <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
//                       </span>
//                       <span className="text-xs font-bold text-emerald-400">LIVE</span>
//                     </div>
//                   </div>

//                   {/* FORM CONTENT */}
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={activeTab}
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -20 }}
//                       transition={{ duration: 0.4 }}
//                     >
//                       {activeTab === "text" ? (
//                         <TextEvaluationForm onResult={setResultData} />
//                       ) : (
//                         <PdfUploadForm onResult={setResultData} />
//                       )}
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>

//                 {/* SHIMMER EFFECT */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
//                   initial={{ x: "-100%" }}
//                   animate={{ x: "100%" }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     repeatDelay: 3,
//                     ease: "easeInOut",
//                   }}
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* RESULTS SECTION */}
//         <AnimatePresence>
//           {resultData && (
//             <motion.div
//               initial={{ opacity: 0, y: 60 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 60 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="mt-20"
//             >
//               {/* SECTION DIVIDER */}
//               <div className="flex items-center gap-6 mb-12">
//                 <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
//                 <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 backdrop-blur-sm">
//                   <TrendingUp className="w-4 h-4 text-violet-400" />
//                   <span className="text-sm font-black uppercase tracking-[0.2em] bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
//                     Evaluation Results
//                   </span>
//                 </div>
//                 <div className="h-px flex-1 bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />
//               </div>

//               <EvaluationOverview data={resultData} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, UploadCloud, ShieldCheck, Activity, Zap, Brain, Cpu, TrendingUp, Target, Lock } from "lucide-react";
import TextEvaluationForm from "../components/evaluation/TextEvaluationForm";
import PdfUploadForm from "../components/evaluation/PdfUploadForm";
import EvaluationOverview from "../components/evaluation/EvaluationOverview";

export default function Evaluate() {
  const [activeTab, setActiveTab] = useState("text");
  const [resultData, setResultData] = useState(null);

  const statusMetrics = [
    { 
      icon: <Brain className="w-5 h-5" />, 
      label: "Neural Engine", 
      value: "LLM Model",
      color: "#6D28D9"
    },
    { 
      icon: <Activity className="w-5 h-5" />, 
      label: "Accuracy Rate", 
      value: "92.7%",
      color: "#14B8A6"
    },
    { 
      icon: <Zap className="w-5 h-5" />, 
      label: "Processing", 
      value: "10s",
      color: "#6D28D9"
    },
    { 
      icon: <Lock className="w-5 h-5" />, 
      label: "Security", 
      value: "AAA",
      color: "#14B8A6"
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {/* STATUS BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C4B5FD]/20 border border-[#C4B5FD]/30 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#6D28D9]">
              Analysis Engine Online
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-[#0F172A] mb-4 tracking-tight">
            Pitch Intelligence
            <br />
            <span className="text-[#6D28D9]">Evaluation Suite</span>
          </h1>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Upload your pitch deck or paste your presentation script to receive{" "}
            <span className="text-[#6D28D9] font-semibold">institutional-grade analytics</span> and
            comprehensive scoring in seconds.
          </p>
        </motion.div>

        {/* METRICS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {statusMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              className="p-5 bg-white rounded-2xl border-2 border-slate-200 hover:border-[#6D28D9] hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${metric.color}15` }}
                >
                  <div style={{ color: metric.color }}>{metric.icon}</div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    {metric.label}
                  </p>
                  <p className="text-sm font-black text-[#0F172A]">
                    {metric.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT SIDEBAR - INPUT METHOD SELECTOR */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* MODE SELECTOR */}
              <div className="bg-white rounded-3xl border-2 border-slate-200 p-3 shadow-lg">
                <div className="space-y-3">
                  <button
                    onClick={() => setActiveTab("text")}
                    className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 ${
                      activeTab === "text"
                        ? "bg-[#6D28D9] text-white shadow-xl shadow-purple-500/25"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeTab === "text" 
                        ? "bg-white/20" 
                        : "bg-white"
                    }`}>
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-bold text-sm">Text Input</div>
                      <div className={`text-xs ${activeTab === "text" ? "text-white/80" : "text-slate-500"}`}>
                        Paste your pitch script
                      </div>
                    </div>
                    {activeTab === "text" && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </button>

                  <button
                    onClick={() => setActiveTab("pdf")}
                    className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 ${
                      activeTab === "pdf"
                        ? "bg-[#6D28D9] text-white shadow-xl shadow-purple-500/25"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeTab === "pdf" 
                        ? "bg-white/20" 
                        : "bg-white"
                    }`}>
                      <UploadCloud className="w-6 h-6" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-bold text-sm">PDF Upload</div>
                      <div className={`text-xs ${activeTab === "pdf" ? "text-white/80" : "text-slate-500"}`}>
                        Upload pitch deck
                      </div>
                    </div>
                    {activeTab === "pdf" && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* INFO CARDS */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="p-5 bg-white rounded-2xl border-2 border-slate-200 hover:border-[#6D28D9] hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C4B5FD]/20 rounded-lg flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-[#6D28D9]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[#0F172A] mb-1">AI Processing</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Advanced NLP with multi-dimensional scoring matrix
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border-2 border-slate-200 hover:border-[#14B8A6] hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#14B8A6]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[#0F172A] mb-1">Instant Results</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Comprehensive evaluation with actionable insights
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border-2 border-slate-200 hover:border-[#6D28D9] hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C4B5FD]/20 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#6D28D9]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-[#0F172A] mb-1">Secure & Private</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Enterprise-grade encryption and data protection
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* MAIN CONTENT - EVALUATION FORM */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-[2.5rem] border-2 border-slate-200 shadow-xl overflow-hidden"
            >
              <div className="p-10">
                {/* HEADER */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <Brain className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-[#0F172A]">
                        {activeTab === "text" ? "Script Analysis" : "Deck Intelligence"}
                      </h2>
                      <p className="text-sm text-slate-500 font-medium">
                        {activeTab === "text" ? "Neural language processing" : "Visual content extraction"}
                      </p>
                    </div>
                  </div>

                  {/* LIVE STATUS INDICATOR */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/30">
                    <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />
                    <span className="text-xs font-bold text-[#14B8A6]">LIVE</span>
                  </div>
                </div>

                {/* FORM CONTENT */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === "text" ? (
                      <TextEvaluationForm onResult={setResultData} />
                    ) : (
                      <PdfUploadForm onResult={setResultData} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RESULTS SECTION */}
        <AnimatePresence>
          {resultData && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5 }}
              className="mt-16"
            >
              {/* SECTION DIVIDER */}
              <div className="flex items-center gap-6 mb-12">
                <div className="h-px flex-1 bg-slate-200" />
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#C4B5FD]/20 border border-[#C4B5FD]/30">
                  <TrendingUp className="w-4 h-4 text-[#6D28D9]" />
                  <span className="text-sm font-black uppercase tracking-wider text-[#6D28D9]">
                    Evaluation Results
                  </span>
                </div>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <EvaluationOverview data={resultData} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}