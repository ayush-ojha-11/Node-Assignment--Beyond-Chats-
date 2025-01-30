import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Confetti from "react-confetti";

const ChatbotIntegration = () => {
  const [isIntegrationSuccess, setIsIntegrationSuccess] = useState(false);
  const [isIntegrationFailure, setIsIntegrationFailure] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const testChatbot = () => {};

  const handleIntegrateWebsite = () => {
    alert("You can follow the instructions below to integrate the chatbot.");
  };

  const testIntegration = () => {
    const isSuccess = true; // always true
    if (isSuccess) {
      setShowConfetti(true);
      setIsIntegrationSuccess(true);
      setIsIntegrationFailure(false);

      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    } else {
      setIsIntegrationFailure(true);
      setIsIntegrationSuccess(false);
    }
  };

  const handleRedirect = (destination) => {
    if (destination === "admin") {
      navigate("/admin");
    } else {
      navigate("/chat");
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Chatbot Integration
      </h1>

      <div className=" grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2 items-center">
        <button
          onClick={testChatbot}
          className="w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Test Chatbot
        </button>

        <button
          onClick={handleIntegrateWebsite}
          className="w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Integrate on Your Website
        </button>

        <button
          onClick={testIntegration}
          className="w-auto px-6 py-3 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Test Integration
        </button>
      </div>

      {showConfetti && isIntegrationSuccess && (
        <div className="relative m-4">
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <div className="text-center space-x-2">
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              Success!
            </h2>
            <p className="text-lg mb-4">
              Your chatbot has been successfully integrated!
            </p>
            <button
              onClick={() => handleRedirect("admin")}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 mb-4"
            >
              Explore Admin Panel
            </button>
            <button
              onClick={() => handleRedirect("chat")}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
            >
              Start talking to your chatbot
            </button>
            <div className="mt-6">
              <button className="mr-4 text-blue-600 hover:underline">
                Share on Twitter
              </button>
              <button className="mr-4 text-blue-600 hover:underline">
                Share on Facebook
              </button>
              <button className="text-blue-600 hover:underline">
                Share on LinkedIn
              </button>
            </div>
          </div>
        </div>
      )}

      {isIntegrationFailure && (
        <div className="text-center p-8 bg-red-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Integration Failed
          </h2>
          <p className="text-lg mb-4">
            We couldn't detect the chatbot integration. Please try again or
            contact support.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatbotIntegration;
