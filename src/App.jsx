import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import ChatGptPrompt from "./components/Gemini/GeminiPrompt";

export default function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {}, [user]);
  return (
    <div className="flex justify-center items-center gap-8 flex-col">
    <ChatGptPrompt/>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
