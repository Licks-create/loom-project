/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import React from "react";
import TableRow from "./TableRow";
const TransationTable = ({ transationData }) => {
  return (
    <div className=" overflow-x-auto">
      <table className=" w-full">
        <thead>
          <tr className=" text-left text-xs font-semibold text-gray-500 uppercase">
            <th className=" pb-2 pr-6 text-center">Date</th>
            <th className=" pb-2 pr-6 text-center">To / From</th>
            <th className=" pb-2 pr-6 text-center">Amount</th>
            <th className=" pb-2 pr-6 text-center">Account</th>
            <th className=" pb-2 pr-6 text-center">
              <MonetizationOnIcon />
              Payment Method
            </th>
            <th className=" pb-2 text-center">Attachment</th>
          </tr>
        </thead>
        <tbody>
          {transationData.map((data, index) => {
            return <TableRow key={data.id} {...data} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransationTable;
