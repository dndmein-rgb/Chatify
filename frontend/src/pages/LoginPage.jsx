import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import BorderAnimatedContainer from '../components/BorderAnimatedContainer';
import { MessageCircleIcon, LockIcon, MailIcon,  LoaderIcon } from "lucide-react";
import { Link } from "react-router";

const LoginPage = () => {
   const [formData, setFormData] = useState({ email: "", password: "" });
    const { login, isloggingIn } = useAuthStore();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      login(formData);
    };
 return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      <div className="relative w-full max-w-5xl">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row overflow-hidden rounded-2xl">
            {/* LEFT - FORM */}
            <div className="md:w-1/2 p-8 flex items-center justify-center bg-slate-900/70 backdrop-blur-sm border-r border-slate-700/30">
              <div className="w-full max-w-md">
                <div className="text-center mb-8">
                  <MessageCircleIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                  <h2 className="text-2xl font-bold text-slate-200 mb-2">Welcome back</h2>
                  <p className="text-slate-400">login to access your account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* EMAIL */}
                  <div>
                    <label className="auth-input-label">Email</label>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input"
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div>
                    <label className="auth-input-label">Password</label>
                    <div className="relative">
                      <LockIcon className="auth-input-icon" />
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="input"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button className="auth-btn" type="submit" disabled={isloggingIn}>
                    {isloggingIn ? (
                      <LoaderIcon className="w-5 h-5 animate-spin mx-auto" />
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link to="/signup" className="auth-link">
                    Don't have an account? Sign Up
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT - IMAGE */}
            <div className="hidden md:flex md:w-1/2 items-center justify-center p-8 bg-gradient-to-bl from-slate-800/30 to-slate-900/10">
              <div className="text-center">
                <img
                  src="/login.png"
                  alt="People using mobile devices"
                  className="max-w-full h-auto object-contain mx-auto"
                />
                <h3 className="mt-6 text-xl font-medium text-cyan-400">Connect anytime,anywhere</h3>
                <div className="mt-4 flex justify-center gap-4 flex-wrap">
                  <span className="auth-badge">Free</span>
                  <span className="auth-badge">Easy Setup</span>
                  <span className="auth-badge">Private</span>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
}

export default LoginPage