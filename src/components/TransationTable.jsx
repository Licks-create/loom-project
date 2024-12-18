/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import React from "react";
const TransationTable = ({ transationData }) => {
  return (
    <div className=" overflow-x-auto">
      <table className=" w-full">
        <thead>
          <tr className=" text-left text-xs font-semibold text-gray-500 uppercase">
            <th className=" pb-2 pr-6">Date</th>
            <th className=" pb-2 pr-6">To / From</th>
            <th className=" pb-2 pr-6">Amount</th>
            <th className=" pb-2 pr-6">Account</th>
            <th className=" pb-2 pr-6">
              <MonetizationOnIcon />
              Payment Method
            </th>
            <th className=" pb-2 ">Attachment</th>
          </tr>
        </thead>
        <tbody>
          {transationData.map((data, index) => (
            <tr key={data.id} className=" border-t border-gray-100">
              <td className=" w-16 h-8 py-4 pr-6 align-top group cursor-pointer ">
                <div className=" hidden group-hover:block text-xs">
                  {new Date(data.date)
                    .toLocaleString("default", {
                      month: "long",
                    })
                    .slice(0, 3) +
                    " " +
                    new Date(data.date).getDate()}
                </div>
              </td>
              <td className="  rounded-full flex items-center justify-start  mr-3 text-xs font-medium text-gray-500">
                {data.company}
              </td>
              <td className=" text-gray-500 text-sm py-4 ">{data.amount}</td>
              <td className=" text-gray-500 text-sm py-4 ">{data.account}</td>
              <td className=" text-gray-500 text-sm py-4 ">
                {data.paymentMethod}
              </td>
              <td className=" text-gray-500 text-sm py-4 ">
                {data.attachment ? <DocumentScannerIcon /> : <AddCircleIcon />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransationTable;
