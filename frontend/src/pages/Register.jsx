// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import API from "../api";

// export default function Register() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     otp: "",
//   });

//   const [otpSent, setOtpSent] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSendOtp = async () => {
//     if (!form.name || !form.email) {
//       alert("Name and email required");
//       return;
//     }

//     try {
//       setLoading(true);

//       await API.post("/auth/send-otp", {
//         name: form.name,
//         email: form.email,
//       });

//       setOtpSent(true);
//       alert("OTP sent to your email");
//     } catch {
//       alert("Failed to send OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRegister = async () => {
//     try {
//       setLoading(true);

//       await API.post("/auth/register", form);

//       alert("Registration successful");
//       navigate("/login");
//     } catch {
//       alert("Registration failed");
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
//           Register
//         </h2>

//         <input
//           name="name"
//           placeholder="Full Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
//         />

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

//         {!otpSent ? (
//           <button
//             onClick={handleSendOtp}
//             disabled={loading}
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition disabled:opacity-50"
//           >
//             {loading ? "Sending OTP..." : "Send OTP"}
//           </button>
//         ) : (
//           <>
//             <input
//               name="otp"
//               placeholder="Enter OTP"
//               value={form.otp}
//               onChange={handleChange}
//               className="w-full border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
//             />

//             <button
//               onClick={handleRegister}
//               disabled={loading}
//               className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition disabled:opacity-50"
//             >
//               {loading ? "Creating Account..." : "Register"}
//             </button>
//           </>
//         )}

//         <p className="text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link to="/login" className="text-indigo-600 font-medium">
//             Login
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Zap, 
  TrendingUp,
  Brain,
  Eye,
  EyeOff,
  Loader2,
  CheckCircle2,
  KeyRound,
  Send,
  Check
} from "lucide-react";
import API from "../api";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSendOtp = async () => {
    if (!form.name || !form.email) {
      alert("Name and email required");
      return;
    }

    try {
      setLoading(true);

      await API.post("/auth/send-otp", {
        name: form.name,
        email: form.email,
      });

      setOtpSent(true);
      alert("OTP sent to your email");
    } catch {
      alert("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    try {
      setLoading(true);

      await API.post("/auth/register", form);

      alert("Registration successful");
      navigate("/login");
    } catch {
      alert("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (!otpSent) {
        handleSendOtp();
      } else {
        handleRegister();
      }
    }
  };

  const features = [
    { icon: <Brain className="w-5 h-5" />, text: "AI-Powered Analytics", color: "text-[#6D28D9]" },
    { icon: <Shield className="w-5 h-5" />, text: "Enterprise Security", color: "text-[#14B8A6]" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Real-Time Insights", color: "text-[#C4B5FD]" },
    { icon: <Zap className="w-5 h-5" />, text: "Instant Processing", color: "text-[#6D28D9]" },
  ];

  const benefits = [
    "Access to 10,000+ evaluated pitches",
    "Institutional-grade AI scoring",
    "Real-time market intelligence",
    "Automated deal flow management",
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
                  Join the Elite
                  <span className="block bg-gradient-to-r from-[#6D28D9] to-[#14B8A6] bg-clip-text text-transparent">
                    VC Network
                  </span>
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                  Get instant access to AI-powered pitch intelligence used by top-tier venture capital firms worldwide.
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

            {/* Benefits List */}
            <div className="space-y-3 pt-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">What You Get:</p>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-[#6D28D9] to-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-600">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - REGISTER FORM */}
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
                      <Sparkles className="w-8 h-8 text-white" />
                    </motion.div>
                    <p className="text-white font-bold uppercase tracking-widest text-xs">
                      {otpSent ? "Verify Your Identity" : "Create Account"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="p-10 space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-black text-[#0F172A] mb-2">
                    {otpSent ? "Enter Verification Code" : "Get Started"}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {otpSent 
                      ? "We've sent a code to your email address"
                      : "Join thousands of VCs using AI-powered insights"
                    }
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {!otpSent ? (
                    <motion.div
                      key="register-form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      {/* Name Input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Full Name</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <User className="w-5 h-5 text-slate-400 group-focus-within:text-[#6D28D9] transition-colors" />
                          </div>
                          <input
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            value={form.name}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/50 focus:border-[#6D28D9] focus:bg-white transition-all text-[#0F172A] font-medium"
                          />
                        </div>
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

                      {/* Send OTP Button */}
                      <motion.button
                        onClick={handleSendOtp}
                        disabled={loading}
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                        className="w-full bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white py-4 rounded-2xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#6D28D9]/30 flex items-center justify-center gap-3 group relative overflow-hidden mt-6"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending Verification Code...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Verification Code</span>
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
                    </motion.div>
                  ) : (
                    <motion.div
                      key="otp-form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      {/* Success message */}
                      <div className="p-4 bg-[#14B8A6]/10 border border-[#14B8A6]/20 rounded-2xl flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-bold text-[#0F172A]">Code sent successfully!</p>
                          <p className="text-xs text-slate-500 mt-1">Check your email for the verification code</p>
                        </div>
                      </div>

                      {/* OTP Input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Verification Code</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <KeyRound className="w-5 h-5 text-slate-400 group-focus-within:text-[#14B8A6] transition-colors" />
                          </div>
                          <input
                            name="otp"
                            type="text"
                            placeholder="Enter 6-digit code"
                            value={form.otp}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                            maxLength={6}
                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/50 focus:border-[#14B8A6] focus:bg-white transition-all text-[#0F172A] font-medium text-center text-2xl tracking-widest"
                          />
                        </div>
                      </div>

                      {/* Resend OTP */}
                      <div className="text-center">
                        <button 
                          onClick={handleSendOtp}
                          className="text-sm text-slate-500 hover:text-[#6D28D9] font-medium transition-colors"
                        >
                          Didn't receive code? <span className="font-bold">Resend</span>
                        </button>
                      </div>

                      {/* Complete Registration Button */}
                      <motion.button
                        onClick={handleRegister}
                        disabled={loading}
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                        className="w-full bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] hover:from-[#0D9488] hover:to-[#14B8A6] text-white py-4 rounded-2xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#14B8A6]/30 flex items-center justify-center gap-3 group relative overflow-hidden"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Creating Your Account...</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-5 h-5" />
                            <span>Complete Registration</span>
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

                      {/* Back button */}
                      <button
                        onClick={() => setOtpSent(false)}
                        className="w-full text-sm text-slate-500 hover:text-[#6D28D9] font-medium transition-colors"
                      >
                        ← Back to registration
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Login Link */}
                <p className="text-center text-sm text-slate-500 pt-4 border-t border-slate-100">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#6D28D9] font-bold hover:underline">
                    Sign In
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