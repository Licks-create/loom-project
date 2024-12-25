/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TransationTable from "./components/TransationTable";
import { TransationData } from "./transationData";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Discalimer from "./components/Discalimer";
import Hero from "./components/Hero";

function App() {
  const [pages, setPages] = useState(0);
  const [display, setDisplay] = useState(false);
  const [error, setError] = useState(false);
  const [nextPage, setNextPage] = useState(1);
  const [transationsData, setTransationData] = useState(TransationData);
  console.log({ nextPage });
  useEffect(() => {
    async function getLists(nextPage) {
      try {
        const data = await fetch(
          "https://interview-mercury.free.beeceptor.com/transaction?page=" +
            nextPage
        );
        let jsonData = await data.json();
        console.log({ jsonData });
        if (jsonData.status === "success") {
          setPages(Number(jsonData.data.pagination.total_pages));
          setTransationData(jsonData.data.transactions);
        }
      } catch (error) {
        setError(true)
        console.log({ error });
      }
    }
    getLists(nextPage);
  }, [nextPage]);
  return (
    <>
      <div className={` hidden  ${display ? "hidden" : "max-[600px]:block"}`}>
        <Discalimer setDisplay={setDisplay} />
      </div>
      <div
        className={`  max-[600px]:${
          display ? "block" : "hidden"
        } min-h-screen bg-gray-100 p-8 `}
      >
        <div className=" max-w-7xl mx-auto">
          <Hero
            setPageNo={setNextPage}
            totalPages={pages}
            currentPage={nextPage}
            error={error}
          />
          <div className=" bg-white rounded-lg shadow-sm p-6">
            <div className=" flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <button className=" md:px-3 md:py-2 border border-gray-300 rounded-md text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 flex p-2">
                  <ArrowDropDownIcon /> <span>Add Filter</span>
                </button>
                <span className=" text-sm text-gray-500">
                  No filters applied
                </span>
              </div>
              <button className=" px-3 py-2 border border-gray-300 rounded-md text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 flex">
                <FileDownloadIcon /> <span>Export All</span>
              </button>
            </div>
            <TransationTable transationData={transationsData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
