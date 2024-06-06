import React from "react";

const FileInput = ({ name, handleOnChange }) => {
  return (
    <div className="w-full h-full ">
      <input type="file" name={name} onChange={handleOnChange} />
    </div>
  );
};

export default FileInput;
