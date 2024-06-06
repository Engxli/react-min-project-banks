import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className=" text-white w-full h-full rounded-lg bg-green-600 flex justify-center items-center cursor-pointer hover:bg-green-500 active:bg-green-400"
    >
      {label}
    </div>
  );
};

export default Button;
