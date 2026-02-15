// // import { useState } from "react";
// // import API from "../../api";
// // import { motion } from "framer-motion";

// // export default function TextEvaluationForm({ onResult }) {
// //   const [loading, setLoading] = useState(false);

// //   const [form, setForm] = useState({
// //     script: "",
// //     audience: "",
// //     timeLimit: "",
// //     domain: "",
// //     stage: "",
// //     fundingAmount: "",
// //     geography: "",
// //     industryMaturity: "",
// //   });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async () => {
// //     if (!form.script.trim()) {
// //       alert("Pitch script is required");
// //       return;
// //     }

// //     try {
// //       setLoading(true);

// //       const res = await API.post("/pitch/evaluate", form);

// //       onResult(res.data);

// //     } catch (err) {
// //       alert("Evaluation failed");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="space-y-8">

// //       {/* SCRIPT */}
// //       <div>
// //         <label className="block font-medium text-gray-700 mb-2">
// //           Pitch Script
// //         </label>
// //         <textarea
// //           name="script"
// //           rows="6"
// //           className="w-full border border-gray-200 p-4 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
// //           placeholder="Enter full pitch script..."
// //           value={form.script}
// //           onChange={handleChange}
// //         />
// //       </div>

// //       {/* META GRID */}
// //       <div className="grid md:grid-cols-2 gap-6">

// //         <InputField label="Target Audience" name="audience" value={form.audience} onChange={handleChange} />
// //         <InputField label="Pitch Duration" name="timeLimit" value={form.timeLimit} onChange={handleChange} />
// //         <InputField label="Domain" name="domain" value={form.domain} onChange={handleChange} />
// //         <InputField label="Funding Amount" name="fundingAmount" value={form.fundingAmount} onChange={handleChange} />
// //         <InputField label="Geography" name="geography" value={form.geography} onChange={handleChange} />

// //         {/* STAGE */}
// //         <div>
// //           <label className="block font-medium text-gray-700 mb-2">
// //             Startup Stage
// //           </label>
// //           <select
// //             name="stage"
// //             value={form.stage}
// //             onChange={handleChange}
// //             className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
// //           >
// //             <option value="">Select Stage</option>
// //             <option value="idea">Idea</option>
// //             <option value="mvp">MVP</option>
// //             <option value="early revenue">Early Revenue</option>
// //             <option value="scaling">Scaling</option>
// //           </select>
// //         </div>

// //         {/* INDUSTRY MATURITY */}
// //         <div>
// //           <label className="block font-medium text-gray-700 mb-2">
// //             Industry Maturity
// //           </label>
// //           <select
// //             name="industryMaturity"
// //             value={form.industryMaturity}
// //             onChange={handleChange}
// //             className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
// //           >
// //             <option value="">Select Industry</option>
// //             <option value="emerging">Emerging</option>
// //             <option value="growing">Growing</option>
// //             <option value="mature">Mature</option>
// //           </select>
// //         </div>
// //       </div>

// //       {/* SUBMIT */}
// //       <motion.button
// //         whileTap={{ scale: 0.95 }}
// //         onClick={handleSubmit}
// //         disabled={loading}
// //         className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg transition disabled:opacity-50"
// //       >
// //         {loading ? "Analyzing Pitch..." : "Run AI Evaluation"}
// //       </motion.button>
// //     </div>
// //   );
// // }

// // /* SMALL REUSABLE INPUT */
// // function InputField({ label, name, value, onChange }) {
// //   return (
// //     <div>
// //       <label className="block font-medium text-gray-700 mb-2">
// //         {label}
// //       </label>
// //       <input
// //         name={name}
// //         value={value}
// //         onChange={onChange}
// //         className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
// //       />
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import API from "../../api";
// import { motion } from "framer-motion";
// import { BrainCircuit, Rocket, Target, Globe, Landmark, Clock } from "lucide-react";

// export default function TextEvaluationForm({ onResult }) {
//   const [loading, setLoading] = useState(false);

//   // Default values to save user time
//   const [form, setForm] = useState({
//     script: "",
//     audience: "Venture Capitalists",
//     timeLimit: "5 Minutes",
//     domain: "SaaS / AI",
//     stage: "mvp",
//     fundingAmount: "$500k",
//     geography: "Global",
//     industryMaturity: "growing",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     if (!form.script.trim()) {
//       alert("Please provide the script for our AI to analyze.");
//       return;
//     }
//     try {
//       setLoading(true);
//       const res = await API.post("/pitch/evaluate", form);
//       onResult(res.data);
//     } catch (err) {
//       alert("Evaluation engine encountered an error.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-10">
//       {/* SECTION 1: THE CORE SCRIPT */}
//       <div className="relative group">
//         <div className="flex items-center gap-2 mb-4">
//           <BrainCircuit className="text-[#4F46E5] w-5 h-5" />
//           <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Primary Input</h3>
//         </div>
//         <textarea
//           name="script"
//           rows="8"
//           className="w-full bg-slate-50 border-2 border-slate-100 p-6 rounded-[2rem] focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white outline-none transition-all duration-300 placeholder:text-slate-300 font-medium leading-relaxed"
//           placeholder="Paste your pitch script here... AI will extract tone, strategy, and risk factors."
//           value={form.script}
//           onChange={handleChange}
//         />
//       </div>

//       {/* SECTION 2: CONFIGURATION GRID */}
//       <div className="p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100">
//         <div className="flex items-center gap-2 mb-6">
//           <Target className="text-[#10B981] w-5 h-5" />
//           <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Context Parameters</h3>
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <ModernInput icon={<Target size={16}/>} label="Audience" name="audience" value={form.audience} onChange={handleChange} />
//           <ModernInput icon={<Clock size={16}/>} label="Duration" name="timeLimit" value={form.timeLimit} onChange={handleChange} />
//           <ModernInput icon={<Globe size={16}/>} label="Market" name="geography" value={form.geography} onChange={handleChange} />
          
//           {/* STAGE TOGGLE STYLE */}
//           <div className="flex flex-col gap-2">
//             <label className="text-xs font-bold text-slate-500 ml-1">Startup Stage</label>
//             <select
//               name="stage"
//               value={form.stage}
//               onChange={handleChange}
//               className="appearance-none bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-semibold text-slate-700 cursor-pointer hover:border-indigo-300 transition-colors"
//             >
//               <option value="idea">Early Idea</option>
//               <option value="mvp">MVP Ready</option>
//               <option value="early revenue">Generating Revenue</option>
//               <option value="scaling">Scaling Up</option>
//             </select>
//           </div>

//           <ModernInput icon={<Landmark size={16}/>} label="Ask Amount" name="fundingAmount" value={form.fundingAmount} onChange={handleChange} />

//           <div className="flex flex-col gap-2">
//             <label className="text-xs font-bold text-slate-500 ml-1">Industry Status</label>
//             <select
//               name="industryMaturity"
//               value={form.industryMaturity}
//               onChange={handleChange}
//               className="appearance-none bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-semibold text-slate-700 cursor-pointer hover:border-indigo-300 transition-colors"
//             >
//               <option value="emerging">Emerging Tech</option>
//               <option value="growing">Rapid Growth</option>
//               <option value="mature">Stable Market</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* SUBMIT BUTTON - ACTION HERO */}
//       <div className="flex justify-center pt-4">
//         <motion.button
//           whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(79,70,229,0.3)" }}
//           whileTap={{ scale: 0.98 }}
//           onClick={handleSubmit}
//           disabled={loading}
//           className="relative overflow-hidden group bg-[#111827] text-white px-12 py-5 rounded-[2rem] font-bold text-lg flex items-center gap-3 transition-all disabled:opacity-50"
//         >
//           {loading ? (
//             <span className="flex items-center gap-3">
//               <svg className="animate-spin h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Processing Neural Data...
//             </span>
//           ) : (
//             <>
//               <span>Initialize AI Evaluation</span>
//               <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//             </>
//           )}
//           {/* Subtle button glow effect */}
//           <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
//         </motion.button>
//       </div>
//     </div>
//   );
// }

// function ModernInput({ label, icon, name, value, onChange }) {
//   return (
//     <div className="flex flex-col gap-2 group">
//       <label className="text-xs font-bold text-slate-500 ml-1 group-focus-within:text-indigo-600 transition-colors">
//         {label}
//       </label>
//       <div className="relative">
//         <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
//           {icon}
//         </div>
//         <input
//           name={name}
//           value={value}
//           onChange={onChange}
//           className="w-full bg-white border border-slate-200 pl-11 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-semibold text-slate-700 transition-all"
//         />
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import API from "../../api";
import { motion } from "framer-motion";
import { Brain, Rocket, Target, Globe, Landmark, Clock, Users, TrendingUp } from "lucide-react";

export default function TextEvaluationForm({ onResult }) {
  const [loading, setLoading] = useState(false);

  // Default values to save user time
  const [form, setForm] = useState({
    script: "",
    audience: "Venture Capitalists",
    timeLimit: "5 Minutes",
    domain: "SaaS / AI",
    stage: "mvp",
    fundingAmount: "$500k",
    geography: "Global",
    industryMaturity: "growing",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.script.trim()) {
      alert("Please provide the script for our AI to analyze.");
      return;
    }
    try {
      setLoading(true);
      const res = await API.post("/pitch/evaluate", form);
      onResult(res.data);
    } catch (err) {
      alert("Evaluation engine encountered an error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* SECTION 1: THE CORE SCRIPT */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-[#6D28D9]/10 rounded-lg flex items-center justify-center">
            <Brain className="text-[#6D28D9] w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Pitch Script</h3>
        </div>
        <textarea
          name="script"
          rows="10"
          className="w-full bg-slate-50 border-2 border-slate-200 p-6 rounded-2xl focus:ring-4 focus:ring-[#6D28D9]/10 focus:border-[#6D28D9] focus:bg-white outline-none transition-all duration-300 placeholder:text-slate-400 text-slate-700 font-medium leading-relaxed resize-none"
          placeholder="Paste your pitch script here... Our AI will extract tone, strategy, market positioning, and risk factors to provide comprehensive institutional-grade analysis."
          value={form.script}
          onChange={handleChange}
        />
        <p className="text-xs text-slate-500 mt-2 ml-1">
          Minimum 100 words recommended for accurate analysis
        </p>
      </div>

      {/* SECTION 2: CONFIGURATION GRID */}
      <div className="p-8 bg-slate-50 rounded-3xl border-2 border-slate-200">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-[#14B8A6]/10 rounded-lg flex items-center justify-center">
            <Target className="text-[#14B8A6] w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Context Parameters</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <ModernInput 
            icon={<Users size={16}/>} 
            label="Target Audience" 
            name="audience" 
            value={form.audience} 
            onChange={handleChange} 
          />
          
          <ModernInput 
            icon={<Clock size={16}/>} 
            label="Pitch Duration" 
            name="timeLimit" 
            value={form.timeLimit} 
            onChange={handleChange} 
          />
          
          <ModernInput 
            icon={<Globe size={16}/>} 
            label="Market Geography" 
            name="geography" 
            value={form.geography} 
            onChange={handleChange} 
          />
          
          <ModernInput 
            icon={<Landmark size={16}/>} 
            label="Funding Amount" 
            name="fundingAmount" 
            value={form.fundingAmount} 
            onChange={handleChange} 
          />
          
          {/* STAGE SELECT */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-500 ml-1 flex items-center gap-2">
              <TrendingUp size={14} />
              Startup Stage
            </label>
            <select
              name="stage"
              value={form.stage}
              onChange={handleChange}
              className="appearance-none bg-white border-2 border-slate-200 p-3.5 rounded-xl focus:ring-4 focus:ring-[#6D28D9]/10 focus:border-[#6D28D9] outline-none font-semibold text-slate-700 cursor-pointer hover:border-[#6D28D9] transition-all"
            >
              <option value="idea">Early Idea</option>
              <option value="mvp">MVP Ready</option>
              <option value="early revenue">Generating Revenue</option>
              <option value="scaling">Scaling Up</option>
            </select>
          </div>

          {/* INDUSTRY MATURITY SELECT */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-500 ml-1 flex items-center gap-2">
              <Target size={14} />
              Industry Status
            </label>
            <select
              name="industryMaturity"
              value={form.industryMaturity}
              onChange={handleChange}
              className="appearance-none bg-white border-2 border-slate-200 p-3.5 rounded-xl focus:ring-4 focus:ring-[#6D28D9]/10 focus:border-[#6D28D9] outline-none font-semibold text-slate-700 cursor-pointer hover:border-[#6D28D9] transition-all"
            >
              <option value="emerging">Emerging Tech</option>
              <option value="growing">Rapid Growth</option>
              <option value="mature">Stable Market</option>
            </select>
          </div>
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <div className="flex justify-center pt-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          disabled={loading}
          className="relative overflow-hidden bg-[#6D28D9] text-white px-12 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#5B21B6]"
        >
          {loading ? (
            <span className="flex items-center gap-3">
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing Neural Data...
            </span>
          ) : (
            <>
              <span>Initialize AI Evaluation</span>
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
}

function ModernInput({ label, icon, name, value, onChange }) {
  return (
    <div className="flex flex-col gap-2 group">
      <label className="text-xs font-bold text-slate-500 ml-1 flex items-center gap-2 group-focus-within:text-[#6D28D9] transition-colors">
        {icon}
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-white border-2 border-slate-200 px-4 py-3.5 rounded-xl focus:ring-4 focus:ring-[#6D28D9]/10 focus:border-[#6D28D9] outline-none font-semibold text-slate-700 transition-all hover:border-[#6D28D9]"
      />
    </div>
  );
}