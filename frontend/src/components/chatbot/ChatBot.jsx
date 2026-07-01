import { useState } from "react";
import axios from "axios";

function ChatBot({ prediction }) {
  const disease = prediction?.detections?.[0]?.disease || "";
  const report =
    typeof prediction?.report === "string"
      ? prediction.report
      : JSON.stringify(prediction?.report, null, 2);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hello! I'm MedVision AI. Ask me anything about ${
        disease || "this X-ray"
      }.`,
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const question = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: question,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:8000/chat", {
        question,
        disease,
        report,
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: res.data.answer,
        },
      ]);
    } catch (err) {
      console.log("Status:", err.response?.status);
      console.log("Data:", err.response?.data);
      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I couldn't generate a response.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border p-5 h-[520px] flex flex-col">
      <h2 className="text-xl font-semibold">💬 Ask MedVision AI</h2>

      <p className="text-gray-500 text-sm mt-1 mb-4">
        Ask questions about this report.
      </p>

      {disease && (
        <div className="mb-4 rounded-xl bg-blue-50 border border-blue-100 p-3">
          <p className="text-xs uppercase text-gray-500">Current Diagnosis</p>

          <p className="font-semibold text-blue-700 text-lg">{disease}</p>
        </div>
      )}

      <div className="flex-1 overflow-y-auto border rounded-xl p-3 bg-gray-50 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.role === "user" ? "flex justify-end" : "flex justify-start"
            }
          >
            <div
              className={
                msg.role === "user"
                  ? "bg-blue-600 text-white px-4 py-2 rounded-2xl max-w-[80%]"
                  : "bg-white border px-4 py-2 rounded-2xl max-w-[80%]"
              }
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="text-sm text-gray-500">
            MedVision AI is thinking...
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-4">
        <input
          type="text"
          value={input}
          placeholder="Ask about this report..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          className="flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
