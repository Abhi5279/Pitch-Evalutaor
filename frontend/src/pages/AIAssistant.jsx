// import { useEffect, useState } from "react";
// import API from "../api";

// const GEMINI_API_KEY = "AIzaSyAR1hXu03kAAJu_4KNtK39cThxORwfLbwk";

// const SUGGESTIONS = [
//   "Explain this project in simple terms",
//   "Suggest a technical roadmap",
//   "What are the major risks?",
//   "How can I improve this project?",
//   "What technologies should I use?"
// ];

// export default function AIAssistant() {
//   const [projects, setProjects] = useState([]);
//   const [selectedProjectId, setSelectedProjectId] = useState("");
//   const [chat, setChat] = useState([]);
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   /* ===========================
//      LOAD PROJECTS
//   ============================ */
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await API.get("/pitch/my-evaluations");
//         setProjects(res.data.evaluations || []);
//       } catch {
//         console.log("Failed to fetch projects");
//       }
//     };

//     fetchProjects();
//   }, []);

//   const selectedProject = projects.find(
//     (p) => p._id === selectedProjectId
//   );

//   /* ===========================
//      GEMINI CALL
//   ============================ */
//   const callGemini = async (projectScript, history, userMessage) => {
//     const formattedHistory = history
//       .map((c) => `${c.role.toUpperCase()}: ${c.text}`)
//       .join("\n");

//     const prompt = `
// You are a senior AI academic advisor.

// PROJECT CONTEXT:
// ${projectScript}

// CHAT HISTORY:
// ${formattedHistory}

// USER QUESTION:
// ${userMessage}

// Give structured, clear and helpful answers.
// `;

//     const response = await fetch(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           contents: [{ parts: [{ text: prompt }] }]
//         })
//       }
//     );

//     const data = await response.json();

//     return data.candidates?.[0]?.content?.parts?.[0]?.text || 
//       "AI response failed.";
//   };

//   /* ===========================
//      SEND MESSAGE
//   ============================ */
//   const send = async (text) => {
//     if (!selectedProject || !text.trim()) return;

//     const updatedChat = [...chat, { role: "user", text }];
//     setChat(updatedChat);
//     setMessage("");
//     setLoading(true);

//     try {
//       const reply = await callGemini(
//         selectedProject.script,
//         updatedChat,
//         text
//       );

//       setChat((prev) => [
//         ...prev,
//         { role: "assistant", text: reply }
//       ]);
//     } catch {
//       setChat((prev) => [
//         ...prev,
//         { role: "assistant", text: "Error: AI failed." }
//       ]);
//     }

//     setLoading(false);
//   };

//   const clearChat = () => setChat([]);

//   /* ===========================
//      UI
//   ============================ */

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6 flex justify-center items-center">

//       <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl flex flex-col h-[85vh]">

//         {/* HEADER */}
//         <div className="flex justify-between items-center p-6 border-b">
//           <h2 className="text-2xl font-bold text-gray-800">
//             AI Project Assistant
//           </h2>

//           <button
//             onClick={clearChat}
//             className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//           >
//             Clear Session
//           </button>
//         </div>

//         {/* PROJECT SELECTOR */}
//         <div className="p-4 border-b">
//           <select
//             value={selectedProjectId}
//             onChange={(e) => {
//               setSelectedProjectId(e.target.value);
//               setChat([]);
//             }}
//             className="w-full border px-4 py-2 rounded-lg"
//           >
//             <option value="">Select a Project</option>

//             {projects.map((project) => (
//               <option key={project._id} value={project._id}>
//                 {project.script.slice(0, 50)}...
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* CHAT AREA */}
//         <div className="flex-1 overflow-y-auto p-6 space-y-4">

//           {chat.length === 0 && selectedProject && (
//             <div>
//               <p className="text-sm text-gray-500 mb-3">
//                 Suggested Questions
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {SUGGESTIONS.map((s, i) => (
//                   <button
//                     key={i}
//                     onClick={() => send(s)}
//                     className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm hover:bg-indigo-200 transition"
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {chat.map((c, i) => (
//             <div
//               key={i}
//               className={`flex ${
//                 c.role === "user"
//                   ? "justify-end"
//                   : "justify-start"
//               }`}
//             >
//               <div
//                 className={`max-w-[75%] px-4 py-3 rounded-xl text-sm whitespace-pre-wrap ${
//                   c.role === "user"
//                     ? "bg-indigo-600 text-white"
//                     : "bg-gray-100 text-gray-800"
//                 }`}
//               >
//                 {c.text}
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="text-gray-400 text-sm">
//               Thinking...
//             </div>
//           )}
//         </div>

//         {/* INPUT */}
//         <div className="border-t p-4 flex gap-2">
//           <input
//             className="flex-1 border px-4 py-2 rounded-lg"
//             placeholder={
//               selectedProject
//                 ? "Ask about this project..."
//                 : "Select a project first"
//             }
//             value={message}
//             disabled={!selectedProject}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyDown={(e) =>
//               e.key === "Enter" && send(message)
//             }
//           />

//           <button
//             onClick={() => send(message)}
//             disabled={!selectedProject || !message.trim() || loading}
//             className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
//           >
//             {loading ? "..." : "Send"}
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import API from "../api";
import { 
  Brain, 
  Send, 
  Trash2, 
  Sparkles, 
  MessageSquare, 
  Loader2,
  ChevronDown,
  Lightbulb,
  Target,
  AlertCircle,
  Code,
  Rocket,
  Bot,
  User
} from "lucide-react";

const GEMINI_API_KEY = "AIzaSyB3oGYAjX3vvBJr3CkQkGvyZM1ptoHNTMI";

const SUGGESTIONS = [
  { text: "Explain this project in simple terms", icon: <Lightbulb size={16} /> },
  { text: "Suggest a technical roadmap", icon: <Target size={16} /> },
  { text: "What are the major risks?", icon: <AlertCircle size={16} /> },
  { text: "How can I improve this project?", icon: <Rocket size={16} /> },
  { text: "What technologies should I use?", icon: <Code size={16} /> }
];

export default function AIAssistant() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  /* ===========================
     LOAD PROJECTS
  ============================ */
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/pitch/my-evaluations");
        setProjects(res.data.evaluations || []);
      } catch {
        console.log("Failed to fetch projects");
      }
    };

    fetchProjects();
  }, []);

  const selectedProject = projects.find(
    (p) => p._id === selectedProjectId
  );

  /* ===========================
     GEMINI CALL
  ============================ */
  const callGemini = async (projectScript, history, userMessage) => {
    const formattedHistory = history
      .map((c) => `${c.role.toUpperCase()}: ${c.text}`)
      .join("\n");

    const prompt = `
You are a senior AI academic advisor and venture capital analyst.

PROJECT CONTEXT:
${projectScript}

CHAT HISTORY:
${formattedHistory}

USER QUESTION:
${userMessage}

Give structured, clear and helpful answers with actionable insights.
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await response.json();

    return data.candidates?.[0]?.content?.parts?.[0]?.text || 
      "AI response failed.";
  };

  /* ===========================
     SEND MESSAGE
  ============================ */
  const send = async (text) => {
    if (!selectedProject || !text.trim()) return;

    const updatedChat = [...chat, { role: "user", text }];
    setChat(updatedChat);
    setMessage("");
    setLoading(true);

    try {
      const reply = await callGemini(
        selectedProject.script,
        updatedChat,
        text
      );

      setChat((prev) => [
        ...prev,
        { role: "assistant", text: reply }
      ]);
    } catch {
      setChat((prev) => [
        ...prev,
        { role: "assistant", text: "Error: AI failed to generate response." }
      ]);
    }

    setLoading(false);
  };

  const clearChat = () => setChat([]);

  /* ===========================
     UI
  ============================ */

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 text-[#6D28D9] mb-3">
            <Brain size={20} />
            <span className="text-xs font-black uppercase tracking-[0.2em]">AI Advisory</span>
          </div>
          <h1 className="text-5xl font-black text-[#0F172A] tracking-tight mb-3">
            Project Intelligence Assistant
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            Get instant AI-powered insights, recommendations, and strategic guidance for your startup projects.
          </p>
        </motion.div>

        {/* MAIN CHAT CONTAINER */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden flex flex-col h-[115vh]">

          {/* HEADER BAR */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 p-6 border-b-2 border-slate-200 bg-slate-50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-black text-[#0F172A]">AI Assistant</h2>
                <p className="text-xs text-slate-500 font-semibold">
                  {chat.length} messages • {selectedProject ? "Active" : "Standby"}
                </p>
              </div>
            </div>

            <button
              onClick={clearChat}
              disabled={chat.length === 0}
              className="flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-600 rounded-xl font-bold text-sm hover:bg-red-100 transition-all border-2 border-red-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Trash2 size={16} />
              Clear Session
            </button>
          </div>

          {/* PROJECT SELECTOR */}
          <div className="p-6 border-b-2 border-slate-200 bg-slate-50">
            <label className="block text-sm font-bold text-slate-600 mb-3 uppercase tracking-wider">
              Select Project Context
            </label>
            <div className="relative">
              <select
                value={selectedProjectId}
                onChange={(e) => {
                  setSelectedProjectId(e.target.value);
                  setChat([]);
                }}
                className="w-full appearance-none bg-white border-2 border-slate-200 px-5 py-4 pr-12 rounded-2xl font-semibold text-slate-700 cursor-pointer hover:border-[#6D28D9] focus:border-[#6D28D9] focus:ring-4 focus:ring-[#6D28D9]/10 outline-none transition-all"
              >
                <option value="">Choose a project to analyze...</option>
                {projects.map((project) => (
                  <option key={project._id} value={project._id}>
                    {project.script.slice(0, 60)}...
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
            </div>
          </div>

          {/* CHAT AREA */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#F8FAFC]">
            
            {/* WELCOME STATE */}
            {chat.length === 0 && !selectedProject && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center"
              >
                <div className="w-20 h-20 bg-[#C4B5FD]/20 rounded-3xl flex items-center justify-center mb-6">
                  <Brain className="w-10 h-10 text-[#6D28D9]" />
                </div>
                <h3 className="text-2xl font-black text-[#0F172A] mb-3">
                  Welcome to AI Assistant
                </h3>
                <p className="text-slate-500 max-w-md mb-6">
                  Select a project above to start getting intelligent insights and recommendations.
                </p>
              </motion.div>
            )}

            {/* SUGGESTED QUESTIONS */}
            {chat.length === 0 && selectedProject && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[#6D28D9]" />
                  <p className="text-sm font-bold text-slate-600 uppercase tracking-wider">
                    Suggested Questions
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {SUGGESTIONS.map((s, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => send(s.text)}
                      className="flex items-center gap-2 bg-[#C4B5FD]/20 text-[#6D28D9] px-4 py-3 rounded-xl text-sm font-semibold border-2 border-[#C4B5FD]/30 hover:bg-[#C4B5FD]/30 hover:border-[#6D28D9] transition-all"
                    >
                      {s.icon}
                      {s.text}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CHAT MESSAGES */}
            <AnimatePresence>
              {chat.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${c.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex items-start gap-3 max-w-[85%] ${c.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    {/* Avatar */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center ${
                      c.role === "user" 
                        ? "bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] shadow-lg shadow-purple-500/25" 
                        : "bg-[#14B8A6]/10 border-2 border-[#14B8A6]/30"
                    }`}>
                      {c.role === "user" ? (
                        <User className="w-5 h-5 text-white" />
                      ) : (
                        <Bot className="w-5 h-5 text-[#14B8A6]" />
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div className={`px-5 py-4 rounded-2xl ${
                      c.role === "user"
                        ? "bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] text-white shadow-lg shadow-purple-500/20"
                        : "bg-white text-slate-700 border-2 border-slate-200 shadow-sm"
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">
                        {c.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* LOADING INDICATOR */}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center border-2 border-[#14B8A6]/30">
                  <Bot className="w-5 h-5 text-[#14B8A6]" />
                </div>
                <div className="px-5 py-4 bg-white rounded-2xl border-2 border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-[#6D28D9] animate-spin" />
                    <span className="text-sm font-medium text-slate-500">AI is thinking...</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* INPUT AREA */}
          <div className="border-t-2 border-slate-200 p-6 bg-white">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  className="w-full bg-slate-50 border-2 border-slate-200 px-6 py-4 pr-12 rounded-2xl font-medium text-slate-700 placeholder:text-slate-400 focus:border-[#6D28D9] focus:ring-4 focus:ring-[#6D28D9]/10 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder={
                    selectedProject
                      ? "Ask anything about this project..."
                      : "Select a project first to start chatting"
                  }
                  value={message}
                  disabled={!selectedProject}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send(message)}
                />
                <MessageSquare className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => send(message)}
                disabled={!selectedProject || !message.trim() || loading}
                className="px-8 py-4 bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                <span className="hidden sm:inline">Send</span>
              </motion.button>
            </div>

            {/* HELPER TEXT */}
            <p className="text-xs text-slate-400 mt-3 flex items-center gap-2">
              <Sparkles size={12} />
              AI responses are generated in real-time. Press Enter to send.
            </p>
          </div>
        </div>

        {/* STATS FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mt-6"
        >
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-200 text-center">
            <p className="text-2xl font-black text-[#6D28D9] mb-1">{projects.length}</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Available Projects</p>
          </div>
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-200 text-center">
            <p className="text-2xl font-black text-[#14B8A6] mb-1">{chat.filter(c => c.role === "assistant").length}</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">AI Responses</p>
          </div>
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-200 text-center">
            <p className="text-2xl font-black text-[#6D28D9] mb-1">
              {selectedProject ? "Active" : "Idle"}
            </p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}