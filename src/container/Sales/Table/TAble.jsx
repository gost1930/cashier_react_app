import { useState , useEffect } from "react";

const TAble = ({ colums, rows, action }) => {
//   const [rowId, setRowId] = useState([]);

// const handleRowSelection = (row) => {

//   setRowId(prevRowIds => {

//     if (!prevRowIds.includes(row.id)) {
//       return [...prevRowIds, row.id]; 
//     }
//     return prevRowIds; 
//   });

// };

// useEffect(() => {
//   if (rowId.length === 0) {
//     console.log("No row selected");
//   } else {
//     console.log("Selected row ID:", rowId);
//   }
// }, [rowId]); 

  
  return (
    <div className="overflow-x-auto overflow-y-scroll w-full max-h-[230px]">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead>
          <tr className="text-gray-100 bg-gray-500 uppercase text-sm leading-normal">
            {colums.map((column, index) => (
              <th key={index} className="px-2 text-right py-2">
                {column}
              </th>
            ))}
            {action && <th className="px-2 text-right py-2">تعديل</th>}
          </tr>
        </thead>
        <tbody className="text-sm font-medium">
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100 divide-x"
              // onClick={() => handleRowSelection(row)}  
            >
              {Object.keys(row).map((cell, idx) => (
                <td key={idx} className="px-2 text-right text-xs py-2">
                  {row[cell]}
                </td>
              ))}
              {action && <td className="py-3 px-2 text-left">{action}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TAble;
