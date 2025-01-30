import React, { useState } from "react";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";

const ChatBotPage = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { sender: "user", text: input }]);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "I'm a dummy bot! 😊" },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to Chatbot Page</h1>

      <button
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
        onClick={toggleChat}
      >
        <FaRobot size={36} />
      </button>

      {chatOpen && (
        <div className="fixed bottom-16 right-6 w-80 bg-white rounded-lg shadow-lg border border-gray-300">
          <div className="flex justify-between items-center bg-blue-500 text-white p-3 rounded-t-lg">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <button onClick={toggleChat}>
              <FaTimes size={25} />
            </button>
          </div>

          <div className="p-3 h-64 overflow-y-auto flex flex-col">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 my-1 rounded-lg max-w-xs ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex space-x-1">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotPage;
