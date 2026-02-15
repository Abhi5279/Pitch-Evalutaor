

// import { useEffect, useState } from "react";
// import API from "../api";
// import { motion, AnimatePresence } from "framer-motion";
// import toast from "react-hot-toast";
// import { 
//   Target, 
//   Sparkles, 
//   CheckCircle2, 
//   Circle, 
//   Loader2, 
//   Youtube, 
//   Github, 
//   FileText,
//   Wrench,
//   TrendingUp,
//   Calendar,
//   Zap
// } from "lucide-react";

// export default function MilestoneBuilder() {
//   const [projects, setProjects] = useState([]);
//   const [selectedProjectId, setSelectedProjectId] = useState("");
//   const [customInstructions, setCustomInstructions] = useState("");
//   const [roadmap, setRoadmap] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [completedSteps, setCompletedSteps] = useState({});

//   /* ==============================
//      FETCH SELECTED PROJECTS
//   =============================== */
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await API.get("/projects/my-projects");
//         setProjects(res.data.projects);
//       } catch {
//         toast.error("Failed to fetch projects");
//       }
//     };
//     fetchProjects();
//   }, []);

//   /* ==============================
//      GENERATE ROADMAP
//   =============================== */
//   const generateRoadmap = async () => {
//     if (!selectedProjectId) {
//       toast.error("Select a project first");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await API.post("/milestones/generate", {
//         projectId: selectedProjectId,
//         customInstructions
//       });

//       setRoadmap(res.data.roadmap);
//       setCompletedSteps({});
//       toast.success("Execution Blueprint Generated 🚀");
//     } catch {
//       toast.error("Failed to generate roadmap");
//     }
//     setLoading(false);
//   };

//   /* ==============================
//      CHECKBOX HANDLER
//   =============================== */
//   const toggleStep = (phaseIndex, stepIndex) => {
//     const key = `${phaseIndex}-${stepIndex}`;
//     setCompletedSteps(prev => ({
//       ...prev,
//       [key]: !prev[key]
//     }));
//   };

//   /* ==============================
//      CALCULATE PROGRESS
//   =============================== */
//   const calculateProgress = () => {
//     if (!roadmap) return 0;

//     let total = 0;
//     roadmap.phases.forEach(phase => {
//       total += phase.steps.length;
//     });

//     const completed = Object.values(completedSteps).filter(Boolean).length;

//     return total === 0 ? 0 : Math.round((completed / total) * 100);
//   };

//   const progress = calculateProgress();

//   // Calculate phase completion
//   const getPhaseProgress = (phaseIndex) => {
//     if (!roadmap) return 0;
//     const phase = roadmap.phases[phaseIndex];
//     let completed = 0;
//     phase.steps.forEach((_, stepIndex) => {
//       const key = `${phaseIndex}-${stepIndex}`;
//       if (completedSteps[key]) completed++;
//     });
//     return Math.round((completed / phase.steps.length) * 100);
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 px-6">
//       <div className="max-w-6xl mx-auto space-y-8">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="space-y-4"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6D28D9]/5 border border-[#6D28D9]/10">
//             <Target className="w-4 h-4 text-[#6D28D9]" />
//             <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#6D28D9]">
//               Execution Engine
//             </span>
//           </div>
          
//           <h1 className="text-5xl font-black text-[#0F172A] tracking-tight">
//             Project Blueprint
//           </h1>
          
//           <p className="text-lg text-slate-500 max-w-2xl">
//             AI-powered execution roadmap with step-by-step guidance, tools, and resources.
//           </p>
//         </motion.div>

//         {/* PROJECT SELECT & GENERATE */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6"
//         >
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-12 h-12 bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] rounded-2xl flex items-center justify-center">
//               <Sparkles className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <h2 className="text-xl font-black text-[#0F172A]">Generate Blueprint</h2>
//               <p className="text-sm text-slate-500">Select project and customize your roadmap</p>
//             </div>
//           </div>

//           {/* Project Selector */}
//           <div className="space-y-2">
//             <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
//               Select Project
//             </label>
//             <div className="relative">
//               <select
//                 value={selectedProjectId}
//                 onChange={e => setSelectedProjectId(e.target.value)}
//                 className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/50 focus:border-[#6D28D9] focus:bg-white transition-all text-[#0F172A] font-medium appearance-none cursor-pointer"
//               >
//                 <option value="">Choose from your vault...</option>
//                 {projects.map(project => (
//                   <option key={project._id} value={project._id}>
//                     {project.title}
//                   </option>
//                 ))}
//               </select>
//               <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
//                 <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* Custom Instructions */}
//           <div className="space-y-2">
//             <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
//               Custom Instructions (Optional)
//             </label>
//             <textarea
//               placeholder="e.g., Build MVP in 2 months, Focus on technical implementation..."
//               value={customInstructions}
//               onChange={e => setCustomInstructions(e.target.value)}
//               className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/50 focus:border-[#6D28D9] focus:bg-white transition-all text-[#0F172A] font-medium resize-none"
//               rows={3}
//             />
//           </div>

//           {/* Generate Button */}
//           <motion.button
//             onClick={generateRoadmap}
//             disabled={loading}
//             whileHover={{ scale: loading ? 1 : 1.02 }}
//             whileTap={{ scale: loading ? 1 : 0.98 }}
//             className="w-full bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white py-4 rounded-2xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#6D28D9]/30 flex items-center justify-center gap-3"
//           >
//             {loading ? (
//               <>
//                 <Loader2 className="w-5 h-5 animate-spin" />
//                 <span>Generating Blueprint...</span>
//               </>
//             ) : (
//               <>
//                 <Zap className="w-5 h-5" />
//                 <span>Generate Execution Blueprint</span>
//               </>
//             )}
//           </motion.button>
//         </motion.div>

//         {/* PROGRESS TRACKER */}
//         <AnimatePresence>
//           {roadmap && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center">
//                     <TrendingUp className="w-6 h-6 text-[#14B8A6]" />
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-black text-[#0F172A]">Overall Progress</h2>
//                     <p className="text-sm text-slate-500">Track your execution journey</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-4xl font-black text-[#0F172A]">{progress}%</p>
//                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Complete</p>
//                 </div>
//               </div>

//               {/* Progress Bar */}
//               <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
//                 <motion.div
//                   className="h-full bg-gradient-to-r from-[#6D28D9] via-[#C4B5FD] to-[#14B8A6] rounded-full"
//                   initial={{ width: 0 }}
//                   animate={{ width: `${progress}%` }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* ROADMAP PHASES */}
//         <AnimatePresence>
//           {roadmap && roadmap.phases.map((phase, pIndex) => {
//             const phaseProgress = getPhaseProgress(pIndex);
            
//             return (
//               <motion.div
//                 key={pIndex}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 20 }}
//                 transition={{ delay: pIndex * 0.1 }}
//                 className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
//               >
//                 {/* Phase Header */}
//                 <div className="bg-gradient-to-r from-[#6D28D9]/5 to-[#C4B5FD]/5 p-8 border-b border-slate-100">
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="flex items-start gap-4 flex-1">
//                       <div className="w-14 h-14 bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] rounded-2xl flex items-center justify-center flex-shrink-0">
//                         <span className="text-2xl font-black text-white">{pIndex + 1}</span>
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-2xl font-black text-[#0F172A] mb-2">
//                           {phase.phaseTitle}
//                         </h3>
//                         <p className="text-slate-600 leading-relaxed">{phase.goal}</p>
//                       </div>
//                     </div>
                    
//                     {/* Phase Progress Badge */}
//                     <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200">
//                       <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6D28D9] to-[#14B8A6]" />
//                       <span className="text-sm font-bold text-[#0F172A]">{phaseProgress}%</span>
//                     </div>
//                   </div>

//                   {/* Mini Progress Bar */}
//                   <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-4">
//                     <motion.div
//                       className="h-full bg-gradient-to-r from-[#6D28D9] to-[#14B8A6] rounded-full"
//                       initial={{ width: 0 }}
//                       animate={{ width: `${phaseProgress}%` }}
//                       transition={{ duration: 0.6 }}
//                     />
//                   </div>
//                 </div>

//                 <div className="p-8 space-y-8">
//                   {/* Steps Section */}
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-2 mb-4">
//                       <CheckCircle2 className="w-5 h-5 text-[#6D28D9]" />
//                       <h4 className="text-lg font-bold text-[#0F172A]">Action Steps</h4>
//                     </div>
                    
//                     <div className="space-y-3">
//                       {phase.steps.map((step, sIndex) => {
//                         const key = `${pIndex}-${sIndex}`;
//                         const isCompleted = completedSteps[key] || false;
                        
//                         return (
//                           <motion.div
//                             key={sIndex}
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: sIndex * 0.05 }}
//                             className={`flex items-start gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer group ${
//                               isCompleted 
//                                 ? "bg-[#14B8A6]/5 border-[#14B8A6]/20" 
//                                 : "bg-slate-50 border-slate-200 hover:border-[#6D28D9]/30"
//                             }`}
//                             onClick={() => toggleStep(pIndex, sIndex)}
//                           >
//                             <div className="flex-shrink-0 pt-0.5">
//                               {isCompleted ? (
//                                 <CheckCircle2 className="w-6 h-6 text-[#14B8A6]" />
//                               ) : (
//                                 <Circle className="w-6 h-6 text-slate-300 group-hover:text-[#6D28D9] transition-colors" />
//                               )}
//                             </div>
//                             <span className={`text-sm font-medium leading-relaxed ${
//                               isCompleted 
//                                 ? "text-slate-400 line-through" 
//                                 : "text-[#0F172A]"
//                             }`}>
//                               {step}
//                             </span>
//                           </motion.div>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* Tools Section */}
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-2 mb-4">
//                       <Wrench className="w-5 h-5 text-[#6D28D9]" />
//                       <h4 className="text-lg font-bold text-[#0F172A]">Recommended Tools</h4>
//                     </div>
                    
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
//                       {phase.tools.map((tool, i) => (
//                         <div 
//                           key={i}
//                           className="px-4 py-3 bg-[#C4B5FD]/10 border border-[#C4B5FD]/20 rounded-xl text-sm font-bold text-[#6D28D9] text-center"
//                         >
//                           {tool}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Resources Section */}
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-2 mb-4">
//                       <FileText className="w-5 h-5 text-[#6D28D9]" />
//                       <h4 className="text-lg font-bold text-[#0F172A]">Learning Resources</h4>
//                     </div>

//                     <div className="grid md:grid-cols-3 gap-6">
//                       {/* YouTube Links */}
//                       <div className="space-y-3">
//                         <div className="flex items-center gap-2 mb-3">
//                           <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
//                             <Youtube className="w-5 h-5 text-red-600" />
//                           </div>
//                           <p className="font-bold text-sm text-[#0F172A]">Video Tutorials</p>
//                         </div>
//                         {phase.youtubeLinks.length > 0 ? (
//                           phase.youtubeLinks.map((link, i) => (
//                             <a 
//                               key={i} 
//                               href={link} 
//                               target="_blank" 
//                               rel="noreferrer"
//                               className="block px-4 py-2 bg-red-50 border border-red-100 rounded-xl text-xs font-medium text-red-600 hover:bg-red-100 transition-all truncate"
//                             >
//                               Tutorial {i + 1}
//                             </a>
//                           ))
//                         ) : (
//                           <p className="text-xs text-slate-400">No videos available</p>
//                         )}
//                       </div>

//                       {/* GitHub References */}
//                       <div className="space-y-3">
//                         <div className="flex items-center gap-2 mb-3">
//                           <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center">
//                             <Github className="w-5 h-5 text-[#0F172A]" />
//                           </div>
//                           <p className="font-bold text-sm text-[#0F172A]">Code Examples</p>
//                         </div>
//                         {phase.githubReferences.length > 0 ? (
//                           phase.githubReferences.map((link, i) => (
//                             <a 
//                               key={i} 
//                               href={link} 
//                               target="_blank" 
//                               rel="noreferrer"
//                               className="block px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-[#0F172A] hover:bg-slate-100 transition-all truncate"
//                             >
//                               Repository {i + 1}
//                             </a>
//                           ))
//                         ) : (
//                           <p className="text-xs text-slate-400">No repos available</p>
//                         )}
//                       </div>

//                       {/* Research Papers */}
//                       <div className="space-y-3">
//                         <div className="flex items-center gap-2 mb-3">
//                           <div className="w-8 h-8 bg-[#C4B5FD]/20 rounded-lg flex items-center justify-center">
//                             <FileText className="w-5 h-5 text-[#6D28D9]" />
//                           </div>
//                           <p className="font-bold text-sm text-[#0F172A]">Research</p>
//                         </div>
//                         {phase.researchPapers.length > 0 ? (
//                           phase.researchPapers.map((link, i) => (
//                             <a 
//                               key={i} 
//                               href={link} 
//                               target="_blank" 
//                               rel="noreferrer"
//                               className="block px-4 py-2 bg-[#C4B5FD]/10 border border-[#C4B5FD]/20 rounded-xl text-xs font-medium text-[#6D28D9] hover:bg-[#C4B5FD]/20 transition-all truncate"
//                             >
//                               Paper {i + 1}
//                             </a>
//                           ))
//                         ) : (
//                           <p className="text-xs text-slate-400">No papers available</p>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>

//         {/* Empty State */}
//         {!roadmap && !loading && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="py-32 text-center"
//           >
//             <div className="w-20 h-20 bg-[#C4B5FD]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
//               <Target size={40} className="text-[#6D28D9]/30" />
//             </div>
//             <h3 className="text-2xl font-black text-[#0F172A] mb-2">No Blueprint Yet</h3>
//             <p className="text-slate-500">Select a project and generate your execution roadmap</p>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import API from "../api";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { 
  Target, 
  Sparkles, 
  CheckCircle2, 
  Circle, 
  Loader2, 
  Youtube, 
  Github, 
  FileText,
  Wrench,
  TrendingUp,
  Calendar,
  Zap
} from "lucide-react";

export default function MilestoneBuilder() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [customInstructions, setCustomInstructions] = useState("");
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [completedSteps, setCompletedSteps] = useState({});

  /* ==============================
     FETCH SELECTED PROJECTS
  =============================== */
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects/my-projects");
        setProjects(res.data.projects);
      } catch {
        toast.error("Failed to fetch projects");
      }
    };
    fetchProjects();
  }, []);

  /* ==============================
     GENERATE ROADMAP
  =============================== */
  const generateRoadmap = async () => {
    if (!selectedProjectId) {
      toast.error("Select a project first");
      return;
    }

    setLoading(true);
    try {
      const res = await API.post("/milestones/generate", {
        projectId: selectedProjectId,
        customInstructions
      });

      setRoadmap(res.data.roadmap);
      setCompletedSteps({});
      toast.success("Execution Blueprint Generated 🚀");
    } catch {
      toast.error("Failed to generate roadmap");
    }
    setLoading(false);
  };

  /* ==============================
     CHECKBOX HANDLER
  =============================== */
  const toggleStep = (phaseIndex, stepIndex) => {
    const key = `${phaseIndex}-${stepIndex}`;
    setCompletedSteps(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  /* ==============================
     CALCULATE PROGRESS
  =============================== */
  const calculateProgress = () => {
    if (!roadmap) return 0;

    let total = 0;
    roadmap.phases.forEach(phase => {
      total += phase.steps.length;
    });

    const completed = Object.values(completedSteps).filter(Boolean).length;

    return total === 0 ? 0 : Math.round((completed / total) * 100);
  };

  const progress = calculateProgress();

  // Calculate phase completion
  const getPhaseProgress = (phaseIndex) => {
    if (!roadmap) return 0;
    const phase = roadmap.phases[phaseIndex];
    let completed = 0;
    phase.steps.forEach((_, stepIndex) => {
      const key = `${phaseIndex}-${stepIndex}`;
      if (completedSteps[key]) completed++;
    });
    return Math.round((completed / phase.steps.length) * 100);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6D28D9]/5 border border-[#6D28D9]/10">
            <Target className="w-4 h-4 text-[#6D28D9]" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#6D28D9]">
              Execution Engine
            </span>
          </div>
          
          <h1 className="text-5xl font-black text-[#0F172A] tracking-tight">
            Project Blueprint
          </h1>
          
          <p className="text-lg text-slate-500 max-w-2xl">
            AI-powered execution roadmap with step-by-step guidance, tools, and resources.
          </p>
        </motion.div>

        {/* PROJECT SELECT & GENERATE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-black text-[#0F172A]">Generate Blueprint</h2>
              <p className="text-sm text-slate-500">Select project and customize your roadmap</p>
            </div>
          </div>

          {/* Project Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Select Project
            </label>
            <div className="relative">
              <select
                value={selectedProjectId}
                onChange={e => setSelectedProjectId(e.target.value)}
                className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/50 focus:border-[#6D28D9] focus:bg-white transition-all text-[#0F172A] font-medium appearance-none cursor-pointer"
              >
                <option value="">Choose from your vault...</option>
                {projects.map(project => (
                  <option key={project._id} value={project._id}>
                    {project.title}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Custom Instructions */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Custom Instructions (Optional)
            </label>
            <textarea
              placeholder="e.g., Build MVP in 2 months, Focus on technical implementation..."
              value={customInstructions}
              onChange={e => setCustomInstructions(e.target.value)}
              className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/50 focus:border-[#6D28D9] focus:bg-white transition-all text-[#0F172A] font-medium resize-none"
              rows={3}
            />
          </div>

          {/* Generate Button */}
          <motion.button
            onClick={generateRoadmap}
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            className="w-full bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white py-4 rounded-2xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#6D28D9]/30 flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Generating Blueprint...</span>
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                <span>Generate Execution Blueprint</span>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* PROGRESS TRACKER */}
        <AnimatePresence>
          {roadmap && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-[#0F172A]">Overall Progress</h2>
                    <p className="text-sm text-slate-500">Track your execution journey</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-black text-[#0F172A]">{progress}%</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Complete</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#6D28D9] via-[#C4B5FD] to-[#14B8A6] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ROADMAP PHASES */}
        <AnimatePresence>
          {roadmap && roadmap.phases.map((phase, pIndex) => {
            const phaseProgress = getPhaseProgress(pIndex);
            
            return (
              <motion.div
                key={pIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: pIndex * 0.1 }}
                className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
              >
                {/* Phase Header */}
                <div className="bg-gradient-to-r from-[#6D28D9]/5 to-[#C4B5FD]/5 p-8 border-b border-slate-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-black text-white">{pIndex + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-black text-[#0F172A] mb-2">
                          {phase.phaseTitle}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">{phase.goal}</p>
                      </div>
                    </div>
                    
                    {/* Phase Progress Badge */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6D28D9] to-[#14B8A6]" />
                      <span className="text-sm font-bold text-[#0F172A]">{phaseProgress}%</span>
                    </div>
                  </div>

                  {/* Mini Progress Bar */}
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-4">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#6D28D9] to-[#14B8A6] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${phaseProgress}%` }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  {/* Steps Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-[#6D28D9]" />
                      <h4 className="text-lg font-bold text-[#0F172A]">Action Steps</h4>
                    </div>
                    
                    <div className="space-y-3">
                      {phase.steps.map((step, sIndex) => {
                        const key = `${pIndex}-${sIndex}`;
                        const isCompleted = completedSteps[key] || false;
                        
                        return (
                          <motion.div
                            key={sIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: sIndex * 0.05 }}
                            className={`flex items-start gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer group ${
                              isCompleted 
                                ? "bg-[#14B8A6]/5 border-[#14B8A6]/20" 
                                : "bg-slate-50 border-slate-200 hover:border-[#6D28D9]/30"
                            }`}
                            onClick={() => toggleStep(pIndex, sIndex)}
                          >
                            <div className="flex-shrink-0 pt-0.5">
                              {isCompleted ? (
                                <CheckCircle2 className="w-6 h-6 text-[#14B8A6]" />
                              ) : (
                                <Circle className="w-6 h-6 text-slate-300 group-hover:text-[#6D28D9] transition-colors" />
                              )}
                            </div>
                            <span className={`text-sm font-medium leading-relaxed ${
                              isCompleted 
                                ? "text-slate-400 line-through" 
                                : "text-[#0F172A]"
                            }`}>
                              {step}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tools Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Wrench className="w-5 h-5 text-[#6D28D9]" />
                      <h4 className="text-lg font-bold text-[#0F172A]">Recommended Tools</h4>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {phase.tools.map((tool, i) => (
                        <div 
                          key={i}
                          className="px-4 py-3 bg-[#C4B5FD]/10 border border-[#C4B5FD]/20 rounded-xl text-sm font-bold text-[#6D28D9] text-center"
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Resources Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="w-5 h-5 text-[#6D28D9]" />
                      <h4 className="text-lg font-bold text-[#0F172A]">Learning Resources</h4>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {/* YouTube Links */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                            <Youtube className="w-5 h-5 text-red-600" />
                          </div>
                          <p className="font-bold text-sm text-[#0F172A]">Video Tutorials</p>
                        </div>
                        {phase.youtubeLinks.length > 0 ? (
                          phase.youtubeLinks.map((link, i) => (
                            <a 
                              key={i} 
                              href={link} 
                              target="_blank" 
                              rel="noreferrer"
                              className="block px-4 py-2 bg-red-50 border border-red-100 rounded-xl text-xs font-medium text-red-600 hover:bg-red-100 transition-all truncate"
                            >
                              Tutorial {i + 1}
                            </a>
                          ))
                        ) : (
                          <p className="text-xs text-slate-400">No videos available</p>
                        )}
                      </div>

                      {/* GitHub References */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center">
                            <Github className="w-5 h-5 text-[#0F172A]" />
                          </div>
                          <p className="font-bold text-sm text-[#0F172A]">Code Examples</p>
                        </div>
                        {phase.githubReferences.length > 0 ? (
                          phase.githubReferences.map((link, i) => (
                            <a 
                              key={i} 
                              href={link} 
                              target="_blank" 
                              rel="noreferrer"
                              className="block px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-[#0F172A] hover:bg-slate-100 transition-all truncate"
                            >
                              Repository {i + 1}
                            </a>
                          ))
                        ) : (
                          <p className="text-xs text-slate-400">No repos available</p>
                        )}
                      </div>

                      {/* Research Papers */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 bg-[#C4B5FD]/20 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-[#6D28D9]" />
                          </div>
                          <p className="font-bold text-sm text-[#0F172A]">Research</p>
                        </div>
                        {phase.researchPapers.length > 0 ? (
                          phase.researchPapers.map((link, i) => (
                            <a 
                              key={i} 
                              href={link} 
                              target="_blank" 
                              rel="noreferrer"
                              className="block px-4 py-2 bg-[#C4B5FD]/10 border border-[#C4B5FD]/20 rounded-xl text-xs font-medium text-[#6D28D9] hover:bg-[#C4B5FD]/20 transition-all truncate"
                            >
                              Paper {i + 1}
                            </a>
                          ))
                        ) : (
                          <p className="text-xs text-slate-400">No papers available</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Empty State */}
        {!roadmap && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-32 text-center"
          >
            <div className="w-20 h-20 bg-[#C4B5FD]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Target size={40} className="text-[#6D28D9]/30" />
            </div>
            <h3 className="text-2xl font-black text-[#0F172A] mb-2">No Blueprint Yet</h3>
            <p className="text-slate-500">Select a project and generate your execution roadmap</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}