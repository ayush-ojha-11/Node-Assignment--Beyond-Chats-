import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5 align-bottom">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-2xl text-center font-semibold text-blue-500">
              Beyond Chats
            </h1>
            <p className="text-sm text-gray-400 mt-2">
              &copy; 2025 Beyond Chats. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-8 text-center">
            <a
              href="https://beyondchats.com/about-us/"
              className="text-gray-400 hover:text-white"
            >
              About Us
            </a>
            <a
              href="https://beyondchats.com/contact-us/"
              className="text-gray-400 hover:text-white"
            >
              Contact
            </a>
            <a
              href="https://beyondchats.com/privacy-policy/"
              className="text-gray-400 hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="https://beyondchats.com/terms-and-conditions/"
              className="text-gray-400 hover:text-white"
            >
              Terms of Service
            </a>
          </div>

          <div className="flex space-x-6 mt-6 lg:mt-0">
            <a href="https://beyondchats.com/">
              <i className="ri-earth-fill"></i>
            </a>
            <a href="https://www.linkedin.com/company/beyondchats-ai/">
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fbeyondchats_ai">
              <i className="ri-twitter-x-fill"></i>
            </a>
            <a href="https://www.instagram.com/beyondchats_ai/">
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
