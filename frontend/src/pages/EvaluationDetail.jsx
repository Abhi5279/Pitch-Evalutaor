// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import API from "../api";
// // import {
// //   ResponsiveContainer,
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   RadarChart,
// //   Radar,
// //   PolarGrid,
// //   PolarAngleAxis,
// //   PolarRadiusAxis
// // } from "recharts";

// // export default function EvaluationDetail() {
// //   const { id } = useParams();

// //   const [evaluation, setEvaluation] = useState(null);
// //   const [explanation, setExplanation] = useState(null);
// //   const [loadingExplanation, setLoadingExplanation] = useState(false);

// //   useEffect(() => {
// //     const fetchEvaluation = async () => {
// //       try {
// //         const res = await API.get(`/pitch/${id}`);
// //         setEvaluation(res.data.evaluation);
// //       } catch {
// //         alert("Failed to fetch evaluation");
// //       }
// //     };

// //     fetchEvaluation();
// //   }, [id]);

// //   if (!evaluation) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <p className="text-indigo-600 font-medium">Loading analytics...</p>
// //       </div>
// //     );
// //   }

// //   /* ----------- DATA FORMAT ----------- */

// //   const coreData = Object.entries(evaluation.coreScores).map(
// //     ([key, value]) => ({
// //       name: key,
// //       score: value.score,
// //       reason: value.reason
// //     })
// //   );

// //   const communicationData = Object.entries(
// //     evaluation.communicationScores
// //   ).map(([key, value]) => ({
// //     subject: key,
// //     score: value
// //   }));

// //   const riskData = Object.entries(evaluation.riskScores).map(
// //     ([key, value]) => ({
// //       name: key,
// //       score: value
// //     })
// //   );

// //   /* ----------- LOAD EXPLANATION ----------- */

// //   const loadExplanation = async () => {
// //     try {
// //       setLoadingExplanation(true);
// //       const res = await API.post(`/pitch/explain/${id}`);
// //       setExplanation(res.data.explanation);
// //     } catch {
// //       alert("Failed to generate explanation");
// //     } finally {
// //       setLoadingExplanation(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-12 px-6">
// //       <div className="max-w-7xl mx-auto space-y-12">

// //         {/* HEADER */}
// //         <div>
// //           <h1 className="text-3xl font-bold text-gray-800">
// //             Detailed Pitch Analytics
// //           </h1>
// //           <p className="text-gray-600 mt-2">
// //             Institutional-grade evaluation breakdown
// //           </p>
// //         </div>

// //         {/* OVERALL SCORE */}
// //         <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
// //           <h2 className="text-lg font-semibold text-gray-600">
// //             Overall Score
// //           </h2>
// //           <p className="text-5xl font-bold text-indigo-600 mt-4">
// //             {evaluation.weightedOverallScore}
// //           </p>
// //         </div>

// //         {/* CHART GRID */}
// //         <div className="grid lg:grid-cols-2 gap-10">

// //           {/* CORE BAR */}
// //           <div className="bg-white p-6 rounded-2xl shadow-lg">
// //             <h3 className="font-semibold mb-4">Core Metrics</h3>
// //             <ResponsiveContainer width="100%" height={300}>
// //               <BarChart data={coreData}>
// //                 <XAxis dataKey="name" hide />
// //                 <YAxis domain={[0, 10]} />
// //                 <Tooltip />
// //                 <Bar dataKey="score" fill="#6366f1" />
// //               </BarChart>
// //             </ResponsiveContainer>
// //           </div>

// //           {/* COMMUNICATION RADAR */}
// //           <div className="bg-white p-6 rounded-2xl shadow-lg">
// //             <h3 className="font-semibold mb-4">
// //               Communication Profile
// //             </h3>
// //             <ResponsiveContainer width="100%" height={300}>
// //               <RadarChart data={communicationData}>
// //                 <PolarGrid />
// //                 <PolarAngleAxis dataKey="subject" />
// //                 <PolarRadiusAxis domain={[0, 10]} />
// //                 <Radar
// //                   dataKey="score"
// //                   stroke="#10b981"
// //                   fill="#10b981"
// //                   fillOpacity={0.6}
// //                 />
// //               </RadarChart>
// //             </ResponsiveContainer>
// //           </div>

// //           {/* RISK BAR */}
// //           <div className="bg-white p-6 rounded-2xl shadow-lg">
// //             <h3 className="font-semibold mb-4">Risk Profile</h3>
// //             <ResponsiveContainer width="100%" height={250}>
// //               <BarChart data={riskData}>
// //                 <XAxis dataKey="name" hide />
// //                 <YAxis domain={[0, 10]} />
// //                 <Tooltip />
// //                 <Bar dataKey="score" fill="#ef4444" />
// //               </BarChart>
// //             </ResponsiveContainer>
// //           </div>
// //         </div>

// //         {/* METRIC REASONS */}
// //         <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
// //           <h3 className="text-xl font-semibold">
// //             Core Metric Justifications
// //           </h3>

// //           {coreData.map((item, index) => (
// //             <div
// //               key={index}
// //               className="p-4 border rounded-xl bg-gray-50"
// //             >
// //               <div className="flex justify-between">
// //                 <span className="capitalize font-medium">
// //                   {item.name}
// //                 </span>
// //                 <span className="font-bold text-indigo-600">
// //                   {item.score}/10
// //                 </span>
// //               </div>
// //               <p className="text-gray-600 text-sm mt-2">
// //                 {item.reason}
// //               </p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* EXPLANATION BUTTON */}
// //         <div className="text-center">
// //           <motion.button
// //             whileTap={{ scale: 0.95 }}
// //             onClick={loadExplanation}
// //             disabled={loadingExplanation}
// //             className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg transition disabled:opacity-50"
// //           >
// //             {loadingExplanation
// //               ? "Generating Investor Analysis..."
// //               : "Generate Full Investor Analysis"}
// //           </motion.button>
// //         </div>

// //         {/* EXPLANATION SECTION */}
// //         {explanation && (
// //           <div className="bg-white p-10 rounded-2xl shadow-xl space-y-8">

// //             <Section title="Key Strengths" items={explanation.keyStrengths} />
// //             <Section title="Key Weaknesses" items={explanation.keyWeaknesses} />
// //             <Section
// //               title="Investor Likely Questions"
// //               items={explanation.investorLikelyQuestions}
// //             />

// //             <div>
// //               <h3 className="font-semibold mb-2">Refined Version</h3>
// //               <p className="text-gray-700 whitespace-pre-line">
// //                 {explanation.refinedVersion}
// //               </p>
// //             </div>

// //             <div>
// //               <h3 className="font-semibold mb-2">
// //                 Elite 60 Second Version
// //               </h3>
// //               <p className="text-gray-700 whitespace-pre-line">
// //                 {explanation.elite60SecondVersion}
// //               </p>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // /* SMALL SECTION COMPONENT */
// // function Section({ title, items }) {
// //   if (!items || items.length === 0) return null;

// //   return (
// //     <div>
// //       <h3 className="font-semibold mb-3">{title}</h3>
// //       <ul className="list-disc pl-6 space-y-2 text-gray-700">
// //         {items.map((item, i) => (
// //           <li key={i}>{item}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }


// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import API from "../api";
// import {
//   ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip,
//   RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Cell,
//   PieChart, Pie
// } from "recharts";
// import { 
//   Cpu, ShieldAlert, Zap, MessageSquare, 
//   ChevronRight, Sparkles, Terminal, FileText, Loader2, TrendingUp 
// } from "lucide-react";

// const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"];

// export default function EvaluationDetail() {
//   const { id } = useParams();
//   const [evaluation, setEvaluation] = useState(null);
//   const [explanation, setExplanation] = useState(null);
//   const [loadingExplanation, setLoadingExplanation] = useState(false);

//   useEffect(() => {
//     const fetchEvaluation = async () => {
//       try {
//         const res = await API.get(`/pitch/${id}`);
//         setEvaluation(res.data.evaluation);
//       } catch {
//         console.error("Failed to fetch analytics");
//       }
//     };
//     fetchEvaluation();
//   }, [id]);

//   if (!evaluation) {
//     return (
//       <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center space-y-4">
//         <Loader2 className="w-10 h-10 text-[#4F46E5] animate-spin" />
//         <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Accessing Secure Records...</p>
//       </div>
//     );
//   }

//   /* ----------- DATA MAPPING (Matches Result File Exactly) ----------- */
//   const coreData = Object.entries(evaluation.coreScores).map(([key, value]) => ({
//     name: key.replace(/([A-Z])/g, ' $1').trim(),
//     score: value.score,
//     reason: value.reason
//   }));

//   const communicationData = Object.entries(evaluation.communicationScores).map(([key, value]) => ({
//     subject: key.charAt(0).toUpperCase() + key.slice(1),
//     score: value
//   }));

//   const riskData = Object.entries(evaluation.riskScores).map(([key, value]) => ({
//     name: key.replace(/([A-Z])/g, ' $1').trim(),
//     score: value
//   }));

//   const pieData = [
//     { name: "Core Metrics", value: 60 },
//     { name: "Communication", value: 40 },
//   ];

//   const loadExplanation = async () => {
//     try {
//       setLoadingExplanation(true);
//       const res = await API.post(`/pitch/explain/${id}`);
//       setExplanation(res.data.explanation);
//     } catch {
//       alert("AI Synthesis Failed");
//     } finally {
//       setLoadingExplanation(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F9FAFB] pt-32 pb-24 px-6">
//       <div className="max-w-7xl mx-auto space-y-8">
        
//         {/* TOP LEVEL STATS BAR */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//           <div className="lg:col-span-3 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-8">
//             <div>
//               <div className="flex items-center gap-2 text-indigo-600 font-black text-[10px] uppercase tracking-widest mb-2">
//                 <Cpu size={14} /> Neural Evaluation ID: {id.slice(-6)}
//               </div>
//               <h1 className="text-4xl font-black text-slate-900 tracking-tighter leading-none">
//                 Executive <span className="text-indigo-600">Audit</span> Report
//               </h1>
//             </div>
//             <div className="flex items-center gap-6">
//                 <div className="text-center">
//                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Overall Score</p>
//                     <div className="text-5xl font-black text-indigo-600 tracking-tighter">{evaluation.weightedOverallScore}</div>
//                 </div>
//                 <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-100">
//                     <TrendingUp size={32} />
//                 </div>
//             </div>
//           </div>

//           {/* DISTRIBUTION PIE (WEIGHTED) */}
//           <div className="bg-[#111827] p-6 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center">
//             <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Weight Distribution</h3>
//             <div className="h-32 w-full">
//                 <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                         <Pie data={pieData} innerRadius={35} outerRadius={50} paddingAngle={5} dataKey="value">
//                             {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />)}
//                         </Pie>
//                         <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', fontSize: '12px' }} />
//                     </PieChart>
//                 </ResponsiveContainer>
//             </div>
//           </div>
//         </div>

//         {/* PRIMARY DATA GRID */}
//         <div className="grid lg:grid-cols-12 gap-8">
          
//           {/* CORE SCORE BREAKDOWN (Left 8 Columns) */}
//           <div className="lg:col-span-8 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
//             <div className="flex justify-between items-center mb-10">
//                 <h2 className="text-xl font-black text-slate-900 flex items-center gap-3">
//                     <Zap className="text-indigo-600" /> Core Score Breakdown
//                 </h2>
//                 <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full uppercase tracking-widest">Institutional Grade</span>
//             </div>
//             <div className="h-[350px]">
//                 <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={coreData}>
//                         <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} dy={10} />
//                         <YAxis domain={[0, 10]} hide />
//                         <Tooltip cursor={{fill: '#F1F5F9'}} content={({ active, payload }) => {
//                             if (active && payload && payload.length) {
//                                 return (
//                                     <div className="bg-white p-4 shadow-2xl rounded-2xl border border-slate-100 max-w-xs">
//                                         <p className="font-black text-indigo-600 mb-1 uppercase text-[10px] tracking-widest">{payload[0].payload.name}</p>
//                                         <p className="text-xs text-slate-500 leading-relaxed">{payload[0].payload.reason}</p>
//                                     </div>
//                                 );
//                             }
//                             return null;
//                         }} />
//                         <Bar dataKey="score" radius={[12, 12, 12, 12]} barSize={50}>
//                             {coreData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
//                         </Bar>
//                     </BarChart>
//                 </ResponsiveContainer>
//             </div>
//           </div>

//           {/* COMMUNICATION PROFILE (Right 4 Columns) */}
//           <div className="lg:col-span-4 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
//             <h2 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
//                 <MessageSquare className="text-emerald-500" /> Communication Profile
//             </h2>
//             <div className="h-[300px]">
//                 <ResponsiveContainer width="100%" height="100%">
//                     <RadarChart data={communicationData}>
//                         <PolarGrid stroke="#f1f5f9" />
//                         <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }} />
//                         <Radar dataKey="score" stroke="#10B981" fill="#10B981" fillOpacity={0.4} />
//                     </RadarChart>
//                 </ResponsiveContainer>
//             </div>
//           </div>
//         </div>

//         {/* RISK PROFILE GRID (Full Width) */}
//         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
//             <h2 className="text-xl font-black text-slate-900 mb-10 flex items-center gap-3">
//                 <ShieldAlert className="text-rose-500" /> Risk Profile Analysis
//             </h2>
//             <div className="grid md:grid-cols-4 gap-8">
//                 {riskData.map((risk, i) => (
//                     <div key={i} className="space-y-4">
//                         <div className="flex justify-between items-end">
//                             <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{risk.name}</span>
//                             <span className="text-xl font-black text-slate-900">{risk.score}</span>
//                         </div>
//                         <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
//                             <motion.div initial={{ width: 0 }} animate={{ width: `${risk.score * 10}%` }} 
//                                 className={`h-full rounded-full ${risk.score > 7 ? 'bg-rose-500' : 'bg-amber-400'}`} 
//                             />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>

//         {/* METRIC JUSTIFICATIONS (Replacement for the "Dumb" Reasons) */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {coreData.map((item, i) => (
//                 <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group">
//                     <div className="flex justify-between items-start mb-4">
//                         <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 font-black group-hover:bg-indigo-600 group-hover:text-white transition-colors">{i+1}</div>
//                         <div className="text-2xl font-black text-indigo-600">{item.score}<span className="text-[10px] text-slate-300">/10</span></div>
//                     </div>
//                     <h4 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em] mb-3">{item.name}</h4>
//                     <p className="text-sm text-slate-500 leading-relaxed italic">"{item.reason}"</p>
//                 </div>
//             ))}
//         </div>

//         {/* AI GENERATION TRIGGER */}
//         <div className="pt-12 text-center">
//             <motion.button
//                 whileHover={{ scale: 1.02, y: -4 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={loadExplanation}
//                 disabled={loadingExplanation}
//                 className="bg-[#111827] text-white px-12 py-5 rounded-[2rem] font-bold text-lg shadow-2xl flex items-center gap-3 mx-auto transition-all hover:bg-indigo-600 disabled:opacity-50"
//             >
//                 {loadingExplanation ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
//                 {loadingExplanation ? "Decoding Neural Patterns..." : "Generate Advanced Synthesis"}
//             </motion.button>
//         </div>

//         {/* ADVANCED EXPLANATION (Only shows if explanation exists) */}
//         <AnimatePresence>
//           {explanation && (
//             <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="bg-[#111827] rounded-[3.5rem] p-1 shadow-2xl overflow-hidden mt-12">
//                <div className="bg-white rounded-[3.4rem] p-10 lg:p-20">
//                     <div className="flex items-center gap-3 text-indigo-600 font-black text-xs uppercase tracking-[0.4em] mb-6">
//                         <Terminal size={16} /> Advanced AI Synthesis
//                     </div>
                    
//                     <div className="grid lg:grid-cols-2 gap-20">
//                         {/* LEFT: QUALITATIVE ANALYSIS */}
//                         <div className="space-y-12">
//                             <Section title="Key Strengths" items={explanation.keyStrengths} icon={<Zap className="text-emerald-500" />} />
//                             <Section title="Key Weaknesses" items={explanation.keyWeaknesses} icon={<ShieldAlert className="text-rose-500" />} />
//                             <Section title="Investor Likely Questions" items={explanation.investorLikelyQuestions} icon={<MessageSquare className="text-indigo-500" />} />
//                         </div>

//                         {/* RIGHT: REFINED CONTENT */}
//                         <div className="space-y-10 bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
//                             <div>
//                                 <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Refined Pitch Logic</h3>
//                                 <p className="text-slate-700 leading-relaxed text-sm whitespace-pre-line font-medium italic">"{explanation.refinedVersion}"</p>
//                             </div>
//                             <div className="h-px bg-slate-200 w-full" />
//                             <div>
//                                 <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Elite 60-Second Execution</h3>
//                                 <div className="p-6 bg-[#111827] rounded-3xl text-emerald-400 font-mono text-xs leading-relaxed">
//                                     {explanation.elite60SecondVersion}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//       </div>
//     </div>
//   );
// }

// function Section({ title, items, icon }) {
//   if (!items || items.length === 0) return null;
//   return (
//     <div>
//       <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
//         {icon} {title}
//       </h3>
//       <ul className="space-y-4">
//         {items.map((item, i) => (
//           <li key={i} className="flex gap-4 text-slate-600 font-medium leading-relaxed">
//              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
//              {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import API from "../api";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Cell,
  PieChart, Pie, LineChart, Line, CartesianGrid, Legend, AreaChart, Area
} from "recharts";
import { 
  Cpu, ShieldAlert, Zap, MessageSquare, 
  ChevronRight, Sparkles, Terminal, FileText, Loader2, TrendingUp,
  Target, Award, Brain, Activity, CheckCircle2, XCircle, AlertTriangle,
  Users, DollarSign, BarChart3, PieChart as PieIcon, Download, Share2,
  Clock, Calendar, Star, ThumbsUp, ThumbsDown, Lightbulb, Rocket,
  TrendingDown, ArrowUpRight, Info
} from "lucide-react";

const COLORS = ["#6D28D9", "#8B5CF6", "#C4B5FD", "#14B8A6", "#A78BFA"];

export default function EvaluationDetail() {
  const { id } = useParams();
  const [evaluation, setEvaluation] = useState(null);
  const [explanation, setExplanation] = useState(null);
  const [loadingExplanation, setLoadingExplanation] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchEvaluation = async () => {
      try {
        const res = await API.get(`/pitch/${id}`);
        setEvaluation(res.data.evaluation);
      } catch {
        console.error("Failed to fetch analytics");
      }
    };
    fetchEvaluation();
  }, [id]);

  if (!evaluation) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-12 h-12 text-[#6D28D9] animate-spin" />
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Accessing Secure Records...</p>
      </div>
    );
  }

  /* ----------- DATA MAPPING ----------- */
  const coreData = Object.entries(evaluation.coreScores).map(([key, value]) => ({
    name: key.replace(/([A-Z])/g, ' $1').trim(),
    score: value.score,
    reason: value.reason
  }));

  const communicationData = Object.entries(evaluation.communicationScores).map(([key, value]) => ({
    subject: key.charAt(0).toUpperCase() + key.slice(1),
    score: value,
    fullMark: 10
  }));

  const riskData = Object.entries(evaluation.riskScores).map(([key, value]) => ({
    name: key.replace(/([A-Z])/g, ' $1').trim(),
    score: value
  }));

  // Additional visualizations
  const trendData = coreData.map((item, index) => ({
    category: item.name.split(' ')[0],
    current: item.score,
    benchmark: 7.5,
  }));

  const distributionData = [
    { range: "0-2", count: coreData.filter(d => d.score <= 2).length },
    { range: "3-5", count: coreData.filter(d => d.score > 2 && d.score <= 5).length },
    { range: "6-8", count: coreData.filter(d => d.score > 5 && d.score <= 8).length },
    { range: "9-10", count: coreData.filter(d => d.score > 8).length },
  ];

  const pieData = coreData.slice(0, 5).map((item, index) => ({
    name: item.name,
    value: item.score,
    color: COLORS[index % COLORS.length]
  }));

  // Calculate stats
  const avgScore = (coreData.reduce((acc, item) => acc + item.score, 0) / coreData.length).toFixed(1);
  const highScores = coreData.filter(d => d.score >= 8).length;
  const lowScores = coreData.filter(d => d.score < 5).length;
  const avgRisk = (riskData.reduce((acc, item) => acc + item.score, 0) / riskData.length).toFixed(1);
  const avgComm = (communicationData.reduce((acc, item) => acc + item.score, 0) / communicationData.length).toFixed(1);

  const loadExplanation = async () => {
    try {
      setLoadingExplanation(true);
      const res = await API.post(`/pitch/explain/${id}`);
      setExplanation(res.data.explanation);
    } catch {
      alert("AI Synthesis Failed");
    } finally {
      setLoadingExplanation(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 8) return { text: "text-[#14B8A6]", bg: "bg-[#14B8A6]/10", border: "border-[#14B8A6]/30" };
    if (score >= 6) return { text: "text-[#6D28D9]", bg: "bg-[#C4B5FD]/20", border: "border-[#C4B5FD]" };
    if (score >= 4) return { text: "text-amber-500", bg: "bg-amber-50", border: "border-amber-200" };
    return { text: "text-red-500", bg: "bg-red-50", border: "border-red-200" };
  };

  const scoreColor = getScoreColor(evaluation.weightedOverallScore);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HERO HEADER WITH SCORE CARD */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main Title Card */}
          <div className="lg:col-span-8 bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 text-[#6D28D9] font-black text-[10px] uppercase tracking-widest mb-3">
                  <Brain size={14} /> Neural Evaluation ID: {id.slice(-8).toUpperCase()}
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight mb-3">
                  Executive Intelligence Report
                </h1>
                <p className="text-slate-600 text-lg">Comprehensive AI-powered pitch analysis with institutional-grade metrics</p>
              </div>
              <div className="flex gap-2">
                <button className="p-3 bg-slate-50 rounded-xl border-2 border-slate-200 hover:border-[#6D28D9] transition-all">
                  <Download size={18} className="text-slate-600" />
                </button>
                <button className="p-3 bg-slate-50 rounded-xl border-2 border-slate-200 hover:border-[#6D28D9] transition-all">
                  <Share2 size={18} className="text-slate-600" />
                </button>
              </div>
            </div>

            {/* Metadata Row */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-200">
                <Calendar size={14} className="text-slate-400" />
                <span className="text-xs font-bold text-slate-600">
                  {new Date(evaluation.createdAt).toLocaleDateString(undefined, { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-200">
                <Clock size={14} className="text-slate-400" />
                <span className="text-xs font-bold text-slate-600">Generated in 2.4s</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#14B8A6]/10 rounded-xl border border-[#14B8A6]/30">
                <Activity size={14} className="text-[#14B8A6]" />
                <span className="text-xs font-bold text-[#14B8A6]">High Confidence</span>
              </div>
            </div>
          </div>

          {/* Score Display Card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#6D28D9] to-[#5B21B6] p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-widest text-purple-200 mb-4">Overall Score</p>
              <div className="flex items-center justify-between mb-6">
                <div className="text-6xl font-black">{evaluation.weightedOverallScore}</div>
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Award size={32} className="text-[#14B8A6]" />
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                {evaluation.weightedOverallScore >= 8 ? (
                  <>
                    <CheckCircle2 size={16} />
                    <span className="text-sm font-bold">Investment Ready</span>
                  </>
                ) : evaluation.weightedOverallScore >= 6 ? (
                  <>
                    <Star size={16} />
                    <span className="text-sm font-bold">Strong Potential</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle size={16} />
                    <span className="text-sm font-bold">Needs Work</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* QUICK STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <StatCard icon={<Target size={18} />} label="Avg Score" value={avgScore} color="#6D28D9" />
          <StatCard icon={<TrendingUp size={18} />} label="High Scores" value={highScores} color="#14B8A6" />
          <StatCard icon={<TrendingDown size={18} />} label="Low Scores" value={lowScores} color="#EF4444" />
          <StatCard icon={<ShieldAlert size={18} />} label="Avg Risk" value={avgRisk} color="#F59E0B" />
          <StatCard icon={<MessageSquare size={18} />} label="Comm Score" value={avgComm} color="#6D28D9" />
          <StatCard icon={<BarChart3 size={18} />} label="Categories" value={coreData.length} color="#14B8A6" />
        </div>

        {/* TAB NAVIGATION */}
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-2 inline-flex gap-2 shadow-sm">
          {[
            { id: "overview", label: "Overview", icon: <BarChart3 size={16} /> },
            { id: "detailed", label: "Detailed Analysis", icon: <Activity size={16} /> },
            { id: "insights", label: "AI Insights", icon: <Brain size={16} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-[#6D28D9] text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* MAIN CHARTS ROW */}
            <div className="grid lg:grid-cols-12 gap-6">
              {/* CORE BAR CHART */}
              <div className="lg:col-span-8 bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-lg">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h2 className="text-2xl font-black text-[#0F172A] flex items-center gap-3 mb-2">
                      <Zap className="text-[#6D28D9]" /> Core Performance Metrics
                    </h2>
                    <p className="text-sm text-slate-500">Comprehensive category breakdown with AI justifications</p>
                  </div>
                  <span className="px-4 py-2 bg-[#C4B5FD]/20 text-[#6D28D9] rounded-xl text-xs font-bold border border-[#C4B5FD]/30">
                    Institutional Grade
                  </span>
                </div>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={coreData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#64748b', fontSize: 11, fontWeight: 700}} 
                        dy={10} 
                      />
                      <YAxis domain={[0, 10]} axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                      <Tooltip 
                        cursor={{fill: '#F8FAFC'}} 
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-white p-5 shadow-2xl rounded-2xl border-2 border-slate-200 max-w-sm">
                                <p className="font-black text-[#6D28D9] mb-2 uppercase text-xs tracking-wider">
                                  {payload[0].payload.name}
                                </p>
                                <p className="text-2xl font-black text-[#0F172A] mb-2">
                                  {payload[0].payload.score}/10
                                </p>
                                <p className="text-sm text-slate-600 leading-relaxed italic">
                                  "{payload[0].payload.reason}"
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }} 
                      />
                      <Bar dataKey="score" radius={[12, 12, 12, 12]} barSize={50}>
                        {coreData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* COMMUNICATION RADAR */}
              <div className="lg:col-span-4 bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-lg">
                <h2 className="text-xl font-black text-[#0F172A] mb-2 flex items-center gap-3">
                  <MessageSquare className="text-[#14B8A6]" /> Communication
                </h2>
                <p className="text-sm text-slate-500 mb-6">Pitch delivery analysis</p>
                <div className="h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={communicationData}>
                      <PolarGrid stroke="#E2E8F0" />
                      <PolarAngleAxis 
                        dataKey="subject" 
                        tick={{ fill: '#64748b', fontSize: 11, fontWeight: 700 }} 
                      />
                      <Radar 
                        dataKey="score" 
                        stroke="#14B8A6" 
                        fill="#14B8A6" 
                        fillOpacity={0.5} 
                      />
                      <Tooltip 
                        contentStyle={{ 
                          borderRadius: '12px', 
                          border: 'none',
                          backgroundColor: '#fff',
                          boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                        }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* SECOND ROW: PIE & LINE CHARTS */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* PIE CHART */}
              <div className="bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-black text-[#0F172A] mb-2 flex items-center gap-3">
                    <PieIcon className="text-[#6D28D9]" size={20} /> Score Distribution
                  </h3>
                  <p className="text-sm text-slate-500">Category performance breakdown</p>
                </div>
                <div className="flex items-center gap-8">
                  <div className="h-[220px] flex-1">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            borderRadius: '12px', 
                            border: 'none',
                            backgroundColor: '#fff',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2">
                    {pieData.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm font-semibold text-slate-700 flex-1">{item.name}</span>
                        <span className="text-sm font-bold text-slate-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* TREND LINE CHART */}
              <div className="bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-black text-[#0F172A] mb-2 flex items-center gap-3">
                    <Activity className="text-[#14B8A6]" size={20} /> Performance vs Benchmark
                  </h3>
                  <p className="text-sm text-slate-500">Comparison against industry standards</p>
                </div>
                <div className="h-[220px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                      <XAxis 
                        dataKey="category" 
                        axisLine={false} 
                        tickLine={false}
                        tick={{fill: '#64748b', fontSize: 11, fontWeight: 700}}
                      />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                      <Tooltip 
                        contentStyle={{ 
                          borderRadius: '12px', 
                          border: 'none',
                          backgroundColor: '#fff',
                          boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                        }}
                      />
                      <Legend iconType="circle" />
                      <Line 
                        type="monotone" 
                        dataKey="current" 
                        stroke="#6D28D9" 
                        strokeWidth={3}
                        dot={{ fill: '#6D28D9', r: 5 }}
                        name="Your Score"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="benchmark" 
                        stroke="#14B8A6" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={{ fill: '#14B8A6', r: 4 }}
                        name="Industry Avg"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* RISK ANALYSIS */}
            <div className="bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-black text-[#0F172A] flex items-center gap-3 mb-2">
                    <ShieldAlert className="text-red-500" /> Risk Profile Analysis
                  </h2>
                  <p className="text-sm text-slate-500">Comprehensive threat assessment matrix</p>
                </div>
                <div className="px-4 py-2 bg-red-50 rounded-xl border border-red-200">
                  <span className="text-xs font-bold text-red-600">
                    Avg Risk: {avgRisk}/10
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {riskData.map((risk, i) => (
                  <div key={i} className="space-y-4 p-6 bg-slate-50 rounded-2xl border-2 border-slate-200 hover:border-red-200 transition-all">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
                        {risk.name}
                      </span>
                      <span className={`text-2xl font-black ${
                        risk.score > 7 ? 'text-red-500' : 
                        risk.score > 5 ? 'text-amber-500' : 
                        'text-[#14B8A6]'
                      }`}>
                        {risk.score}
                      </span>
                    </div>
                    <div className="h-3 w-full bg-white rounded-full overflow-hidden border-2 border-slate-200">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: `${risk.score * 10}%` }} 
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={`h-full rounded-full ${
                          risk.score > 7 ? 'bg-red-500' : 
                          risk.score > 5 ? 'bg-amber-500' : 
                          'bg-[#14B8A6]'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "detailed" && (
          <div className="space-y-6">
            {/* SCORE RANGE DISTRIBUTION */}
            <div className="bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-[#0F172A] mb-2 flex items-center gap-3">
                  <BarChart3 className="text-[#6D28D9]" /> Score Range Distribution
                </h3>
                <p className="text-sm text-slate-500">How categories are distributed across score ranges</p>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={distributionData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis 
                      dataKey="range" 
                      axisLine={false} 
                      tickLine={false}
                      tick={{fill: '#64748b', fontSize: 12, fontWeight: 700}}
                    />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '12px', 
                        border: 'none',
                        backgroundColor: '#fff',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Bar dataKey="count" fill="#6D28D9" radius={[10, 10, 0, 0]} barSize={80} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* METRIC JUSTIFICATIONS GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreData.map((item, i) => {
                const color = getScoreColor(item.score);
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="p-8 bg-white rounded-3xl border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:border-[#6D28D9] hover:-translate-y-2 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 font-black text-lg group-hover:bg-[#6D28D9] group-hover:text-white transition-all">
                        {i+1}
                      </div>
                      <div className={`text-3xl font-black ${color.text}`}>
                        {item.score}
                        <span className="text-xs text-slate-400">/10</span>
                      </div>
                    </div>
                    <h4 className="font-black text-[#0F172A] uppercase text-sm tracking-wider mb-3">
                      {item.name}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed italic">
                      "{item.reason}"
                    </p>
                    <div className={`mt-4 h-2 w-full ${color.bg} rounded-full overflow-hidden border ${color.border}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.score * 10}%` }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                        className={`h-full ${color.text.replace('text-', 'bg-')}`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "insights" && (
          <div className="space-y-6">
            {/* AI GENERATION TRIGGER */}
            <div className="text-center py-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={loadExplanation}
                disabled={loadingExplanation || explanation}
                className="bg-[#6D28D9] text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center gap-3 mx-auto transition-all hover:bg-[#5B21B6] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loadingExplanation ? (
                  <>
                    <Loader2 className="animate-spin" size={24} />
                    Decoding Neural Patterns...
                  </>
                ) : explanation ? (
                  <>
                    <CheckCircle2 size={24} />
                    AI Synthesis Complete
                  </>
                ) : (
                  <>
                    <Sparkles size={24} />
                    Generate Advanced AI Synthesis
                  </>
                )}
              </motion.button>
            </div>

            {/* ADVANCED EXPLANATION */}
            <AnimatePresence>
              {explanation && (
                <motion.div 
                  initial={{ opacity: 0, y: 40 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-[#6D28D9] to-[#5B21B6] rounded-[3rem] p-1 shadow-2xl overflow-hidden"
                >
                  <div className="bg-white rounded-[2.9rem] p-10 lg:p-16">
                    <div className="flex items-center gap-3 text-[#6D28D9] font-black text-xs uppercase tracking-[0.4em] mb-8">
                      <Terminal size={18} /> Advanced AI Synthesis Engine
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-16">
                      {/* LEFT: QUALITATIVE ANALYSIS */}
                      <div className="space-y-10">
                        <Section 
                          title="Key Strengths" 
                          items={explanation.keyStrengths} 
                          icon={<ThumbsUp className="text-[#14B8A6]" />} 
                          iconBg="bg-[#14B8A6]/10"
                        />
                        <Section 
                          title="Key Weaknesses" 
                          items={explanation.keyWeaknesses} 
                          icon={<ThumbsDown className="text-red-500" />}
                          iconBg="bg-red-50"
                        />
                        <Section 
                          title="Investor Likely Questions" 
                          items={explanation.investorLikelyQuestions} 
                          icon={<MessageSquare className="text-[#6D28D9]" />}
                          iconBg="bg-[#C4B5FD]/20"
                        />
                      </div>

                      {/* RIGHT: REFINED CONTENT */}
                      <div className="space-y-8">
                        <div className="p-8 bg-slate-50 rounded-3xl border-2 border-slate-200">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-[#6D28D9] rounded-xl flex items-center justify-center">
                              <Lightbulb size={20} className="text-white" />
                            </div>
                            <h3 className="text-sm font-black text-slate-500 uppercase tracking-wider">
                              Refined Pitch Logic
                            </h3>
                          </div>
                          <p className="text-slate-700 leading-relaxed text-sm whitespace-pre-line italic">
                            "{explanation.refinedVersion}"
                          </p>
                        </div>
                        
                        <div className="p-8 bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl shadow-2xl">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-[#14B8A6]/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                              <Rocket size={20} className="text-[#14B8A6]" />
                            </div>
                            <h3 className="text-sm font-black text-[#14B8A6] uppercase tracking-wider">
                              Elite 60-Second Pitch
                            </h3>
                          </div>
                          <p className="text-purple-100 font-mono text-xs leading-relaxed">
                            {explanation.elite60SecondVersion}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

// HELPER COMPONENTS
function StatCard({ icon, label, value, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="p-5 bg-white rounded-2xl border-2 border-slate-200 shadow-sm hover:shadow-lg transition-all"
    >
      <div 
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
        style={{ backgroundColor: `${color}15` }}
      >
        <div style={{ color }}>{icon}</div>
      </div>
      <div className="text-3xl font-black text-[#0F172A] mb-1">{value}</div>
      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

function Section({ title, items, icon, iconBg }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center`}>
          {icon}
        </div>
        <h3 className="text-xl font-black text-[#0F172A]">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <motion.li 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-[#6D28D9] transition-all"
          >
            <div className="w-6 h-6 bg-[#6D28D9] rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {i + 1}
            </div>
            <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}