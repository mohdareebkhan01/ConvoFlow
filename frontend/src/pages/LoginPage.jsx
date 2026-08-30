import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import {
  MessageCircleIcon,
  MailIcon,
  LoaderIcon,
  LockIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row">
            
            {/* ================= LEFT: LOGIN FORM ================= */}
            <div className="md:w-1/2 p-8 md:p-10 flex items-center justify-center md:border-r border-slate-600/30">
              <div className="w-full max-w-md">

                {/* HEADING */}
                <div className="text-center mb-8">
                  <MessageCircleIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />

                  <h2 className="text-2xl font-bold text-slate-200 mb-2">
                    Welcome Back
                  </h2>

                  <p className="text-slate-400">
                    Login to access your account
                  </p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* EMAIL */}
                  <div>
                    <label className="auth-input-label">
                      Email
                    </label>

                    <div className="relative">
                      <MailIcon className="auth-input-icon" />

                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="input"
                        placeholder="johndoe@gmail.com"
                        required
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div>
                    <label className="auth-input-label">
                      Password
                    </label>

                    <div className="relative">
                      <LockIcon className="auth-input-icon" />

                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            password: e.target.value,
                          })
                        }
                        className="input"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>

                  {/* LOGIN BUTTON */}
                  <button
                    className="auth-btn"
                    type="submit"
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? (
                      <LoaderIcon className="w-5 h-5 mx-auto animate-spin" />
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                {/* SIGNUP LINK */}
                <div className="mt-6 text-center">
                  <Link to="/signup" className="auth-link">
                    Don't have an account? Sign Up
                  </Link>
                </div>

              </div>
            </div>

            {/* ================= RIGHT: ILLUSTRATION ================= */}
            <div className="hidden md:w-1/2 md:flex items-center justify-center p-8 bg-gradient-to-bl from-slate-800/20 to-transparent">
              <div className="w-full flex flex-col items-center justify-center">

                {/* IMAGE */}
                <img
                  src="/login.png"
                  alt="People communicating online"
                  className="w-[75%] max-w-[400px] h-auto object-contain"
                />

                {/* TEXT */}
                <div className="mt-5 text-center">
                  <h3 className="text-xl font-medium text-cyan-400">
                    Connect anytime, anywhere
                  </h3>

                  {/* BADGES */}
                  <div className="mt-4 flex justify-center gap-3">
                    <span className="auth-badge">
                      Free
                    </span>

                    <span className="auth-badge">
                      Easy Setup
                    </span>

                    <span className="auth-badge">
                      Private
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
}

export default LoginPage;