/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TransationTable from "./components/TransationTable";
import { TransationData } from "./transationData";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Discalimer from "./components/Discalimer";

function App() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false);

  return (
    <>
      <div className={  ` hidden  ${display ? "hidden" : "max-[600px]:block"}`}>
        <Discalimer setDisplay={setDisplay} />
      </div>
      <div
        className={`  max-[600px]:${
          display ? "block" : "hidden"
        } min-h-screen bg-gray-100 p-8 `}
      >
        <div className=" max-w-7xl mx-auto">
          <h1 className=" text-2xl font-semibold text-gray-800 mb-8">
            Transations
          </h1>
          <div className=" bg-white rounded-lg shadow-sm p-6">
            <div className=" flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <button className=" px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <ArrowDropDownIcon /> Add Filter
                </button>
                <span className=" text-sm text-gray-500">
                  No filters applied
                </span>
              </div>
              <button className=" px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                <FileDownloadIcon /> Export All
              </button>
            </div>
            <TransationTable transationData={TransationData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
