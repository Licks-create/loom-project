/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Discalimer = ({ setDisplay }) => {
  const handleOnClick = () => {
    setDisplay(true);
  };
  return (
    <div className=" min-h-screen justify-center p-4 items-center flex flex-col gap-4">
      <div>This table is best experienced on a desktop</div>
      <button
        className=" px-4 py-2 cursor-pointer rounded-full text-[#5266EB] bg-blue-100"
        onClick={handleOnClick}
      >
        Proceed To Demo
      </button>
    </div>
  );
};

export default Discalimer;
