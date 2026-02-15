// // import { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import { useNavigate } from "react-router-dom";
// // import API from "../api";

// // export default function MyProjects() {
// //   const [projects, setProjects] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchProjects = async () => {
// //       try {
// //         const res = await API.get("/projects/my-projects");
// //         setProjects(res.data.projects);
// //       } catch {
// //         alert("Failed to fetch selected projects");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProjects();
// //   }, []);

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <p className="text-indigo-600 font-medium">
// //           Loading selected projects...
// //         </p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-12 px-6">
// //       <div className="max-w-7xl mx-auto space-y-8">

// //         {/* HEADER */}
// //         <div>
// //           <h1 className="text-3xl font-bold text-gray-800">
// //             Selected Projects
// //           </h1>
// //           <p className="text-gray-600 mt-2">
// //             High-potential startup opportunities you've shortlisted.
// //           </p>
// //         </div>

// //         {/* GRID */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// //           {projects.map((project) => (
// //             <motion.div
// //               key={project._id}
// //               whileHover={{ scale: 1.03 }}
// //               className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 cursor-pointer hover:shadow-2xl transition"
// //               onClick={() => navigate(`/evaluation/${project.evaluationId}`)}
// //             >
// //               {/* DATE + SCORE */}
// //               <div className="flex justify-between items-center mb-4">
// //                 <span className="text-sm text-gray-500">
// //                   {new Date(project.createdAt).toLocaleDateString()}
// //                 </span>

// //                 <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
// //                   {project.weightedOverallScore}
// //                 </span>
// //               </div>

// //               {/* TITLE */}
// //               <h3 className="font-semibold text-gray-800 mb-3">
// //                 {project.title}
// //               </h3>

// //               <p className="text-gray-500 text-sm">
// //                 View full investor analytics →
// //               </p>
// //             </motion.div>
// //           ))}

// //           {projects.length === 0 && (
// //             <div className="col-span-full text-gray-500">
// //               No selected projects yet.
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
// import { 
//   Briefcase, 
//   TrendingUp, 
//   ArrowUpRight, 
//   Calendar, 
//   Star, 
//   Search, 
//   Loader2,
//   Gem
// } from "lucide-react";
// import API from "../api";

// export default function MyProjects() {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await API.get("/projects/my-projects");
//         setProjects(res.data.projects);
//       } catch {
//         console.error("Vault access denied or network error");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProjects();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center space-y-4">
//         <Loader2 className="w-10 h-10 text-[#4F46E5] animate-spin" />
//         <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Opening Encrypted Vault...</p>
//       </div>
//     );
//   }

//   // Calculate some "Shocking" Stats for the header
//   const avgScore = projects.length > 0 
//     ? (projects.reduce((acc, curr) => acc + curr.weightedOverallScore, 0) / projects.length).toFixed(1) 
//     : 0;

//   return (
//     <div className="min-h-screen bg-[#F9FAFB] pt-32 pb-20 px-6 relative overflow-hidden">
//       {/* BACKGROUND ELEMENTS */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/20 blur-[120px] rounded-full -z-10" />
//       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/20 blur-[120px] rounded-full -z-10" />

//       <div className="max-w-7xl mx-auto space-y-12">
        
//         {/* HEADER & STATS SECTION */}
//         <div className="grid lg:grid-cols-3 gap-8 items-end">
//           <div className="lg:col-span-2 space-y-4">
//             <div className="flex items-center gap-2 text-emerald-600">
//               <Gem size={18} />
//               <span className="text-xs font-black uppercase tracking-[0.3em]">Premium Deal Flow</span>
//             </div>
//             <h1 className="text-5xl font-black text-[#111827] tracking-tighter leading-tight">
//               Selected <span className="text-[#4F46E5]">Vault</span>
//             </h1>
//             <p className="text-slate-500 text-lg max-w-xl">
//               High-potential startup opportunities curated through AI neural scoring and investor-grade analytics.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-indigo-100/20 flex justify-between items-center">
//             <div>
//               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Portfolio Strength</p>
//               <p className="text-3xl font-black text-[#111827]">{avgScore}<span className="text-slate-300 text-sm"> AVG</span></p>
//             </div>
//             <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
//               <TrendingUp size={24} />
//             </div>
//           </div>
//         </div>

//         {/* SEARCH & FILTER BAR (Visual only for UI high-level feel) */}
//         <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/50 backdrop-blur-md p-4 rounded-[2rem] border border-white shadow-sm">
//           <div className="flex items-center gap-3 px-6 py-2 bg-white rounded-xl border border-slate-100 flex-1 w-full">
//             <Search size={18} className="text-slate-400" />
//             <input type="text" placeholder="Search your vault..." className="bg-transparent border-none outline-none text-sm font-medium w-full" />
//           </div>
//           <div className="flex gap-2">
//             <span className="px-4 py-2 bg-[#111827] text-white rounded-xl text-xs font-bold cursor-pointer">All Assets</span>
//             <span className="px-4 py-2 bg-white text-slate-500 rounded-xl text-xs font-bold border border-slate-100 cursor-pointer hover:bg-slate-50">Top Rated</span>
//           </div>
//         </div>

//         {/* GRID OF PROJECT CARDS */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <AnimatePresence>
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project._id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 onClick={() => navigate(`/evaluation/${project.evaluationId}`)}
//                 className="group relative bg-white p-8 rounded-[3rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.15)] transition-all cursor-pointer overflow-hidden"
//               >
//                 {/* Score Corner Ribbon */}
//                 <div className="absolute top-0 right-0 bg-indigo-600 text-white px-6 py-4 rounded-bl-[2.5rem] font-black text-xl shadow-lg">
//                   {project.weightedOverallScore}
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-center gap-2 text-slate-400">
//                     <Calendar size={14} />
//                     <span className="text-[10px] font-black uppercase tracking-widest">
//                       {new Date(project.createdAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}
//                     </span>
//                   </div>

//                   <div>
//                     <h3 className="text-2xl font-black text-[#111827] leading-tight mb-2 group-hover:text-[#4F46E5] transition-colors">
//                       {project.title || "Untitled Intelligence"}
//                     </h3>
//                     <div className="flex gap-1">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} size={12} fill={i < 4 ? "#F59E0B" : "none"} className={i < 4 ? "text-amber-500" : "text-slate-200"} />
//                       ))}
//                     </div>
//                   </div>

//                   {/* FAKE PERFORMANCE BARS (High-Tech feel) */}
//                   <div className="space-y-3 pt-2">
//                     <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
//                       <span>Market Potential</span>
//                       <span className="text-indigo-600">88%</span>
//                     </div>
//                     <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
//                       <motion.div 
//                         initial={{ width: 0 }} animate={{ width: "88%" }}
//                         className="h-full bg-indigo-600 rounded-full" 
//                       />
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between pt-6 border-t border-slate-50">
//                     <span className="text-xs font-black uppercase tracking-widest text-[#4F46E5] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
//                       Open Audit <ArrowUpRight size={14} />
//                     </span>
//                     <Briefcase className="text-slate-200 group-hover:text-indigo-100 transition-colors" size={24} />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>

//           {projects.length === 0 && (
//             <div className="col-span-full py-24 bg-white rounded-[3rem] border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-center">
//               <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-200 mb-6">
//                 <Briefcase size={40} />
//               </div>
//               <h3 className="text-2xl font-black text-slate-800 tracking-tight">Vault is Empty</h3>
//               <p className="text-slate-400 mt-2 max-w-xs">You haven't shortlisted any high-potential startups yet.</p>
//               <button 
//                 onClick={() => navigate('/evaluations')}
//                 className="mt-8 bg-[#111827] text-white px-8 py-3 rounded-2xl font-bold hover:bg-indigo-600 transition-all flex items-center gap-2"
//               >
//                 Browse Evaluations <ArrowUpRight size={18} />
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
import { 
  Briefcase, 
  TrendingUp, 
  ArrowUpRight, 
  Calendar, 
  Star, 
  Search, 
  Loader2,
  Gem,
  Filter,
  Target
} from "lucide-react";
import API from "../api";

export default function MyProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects/my-projects");
        setProjects(res.data.projects);
      } catch {
        console.error("Vault access denied or network error");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-10 h-10 text-[#6D28D9] animate-spin" />
        <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Opening Encrypted Vault...</p>
      </div>
    );
  }

  // Calculate stats
  const avgScore = projects.length > 0 
    ? (projects.reduce((acc, curr) => acc + curr.weightedOverallScore, 0) / projects.length).toFixed(1) 
    : 0;
  const topRated = projects.filter(p => p.weightedOverallScore >= 8).length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HEADER & STATS SECTION */}
        <div className="grid lg:grid-cols-3 gap-6 items-end">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-[#14B8A6]">
              <Gem size={18} />
              <span className="text-xs font-black uppercase tracking-[0.3em]">Premium Deal Flow</span>
            </div>
            <h1 className="text-5xl font-black text-[#0F172A] tracking-tight leading-tight">
              Selected <span className="text-[#6D28D9]">Portfolio</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-xl">
              High-potential startup opportunities curated through AI neural scoring and institutional-grade analytics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-lg flex justify-between items-center">
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Portfolio Strength</p>
              <p className="text-3xl font-black text-[#0F172A]">
                {avgScore}
                <span className="text-slate-400 text-sm"> AVG</span>
              </p>
            </div>
            <div className="w-12 h-12 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center text-[#14B8A6]">
              <TrendingUp size={24} />
            </div>
          </div>
        </div>

        {/* QUICK STATS ROW */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Total Projects</p>
            <p className="text-3xl font-black text-[#0F172A]">{projects.length}</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Top Rated</p>
            <p className="text-3xl font-black text-[#6D28D9]">{topRated}</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Success Rate</p>
            <p className="text-3xl font-black text-[#14B8A6]">
              {projects.length > 0 ? Math.round((topRated / projects.length) * 100) : 0}%
            </p>
          </div>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl border-2 border-slate-200 shadow-sm flex-1 w-full max-w-2xl">
            <Search size={18} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Search your portfolio..." 
              className="bg-transparent border-none outline-none text-sm font-medium w-full text-slate-700 placeholder:text-slate-400" 
            />
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-[#6D28D9] text-white rounded-2xl text-sm font-bold hover:bg-[#5B21B6] transition-all shadow-lg shadow-purple-500/25">
              All Assets
            </button>
            <button className="px-6 py-3 bg-white text-slate-600 rounded-2xl text-sm font-bold border-2 border-slate-200 hover:border-[#6D28D9] hover:text-[#6D28D9] transition-all">
              Top Rated
            </button>
            <button className="p-3 bg-white rounded-2xl border-2 border-slate-200 hover:border-[#6D28D9] transition-all">
              <Filter size={18} className="text-slate-600" />
            </button>
          </div>
        </div>

        {/* GRID OF PROJECT CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {projects.map((project, index) => {
              const scoreColor = project.weightedOverallScore >= 8 
                ? "bg-[#14B8A6]" 
                : project.weightedOverallScore >= 5 
                ? "bg-[#6D28D9]" 
                : "bg-amber-500";

              return (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => navigate(`/evaluation/${project.evaluationId}`)}
                  className="group relative bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 hover:border-[#6D28D9] transition-all cursor-pointer overflow-hidden"
                >
                  {/* Score Corner Ribbon */}
                  <div className={`absolute top-0 right-0 ${scoreColor} text-white px-6 py-4 rounded-bl-3xl font-black text-xl shadow-lg`}>
                    {project.weightedOverallScore}
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        {new Date(project.createdAt).toLocaleDateString(undefined, { 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-[#0F172A] leading-tight mb-3 group-hover:text-[#6D28D9] transition-colors line-clamp-2">
                        {project.title || "Untitled Investment Opportunity"}
                      </h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => {
                          const filled = Math.floor((project.weightedOverallScore / 10) * 5);
                          return (
                            <Star 
                              key={i} 
                              size={14} 
                              fill={i < filled ? "#F59E0B" : "none"} 
                              className={i < filled ? "text-amber-500" : "text-slate-200"} 
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* PERFORMANCE BARS */}
                    <div className="space-y-3 pt-2">
                      <div className="flex justify-between text-[10px] font-black uppercase text-slate-500">
                        <span>Market Potential</span>
                        <span className="text-[#6D28D9]">{Math.min(project.weightedOverallScore * 10, 100)}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: `${Math.min(project.weightedOverallScore * 10, 100)}%` }}
                          transition={{ duration: 1, delay: index * 0.05 }}
                          className="h-full bg-[#6D28D9] rounded-full" 
                        />
                      </div>

                      <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 pt-2">
                        <span>Investment Grade</span>
                        <span className="text-[#14B8A6]">{Math.min((project.weightedOverallScore + 1) * 9, 100)}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: `${Math.min((project.weightedOverallScore + 1) * 9, 100)}%` }}
                          transition={{ duration: 1, delay: index * 0.05 + 0.1 }}
                          className="h-full bg-[#14B8A6] rounded-full" 
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t-2 border-slate-100">
                      <span className="text-xs font-black uppercase tracking-widest text-[#6D28D9] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                        Open Audit <ArrowUpRight size={14} />
                      </span>
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-300 group-hover:bg-[#C4B5FD]/20 group-hover:text-[#6D28D9] transition-all">
                        <Briefcase size={20} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* EMPTY STATE */}
          {projects.length === 0 && (
            <div className="col-span-full py-24 bg-white rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-[#C4B5FD]/20 rounded-3xl flex items-center justify-center text-[#6D28D9] mb-6">
                <Briefcase size={40} />
              </div>
              <h3 className="text-2xl font-black text-[#0F172A] tracking-tight mb-2">Portfolio is Empty</h3>
              <p className="text-slate-500 mb-8 max-w-xs">You haven't shortlisted any high-potential startups yet.</p>
              <button 
                onClick={() => navigate('/evaluations')}
                className="bg-[#6D28D9] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#5B21B6] transition-all flex items-center gap-2 shadow-xl shadow-purple-500/25"
              >
                Browse Evaluations <ArrowUpRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}