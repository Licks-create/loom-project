/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Hero = ({ setPageNo, totalPages, currentPage, error }) => {
  return (
    <div className=" flex justify-between mb-3">
      <h1 className=" text-2xl font-semibold text-gray-800 mb-8">
        {error ? "Error 429: Too Many request!" : "Transations"}
      </h1>
      <div className=" flex gap-2 overflow-x-auto">
        {totalPages === 0 ? (
          <div className="shimmer w-[320px] h-[40px] rounded-2xl " />
        ) : (
          new Array(totalPages).fill("").map((_, index) => (
            <div
              key={index}
              className={` transition-all border border-gray-300 rounded-md text-xs md:text-sm font-medium  flex px-4 py-1 items-center cursor-pointer ${
                currentPage == index + 1
                  ? "bg-gray-500 pointer-events-none text-white"
                  : " pointer-events-auto bg-transparent text-gray-700 hover:bg-gray-50 "
              }`}
              onClick={() => setPageNo(index + 1)}
            >
              {index + 1}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Hero;
