// import { useState } from "react";
// import API from "../../api";
// import { motion } from "framer-motion";

// export default function PdfUploadForm({ onResult }) {
//   const [loading, setLoading] = useState(false);
//   const [fileName, setFileName] = useState("");

//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setFileName(file.name);

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       setLoading(true);

//       const res = await API.post("/pitch/evaluate-pdf", formData);

//       onResult(res.data);

//     } catch (err) {
//       alert("PDF evaluation failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-8">

//       {/* UPLOAD CARD */}
//       <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-indigo-500 transition bg-gray-50">

//         <motion.label
//           whileHover={{ scale: 1.02 }}
//           className="cursor-pointer block"
//         >
//           <input
//             type="file"
//             accept="application/pdf"
//             onChange={handleFileUpload}
//             className="hidden"
//           />

//           <div className="space-y-4">
//             <div className="text-indigo-600 text-4xl">
//               📄
//             </div>

//             <p className="text-lg font-medium text-gray-700">
//               Upload Pitch Deck PDF
//             </p>

//             <p className="text-sm text-gray-500">
//               Drag & drop or click to upload
//             </p>

//             {fileName && (
//               <p className="text-sm text-green-600 font-medium">
//                 Selected: {fileName}
//               </p>
//             )}
//           </div>
//         </motion.label>
//       </div>

//       {/* LOADING BUTTON */}
//       {loading && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-center text-indigo-600 font-medium"
//         >
//           Analyzing PDF with AI Engine...
//         </motion.div>
//       )}
//     </div>
//   );
// }


import { useState } from "react";
import API from "../../api";
import { motion, AnimatePresence } from "framer-motion";
import { CloudArrowUp, FilePdf, SpinnerGap, CheckCircle, WarningCircle } from "@phosphor-icons/react"; // Modern icon set

export default function PdfUploadForm({ onResult }) {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleFileUpload = async (file) => {
    if (!file || file.type !== "application/pdf") {
      alert("Please upload a valid PDF document.");
      return;
    }

    setFileName(file.name);
    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await API.post("/pitch/evaluate-pdf", formData);
      onResult(res.data);
    } catch (err) {
      alert("Neural extraction failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* SCANNING ZONE */}
      <motion.div
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        className={`relative overflow-hidden rounded-[2.5rem] border-2 border-dashed transition-all duration-500 ${
          dragActive 
            ? "border-[#4F46E5] bg-indigo-50/50 scale-[1.02]" 
            : "border-slate-200 bg-slate-50/30 hover:bg-white hover:border-indigo-300"
        }`}
      >
        <label className="cursor-pointer block p-16 text-center">
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => handleFileUpload(e.target.files[0])}
            className="hidden"
          />

          <div className="relative z-10 space-y-6">
            {/* ICON ANIMATION */}
            <motion.div 
              animate={loading ? { rotate: 360 } : { y: [0, -10, 0] }}
              transition={loading ? { repeat: Infinity, duration: 2, ease: "linear" } : { repeat: Infinity, duration: 3 }}
              className="flex justify-center"
            >
              {loading ? (
                <SpinnerGap size={64} weight="light" className="text-[#4F46E5]" />
              ) : fileName ? (
                <CheckCircle size={64} weight="fill" className="text-[#10B981]" />
              ) : (
                <div className="p-6 bg-white rounded-3xl shadow-xl shadow-indigo-100 border border-indigo-50">
                  <CloudArrowUp size={48} weight="duotone" className="text-[#4F46E5]" />
                </div>
              )}
            </motion.div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                {loading ? "Neural Scanning..." : fileName ? "Deck Received" : "Upload Pitch Deck"}
              </h3>
              <p className="text-slate-500 mt-2 font-medium">
                {fileName ? fileName : "Drag and drop your PDF or click to browse"}
              </p>
            </div>

            {/* PROGRESS BAR (Visible only during loading) */}
            <AnimatePresence>
              {loading && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full max-w-xs mx-auto h-1.5 bg-slate-100 rounded-full overflow-hidden"
                >
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-1/2 h-full bg-gradient-to-r from-[#4F46E5] to-[#10B981]"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* BACKGROUND DECORATIVE SCAN LINE */}
          {!loading && (
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.03)_0%,_transparent_70%)] pointer-events-none" />
          )}
        </label>
      </motion.div>

      {/* FOOTNOTE */}
      <div className="flex items-center justify-center gap-2 text-slate-400">
        <WarningCircle size={16} />
        <span className="text-xs font-semibold uppercase tracking-widest">Supports PDF up to 20MB</span>
      </div>
    </div>
  );
}