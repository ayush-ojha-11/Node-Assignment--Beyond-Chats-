import React from "react";

const Body = () => {
  return (
    <div className="bg-gray-50">
      <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-8 lg:px-24 bg-blue-600 text-white">
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Welcome to Beyond Chats
          </h1>
          <p className="text-lg mb-6">
            Empower your business with custom AI chatbots that provide 24/7
            support, boost customer engagement, and streamline operations.
          </p>
          <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center">
          <img
            src="https://news.cornell.edu/sites/default/files/styles/story_thumbnail_xlarge/public/2024-07/robot-1280x720_0.jpg?itok=AF6MakCq" // Placeholder image, you can replace with a real image later
            alt="Chatbot illustration"
            className="w-full h-auto max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 lg:px-24 bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Features of Beyond Chats
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              24/7 Support
            </h3>
            <p className="text-gray-700">
              Our chatbots are always online, ready to assist customers at any
              time of the day.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Easy Integration
            </h3>
            <p className="text-gray-700">
              Integrate seamlessly with your existing systems, whether it's a
              website, app, or CRM.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Customizable AI
            </h3>
            <p className="text-gray-700">
              Tailor the chatbot's responses to fit your brand and customer
              needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
