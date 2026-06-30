import { useEffect } from "react";

function ChatBot() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://cdn.jotfor.ms/agent/embedjs/019f133812b17ddf877422ce65cd62fd2e7c/embed.js";

    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default ChatBot;
