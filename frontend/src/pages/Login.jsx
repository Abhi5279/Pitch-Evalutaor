// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import API from "../api";

// export default function Login() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async () => {
//     if (!form.email || !form.password) {
//       alert("All fields are required");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await API.post("/auth/login", form);

//       localStorage.setItem("token", res.data.token);

//       navigate("/");
//     } catch (err) {
//       alert("Invalid credentials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 to-blue-100 px-6">

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md space-y-6"
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-800">
//           Login
//         </h2>

//         <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
//         />

//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
//         />

//         <button
//           onClick={handleLogin}
//           disabled={loading}
//           className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition disabled:opacity-50"
//         >
//           {loading ? "Signing in..." : "Login"}
//         </button>

//         <p className="text-center text-sm text-gray-600">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-indigo-600 font-medium">
//             Register
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Zap, 
  TrendingUp,
  Brain,
  Eye,
  EyeOff,
  Loader2,
  CheckCircle2
} from "lucide-react";
import API from "../api";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      // Redirect to home page after successful login
      setTimeout(() => {
        navigate("/");
      }, 800);
    } catch (err) {
      alert("Invalid credentials");
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const features = [
    { icon: <Brain className="w-5 h-5" />, text: "AI-Powered Analytics", color: "text-[#6D28D9]" },
    { icon: <Shield className="w-5 h-5" />, text: "Bank-Grade Security", color: "text-[#14B8A6]" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Real-Time Insights", color: "text-[#C4B5FD]" },
    { icon: <Zap className="w-5 h-5" />, text: "Instant Processing", color: "text-[#6D28D9]" },
  ];

  const stats = [
    { value: "10K+", label: "Pitches Analyzed" },
    { value: "98.7%", label: "Accuracy Rate" },
    { value: "2.4s", label: "Avg Response" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] relative overflow-hidden">
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - BRANDING & FEATURES */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:pr-12"
          >
            {/* Logo & Tagline */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6D28D9] to-[#14B8A6] rounded-2xl blur-lg opacity-50" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-[#6D28D9] to-[#14B8A6] rounded-2xl flex items-center justify-center shadow-xl">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-black text-[#0F172A]">PitchAI</h1>
                  <p className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider">Intelligence Platform</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-5xl font-black text-[#0F172A] leading-tight">
                  Welcome Back to the
                  <span className="block bg-gradient-to-r from-[#6D28D9] to-[#14B8A6] bg-clip-text text-transparent">
                    Future of VC
                  </span>
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                  Access institutional-grade AI analytics and neural scoring systems trusted by top venture firms.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 hover:border-[#6D28D9]/20 transition-all"
                >
                  <div className={`${feature.color}`}>
                    {feature.icon}
                  </div>
                  <span className="text-sm font-bold text-[#0F172A]">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-2xl font-black text-[#0F172A]">{stat.value}</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - LOGIN FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6D28D9] via-[#C4B5FD] to-[#14B8A6] rounded-[3rem] blur-2xl opacity-20" />
            
            {/* Main card */}
            <div className="relative bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
              {/* Header gradient */}
              <div className="relative h-32 bg-gradient-to-br from-[#6D28D9] via-[#8B5CF6] to-[#14B8A6] overflow-hidden">
                {/* Animated pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }} />
                
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="inline-block mb-2"
                    >
                      <Shield className="w-8 h-8 text-white" />
                    </motion.div>
                    <p className="text-white font-bold uppercase tracking-widest text-xs">Secure Access</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="p-10 space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-black text-[#0F172A] mb-2">Sign In</h3>
                  <p className="text-sm text-slate-500">Enter your credentials to access the platform</p>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Email Address</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-slate-400 group-focus-within:text-[#6D28D9] transition-colors" />
                    </div>
                    <input
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      onKeyPress={handleKeyPress}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/50 focus:border-[#6D28D9] focus:bg-white transition-all text-[#0F172A] font-medium"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Password</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-slate-400 group-focus-within:text-[#6D28D9] transition-colors" />
                    </div>
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={form.password}
                      onChange={handleChange}
                      onKeyPress={handleKeyPress}
                      className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/50 focus:border-[#6D28D9] focus:bg-white transition-all text-[#0F172A] font-medium"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-slate-400 hover:text-[#6D28D9] transition-colors" />
                      ) : (
                        <Eye className="w-5 h-5 text-slate-400 hover:text-[#6D28D9] transition-colors" />
                      )}
                    </button>
                  </div>
                </div>

              

                {/* Login Button */}
                <motion.button
                  onClick={handleLogin}
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white py-4 rounded-2xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#6D28D9]/30 flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In to Platform</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                  
                  {/* Shimmer effect */}
                  {!loading && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                  )}
                </motion.button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-4 text-slate-500 font-bold tracking-wider">Or continue with</span>
                  </div>
                </div>

               
                {/* Register Link */}
                <p className="text-center text-sm text-slate-500">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-[#6D28D9] font-bold hover:underline">
                    Create Account
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}