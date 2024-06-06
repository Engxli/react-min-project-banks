import React from "react";

const Input = ({ label, type, name, handleOnChange }) => {
  return (
    <div className="w-full h-full flex flex-col gap-2 ">
      <p>{label}</p>
      <input
        placeholder={label}
        className="h-full border px-3"
        type={type}
        name={name}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Input;
