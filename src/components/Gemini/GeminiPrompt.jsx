import React, { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import { askGemini } from "../../../lib/action";
import DisplayResponse from "./DisplayResponse";
import { IoSparklesSharp } from "react-icons/io5";

const GeminiPrompt = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  useEffect(() => {
    setResponse("");
    setPrompt("");
  }, []);
  return isPromptOpen ? (
    <section className="h-screen w-full absolute bg-[#0000004b] backdrop-blur-sm z-50 top-0 p-8">
      <main>
        <article className="flex flex-col justify-center items-center w-full gap-10">
          <form className="flex justify-center items-center gap-8 w-full">
            <input
              onChange={(e) => setPrompt(e.target.value)}
              type="text"
              placeholder="Ask a question..."
              className="w-full h-12 rounded-lg border-none outline-none p-4 focus:bg-gray-300"
            />
            <button
              onClick={async (e) => {
                e.preventDefault();
                console.log("Asking GPT...");
                const response = await askGemini(prompt);
                setResponse(response);
              }}
              className="h-12 w-44 rounded-lg hover:bg-emerald-500 text-emerald-400 hover:text-white border-2 border-emerald-500 font-semibold duration-100"
            >
              Ask
            </button>
            <button
              onClick={() => setIsPromptOpen(false)}
              className="h-12 w-44 rounded-lg hover:bg-red-500 text-red-400 hover:text-white border-2 border-red-500 font-semibold duration-100"
            >
              Close
            </button>
          </form>
          <div className="h-[75vh] bg-white w-full flex justify-center items-center text-start overflow-y-scroll p-4 rounded-xl">
            {response ? (
              <DisplayResponse response={response} />
            ) : response && prompt ? (
              <p>
                <DotLoader color="gray" size={50} />{" "}
              </p>
            ) : (
              <p className="text-xl font-semibold">Ask a question...</p>
            )}
          </div>
        </article>
      </main>
    </section>
  ) : (
    <div className="fixed z-50 bottom-8 right-8">
      <button
        onClick={() => setIsPromptOpen(true)}
        className="py-2 px-4 rounded-xl flex gap-2 justify-center items-center bg-slate-500 text-2xl text-white font-semibold"
      >
        <p className="text-2xl font-semibold">AI</p>
        <IoSparklesSharp />
      </button>
    </div>
  );
};

export default GeminiPrompt;
