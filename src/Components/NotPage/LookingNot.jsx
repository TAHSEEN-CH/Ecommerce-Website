import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Heading - Now Left Aligned */}
      <div className="w-full px-14">
        <h1 className="text-xl md:text-3xl text-gray-800 mb-8 font-bold text-left">
          The page you are looking for was not found.
        </h1>
      </div>

      {/* Card */}
      <div className="bg-gray-50 shadow-lg rounded-lg p-10 w-full max-w-2xl text-center mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Sorry For The Inconvenience.
        </h2>
        <p className="text-gray-600 mb-4">Search again what you are looking for.</p>

        {/* Go To Home Button */}
        <a
          href="/"
          className="text-black font-medium hover:underline"
        >
          Go To Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
