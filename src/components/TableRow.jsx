/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
let preDate = "";

const TableRow = ({
  id,
  date,
  company,
  amount,
  account,
  paymentMethod,
  attachment,
}) => {
  return (
    <tr
      key={id}
      className=" border-t border-gray-100 hover:bg-[#a09eb527] transition-all cursor-pointer group "
    >
      <td className=" w-16 p-2 align-top  cursor-pointer relative ">
        {preDate == date ? (
          <div className=" hidden group-hover:block text-xs font-semibold absolute top-[40%]">
            {new Date(date)
              .toLocaleString("default", {
                month: "long",
              })
              .slice(0, 3) +
              "-" +
              new Date(date).getDate()}
          </div>
        ) : (
          (preDate = date) && (
            <div className=" text-xs text  absolute top-[40%]">
              {new Date(date)
                .toLocaleString("default", {
                  month: "long",
                })
                .slice(0, 3) +
                "-" +
                new Date(date).getDate()}
            </div>
          )
        )}
      </td>
      <td className=" text-xs font-medium text-gray-500">{company}</td>
      <td
        className={` text-gray-500 text-sm py-4 ${
          Number(amount) > 0 ? "text-[#188554]" : ""
        }  font-bold`}
      >
        {amount}
      </td>
      <td className=" text-gray-500 text-sm py-4 ">{account}</td>
      <td className=" text-gray-500 text-sm py-4 ">{paymentMethod}</td>
      <td
        className={` text-gray-500 text-sm py-4 ${
          attachment ? " " : ""
        } cursor-pointer`}
      >
        {attachment ? <DocumentScannerIcon /> : <AddCircleIcon />}
      </td>
    </tr>
  );
};

export default TableRow;
