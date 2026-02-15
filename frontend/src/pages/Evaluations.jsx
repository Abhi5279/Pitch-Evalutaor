
// // import { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import { useNavigate } from "react-router-dom";
// // import { Heart } from "lucide-react";
// // import toast from "react-hot-toast";
// // import API from "../api";

// // export default function Evaluations() {
// //   const [evaluations, setEvaluations] = useState([]);
// //   const [selectedProjects, setSelectedProjects] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const navigate = useNavigate();

// //   /* ===========================
// //      FETCH DATA
// //   ============================ */

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const evalRes = await API.get("/pitch/my-evaluations");
// //         const projectRes = await API.get("/projects/my-projects");

// //         setEvaluations(evalRes.data.evaluations);

// //         const selectedIds = projectRes.data.projects.map(
// //           (p) => p.evaluationId
// //         );

// //         setSelectedProjects(selectedIds);

// //       } catch {
// //         toast.error("Failed to load data");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   /* ===========================
// //      TOGGLE SELECT
// //   ============================ */

// //   const handleToggleSelect = async (e, evaluationId) => {
// //     e.stopPropagation();

// //     const isSelected = selectedProjects.includes(evaluationId);

// //     try {
// //       if (isSelected) {
// //         // REMOVE
// //         await API.delete(`/projects/remove/${evaluationId}`);

// //         setSelectedProjects(
// //           selectedProjects.filter((id) => id !== evaluationId)
// //         );

// //         toast.success("Removed from Selected Projects ❌");
// //       } else {
// //         // ADD
// //         await API.post("/projects/select", { evaluationId });

// //         setSelectedProjects([...selectedProjects, evaluationId]);

// //         toast.success("Added to Selected Projects ❤️");
// //       }

// //     } catch {
// //       toast.error("Operation failed");
// //     }
// //   };

// //   /* ===========================
// //      LOADING
// //   ============================ */

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <p className="text-indigo-600 font-medium">
// //           Loading evaluations...
// //         </p>
// //       </div>
// //     );
// //   }

// //   /* ===========================
// //      UI
// //   ============================ */

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-12 px-6">
// //       <div className="max-w-7xl mx-auto space-y-8">

// //         <div>
// //           <h1 className="text-3xl font-bold text-gray-800">
// //             My Evaluated Pitches
// //           </h1>
// //           <p className="text-gray-600 mt-2">
// //             Review detailed analytics and investor insights.
// //           </p>
// //         </div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// //           {evaluations.map((item) => {
// //             const isSelected = selectedProjects.includes(item._id);

// //             return (
// //               <motion.div
// //                 key={item._id}
// //                 whileHover={{ scale: 1.03 }}
// //                 className="bg-white p-6 rounded-2xl shadow-lg border relative cursor-pointer hover:shadow-2xl transition"
// //                 onClick={() => navigate(`/evaluation/${item._id}`)}
// //               >

// //                 {/* HEART ICON */}
// //                 <button
// //                   onClick={(e) => handleToggleSelect(e, item._id)}
// //                   className="absolute top-4 right-4 transition"
// //                 >
// //                   <Heart
// //                     size={22}
// //                     className={`transition duration-300 ${
// //                       isSelected
// //                         ? "text-red-500 fill-red-500 scale-110"
// //                         : "text-gray-400 hover:text-red-500"
// //                     }`}
// //                   />
// //                 </button>

// //                 {/* DATE + SCORE */}
// //                 <div className="flex justify-between items-center mb-4">
// //                   <span className="text-sm text-gray-500">
// //                     {new Date(item.createdAt).toLocaleDateString()}
// //                   </span>

// //                   <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
// //                     {item.weightedOverallScore}
// //                   </span>
// //                 </div>

// //                 {/* SCRIPT PREVIEW */}
// //                 <h3 className="font-semibold text-gray-800 mb-3">
// //                   {item.script.slice(0, 80)}...
// //                 </h3>

// //                 <p className="text-gray-500 text-sm">
// //                   Click to view full analytics →
// //                 </p>

// //               </motion.div>
// //             );
// //           })}

// //           {evaluations.length === 0 && (
// //             <div className="col-span-full text-gray-500">
// //               No evaluations yet.
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // import { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useNavigate } from "react-router-dom";
// // import { Heart, Calendar, ArrowRight, LayoutGrid, Search, Loader2 } from "lucide-react";
// // import toast from "react-hot-toast";
// // import API from "../api";

// // export default function Evaluations() {
// //   const [evaluations, setEvaluations] = useState([]);
// //   const [selectedProjects, setSelectedProjects] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const evalRes = await API.get("/pitch/my-evaluations");
// //         const projectRes = await API.get("/projects/my-projects");
// //         setEvaluations(evalRes.data.evaluations);
// //         const selectedIds = projectRes.data.projects.map((p) => p.evaluationId);
// //         setSelectedProjects(selectedIds);
// //       } catch {
// //         toast.error("Systems offline. Could not retrieve data.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   const handleToggleSelect = async (e, evaluationId) => {
// //     e.stopPropagation();
// //     const isSelected = selectedProjects.includes(evaluationId);
// //     try {
// //       if (isSelected) {
// //         await API.delete(`/projects/remove/${evaluationId}`);
// //         setSelectedProjects(selectedProjects.filter((id) => id !== evaluationId));
// //         toast.success("Project de-listed from vault");
// //       } else {
// //         await API.post("/projects/select", { evaluationId });
// //         setSelectedProjects([...selectedProjects, evaluationId]);
// //         toast.success("Project secured in vault");
// //       }
// //     } catch {
// //       toast.error("Protocol failed");
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center space-y-4">
// //         <Loader2 className="w-10 h-10 text-[#4F46E5] animate-spin" />
// //         <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Synchronizing Database</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-[#F9FAFB] pt-32 pb-20 px-6 relative overflow-hidden">
// //       {/* BACKGROUND ELEMENTS */}
// //       <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-50/50 to-transparent -z-10" />

// //       <div className="max-w-7xl mx-auto">
// //         {/* HEADER SECTION */}
// //         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
// //           <div className="space-y-2">
// //             <div className="flex items-center gap-2 text-[#4F46E5]">
// //               <LayoutGrid size={18} />
// //               <span className="text-xs font-black uppercase tracking-[0.2em]">Archive Matrix</span>
// //             </div>
// //             <h1 className="text-5xl font-black text-[#111827] tracking-tight">Intelligence History</h1>
// //             <p className="text-slate-500 text-lg max-w-md">Review and manage your analyzed pitch vectors and investment opportunities.</p>
// //           </div>

// //           <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
// //             <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
// //                <Search size={16} className="text-slate-400" />
// //                <input type="text" placeholder="Filter reports..." className="bg-transparent border-none outline-none text-sm font-medium w-40" />
// //             </div>
// //           </div>
// //         </div>

// //         {/* GRID OF CARDS */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           <AnimatePresence>
// //             {evaluations.map((item, index) => {
// //               const isSelected = selectedProjects.includes(item._id);
// //               const scoreColor = item.weightedOverallScore >= 8 ? "text-emerald-600" : item.weightedOverallScore >= 5 ? "text-indigo-600" : "text-amber-600";
// //               const scoreBg = item.weightedOverallScore >= 8 ? "bg-emerald-50" : item.weightedOverallScore >= 5 ? "bg-indigo-50" : "bg-amber-50";

// //               return (
// //                 <motion.div
// //                   key={item._id}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index * 0.05 }}
// //                   whileHover={{ y: -8 }}
// //                   className="group relative bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.12)] transition-all cursor-pointer p-8 overflow-hidden"
// //                   onClick={() => navigate(`/evaluation/${item._id}`)}
// //                 >
// //                   {/* Glassmorphism Score Badge */}
// //                   <div className={`absolute top-0 right-0 px-6 py-6 rounded-bl-[2rem] font-black text-2xl ${scoreColor} ${scoreBg} border-l border-b border-white shadow-sm`}>
// //                     {item.weightedOverallScore}
// //                   </div>

// //                   <div className="flex flex-col h-full">
// //                     {/* Date & Indicator */}
// //                     <div className="flex items-center gap-2 mb-6 text-slate-400">
// //                       <Calendar size={14} />
// //                       <span className="text-xs font-bold uppercase tracking-widest">
// //                         {new Date(item.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
// //                       </span>
// //                     </div>

// //                     {/* Preview Title (the script) */}
// //                     <div className="flex-1">
// //                       <h3 className="text-xl font-bold text-[#111827] leading-snug mb-4 group-hover:text-[#4F46E5] transition-colors">
// //                         {item.script.slice(0, 75)}...
// //                       </h3>
                      
// //                       {/* Mini Metric Bars (Fake data viz to look high-tech) */}
// //                       <div className="space-y-3 mb-8 opacity-60">
// //                         <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
// //                            <div className="h-full bg-indigo-400 w-[70%] rounded-full" />
// //                         </div>
// //                         <div className="h-1 w-2/3 bg-slate-100 rounded-full overflow-hidden">
// //                            <div className="h-full bg-emerald-400 w-[50%] rounded-full" />
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* Footer Actions */}
// //                     <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
// //                       <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest group-hover:text-[#4F46E5] transition-colors">
// //                         View Report <ArrowRight size={14} />
// //                       </div>

// //                       <motion.button
// //                         whileTap={{ scale: 0.8 }}
// //                         onClick={(e) => handleToggleSelect(e, item._id)}
// //                         className={`p-3 rounded-xl transition-all ${
// //                           isSelected 
// //                             ? "bg-rose-50 text-rose-500 shadow-inner" 
// //                             : "bg-slate-50 text-slate-300 hover:text-rose-400"
// //                         }`}
// //                       >
// //                         <Heart size={20} fill={isSelected ? "currentColor" : "none"} />
// //                       </motion.button>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               );
// //             })}
// //           </AnimatePresence>

// //           {evaluations.length === 0 && (
// //             <div className="col-span-full py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-center">
// //               <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 mb-4">
// //                 <Search size={32} />
// //               </div>
// //               <h3 className="text-xl font-bold text-slate-800">No Intelligence Records</h3>
// //               <p className="text-slate-400">Your evaluation history is currently empty.</p>
// //               <button onClick={() => navigate('/evaluate')} className="mt-6 text-[#4F46E5] font-bold flex items-center gap-2 hover:underline">
// //                 Run first evaluation <ArrowRight size={16} />
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { Heart, Calendar, ArrowRight, LayoutGrid, Search, Loader2, Filter } from "lucide-react";
// import toast from "react-hot-toast";
// import API from "../api";

// export default function Evaluations() {
//   const [evaluations, setEvaluations] = useState([]);
//   const [selectedProjects, setSelectedProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const evalRes = await API.get("/pitch/my-evaluations");
//         const projectRes = await API.get("/projects/my-projects");
//         setEvaluations(evalRes.data.evaluations);
//         const selectedIds = projectRes.data.projects.map((p) => p.evaluationId);
//         setSelectedProjects(selectedIds);
//       } catch {
//         toast.error("Systems offline. Could not retrieve data.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleToggleSelect = async (e, evaluationId) => {
//     e.stopPropagation();
//     const isSelected = selectedProjects.includes(evaluationId);
//     try {
//       if (isSelected) {
//         await API.delete(`/projects/remove/${evaluationId}`);
//         setSelectedProjects(selectedProjects.filter((id) => id !== evaluationId));
//         toast.success("Project de-listed from vault");
//       } else {
//         await API.post("/projects/select", { evaluationId });
//         setSelectedProjects([...selectedProjects, evaluationId]);
//         toast.success("Project secured in vault");
//       }
//     } catch {
//       toast.error("Protocol failed");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center space-y-4">
//         <Loader2 className="w-10 h-10 text-[#6D28D9] animate-spin" />
//         <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Synchronizing Database</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* HEADER SECTION */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
//           <div className="space-y-3">
//             <div className="flex items-center gap-2 text-[#6D28D9]">
//               <LayoutGrid size={18} />
//               <span className="text-xs font-black uppercase tracking-[0.2em]">Archive Matrix</span>
//             </div>
//             <h1 className="text-5xl font-black text-[#0F172A] tracking-tight">Intelligence History</h1>
//             <p className="text-slate-600 text-lg max-w-md">
//               Review and manage your analyzed pitch vectors and investment opportunities.
//             </p>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border-2 border-slate-200 shadow-sm">
//               <Search size={16} className="text-slate-400" />
//               <input 
//                 type="text" 
//                 placeholder="Filter reports..." 
//                 className="bg-transparent border-none outline-none text-sm font-medium w-40 text-slate-700 placeholder:text-slate-400" 
//               />
//             </div>
//             <button className="p-3 bg-white rounded-2xl border-2 border-slate-200 hover:border-[#6D28D9] transition-all shadow-sm">
//               <Filter size={18} className="text-slate-600" />
//             </button>
//           </div>
//         </div>

//         {/* STATS ROW */}
//         <div className="grid grid-cols-3 gap-4 mb-12">
//           <div className="p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm">
//             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Total Evaluations</p>
//             <p className="text-3xl font-black text-[#0F172A]">{evaluations.length}</p>
//           </div>
//           <div className="p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm">
//             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Shortlisted</p>
//             <p className="text-3xl font-black text-[#6D28D9]">{selectedProjects.length}</p>
//           </div>
//           <div className="p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm">
//             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Avg Score</p>
//             <p className="text-3xl font-black text-[#14B8A6]">
//               {evaluations.length > 0 
//                 ? (evaluations.reduce((acc, e) => acc + e.weightedOverallScore, 0) / evaluations.length).toFixed(1)
//                 : "0.0"
//               }
//             </p>
//           </div>
//         </div>

//         {/* GRID OF CARDS */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <AnimatePresence>
//             {evaluations.map((item, index) => {
//               const isSelected = selectedProjects.includes(item._id);
//               const scoreColor = item.weightedOverallScore >= 8 
//                 ? "text-[#14B8A6]" 
//                 : item.weightedOverallScore >= 5 
//                 ? "text-[#6D28D9]" 
//                 : "text-amber-600";
//               const scoreBg = item.weightedOverallScore >= 8 
//                 ? "bg-[#14B8A6]/10" 
//                 : item.weightedOverallScore >= 5 
//                 ? "bg-[#C4B5FD]/30" 
//                 : "bg-amber-50";
//               const scoreBorder = item.weightedOverallScore >= 8 
//                 ? "border-[#14B8A6]/30" 
//                 : item.weightedOverallScore >= 5 
//                 ? "border-[#C4B5FD]" 
//                 : "border-amber-200";

//               return (
//                 <motion.div
//                   key={item._id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                   whileHover={{ y: -8, scale: 1.02 }}
//                   className="group relative bg-white rounded-3xl border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 hover:border-[#6D28D9] transition-all cursor-pointer p-8 overflow-hidden"
//                   onClick={() => navigate(`/evaluation/${item._id}`)}
//                 >
//                   {/* Score Badge */}
//                   <div className={`absolute top-0 right-0 px-6 py-6 rounded-bl-3xl font-black text-2xl ${scoreColor} ${scoreBg} border-l-2 border-b-2 ${scoreBorder}`}>
//                     {item.weightedOverallScore}
//                   </div>

//                   <div className="flex flex-col h-full">
//                     {/* Date */}
//                     <div className="flex items-center gap-2 mb-6 text-slate-400">
//                       <Calendar size={14} />
//                       <span className="text-xs font-bold uppercase tracking-widest">
//                         {new Date(item.createdAt).toLocaleDateString(undefined, { 
//                           month: 'short', 
//                           day: 'numeric', 
//                           year: 'numeric' 
//                         })}
//                       </span>
//                     </div>

//                     {/* Preview Title */}
//                     <div className="flex-1">
//                       <h3 className="text-xl font-bold text-[#0F172A] leading-snug mb-4 group-hover:text-[#6D28D9] transition-colors line-clamp-3">
//                         {item.script.slice(0, 80)}...
//                       </h3>
                      
//                       {/* Mini Metric Bars */}
//                       <div className="space-y-3 mb-8 opacity-60">
//                         <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
//                           <div className="h-full bg-[#6D28D9] rounded-full" style={{ width: '70%' }} />
//                         </div>
//                         <div className="h-1.5 w-2/3 bg-slate-100 rounded-full overflow-hidden">
//                           <div className="h-full bg-[#14B8A6] rounded-full" style={{ width: '50%' }} />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Footer Actions */}
//                     <div className="flex items-center justify-between mt-auto pt-6 border-t-2 border-slate-100">
//                       <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest group-hover:text-[#6D28D9] transition-colors">
//                         View Report <ArrowRight size={14} />
//                       </div>

//                       <motion.button
//                         whileTap={{ scale: 0.85 }}
//                         onClick={(e) => handleToggleSelect(e, item._id)}
//                         className={`p-3 rounded-xl transition-all ${
//                           isSelected 
//                             ? "bg-red-50 text-red-500 border-2 border-red-200" 
//                             : "bg-slate-50 text-slate-300 hover:text-red-400 border-2 border-slate-100 hover:border-red-200"
//                         }`}
//                       >
//                         <Heart size={20} fill={isSelected ? "currentColor" : "none"} />
//                       </motion.button>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>

//           {/* Empty State */}
//           {evaluations.length === 0 && (
//             <div className="col-span-full py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
//               <div className="w-16 h-16 bg-[#C4B5FD]/20 rounded-2xl flex items-center justify-center text-[#6D28D9] mb-4">
//                 <Search size={32} />
//               </div>
//               <h3 className="text-xl font-bold text-[#0F172A] mb-2">No Intelligence Records</h3>
//               <p className="text-slate-500 mb-6">Your evaluation history is currently empty.</p>
//               <button 
//                 onClick={() => navigate('/evaluate')} 
//                 className="px-6 py-3 bg-[#6D28D9] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-[#5B21B6] transition-all shadow-lg shadow-purple-500/25"
//               >
//                 Run first evaluation <ArrowRight size={16} />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart, Calendar, ArrowRight, LayoutGrid, Search, Loader2, Filter } from "lucide-react";
import toast from "react-hot-toast";
import API from "../api";

export default function Evaluations() {
  const [evaluations, setEvaluations] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const evalRes = await API.get("/pitch/my-evaluations");
        const projectRes = await API.get("/projects/my-projects");
        setEvaluations(evalRes.data.evaluations);
        const selectedIds = projectRes.data.projects.map((p) => p.evaluationId);
        setSelectedProjects(selectedIds);
      } catch {
        toast.error("Systems offline. Could not retrieve data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleToggleSelect = async (e, evaluationId) => {
    e.stopPropagation();
    const isSelected = selectedProjects.includes(evaluationId);
    try {
      if (isSelected) {
        await API.delete(`/projects/remove/${evaluationId}`);
        setSelectedProjects(selectedProjects.filter((id) => id !== evaluationId));
        toast.success("Project de-listed from vault");
      } else {
        await API.post("/projects/select", { evaluationId });
        setSelectedProjects([...selectedProjects, evaluationId]);
        toast.success("Project secured in vault");
      }
    } catch {
      toast.error("Protocol failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-10 h-10 text-[#6D28D9] animate-spin" />
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Synchronizing Database</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#6D28D9]">
              <LayoutGrid size={18} />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Archive Matrix</span>
            </div>
            <h1 className="text-5xl font-black text-[#0F172A] tracking-tight">Intelligence History</h1>
            <p className="text-slate-600 text-lg max-w-md">
              Review and manage your analyzed pitch vectors and investment opportunities.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border-2 border-slate-200 shadow-sm">
              <Search size={16} className="text-slate-400" />
              <input 
                type="text" 
                placeholder="Filter reports..." 
                className="bg-transparent border-none outline-none text-sm font-medium w-40 text-slate-700 placeholder:text-slate-400" 
              />
            </div>
            <button className="p-3 bg-white rounded-2xl border-2 border-slate-200 hover:border-[#6D28D9] transition-all shadow-sm">
              <Filter size={18} className="text-slate-600" />
            </button>
          </div>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Total Evaluations</p>
            <p className="text-3xl font-black text-[#0F172A]">{evaluations.length}</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Shortlisted</p>
            <p className="text-3xl font-black text-[#6D28D9]">{selectedProjects.length}</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Avg Score</p>
            <p className="text-3xl font-black text-[#14B8A6]">
              {evaluations.length > 0 
                ? (evaluations.reduce((acc, e) => acc + e.weightedOverallScore, 0) / evaluations.length).toFixed(1)
                : "0.0"
              }
            </p>
          </div>
        </div>

        {/* GRID OF CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {evaluations.map((item, index) => {
              const isSelected = selectedProjects.includes(item._id);
              const scoreColor = item.weightedOverallScore >= 8 
                ? "text-[#14B8A6]" 
                : item.weightedOverallScore >= 5 
                ? "text-[#6D28D9]" 
                : "text-amber-600";
              const scoreBg = item.weightedOverallScore >= 8 
                ? "bg-[#14B8A6]/10" 
                : item.weightedOverallScore >= 5 
                ? "bg-[#C4B5FD]/30" 
                : "bg-amber-50";
              const scoreBorder = item.weightedOverallScore >= 8 
                ? "border-[#14B8A6]/30" 
                : item.weightedOverallScore >= 5 
                ? "border-[#C4B5FD]" 
                : "border-amber-200";

              return (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white rounded-3xl border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 hover:border-[#6D28D9] transition-all cursor-pointer p-8 overflow-hidden"
                  onClick={() => navigate(`/evaluation/${item._id}`)}
                >
                  {/* Score Badge */}
                  <div className={`absolute top-0 right-0 px-6 py-6 rounded-bl-3xl font-black text-2xl ${scoreColor} ${scoreBg} border-l-2 border-b-2 ${scoreBorder}`}>
                    {item.weightedOverallScore}
                  </div>

                  <div className="flex flex-col h-full">
                    {/* Date */}
                    <div className="flex items-center gap-2 mb-6 text-slate-400">
                      <Calendar size={14} />
                      <span className="text-xs font-bold uppercase tracking-widest">
                        {new Date(item.createdAt).toLocaleDateString(undefined, { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>

                    {/* Preview Title */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0F172A] leading-snug mb-4 group-hover:text-[#6D28D9] transition-colors line-clamp-3">
                        {item.script.slice(0, 80)}...
                      </h3>
                      
                      {/* Mini Metric Bars */}
                      <div className="space-y-3 mb-8 opacity-60">
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#6D28D9] rounded-full" style={{ width: '70%' }} />
                        </div>
                        <div className="h-1.5 w-2/3 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#14B8A6] rounded-full" style={{ width: '50%' }} />
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between mt-auto pt-6 border-t-2 border-slate-100">
                      <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest group-hover:text-[#6D28D9] transition-colors">
                        View Report <ArrowRight size={14} />
                      </div>

                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={(e) => handleToggleSelect(e, item._id)}
                        className={`p-3 rounded-xl transition-all ${
                          isSelected 
                            ? "bg-red-50 text-red-500 border-2 border-red-200" 
                            : "bg-slate-50 text-slate-300 hover:text-red-400 border-2 border-slate-100 hover:border-red-200"
                        }`}
                      >
                        <Heart size={20} fill={isSelected ? "currentColor" : "none"} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Empty State */}
          {evaluations.length === 0 && (
            <div className="col-span-full py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-[#C4B5FD]/20 rounded-2xl flex items-center justify-center text-[#6D28D9] mb-4">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">No Intelligence Records</h3>
              <p className="text-slate-500 mb-6">Your evaluation history is currently empty.</p>
              <button 
                onClick={() => navigate('/evaluate')} 
                className="px-6 py-3 bg-[#6D28D9] text-white rounded-xl font-bold flex items-center gap-2 hover:bg-[#5B21B6] transition-all shadow-lg shadow-purple-500/25"
              >
                Run first evaluation <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}