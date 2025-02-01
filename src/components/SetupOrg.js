import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SetupOrg = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyURL, setCompanyURL] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [webpages, setWebpages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [isTraining, setIsTraining] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (companyURL) {
      setMetaDescription(`This is the meta description for ${companyURL}`);
    }
  }, [companyURL]);

  useEffect(() => {
    const dummyPages = [
      { id: 1, url: "https://www.company.com/home", status: "scraped" },
      { id: 2, url: "https://www.company.com/about", status: "pending" },
      { id: 3, url: "https://www.company.com/contact", status: "scraped" },
    ];
    setWebpages(dummyPages);
  }, []);

  const handlePageClick = (page) => {
    setSelectedPage(page);
  };

  // Handle training state toggle
  const toggleTraining = () => {
    setIsTraining(!isTraining);
    setTimeout(() => {
      navigate("/chatbotintegration");
    }, 2000);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Setup Your Organization
      </h1>

      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Company Information
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="companyURL"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Website URL
            </label>
            <input
              type="url"
              id="companyURL"
              value={companyURL}
              onChange={(e) => setCompanyURL(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="companyDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Description
            </label>
            <textarea
              id="companyDescription"
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>

          <div>
            <label
              htmlFor="metaDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Meta Description (auto-fetch)
            </label>
            <input
              type="text"
              id="metaDescription"
              value={metaDescription}
              disabled
              className="w-full px-4 py-2 border bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Detected Webpages
        </h2>
        <div className="space-y-4">
          {webpages.map((page) => (
            <div
              key={page.id}
              className={`p-4 rounded-lg cursor-pointer ${
                page.status === "scraped" ? "bg-green-100" : "bg-yellow-100"
              }`}
              onClick={() => handlePageClick(page)}
            >
              <p className="text-sm font-semibold">{page.url}</p>
              <p className="text-xs">{page.status}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedPage && (
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Data Chunks from {selectedPage.url}
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">Chunk 1</h3>
              <p>This is some content scraped from the page...</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">Chunk 2</h3>
              <p>This is some more content scraped from the page...</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row justify-between items-center bg-white p-8 rounded-lg shadow-md">
        <div>
          <button
            onClick={toggleTraining}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isTraining ? "Wait for Training to Finish" : "Move to Next Step"}
          </button>
        </div>
        <div className="text-center mt-4">
          {isTraining && (
            <p className="text-sm text-blue-600">
              Training in progress... please wait for the process to complete.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SetupOrg;
