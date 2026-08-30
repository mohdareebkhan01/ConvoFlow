import { Routes, Route, Navigate } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import PageLoader from "./components/PageLoader";
import {Toaster} from "react-hot-toast"

function App() {
     const { checkAuth, isCheckingAuth, authUser } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser }); 
  if(isCheckingAuth) return <PageLoader/>
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#080d18] flex items-center justify-center p-4">

      {/* BASE COSMIC BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#162238_0%,#0d1422_50%,#080d18_100%)]" />

      {/* PURPLE NEBULA */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(88,28,135,0.18),transparent_35%)]" />

      {/* BLUE NEBULA */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(37,99,235,0.16),transparent_35%)]" />

      {/* INDIGO NEBULA */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(79,70,229,0.12),transparent_40%)]" />

      {/* STARS */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:45px_45px]" />

      {/* SMALLER STARS */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#93c5fd_1px,transparent_1px)] bg-[size:80px_80px] bg-[position:20px_30px]" />

      {/* TOP BLUE GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/5 blur-[120px]" />

      {/* BOTTOM INDIGO GLOW */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-indigo-500/5 blur-[120px]" />

      {/* PAGE CONTENT */}
      <div className="relative z-10 w-full">

        {/* <button onClick={login}>login</button> */} 

        <Routes>
          <Route path="/" element={authUser ? <ChatPage /> : <Navigate to={"/login"}/>} />
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"}/>} />
          <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"}/>} />
        </Routes>
        <Toaster/>
      </div>

    </div>
  );
}

export default App;
