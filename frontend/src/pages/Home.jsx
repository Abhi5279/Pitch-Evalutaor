
// // // // import { motion } from "framer-motion";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { ArrowRight, BarChart3, Layers, Zap, ShieldCheck } from "lucide-react"; // Assuming lucide-react is installed

// // // // export default function Home() {
// // // //   const navigate = useNavigate();

// // // //   const features = [
// // // //     {
// // // //       title: "Evaluate Pitch",
// // // //       description: "AI-powered structured scoring with investor-grade analytics.",
// // // //       route: "/evaluate",
// // // //       icon: <Zap className="w-6 h-6 text-[#10B981]" />,
// // // //       delay: 0.4,
// // // //     },
// // // //     {
// // // //       title: "My Evaluations",
// // // //       description: "View previously evaluated pitches with detailed analytics.",
// // // //       route: "/evaluations",
// // // //       icon: <BarChart3 className="w-6 h-6 text-[#4F46E5]" />,
// // // //       delay: 0.5,
// // // //     },
// // // //     {
// // // //       title: "Selected Projects",
// // // //       description: "Manage shortlisted high-potential startup opportunities.",
// // // //       route: "/my-projects",
// // // //       icon: <ShieldCheck className="w-6 h-6 text-[#10B981]" />,
// // // //       delay: 0.6,
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <div className="min-h-screen bg-[#F9FAFB] overflow-hidden relative">
// // // //       {/* HIGH-TECH BACKGROUND ELEMENTS */}
// // // //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.08)_0%,_transparent_70%)] pointer-events-none" />
// // // //       <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#4F46E5] opacity-[0.03] blur-[120px] rounded-full" />
// // // //       <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-[#10B981] opacity-[0.03] blur-[120px] rounded-full" />

// // // //       {/* HERO SECTION */}
// // // //       <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.5 }}
// // // //           className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-8"
// // // //         >
// // // //           <span className="relative flex h-2 w-2">
// // // //             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
// // // //             <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
// // // //           </span>
// // // //           <span className="text-xs font-bold tracking-widest uppercase text-indigo-600">V2.0 Pitch Intelligence</span>
// // // //         </motion.div>

// // // //         <motion.h1
// // // //           initial={{ opacity: 0, y: 30 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.8, ease: "easeOut" }}
// // // //           className="text-6xl md:text-7xl font-extrabold text-[#111827] tracking-tight leading-[1.1]"
// // // //         >
// // // //           Precision Scoring for <br />
// // // //           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#10B981]">
// // // //             Next-Gen Startups
// // // //           </span>
// // // //         </motion.h1>

// // // //         <motion.p
// // // //           initial={{ opacity: 0, y: 30 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.8, delay: 0.2 }}
// // // //           className="mt-8 text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
// // // //         >
// // // //           Leverage our advanced evaluation engine to transform raw pitches into 
// // // //           structured data, risk profiles, and investor-ready insights.
// // // //         </motion.p>

// // // //         <motion.div
// // // //           initial={{ opacity: 0, scale: 0.9 }}
// // // //           animate={{ opacity: 1, scale: 1 }}
// // // //           transition={{ duration: 0.5, delay: 0.4 }}
// // // //           className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
// // // //         >
// // // //           <button
// // // //             onClick={() => navigate("/evaluate")}
// // // //             className="group relative px-8 py-4 bg-[#111827] text-white rounded-2xl font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-200"
// // // //           >
// // // //             <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5] to-[#10B981] opacity-0 group-hover:opacity-10 transition-opacity" />
// // // //             <span className="flex items-center gap-2">
// // // //               Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// // // //             </span>
// // // //           </button>
          
// // // //           <button className="px-8 py-4 bg-white text-slate-600 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 transition-colors">
// // // //             View Demo
// // // //           </button>
// // // //         </motion.div>
// // // //       </div>

// // // //       {/* FEATURE CARDS SECTION */}
// // // //       <div className="max-w-7xl mx-auto px-6 pb-32">
// // // //         <div className="grid md:grid-cols-3 gap-6">
// // // //           {features.map((feature, index) => (
// // // //             <motion.div
// // // //               key={index}
// // // //               initial={{ opacity: 0, y: 40 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.7, delay: feature.delay }}
// // // //               whileHover={{ y: -10 }}
// // // //               onClick={() => navigate(feature.route)}
// // // //               className="group cursor-pointer relative p-8 bg-white rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-10px_rgba(79,70,229,0.1)] transition-all overflow-hidden"
// // // //             >
// // // //               {/* Card Hover Glow */}
// // // //               <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-50 rounded-full blur-3xl group-hover:bg-indigo-100 transition-colors" />
              
// // // //               <div className="relative z-10">
// // // //                 <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform duration-500">
// // // //                   {feature.icon}
// // // //                 </div>
                
// // // //                 <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#4F46E5] transition-colors">
// // // //                   {feature.title}
// // // //                 </h3>
                
// // // //                 <p className="text-slate-500 leading-relaxed text-sm md:text-base">
// // // //                   {feature.description}
// // // //                 </p>

// // // //                 <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-[#4F46E5] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
// // // //                   Launch Module <ArrowRight className="ml-2 w-3 h-3" />
// // // //                 </div>
// // // //               </div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import { motion } from "framer-motion";
// // // import { useNavigate } from "react-router-dom";
// // // import { ArrowRight, BarChart3, Zap, ShieldCheck } from "lucide-react";

// // // export default function Home() {
// // //   const navigate = useNavigate();

// // //   const features = [
// // //     {
// // //       title: "Evaluate Pitch",
// // //       description: "AI-powered structured scoring with investor-grade analytics.",
// // //       route: "/evaluate",
// // //       icon: <Zap className="w-6 h-6 text-[#10B981]" />,
// // //       delay: 0.4,
// // //     },
// // //     {
// // //       title: "My Evaluations",
// // //       description: "View previously evaluated pitches with detailed analytics.",
// // //       route: "/evaluations",
// // //       icon: <BarChart3 className="w-6 h-6 text-[#4F46E5]" />,
// // //       delay: 0.5,
// // //     },
// // //     {
// // //       title: "Selected Projects",
// // //       description: "Manage shortlisted high-potential startup opportunities.",
// // //       route: "/my-projects",
// // //       icon: <ShieldCheck className="w-6 h-6 text-[#10B981]" />,
// // //       delay: 0.6,
// // //     },
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-[#F9FAFB] flex flex-col overflow-hidden relative">
// // //       <div className="flex-grow">
// // //         {/* HIGH-TECH BACKGROUND ELEMENTS */}
// // //         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.08)_0%,_transparent_70%)] pointer-events-none" />
// // //         <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#4F46E5] opacity-[0.03] blur-[120px] rounded-full" />
// // //         <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-[#10B981] opacity-[0.03] blur-[120px] rounded-full" />

// // //         {/* HERO SECTION */}
// // //         <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5 }}
// // //             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-8"
// // //           >
// // //             <span className="relative flex h-2 w-2">
// // //               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
// // //               <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
// // //             </span>
// // //             <span className="text-xs font-bold tracking-widest uppercase text-indigo-600">V2.0 Pitch Intelligence</span>
// // //           </motion.div>

// // //           <motion.h1
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, ease: "easeOut" }}
// // //             className="text-6xl md:text-7xl font-extrabold text-[#111827] tracking-tight leading-[1.1]"
// // //           >
// // //             Precision Scoring for <br />
// // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#10B981]">
// // //               Next-Gen Startups
// // //             </span>
// // //           </motion.h1>

// // //           <motion.p
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.2 }}
// // //             className="mt-8 text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
// // //           >
// // //             Leverage our advanced evaluation engine to transform raw pitches into 
// // //             structured data, risk profiles, and investor-ready insights.
// // //           </motion.p>

// // //           <motion.div
// // //             initial={{ opacity: 0, scale: 0.9 }}
// // //             animate={{ opacity: 1, scale: 1 }}
// // //             transition={{ duration: 0.5, delay: 0.4 }}
// // //             className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
// // //           >
// // //             <button
// // //               onClick={() => navigate("/evaluate")}
// // //               className="group relative px-8 py-4 bg-[#111827] text-white rounded-2xl font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-200"
// // //             >
// // //               <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5] to-[#10B981] opacity-0 group-hover:opacity-10 transition-opacity" />
// // //               <span className="flex items-center gap-2">
// // //                 Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// // //               </span>
// // //             </button>
            
// // //             <button className="px-8 py-4 bg-white text-slate-600 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 transition-colors">
// // //               View Demo
// // //             </button>
// // //           </motion.div>
// // //         </div>

// // //         {/* FEATURE CARDS SECTION */}
// // //         <div className="max-w-7xl mx-auto px-6 pb-32">
// // //           <div className="grid md:grid-cols-3 gap-6">
// // //             {features.map((feature, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 initial={{ opacity: 0, y: 40 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.7, delay: feature.delay }}
// // //                 whileHover={{ y: -10 }}
// // //                 onClick={() => navigate(feature.route)}
// // //                 className="group cursor-pointer relative p-8 bg-white rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-10px_rgba(79,70,229,0.1)] transition-all overflow-hidden"
// // //               >
// // //                 <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-50 rounded-full blur-3xl group-hover:bg-indigo-100 transition-colors" />
                
// // //                 <div className="relative z-10">
// // //                   <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform duration-500">
// // //                     {feature.icon}
// // //                   </div>
                  
// // //                   <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#4F46E5] transition-colors">
// // //                     {feature.title}
// // //                   </h3>
                  
// // //                   <p className="text-slate-500 leading-relaxed text-sm md:text-base">
// // //                     {feature.description}
// // //                   </p>

// // //                   <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-[#4F46E5] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
// // //                     Launch Module <ArrowRight className="ml-2 w-3 h-3" />
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* 4. FOOTER (Hackathon Customization) */}
// // //       <footer className="bg-white border-t border-slate-100 pt-16 pb-10 relative z-10">
// // //         <div className="max-w-7xl mx-auto px-6">
// // //           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
// // //             <div className="space-y-4 text-center md:text-left">
// // //               <div className="flex items-center justify-center md:justify-start gap-2">
// // //                 <div className="w-7 h-7 bg-indigo-600 rounded flex items-center justify-center text-white font-black text-lg">P</div>
// // //                 <span className="font-black text-xl tracking-tighter text-[#111827]">PitchAI</span>
// // //               </div>
// // //               <p className="text-slate-400 text-sm font-medium max-w-xs">
// // //                 Next-gen venture auditing platform. Built for founders and investors.
// // //               </p>
// // //             </div>
            
// // //             <div className="flex flex-col md:items-end gap-3">
// // //                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#111827]">Hackathon Build By (KARE University)</h4>
// // //                <div className="flex flex-wrap md:justify-end gap-2">
// // //                  {['99230040701', '40078', '40651', '40689'].map((id) => (
// // //                    <span key={id} className="bg-slate-50 border border-slate-200 px-3 py-1 rounded-md text-[10px] font-bold text-slate-500 shadow-sm">
// // //                      {id}
// // //                    </span>
// // //                  ))}
// // //                </div>
// // //                <p className="text-slate-300 text-[10px] font-black uppercase tracking-widest mt-2">© 2026 PitchAI Systems Inc.</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </footer>
// // //     </div>
// // //   );
// // // }

// // import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// // import { useNavigate } from "react-router-dom";
// // import { ArrowRight, BarChart3, Zap, ShieldCheck, Sparkles, TrendingUp, Target, Brain } from "lucide-react";
// // import { useEffect, useState } from "react";

// // export default function Home() {
// //   const navigate = useNavigate();
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// //   const { scrollYProgress } = useScroll();
  
// //   const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
// //   const opacityProgress = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  
// //   const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
// //   const x = useSpring(mousePosition.x, springConfig);
// //   const y = useSpring(mousePosition.y, springConfig);

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       setMousePosition({
// //         x: (e.clientX - window.innerWidth / 2) / 50,
// //         y: (e.clientY - window.innerHeight / 2) / 50,
// //       });
// //     };
// //     window.addEventListener("mousemove", handleMouseMove);
// //     return () => window.removeEventListener("mousemove", handleMouseMove);
// //   }, []);

// //   const features = [
// //     {
// //       title: "AI Pitch Evaluation",
// //       description: "Advanced neural scoring with institutional-grade analytics and real-time market validation.",
// //       route: "/evaluate",
// //       icon: <Brain className="w-7 h-7" />,
// //       gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
// //       glowColor: "rgba(139, 92, 246, 0.4)",
// //       delay: 0.2,
// //     },
// //     {
// //       title: "Analytics Dashboard",
// //       description: "Comprehensive evaluation history with predictive insights and performance benchmarking.",
// //       route: "/evaluations",
// //       icon: <TrendingUp className="w-7 h-7" />,
// //       gradient: "from-cyan-500 via-blue-500 to-indigo-500",
// //       glowColor: "rgba(59, 130, 246, 0.4)",
// //       delay: 0.3,
// //     },
// //     {
// //       title: "Portfolio Manager",
// //       description: "Curated deal flow management with automated tracking and strategic opportunity mapping.",
// //       route: "/my-projects",
// //       icon: <Target className="w-7 h-7" />,
// //       gradient: "from-emerald-500 via-teal-500 to-cyan-500",
// //       glowColor: "rgba(16, 185, 129, 0.4)",
// //       delay: 0.4,
// //     },
// //   ];

// //   const stats = [
// //     { value: "98.7%", label: "Accuracy Rate", icon: <Sparkles className="w-4 h-4" /> },
// //     { value: "10K+", label: "Pitches Analyzed", icon: <BarChart3 className="w-4 h-4" /> },
// //     { value: "2.4s", label: "Avg Processing", icon: <Zap className="w-4 h-4" /> },
// //     { value: "AAA", label: "Security Grade", icon: <ShieldCheck className="w-4 h-4" /> },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden relative">
// //       {/* ANIMATED GRADIENT MESH BACKGROUND */}
// //       <div className="absolute inset-0 overflow-hidden">
// //         <motion.div
// //           style={{ x, y }}
// //           className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-violet-500/20 rounded-full blur-[128px]"
// //           animate={{
// //             scale: [1, 1.2, 1],
// //             opacity: [0.3, 0.2, 0.3],
// //           }}
// //           transition={{
// //             duration: 8,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //         />
// //         <motion.div
// //           style={{ x: useTransform(x, (val) => -val), y: useTransform(y, (val) => -val) }}
// //           className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-[128px]"
// //           animate={{
// //             scale: [1, 1.3, 1],
// //             opacity: [0.2, 0.3, 0.2],
// //           }}
// //           transition={{
// //             duration: 10,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //         />
// //         <motion.div
// //           className="absolute bottom-0 left-1/2 w-[700px] h-[700px] bg-cyan-500/15 rounded-full blur-[128px]"
// //           animate={{
// //             scale: [1, 1.1, 1],
// //             opacity: [0.2, 0.25, 0.2],
// //           }}
// //           transition={{
// //             duration: 12,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //         />
        
// //         {/* GRID OVERLAY */}
// //         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
// //       </div>

// //       {/* FLOATING PARTICLES */}
// //       {[...Array(20)].map((_, i) => (
// //         <motion.div
// //           key={i}
// //           className="absolute w-1 h-1 bg-white rounded-full"
// //           style={{
// //             left: `${Math.random() * 100}%`,
// //             top: `${Math.random() * 100}%`,
// //           }}
// //           animate={{
// //             y: [0, -30, 0],
// //             opacity: [0, 1, 0],
// //             scale: [0, 1, 0],
// //           }}
// //           transition={{
// //             duration: 3 + Math.random() * 2,
// //             repeat: Infinity,
// //             delay: Math.random() * 2,
// //           }}
// //         />
// //       ))}

// //       <div className="relative z-10">
       

// //         {/* HERO SECTION */}
// //         <motion.div
// //           style={{ scale: scaleProgress, opacity: opacityProgress }}
// //           className="relative max-w-7xl mx-auto px-6 pt-40 pb-32 text-center"
// //         >
// //           {/* STATUS BADGE */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 backdrop-blur-sm mb-8 group cursor-pointer"
// //             whileHover={{ scale: 1.05 }}
// //           >
// //             <span className="relative flex h-2.5 w-2.5">
// //               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
// //               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-violet-400 to-fuchsia-400"></span>
// //             </span>
// //             <span className="text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
// //               Neural Scoring Engine Active
// //             </span>
// //             <Sparkles className="w-3.5 h-3.5 text-violet-400 group-hover:rotate-180 transition-transform duration-500" />
// //           </motion.div>

// //           {/* MAIN HEADING */}
// //           <motion.h1
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.1 }}
// //             className="text-7xl md:text-8xl font-black tracking-tight leading-[1.05] mb-8"
// //           >
// //             <span className="inline-block bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
// //               Enterprise-Grade
// //             </span>
// //             <br />
// //             <span className="inline-block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
// //               Venture Intelligence
// //             </span>
// //           </motion.h1>

// //           {/* SUBTITLE */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             className="mt-8 text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
// //           >
// //             Transform raw startup pitches into{" "}
// //             <span className="text-violet-300 font-semibold">institutional-grade analytics</span> with our
// //             proprietary AI scoring system. Built for VCs, by VCs.
// //           </motion.p>

// //           {/* CTA BUTTONS */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.6, delay: 0.3 }}
// //             className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
// //           >
// //             <motion.button
// //               onClick={() => navigate("/evaluate")}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="group relative px-10 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl font-bold text-lg overflow-hidden shadow-2xl shadow-violet-500/30"
// //             >
// //               <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity" />
// //               <motion.div
// //                 className="absolute inset-0 bg-white/20"
// //                 initial={{ x: "-100%" }}
// //                 whileHover={{ x: "100%" }}
// //                 transition={{ duration: 0.6 }}
// //               />
// //               <span className="relative flex items-center gap-3">
// //                 Start Evaluation
// //                 <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
// //               </span>
// //             </motion.button>

// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="group px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
// //             >
// //               <span className="flex items-center gap-3">
// //                 Watch Demo
// //                 <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
// //               </span>
// //             </motion.button>
// //           </motion.div>

// //           {/* STATS BAR */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 40 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.4 }}
// //             className="mt-20 inline-flex flex-wrap items-center justify-center gap-8 px-8 py-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
// //           >
// //             {stats.map((stat, index) => (
// //               <motion.div
// //                 key={index}
// //                 initial={{ opacity: 0, scale: 0.8 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
// //                 className="flex items-center gap-3 px-4"
// //               >
// //                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center">
// //                   {stat.icon}
// //                 </div>
// //                 <div className="text-left">
// //                   <div className="text-2xl font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
// //                     {stat.value}
// //                   </div>
// //                   <div className="text-xs text-slate-500 font-semibold">{stat.label}</div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </motion.div>

// //         {/* FEATURE CARDS SECTION */}
// //         <div className="relative max-w-7xl mx-auto px-6 pb-32">
// //           <motion.div
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8 }}
// //             className="text-center mb-16"
// //           >
// //             <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
// //               Core Intelligence Modules
// //             </h2>
// //             <p className="text-slate-400 text-lg">Integrated workflow for deal sourcing and evaluation</p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {features.map((feature, index) => (
// //               <motion.div
// //                 key={index}
// //                 initial={{ opacity: 0, y: 60 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.7, delay: feature.delay }}
// //                 whileHover={{ y: -12, scale: 1.02 }}
// //                 onClick={() => navigate(feature.route)}
// //                 className="group cursor-pointer relative"
// //               >
// //                 {/* GLOW EFFECT */}
// //                 <div
// //                   className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
// //                   style={{
// //                     background: `linear-gradient(135deg, ${feature.glowColor}, transparent)`,
// //                   }}
// //                 />

// //                 {/* CARD */}
// //                 <div className="relative p-8 h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
// //                   {/* GRADIENT ACCENT */}
// //                   <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />

// //                   <div className="relative z-10">
// //                     {/* ICON */}
// //                     <motion.div
// //                       whileHover={{ rotate: 360, scale: 1.1 }}
// //                       transition={{ duration: 0.6 }}
// //                       className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
// //                       style={{ boxShadow: `0 10px 40px -10px ${feature.glowColor}` }}
// //                     >
// //                       <div className="text-white">{feature.icon}</div>
// //                     </motion.div>

// //                     {/* CONTENT */}
// //                     <h3 className="text-2xl font-black mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text group-hover:text-transparent transition-all">
// //                       {feature.title}
// //                     </h3>

// //                     <p className="text-slate-400 leading-relaxed mb-6 text-sm">
// //                       {feature.description}
// //                     </p>

// //                     {/* HOVER CTA */}
// //                     <div className="flex items-center gap-2 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
// //                       <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
// //                         Launch Module
// //                       </span>
// //                       <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
// //                     </div>
// //                   </div>

// //                   {/* CARD SHIMMER */}
// //                   <motion.div
// //                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
// //                     initial={{ x: "-100%" }}
// //                     whileHover={{ x: "100%" }}
// //                     transition={{ duration: 0.8 }}
// //                   />
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* FOOTER */}
// //         <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-black/20 backdrop-blur-xl">
// //           <div className="max-w-7xl mx-auto px-6 py-16">
// //             <div className="flex flex-col md:flex-row justify-between items-center gap-12">
// //               {/* BRAND */}
// //               <div className="text-center md:text-left space-y-4">
// //                 <div className="flex items-center justify-center md:justify-start gap-3">
// //                   <div className="relative">
// //                     <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl blur-md opacity-75" />
// //                     <div className="relative w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-2xl">
// //                       <Sparkles className="w-6 h-6 text-white" />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <div className="font-black text-2xl tracking-tight text-white">PitchAI</div>
// //                     <div className="text-[10px] font-bold text-violet-400 tracking-wider">INTELLIGENCE v2.0</div>
// //                   </div>
// //                 </div>
// //                 <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
// //                   Enterprise venture intelligence platform. Powered by next-generation AI.
// //                 </p>
// //               </div>

// //               {/* HACKATHON INFO */}
// //               <div className="text-center md:text-right space-y-4">
// //                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 backdrop-blur-sm mb-2">
// //                   <Sparkles className="w-3.5 h-3.5 text-violet-400" />
// //                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-300">
// //                     Hackathon Project
// //                   </span>
// //                 </div>
// //                 <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
// //                   KARE University Team
// //                 </h4>
// //                 <div className="flex flex-wrap justify-center md:justify-end gap-2">
// //                   {['99230040701', '40078', '40651', '40689'].map((id) => (
// //                     <motion.span
// //                       key={id}
// //                       whileHover={{ scale: 1.05 }}
// //                       className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300 backdrop-blur-sm"
// //                     >
// //                       {id}
// //                     </motion.span>
// //                   ))}
// //                 </div>
// //                 <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mt-4">
// //                   © 2026 PitchAI Intelligence Inc.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </footer>
// //       </div>

// //       <style jsx>{`
// //         @keyframes gradient {
// //           0%, 100% { background-position: 0% 50%; }
// //           50% { background-position: 100% 50%; }
// //         }
// //         .animate-gradient {
// //           background-size: 200% 200%;
// //           animation: gradient 3s ease infinite;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight, BarChart3, Zap, ShieldCheck, Sparkles, TrendingUp, Target, Brain } from "lucide-react";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const navigate = useNavigate();
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const { scrollYProgress } = useScroll();
  
//   const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
//   const opacityProgress = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  
//   const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
//   const x = useSpring(mousePosition.x, springConfig);
//   const y = useSpring(mousePosition.y, springConfig);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX - window.innerWidth / 2) / 50,
//         y: (e.clientY - window.innerHeight / 2) / 50,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const features = [
//     {
//       title: "AI Pitch Evaluation",
//       description: "Advanced neural scoring with institutional-grade analytics and real-time market validation.",
//       route: "/evaluate",
//       icon: <Brain className="w-7 h-7" />,
//       gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
//       glowColor: "rgba(139, 92, 246, 0.4)",
//       delay: 0.2,
//     },
//     {
//       title: "Analytics Dashboard",
//       description: "Comprehensive evaluation history with predictive insights and performance benchmarking.",
//       route: "/evaluations",
//       icon: <TrendingUp className="w-7 h-7" />,
//       gradient: "from-cyan-500 via-blue-500 to-indigo-500",
//       glowColor: "rgba(59, 130, 246, 0.4)",
//       delay: 0.3,
//     },
//     {
//       title: "Portfolio Manager",
//       description: "Curated deal flow management with automated tracking and strategic opportunity mapping.",
//       route: "/my-projects",
//       icon: <Target className="w-7 h-7" />,
//       gradient: "from-emerald-500 via-teal-500 to-cyan-500",
//       glowColor: "rgba(16, 185, 129, 0.4)",
//       delay: 0.4,
//     },
//   ];

//   const stats = [
//     { value: "98.7%", label: "Accuracy Rate", icon: <Sparkles className="w-4 h-4" /> },
//     { value: "10K+", label: "Pitches Analyzed", icon: <BarChart3 className="w-4 h-4" /> },
//     { value: "2.4s", label: "Avg Processing", icon: <Zap className="w-4 h-4" /> },
//     { value: "AAA", label: "Security Grade", icon: <ShieldCheck className="w-4 h-4" /> },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden relative">
//       {/* ANIMATED GRID BACKGROUND */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Base grid pattern */}
//         <div className="absolute inset-0" style={{
//           backgroundImage: `
//             linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
//           `,
//           backgroundSize: '80px 80px'
//         }} />
        
//         {/* Animated grid lines */}
//         {[...Array(5)].map((_, i) => (
//           <motion.div
//             key={`h-${i}`}
//             className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"
//             style={{ top: `${20 + i * 20}%` }}
//             animate={{
//               opacity: [0.2, 0.5, 0.2],
//               scaleX: [0.8, 1, 0.8],
//             }}
//             transition={{
//               duration: 3 + i * 0.5,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: i * 0.2,
//             }}
//           />
//         ))}
        
//         {[...Array(5)].map((_, i) => (
//           <motion.div
//             key={`v-${i}`}
//             className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-fuchsia-500/30 to-transparent"
//             style={{ left: `${20 + i * 20}%` }}
//             animate={{
//               opacity: [0.2, 0.5, 0.2],
//               scaleY: [0.8, 1, 0.8],
//             }}
//             transition={{
//               duration: 3 + i * 0.5,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: i * 0.3,
//             }}
//           />
//         ))}

//         {/* Gradient accents at intersections */}
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-[120px]" />
//         <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[120px]" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px]" />
        
//         {/* Scanline effect */}
//         <motion.div
//           className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"
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
//       {[...Array(20)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 bg-white rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, -30, 0],
//             opacity: [0, 1, 0],
//             scale: [0, 1, 0],
//           }}
//           transition={{
//             duration: 3 + Math.random() * 2,
//             repeat: Infinity,
//             delay: Math.random() * 2,
//           }}
//         />
//       ))}

//       <div className="relative z-10">
       

//         {/* HERO SECTION */}
//         <motion.div
//           style={{ scale: scaleProgress, opacity: opacityProgress }}
//           className="relative max-w-7xl mx-auto px-6 pt-40 pb-32 text-center"
//         >
//           {/* STATUS BADGE */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 backdrop-blur-sm mb-8 group cursor-pointer"
//             whileHover={{ scale: 1.05 }}
//           >
//             <span className="relative flex h-2.5 w-2.5">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-violet-400 to-fuchsia-400"></span>
//             </span>
//             <span className="text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
//               Neural Scoring Engine Active
//             </span>
//             <Sparkles className="w-3.5 h-3.5 text-violet-400 group-hover:rotate-180 transition-transform duration-500" />
//           </motion.div>

//           {/* MAIN HEADING */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="text-7xl md:text-8xl font-black tracking-tight leading-[1.05] mb-8"
//           >
//             <span className="inline-block bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
//               Enterprise-Grade
//             </span>
//             <br />
//             <span className="inline-block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
//               Venture Intelligence
//             </span>
//           </motion.h1>

//           {/* SUBTITLE */}
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="mt-8 text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
//           >
//             Transform raw startup pitches into{" "}
//             <span className="text-violet-300 font-semibold">institutional-grade analytics</span> with our
//             proprietary AI scoring system. Built for VCs, by VCs.
//           </motion.p>

//           {/* CTA BUTTONS */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
//           >
//             <motion.button
//               onClick={() => navigate("/evaluate")}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="group relative px-10 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl font-bold text-lg overflow-hidden shadow-2xl shadow-violet-500/30"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity" />
//               <motion.div
//                 className="absolute inset-0 bg-white/20"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: "100%" }}
//                 transition={{ duration: 0.6 }}
//               />
//               <span className="relative flex items-center gap-3">
//                 Start Evaluation
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
//               </span>
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="group px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
//             >
//               <span className="flex items-center gap-3">
//                 Watch Demo
//                 <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//               </span>
//             </motion.button>
//           </motion.div>

//           {/* STATS BAR */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="mt-20 inline-flex flex-wrap items-center justify-center gap-8 px-8 py-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
//                 className="flex items-center gap-3 px-4"
//               >
//                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center">
//                   {stat.icon}
//                 </div>
//                 <div className="text-left">
//                   <div className="text-2xl font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
//                     {stat.value}
//                   </div>
//                   <div className="text-xs text-slate-500 font-semibold">{stat.label}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* FEATURE CARDS SECTION */}
//         <div className="relative max-w-7xl mx-auto px-6 pb-32">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
//               Core Intelligence Modules
//             </h2>
//             <p className="text-slate-400 text-lg">Integrated workflow for deal sourcing and evaluation</p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: feature.delay }}
//                 whileHover={{ y: -12, scale: 1.02 }}
//                 onClick={() => navigate(feature.route)}
//                 className="group cursor-pointer relative"
//               >
//                 {/* GLOW EFFECT */}
//                 <div
//                   className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
//                   style={{
//                     background: `linear-gradient(135deg, ${feature.glowColor}, transparent)`,
//                   }}
//                 />

//                 {/* CARD */}
//                 <div className="relative p-8 h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
//                   {/* GRADIENT ACCENT */}
//                   <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />

//                   <div className="relative z-10">
//                     {/* ICON */}
//                     <motion.div
//                       whileHover={{ rotate: 360, scale: 1.1 }}
//                       transition={{ duration: 0.6 }}
//                       className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
//                       style={{ boxShadow: `0 10px 40px -10px ${feature.glowColor}` }}
//                     >
//                       <div className="text-white">{feature.icon}</div>
//                     </motion.div>

//                     {/* CONTENT */}
//                     <h3 className="text-2xl font-black mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text group-hover:text-transparent transition-all">
//                       {feature.title}
//                     </h3>

//                     <p className="text-slate-400 leading-relaxed mb-6 text-sm">
//                       {feature.description}
//                     </p>

//                     {/* HOVER CTA */}
//                     <div className="flex items-center gap-2 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
//                       <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
//                         Launch Module
//                       </span>
//                       <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
//                     </div>
//                   </div>

//                   {/* CARD SHIMMER */}
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
//                     initial={{ x: "-100%" }}
//                     whileHover={{ x: "100%" }}
//                     transition={{ duration: 0.8 }}
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* FOOTER */}
//         <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-black/20 backdrop-blur-xl">
//           <div className="max-w-7xl mx-auto px-6 py-16">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-12">
//               {/* BRAND */}
//               <div className="text-center md:text-left space-y-4">
//                 <div className="flex items-center justify-center md:justify-start gap-3">
//                   <div className="relative">
//                     <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl blur-md opacity-75" />
//                     <div className="relative w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-2xl">
//                       <Sparkles className="w-6 h-6 text-white" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="font-black text-2xl tracking-tight text-white">PitchAI</div>
//                     <div className="text-[10px] font-bold text-violet-400 tracking-wider">INTELLIGENCE v2.0</div>
//                   </div>
//                 </div>
//                 <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
//                   Enterprise venture intelligence platform. Powered by next-generation AI.
//                 </p>
//               </div>

//               {/* HACKATHON INFO */}
//               <div className="text-center md:text-right space-y-4">
//                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 backdrop-blur-sm mb-2">
//                   <Sparkles className="w-3.5 h-3.5 text-violet-400" />
//                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-300">
//                     Hackathon Project
//                   </span>
//                 </div>
//                 <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
//                   KARE University Team
//                 </h4>
//                 <div className="flex flex-wrap justify-center md:justify-end gap-2">
//                   {['99230040701', '40078', '40651', '40689'].map((id) => (
//                     <motion.span
//                       key={id}
//                       whileHover={{ scale: 1.05 }}
//                       className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300 backdrop-blur-sm"
//                     >
//                       {id}
//                     </motion.span>
//                   ))}
//                 </div>
//                 <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mt-4">
//                   © 2026 PitchAI Intelligence Inc.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>

//       <style jsx>{`
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BarChart3, Zap, ShieldCheck, Brain, TrendingUp, Target } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Evaluate Pitch",
      description: "AI-powered structured scoring with institutional-grade analytics and deep market insights.",
      route: "/evaluate",
      icon: <Brain className="w-7 h-7 text-[#6D28D9]" />,
      delay: 0.1,
    },
    {
      title: "My Evaluations",
      description: "Access comprehensive evaluation history with detailed performance analytics and trends.",
      route: "/evaluations",
      icon: <TrendingUp className="w-7 h-7 text-[#6D28D9]" />,
      delay: 0.2,
    },
    {
      title: "Selected Projects",
      description: "Manage your curated portfolio of high-potential startup investment opportunities.",
      route: "/my-projects",
      icon: <Target className="w-7 h-7 text-[#6D28D9]" />,
      delay: 0.3,
    },
  ];

  const stats = [
    { value: "92.7%", label: "Accuracy Rate" },
    { value: "20+", label: "Pitches Analyzed" },
    { value: "10s", label: "Avg Processing" },
    { value: "AAA", label: "Security Grade" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
    
      {/* HERO SECTION */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C4B5FD]/20 border border-[#C4B5FD]/30 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />
              <span className="text-xs font-bold tracking-wider uppercase text-[#6D28D9]">
                Neural Scoring Engine Active
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black text-[#0F172A] tracking-tight leading-[1.1] mb-8"
            >
              Enterprise-Grade
              <br />
              <span className="text-[#6D28D9]">Venture Intelligence</span>
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Transform raw startup pitches into institutional-grade analytics with our proprietary AI scoring system. Built for venture capital excellence.
            </motion.p>

          
            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 px-10 py-8 bg-white rounded-3xl border border-slate-200 shadow-xl"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-[#6D28D9] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-500 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* SECTION HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4">
              Core Intelligence Modules
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Integrated workflow for comprehensive venture evaluation and portfolio management
            </p>
          </motion.div>

          {/* FEATURE CARDS */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                onClick={() => navigate(feature.route)}
                className="group cursor-pointer"
              >
                <div className="h-full p-8 bg-white rounded-3xl border-2 border-slate-200 hover:border-[#6D28D9] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
                  {/* ICON */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C4B5FD]/30 to-[#C4B5FD]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
                    {feature.icon}
                  </div>

                  {/* CONTENT */}
                  <h3 className="text-2xl font-black text-[#0F172A] mb-4 group-hover:text-[#6D28D9] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* HOVER ARROW */}
                  <div className="flex items-center gap-2 text-sm font-bold text-[#6D28D9] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    Launch Module
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SECONDARY CTA SECTION */}
      <div className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden p-12 md:p-16 bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] rounded-[3rem] shadow-2xl"
          >
            {/* DECORATIVE ELEMENTS */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <Zap className="w-4 h-4 text-[#14B8A6]" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">
                  Ready to Start
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Experience AI-Powered
                <br />
                Pitch Intelligence
              </h2>

              <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
                Join leading VCs using our platform to identify high-potential startups with unprecedented accuracy.
              </p>

              <button
                onClick={() => navigate("/evaluate")}
                className="group px-8 py-4 bg-white text-[#6D28D9] rounded-2xl font-bold text-lg hover:bg-[#F8FAFC] transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-2">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* BRAND */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-black text-lg text-[#0F172A]">PitchAI</div>
                  <div className="text-[8px] font-bold text-[#6D28D9] tracking-wider uppercase">Intelligence</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 max-w-xs">
                Enterprise venture intelligence platform powered by advanced AI.
              </p>
            </div>

            {/* HACKATHON INFO */}
            <div className="text-center md:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C4B5FD]/20 border border-[#C4B5FD]/30 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                <span className="text-[9px] font-bold tracking-wider uppercase text-[#6D28D9]">
                  Hackathon Project
                </span>
              </div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                KARE University Team
              </h4>
              <div className="flex flex-wrap justify-center md:justify-end gap-2 mb-4">
                {['99230040701', '99230040078', '99230040651', '99230040689'].map((id) => (
                  <span
                    key={id}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600"
                  >
                    {id}
                  </span>
                ))}
              </div>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                © 2026 PitchAI Intelligence Inc.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}