import React from 'react'
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center my-8 space-y-5">
      <h2 className="font-bold text-4xl">Error, page not found</h2>
      <p className="pb-2">
        Please go back to home <br />
      </p>

      <Link
        to="/"
        className="bg-blue-500 py-1 px-3 rounded-full text-white"
      >
        Home
      </Link>
    </div>
  );
};

export default Error