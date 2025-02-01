import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <div
          className="text-white text-xl font-bold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Beyond Chats
        </div>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={`hidden lg:flex lg:space-x-4`}>
          <Link to={"/"} className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to={"/registration"} className="text-white hover:text-gray-300">
            Register
          </Link>

          <a
            href={"https://beyondchats.com/about-us/"}
            className="text-white hover:text-gray-300"
          >
            About
          </a>
          <a
            href={"https://beyondchats.com/terms-and-conditions/"}
            className="text-white hover:text-gray-300"
          >
            Services
          </a>
          <a
            href={"https://beyondchats.com/faq/"}
            className="text-white hover:text-gray-300"
          >
            Support
          </a>
        </nav>
      </div>

      {/* Mobile Menu  */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="space-y-2 mt-2">
          <li>
            <Link to={"/"} className="block text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/registration"}
              className="block text-white hover:text-gray-300"
            >
              Register
            </Link>
          </li>

          <li>
            <a
              href={"https://beyondchats.com/about-us/"}
              className="block text-white hover:text-gray-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              to={"https://beyondchats.com/terms-and-conditions/"}
              className="block text-white hover:text-gray-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href={"https://beyondchats.com/faq/"}
              className="block text-white hover:text-gray-300"
            >
              Support
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
