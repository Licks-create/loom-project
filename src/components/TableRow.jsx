/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import moment from "moment";
let preDate = "";
const TableRow = ({
  id,
  date,
  to,
  amount,
  currency,
  type,
  attachment = false,
  from,
}) => {
  console.log({preDate});
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
          (preDate = date.split("T")[0]) && (
            <div className="text-center text-xs text  absolute top-[40%]">
              {moment(date).format("MMM DD")}
            </div>
          )
        )}
      </td>
      <td className=" text-xs text-center font-medium text-gray-500">{to}</td>
      <td className=" text-xs text-center font-medium text-gray-500">{from}</td>
      <td
        className={`text-center text-gray-500 text-sm py-4 ${
          Number(amount) > 0 ? "text-[#188554]" : ""
        }  font-bold`}
      >
        {amount}
      </td>
      <td className=" text-gray-500 text-sm py-4 text-center">{currency}</td>
      <td className=" text-gray-500 text-sm py-4 text-center ">{type}</td>
      <td className={`text-center text-gray-500 text-sm py-4 cursor-pointer`}>
        {attachment ? <DocumentScannerIcon /> : <AddCircleIcon />}
      </td>
    </tr>
  );
};

export default TableRow;
