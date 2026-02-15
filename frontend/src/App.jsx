

// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Navbar from "./components/layout/Navbar";
// import Home from "./pages/Home";
// import Evaluate from "./pages/Evaluate";
// import Evaluations from "./pages/Evaluations";
// import EvaluationDetail from "./pages/EvaluationDetail";
// import MyProjects from "./pages/MyProjects";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import { Toaster } from "react-hot-toast";
// import AIAssistant from "./pages/AIAssistant";

// function App() {
//   // Use state for token so React re-renders when it changes
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const location = useLocation();

//   // Update token state whenever the route changes (or on storage events)
//   useEffect(() => {
//     const currentToken = localStorage.getItem("token");
//     setToken(currentToken);
//   }, [location]);

//   return (
//     <div className="min-h-screen bg-[#F9FAFB] relative overflow-x-hidden">

//       {/* HIGH-TECH BACKGROUND (Global) */}
//       <div className="fixed inset-0 z-[-1] pointer-events-none">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.03)_0%,_transparent_70%)]" />
//         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-100/20 blur-[120px] rounded-full" />
//         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-100/10 blur-[120px] rounded-full" />
//       </div>

//       {/* NAVBAR - Only show if token exists */}
//       {token && <Navbar />}

//       <Toaster 
//         position="top-right" 
//         toastOptions={{
//           className: 'rounded-2xl font-bold text-sm shadow-2xl border border-slate-100',
//           duration: 3000,
//         }} 
//       />

//       <Routes>
//         {/* PUBLIC ROUTES */}
//         <Route
//           path="/login"
//           element={!token ? <Login /> : <Navigate to="/" replace />}
//         />
//         <Route
//           path="/register"
//           element={!token ? <Register /> : <Navigate to="/" replace />}
//         />

//         {/* PROTECTED ROUTES */}
//         <Route
//           path="/"
//           element={token ? <Home /> : <Navigate to="/login" replace />}
//         />
//         <Route
//           path="/evaluate"
//           element={token ? <Evaluate /> : <Navigate to="/login" replace />}
//         />
//         <Route
//           path="/evaluations"
//           element={token ? <Evaluations /> : <Navigate to="/login" replace />}
//         />
//         <Route
//           path="/evaluation/:id"
//           element={token ? <EvaluationDetail /> : <Navigate to="/login" replace />}
//         />
//         <Route
//           path="/my-projects"
//           element={token ? <MyProjects /> : <Navigate to="/login" replace />}
//         />

//         <Route path="/ai-assistant" 
//         element={token ? <AIAssistant/> : <Navigate to="/login" replace/> }


//         {/* FALLBACK */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Evaluate from "./pages/Evaluate";
import Evaluations from "./pages/Evaluations";
import EvaluationDetail from "./pages/EvaluationDetail";
import MyProjects from "./pages/MyProjects";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AIAssistant from "./pages/AIAssistant";
import MilestoneBuilder from "./pages/MilestoneBuilder";
import { Toaster } from "react-hot-toast";

function App() {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const location = useLocation();

    useEffect(() => {
        const currentToken = localStorage.getItem("token");
        setToken(currentToken);
    }, [location]);

    return (
        <div className="min-h-screen bg-[#F9FAFB] relative overflow-x-hidden">

            {/* GLOBAL BACKGROUND */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.03)_0%,_transparent_70%)]" />
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-100/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-100/10 blur-[120px] rounded-full" />
            </div>

            {/* NAVBAR */}
            {token && <Navbar />}

            {/* TOASTER */}
            <Toaster
                position="top-right"
                toastOptions={{
                    className:
                        "rounded-2xl font-bold text-sm shadow-2xl border border-slate-100",
                    duration: 3000,
                }}
            />

            <Routes>

                {/* PUBLIC ROUTES */}
                <Route
                    path="/login"
                    element={!token ? <Login /> : <Navigate to="/" replace />}
                />
                <Route
                    path="/register"
                    element={!token ? <Register /> : <Navigate to="/" replace />}
                />

                {/* PROTECTED ROUTES */}
                <Route
                    path="/"
                    element={token ? <Home /> : <Navigate to="/login" replace />}
                />
                <Route
                    path="/evaluate"
                    element={token ? <Evaluate /> : <Navigate to="/login" replace />}
                />
                <Route
                    path="/evaluations"
                    element={token ? <Evaluations /> : <Navigate to="/login" replace />}
                />
                <Route
                    path="/evaluation/:id"
                    element={token ? <EvaluationDetail /> : <Navigate to="/login" replace />}
                />
                <Route
                    path="/my-projects"
                    element={token ? <MyProjects /> : <Navigate to="/login" replace />}
                />
                <Route
                    path="/ai-assistant"
                    element={token ? <AIAssistant /> : <Navigate to="/login" replace />}
                />

                <Route
                    path="/milestones"
                    element={token ? <MilestoneBuilder /> : <Navigate to="/login" replace />}
                />


                {/* FALLBACK */}
                <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>
        </div>
    );
}

export default App;
