import React from "react";

const Button = ({ children }) => {
  return (
    <div className="mt-12 text-center">
      <button className="rounded-md py-2 5 px-6 bg-white border border-gray-100 text-lg shadow hover:shadow-lg text-gray-600">
        {children}
      </button>
    </div>
  );
};

export default Button;
