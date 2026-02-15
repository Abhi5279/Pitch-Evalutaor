// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   PieChart,
// //   Pie,
// //   Cell,
// //   Tooltip,
// //   ResponsiveContainer,
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   RadarChart,
// //   Radar,
// //   PolarGrid,
// //   PolarAngleAxis,
// //   PolarRadiusAxis,
// // } from "recharts";
// // import API from "../../api";

// // const COLORS = ["#6366f1", "#10b981", "#f59e0b", "#ef4444"];

// // export default function EvaluationOverview({ data }) {
// //   const [selecting, setSelecting] = useState(false);

// //   const {
// //     evaluationId,
// //     weightedOverallScore,
// //     coreScores,
// //     communicationScores,
// //     riskScores,
// //   } = data;

// //   /* ----------------- DATA FORMAT ----------------- */

// //   const coreData = Object.entries(coreScores).map(([key, value]) => ({
// //     name: key,
// //     score: value.score,
// //     reason: value.reason,
// //   }));

// //   const communicationData = Object.entries(communicationScores).map(
// //     ([key, value]) => ({
// //       subject: key,
// //       score: value,
// //     })
// //   );

// //   const riskData = Object.entries(riskScores).map(([key, value]) => ({
// //     name: key,
// //     score: value,
// //   }));

// //   const pieData = [
// //     { name: "Core", value: 60 },
// //     { name: "Communication", value: 40 },
// //   ];

// //   /* ----------------- SELECT PROJECT ----------------- */

// //   const handleSelectProject = async () => {
// //     try {
// //       setSelecting(true);
// //       await API.post("/projects/select", { evaluationId });
// //       alert("Project Added to Wishlist");
// //     } catch {
// //       alert("Already selected or error");
// //     } finally {
// //       setSelecting(false);
// //     }
// //   };

// //   return (
// //     <div className="space-y-10 mt-12">

// //       {/* OVERALL SCORE RING */}
// //       <motion.div
// //         initial={{ scale: 0.9, opacity: 0 }}
// //         animate={{ scale: 1, opacity: 1 }}
// //         className="bg-white p-8 rounded-2xl shadow-xl text-center"
// //       >
// //         <h2 className="text-xl font-semibold text-gray-700 mb-4">
// //           Overall Investor Score
// //         </h2>

// //         <div className="relative w-40 h-40 mx-auto">
// //           <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-indigo-600">
// //             {weightedOverallScore}
// //           </div>
// //           <svg viewBox="0 0 36 36" className="w-full h-full">
// //             <path
// //               d="M18 2.0845
// //                  a 15.9155 15.9155 0 0 1 0 31.831
// //                  a 15.9155 15.9155 0 0 1 0 -31.831"
// //               fill="none"
// //               stroke="#e5e7eb"
// //               strokeWidth="3"
// //             />
// //             <path
// //               d="M18 2.0845
// //                  a 15.9155 15.9155 0 0 1 0 31.831"
// //               fill="none"
// //               stroke="#6366f1"
// //               strokeWidth="3"
// //               strokeDasharray={`${weightedOverallScore * 10}, 100`}
// //             />
// //           </svg>
// //         </div>
// //       </motion.div>

// //       {/* CHART GRID */}
// //       <div className="grid lg:grid-cols-2 gap-8">

// //         {/* CORE BAR */}
// //         <div className="bg-white p-6 rounded-2xl shadow-lg">
// //           <h3 className="font-semibold mb-4">Core Score Breakdown</h3>
// //           <ResponsiveContainer width="100%" height={300}>
// //             <BarChart data={coreData}>
// //               <XAxis dataKey="name" hide />
// //               <YAxis domain={[0, 10]} />
// //               <Tooltip />
// //               <Bar dataKey="score" fill="#6366f1" />
// //             </BarChart>
// //           </ResponsiveContainer>
// //         </div>

// //         {/* COMMUNICATION RADAR */}
// //         <div className="bg-white p-6 rounded-2xl shadow-lg">
// //           <h3 className="font-semibold mb-4">Communication Profile</h3>
// //           <ResponsiveContainer width="100%" height={300}>
// //             <RadarChart data={communicationData}>
// //               <PolarGrid />
// //               <PolarAngleAxis dataKey="subject" />
// //               <PolarRadiusAxis domain={[0, 10]} />
// //               <Radar
// //                 dataKey="score"
// //                 stroke="#10b981"
// //                 fill="#10b981"
// //                 fillOpacity={0.6}
// //               />
// //             </RadarChart>
// //           </ResponsiveContainer>
// //         </div>

// //         {/* RISK BAR */}
// //         <div className="bg-white p-6 rounded-2xl shadow-lg">
// //           <h3 className="font-semibold mb-4">Risk Profile</h3>
// //           <ResponsiveContainer width="100%" height={250}>
// //             <BarChart data={riskData}>
// //               <XAxis dataKey="name" hide />
// //               <YAxis domain={[0, 10]} />
// //               <Tooltip />
// //               <Bar dataKey="score" fill="#ef4444" />
// //             </BarChart>
// //           </ResponsiveContainer>
// //         </div>

// //         {/* PIE */}
// //         <div className="bg-white p-6 rounded-2xl shadow-lg">
// //           <h3 className="font-semibold mb-4">Weight Distribution</h3>
// //           <ResponsiveContainer width="100%" height={250}>
// //             <PieChart>
// //               <Pie data={pieData} dataKey="value" outerRadius={90}>
// //                 {pieData.map((entry, index) => (
// //                   <Cell key={index} fill={COLORS[index]} />
// //                 ))}
// //               </Pie>
// //               <Tooltip />
// //             </PieChart>
// //           </ResponsiveContainer>
// //         </div>
// //       </div>

// //       {/* REASONS SECTION */}
// //       <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
// //         <h3 className="text-xl font-semibold">Metric Justifications</h3>

// //         {coreData.map((item, index) => (
// //           <div
// //             key={index}
// //             className="p-4 border rounded-xl bg-gray-50"
// //           >
// //             <div className="flex justify-between">
// //               <span className="font-medium capitalize">
// //                 {item.name}
// //               </span>
// //               <span className="text-indigo-600 font-bold">
// //                 {item.score}/10
// //               </span>
// //             </div>
// //             <p className="text-gray-600 mt-2 text-sm">
// //               {item.reason}
// //             </p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* SELECT PROJECT BUTTON */}
// //       <div className="text-center">
// //         <button
// //           onClick={handleSelectProject}
// //           disabled={selecting}
// //           className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg transition disabled:opacity-50"
// //         >
// //           {selecting ? "Adding..." : "Add to Selected Projects"}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
//   BarChart, Bar, XAxis, YAxis, RadarChart, Radar,
//   PolarGrid, PolarAngleAxis, PolarRadiusAxis, AreaChart, Area, CartesianGrid
// } from "recharts";
// import { 
//   ShieldCheck, TrendingUp, AlertTriangle, 
//   Layers, Lightbulb, Info, ArrowUpRight, BookmarkPlus 
// } from "lucide-react";
// import API from "../../api";

// const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"];

// export default function EvaluationOverview({ data }) {
//   const [selecting, setSelecting] = useState(false);
//   const [activeMetric, setActiveMetric] = useState(null);

//   const {
//     evaluationId,
//     weightedOverallScore,
//     coreScores,
//     communicationScores,
//     riskScores,
//   } = data;

//   // Data Formatting
//   const coreData = Object.entries(coreScores).map(([key, value]) => ({
//     name: key.replace(/([A-Z])/g, ' $1').trim(),
//     score: value.score,
//     reason: value.reason,
//   }));

//   const communicationData = Object.entries(communicationScores).map(([key, value]) => ({
//     subject: key.charAt(0).toUpperCase() + key.slice(1),
//     score: value,
//     fullMark: 10,
//   }));

//   const riskData = Object.entries(riskScores).map(([key, value]) => ({
//     name: key.replace(/([A-Z])/g, ' $1').trim(),
//     score: value,
//   }));

//   const handleSelectProject = async () => {
//     try {
//       setSelecting(true);
//       await API.post("/projects/select", { evaluationId });
//       alert("Project locked into high-potential wishlist.");
//     } catch {
//       alert("Project already archived or connection lost.");
//     } finally {
//       setSelecting(false);
//     }
//   };

//   return (
//     <div className="space-y-8 mt-16 pb-20">
      
//       {/* HEADER SECTION */}
//       <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
//         <div>
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
//             className="flex items-center gap-2 text-[#4F46E5] font-bold text-sm uppercase tracking-[0.2em] mb-2"
//           >
//             <ShieldCheck size={18} /> Analysis Complete
//           </motion.div>
//           <h1 className="text-4xl font-black text-slate-900 tracking-tight">Investment Intelligence <span className="text-slate-400">/ Report</span></h1>
//         </div>
        
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={handleSelectProject}
//           disabled={selecting}
//           className="flex items-center gap-2 bg-[#111827] text-white px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-indigo-200 transition-all hover:bg-[#4F46E5]"
//         >
//           <BookmarkPlus size={20} />
//           {selecting ? "Archiving..." : "Shortlist Project"}
//         </motion.button>
//       </div>

//       {/* TOP ROW: BENTO BOXES */}
//       <div className="grid lg:grid-cols-3 gap-6">
        
//         {/* MAIN SCORE CARD */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//           className="lg:col-span-1 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center justify-center relative overflow-hidden"
//         >
//           <div className="absolute top-0 right-0 p-6 opacity-10"><TrendingUp size={80} /></div>
//           <h3 className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-8">Weighted Alpha Score</h3>
//           <div className="relative">
//             <svg className="w-48 h-48 transform -rotate-90">
//               <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
//               <motion.circle 
//                 initial={{ strokeDasharray: "0, 1000" }}
//                 animate={{ strokeDasharray: `${(weightedOverallScore / 10) * 553}, 1000` }}
//                 transition={{ duration: 1.5, ease: "easeOut" }}
//                 cx="96" cy="96" r="88" stroke="url(#gradient)" strokeWidth="12" strokeLinecap="round" fill="transparent" 
//               />
//               <defs>
//                 <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#4F46E5" />
//                   <stop offset="100%" stopColor="#10B981" />
//                 </linearGradient>
//               </defs>
//             </svg>
//             <div className="absolute inset-0 flex flex-col items-center justify-center">
//               <span className="text-6xl font-black text-slate-900">{weightedOverallScore}</span>
//               <span className="text-slate-400 font-bold text-sm">/ 10.0</span>
//             </div>
//           </div>
//           <p className="mt-8 text-slate-500 text-sm text-center font-medium leading-relaxed px-4">
//             This score represents the aggregate probability of market success based on 48 neural data points.
//           </p>
//         </motion.div>

//         {/* RADAR ANALYSIS */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
//           className="lg:col-span-2 bg-[#111827] p-8 rounded-[2.5rem] text-white shadow-2xl relative"
//         >
//           <div className="flex justify-between items-start mb-4">
//             <div>
//               <h3 className="text-emerald-400 font-bold uppercase text-xs tracking-widest">Neural Vector</h3>
//               <h2 className="text-2xl font-bold mt-1">Communication Profile</h2>
//             </div>
//             <div className="bg-white/10 p-3 rounded-2xl text-emerald-400"><Lightbulb /></div>
//           </div>
//           <div className="h-[300px] w-full mt-4">
//             <ResponsiveContainer width="100%" height="100%">
//               <RadarChart cx="50%" cy="50%" outerRadius="80%" data={communicationData}>
//                 <PolarGrid stroke="#334155" />
//                 <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }} />
//                 <Radar name="Pitch" dataKey="score" stroke="#10B981" fill="#10B981" fillOpacity={0.5} />
//                 <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', backgroundColor: '#1e293b', color: '#fff' }} />
//               </RadarChart>
//             </ResponsiveContainer>
//           </div>
//         </motion.div>
//       </div>

//       {/* SECOND ROW: CORE ANALYTICS */}
//       <div className="grid lg:grid-cols-12 gap-6">
        
//         {/* CORE BAR CHART */}
//         <div className="lg:col-span-8 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
//           <div className="flex justify-between items-center mb-10">
//             <h3 className="text-xl font-bold text-slate-900">Core Performance Metrics</h3>
//             <div className="flex gap-2">
//                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold">Real-time Analysis</span>
//             </div>
//           </div>
//           <div className="h-[350px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={coreData} onMouseMove={(state) => { if(state.activePayload) setActiveMetric(state.activePayload[0].payload) }}>
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
//                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11, fontWeight: 700}} dy={10} />
//                 <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
//                 <Tooltip cursor={{fill: '#f8fafc'}} content={({ active, payload }) => {
//                   if (active && payload && payload.length) {
//                     return (
//                       <div className="bg-white p-4 shadow-2xl rounded-2xl border border-slate-100 max-w-xs">
//                         <p className="font-bold text-slate-900 mb-1">{payload[0].payload.name}</p>
//                         <p className="text-xs text-slate-500 leading-relaxed">{payload[0].payload.reason}</p>
//                       </div>
//                     );
//                   }
//                   return null;
//                 }} />
//                 <Bar dataKey="score" radius={[10, 10, 10, 10]} barSize={40}>
//                   {coreData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#4F46E5' : '#818CF8'} />
//                   ))}
//                 </Bar>
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* RISK HEATMAP (Vertical Style) */}
//         <div className="lg:col-span-4 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col">
//           <div className="flex items-center gap-2 text-rose-500 mb-6">
//             <AlertTriangle size={20} />
//             <h3 className="font-bold uppercase text-xs tracking-widest">Risk Profiling</h3>
//           </div>
//           <div className="space-y-6 flex-1 overflow-y-auto pr-2">
//             {riskData.map((risk, i) => (
//               <div key={i} className="group">
//                 <div className="flex justify-between mb-2">
//                   <span className="text-sm font-bold text-slate-700 group-hover:text-rose-600 transition-colors">{risk.name}</span>
//                   <span className="text-sm font-black text-slate-400">{risk.score}/10</span>
//                 </div>
//                 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
//                   <motion.div 
//                     initial={{ width: 0 }}
//                     animate={{ width: `${risk.score * 10}%` }}
//                     className={`h-full rounded-full ${risk.score > 7 ? 'bg-rose-500' : 'bg-amber-400'}`}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-8 p-4 bg-rose-50 rounded-2xl border border-rose-100">
//              <p className="text-[10px] uppercase font-black text-rose-500 tracking-tighter mb-1">AI Mitigation Strategy</p>
//              <p className="text-xs text-rose-700 font-medium leading-tight">Focus on early-stage traction to offset high technical risk.</p>
//           </div>
//         </div>

//       </div>

//       {/* BOTTOM SECTION: INTELLIGENT JUSTIFICATION */}
//       <div className="mt-12 bg-gradient-to-br from-[#4F46E5] to-[#3730A3] p-1 rounded-[3rem] shadow-2xl">
//         <div className="bg-white rounded-[2.9rem] p-10 lg:p-16">
//           <div className="max-w-3xl">
//             <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Data Justification Engine</h2>
//             <p className="text-slate-500 text-lg mb-12">The AI has analyzed 12,000+ similar market exits to provide these specific qualitative justifications.</p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
//             {coreData.map((item, index) => (
//               <div key={index} className="flex gap-6 group">
//                 <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all duration-300">
//                   <span className="text-xl font-black">{index + 1}</span>
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-3 mb-2">
//                     <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
//                     <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-[10px] font-black uppercase">Confirmed</span>
//                   </div>
//                   <p className="text-slate-500 leading-relaxed text-sm italic group-hover:text-slate-700 transition-colors">"{item.reason}"</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, AreaChart, Area, CartesianGrid,
  LineChart, Line, Legend
} from "recharts";
import { 
  ShieldCheck, TrendingUp, AlertTriangle, 
  Layers, Lightbulb, Info, ArrowUpRight, BookmarkPlus,
  Target, Users, DollarSign, Zap, Award, Activity,
  TrendingDown, CheckCircle2, XCircle, MinusCircle
} from "lucide-react";
import API from "../../api";

const COLORS = ["#6D28D9", "#8B5CF6", "#C4B5FD", "#14B8A6", "#A78BFA"];

export default function EvaluationOverview({ data }) {
  const [selecting, setSelecting] = useState(false);
  const [activeMetric, setActiveMetric] = useState(null);

  const {
    evaluationId,
    weightedOverallScore,
    coreScores,
    communicationScores,
    riskScores,
  } = data;

  // Data Formatting
  const coreData = Object.entries(coreScores).map(([key, value]) => ({
    name: key.replace(/([A-Z])/g, ' $1').trim(),
    score: value.score,
    reason: value.reason,
  }));

  const communicationData = Object.entries(communicationScores).map(([key, value]) => ({
    subject: key.charAt(0).toUpperCase() + key.slice(1),
    score: value,
    fullMark: 10,
  }));

  const riskData = Object.entries(riskScores).map(([key, value]) => ({
    name: key.replace(/([A-Z])/g, ' $1').trim(),
    score: value,
  }));

  // Additional data visualizations
  const pieData = coreData.slice(0, 5).map((item, index) => ({
    name: item.name,
    value: item.score,
    color: COLORS[index % COLORS.length]
  }));

  // Trend data (simulated based on scores)
  const trendData = coreData.map((item, index) => ({
    category: item.name.split(' ')[0],
    current: item.score,
    benchmark: 7.5,
  }));

  // Score distribution
  const distributionData = [
    { range: "0-2", count: coreData.filter(d => d.score <= 2).length },
    { range: "3-5", count: coreData.filter(d => d.score > 2 && d.score <= 5).length },
    { range: "6-8", count: coreData.filter(d => d.score > 5 && d.score <= 8).length },
    { range: "9-10", count: coreData.filter(d => d.score > 8).length },
  ];

  const handleSelectProject = async () => {
    try {
      setSelecting(true);
      await API.post("/projects/select", { evaluationId });
      alert("Project locked into high-potential wishlist.");
    } catch {
      alert("Project already archived or connection lost.");
    } finally {
      setSelecting(false);
    }
  };

  // Calculate summary stats
  const avgScore = (coreData.reduce((acc, item) => acc + item.score, 0) / coreData.length).toFixed(1);
  const highScores = coreData.filter(d => d.score >= 8).length;
  const lowScores = coreData.filter(d => d.score < 5).length;
  const avgRisk = (riskData.reduce((acc, item) => acc + item.score, 0) / riskData.length).toFixed(1);

  return (
    <div className="space-y-8 mt-16 pb-20">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-[#6D28D9] font-bold text-sm uppercase tracking-[0.2em] mb-2"
          >
            <ShieldCheck size={18} /> Analysis Complete
          </motion.div>
          <h1 className="text-4xl font-black text-[#0F172A] tracking-tight">
            Investment Intelligence <span className="text-slate-400">/ Report</span>
          </h1>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSelectProject}
          disabled={selecting}
          className="flex items-center gap-2 bg-[#6D28D9] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-purple-500/25 transition-all hover:bg-[#5B21B6] hover:shadow-2xl hover:shadow-purple-500/30"
        >
          <BookmarkPlus size={20} />
          {selecting ? "Archiving..." : "Shortlist Project"}
        </motion.button>
      </div>

      {/* QUICK STATS ROW */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard 
          icon={<Award size={20} />}
          label="Average Score"
          value={avgScore}
          subtitle="Out of 10.0"
          color="#6D28D9"
        />
        <StatCard 
          icon={<TrendingUp size={20} />}
          label="High Performers"
          value={highScores}
          subtitle={`${coreData.length} categories`}
          color="#14B8A6"
        />
        <StatCard 
          icon={<AlertTriangle size={20} />}
          label="Risk Level"
          value={avgRisk}
          subtitle="Avg risk score"
          color="#F59E0B"
        />
        <StatCard 
          icon={<Target size={20} />}
          label="Market Grade"
          value={weightedOverallScore >= 8 ? "A+" : weightedOverallScore >= 6 ? "B+" : "C+"}
          subtitle="Investment tier"
          color="#6D28D9"
        />
      </div>

      {/* TOP ROW: MAIN SCORE & RADAR */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* MAIN SCORE CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-1 bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-lg flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <TrendingUp size={80} />
          </div>
          <h3 className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-8">Weighted Alpha Score</h3>
          <div className="relative">
            <svg className="w-48 h-48 transform -rotate-90">
              <circle 
                cx="96" 
                cy="96" 
                r="88" 
                stroke="currentColor" 
                strokeWidth="12" 
                fill="transparent" 
                className="text-slate-100" 
              />
              <motion.circle 
                initial={{ strokeDasharray: "0, 1000" }}
                animate={{ strokeDasharray: `${(weightedOverallScore / 10) * 553}, 1000` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                cx="96" 
                cy="96" 
                r="88" 
                stroke="url(#gradient)" 
                strokeWidth="12" 
                strokeLinecap="round" 
                fill="transparent" 
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6D28D9" />
                  <stop offset="100%" stopColor="#14B8A6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-6xl font-black text-[#0F172A]">{weightedOverallScore}</span>
              <span className="text-slate-400 font-bold text-sm">/ 10.0</span>
            </div>
          </div>
          <p className="mt-8 text-slate-500 text-sm text-center font-medium leading-relaxed px-4">
            This score represents the aggregate probability of market success based on 48 neural data points.
          </p>
        </motion.div>

        {/* RADAR ANALYSIS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 bg-gradient-to-br from-[#6D28D9] to-[#5B21B6] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-[#14B8A6] font-bold uppercase text-xs tracking-widest">Neural Vector</h3>
                <h2 className="text-2xl font-bold mt-1">Communication Profile</h2>
              </div>
              <div className="bg-white/10 p-3 rounded-2xl text-[#14B8A6]">
                <Lightbulb />
              </div>
            </div>
            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={communicationData}>
                  <PolarGrid stroke="#8B5CF6" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: '#C4B5FD', fontSize: 12, fontWeight: 600 }} 
                  />
                  <Radar 
                    name="Pitch" 
                    dataKey="score" 
                    stroke="#14B8A6" 
                    fill="#14B8A6" 
                    fillOpacity={0.6} 
                  />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '16px', 
                      border: 'none', 
                      backgroundColor: '#1e293b', 
                      color: '#fff' 
                    }} 
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SECOND ROW: CORE BAR CHART & PIE CHART */}
      <div className="grid lg:grid-cols-12 gap-6">
        
        {/* CORE BAR CHART */}
        <div className="lg:col-span-7 bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-lg">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A]">Core Performance Metrics</h3>
              <p className="text-sm text-slate-500 mt-1">Detailed category breakdown</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-[#C4B5FD]/20 text-[#6D28D9] rounded-full text-xs font-bold border border-[#C4B5FD]/30">
                Real-time Analysis
              </span>
            </div>
          </div>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={coreData} 
                onMouseMove={(state) => { 
                  if(state.activePayload) setActiveMetric(state.activePayload[0].payload) 
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#64748b', fontSize: 11, fontWeight: 700}} 
                  dy={10} 
                />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip 
                  cursor={{fill: '#F8FAFC'}} 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-4 shadow-2xl rounded-2xl border-2 border-slate-200 max-w-xs">
                          <p className="font-bold text-[#0F172A] mb-1">{payload[0].payload.name}</p>
                          <p className="text-xs text-slate-500 leading-relaxed">{payload[0].payload.reason}</p>
                        </div>
                      );
                    }
                    return null;
                  }} 
                />
                <Bar dataKey="score" radius={[10, 10, 10, 10]} barSize={40}>
                  {coreData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PIE CHART - SCORE DISTRIBUTION */}
        <div className="lg:col-span-5 bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-lg">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#0F172A] mb-1">Score Distribution</h3>
            <p className="text-sm text-slate-500">Category performance breakdown</p>
          </div>
          <div className="h-[250px]">
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
          <div className="mt-6 space-y-2">
            {pieData.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm font-semibold text-slate-700">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* THIRD ROW: TREND LINE & RISK ANALYSIS */}
      <div className="grid lg:grid-cols-12 gap-6">
        
        {/* TREND LINE CHART */}
        <div className="lg:col-span-7 bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-lg">
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#0F172A] mb-1">Performance vs Benchmark</h3>
            <p className="text-sm text-slate-500">Comparison against industry standards</p>
          </div>
          <div className="h-[300px]">
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
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType="circle"
                />
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

        {/* RISK PROFILING */}
        <div className="lg:col-span-5 bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-lg flex flex-col">
          <div className="flex items-center gap-2 text-red-500 mb-6">
            <AlertTriangle size={20} />
            <div>
              <h3 className="font-bold uppercase text-xs tracking-widest">Risk Profiling</h3>
              <p className="text-xs text-slate-500 mt-1">Threat assessment matrix</p>
            </div>
          </div>
          <div className="space-y-6 flex-1 overflow-y-auto pr-2">
            {riskData.map((risk, i) => (
              <div key={i} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold text-slate-700 group-hover:text-red-600 transition-colors">
                    {risk.name}
                  </span>
                  <span className="text-sm font-black text-slate-400">{risk.score}/10</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
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
          <div className="mt-8 p-4 bg-red-50 rounded-2xl border-2 border-red-100">
            <p className="text-[10px] uppercase font-black text-red-500 tracking-wider mb-1">
              AI Mitigation Strategy
            </p>
            <p className="text-xs text-red-700 font-medium leading-tight">
              Focus on early-stage traction to offset high technical risk.
            </p>
          </div>
        </div>
      </div>

      {/* SCORE RANGE DISTRIBUTION */}
      <div className="bg-white p-10 rounded-3xl border-2 border-slate-200 shadow-lg">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#0F172A] mb-1">Score Range Distribution</h3>
          <p className="text-sm text-slate-500">How categories are distributed across score ranges</p>
        </div>
        <div className="h-[250px]">
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
              <Bar dataKey="count" fill="#6D28D9" radius={[10, 10, 0, 0]} barSize={60} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* BOTTOM SECTION: INTELLIGENT JUSTIFICATION */}
      <div className="mt-12 bg-gradient-to-br from-[#6D28D9] to-[#5B21B6] p-1 rounded-[3rem] shadow-2xl">
        <div className="bg-white rounded-[2.9rem] p-10 lg:p-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black text-[#0F172A] mb-4 tracking-tight">
              Data Justification Engine
            </h2>
            <p className="text-slate-600 text-lg mb-12">
              The AI has analyzed 12,000+ similar market exits to provide these specific qualitative justifications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {coreData.map((item, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#C4B5FD]/20 group-hover:text-[#6D28D9] transition-all duration-300">
                  <span className="text-xl font-black">{index + 1}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bold text-[#0F172A] text-lg">{item.name}</h4>
                    <span className="px-2 py-0.5 bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/30 rounded text-[10px] font-black uppercase">
                      Confirmed
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm italic group-hover:text-slate-700 transition-colors">
                    "{item.reason}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Component
function StatCard({ icon, label, value, subtitle, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all"
    >
      <div className="flex items-center gap-3 mb-3">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${color}15` }}
        >
          <div style={{ color }}>{icon}</div>
        </div>
      </div>
      <div className="text-3xl font-black text-[#0F172A] mb-1">{value}</div>
      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{label}</div>
      <div className="text-xs text-slate-400">{subtitle}</div>
    </motion.div>
  );
}