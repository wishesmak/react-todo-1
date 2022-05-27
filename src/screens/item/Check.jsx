import React from "react";
import { BsCheck } from "react-icons/bs";

const Check = ({ isCompleted, status }) => {
  const colors = ["blue", "yellow", "red"];

  return (
    <div
      className={`border-2 bg-${colors[status]}-400 border-${
        colors[status]
      }-400  w-5 h-5 rounded-lg mr-2 flex items-center justify-center transition-opacity ease-in-out bg-opacity-0 ${
        isCompleted && "bg-opacity-100"
      }`}
    >
      <BsCheck size={20} className="text-gray-900" />
    </div>
  );
};

export default Check;
