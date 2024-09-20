import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiCircleMinus } from "react-icons/ci";


const Calc = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "<") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex items-center w-full justify-center ">
      <div className=" p-2 rounded-lg">
        <div className="flex flex-row gap-1 ">
          {/* Input display */}
          <input
            type="text"
            value={input}
            className="col-span-1 w-28 text-right bg-white rounded-lg p-1 border border-gray-400"
            readOnly
          />
          {[<IoAddCircleOutline />, <CiCircleMinus />].map((op) => (
            <button
              key={op}
              className="bg-gray-500  text-white text-center rounded-lg px-5 text-lg"
            >
              {op}
            </button>
          ))}
          {/* Delete button */}
          <button
            className="bg-red-500  hover:bg-red-700 text-white text-center rounded-lg px-5 text-lg"
          >
            <FaRegTrashCan className="text-center" />
          </button>
        </div>
          <div className="grid grid-cols-3 gap-1">
          {/* Buttons 1-9 */}
          {[3, 2, 1, 6, 5, 4, 9, 8,  7, "."].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num.toString())}
              className="bg-gray-200 rounded-lg p-1 text-lg hover:bg-gray-400"
            >
              {num}
            </button>
          ))}
          {/* Bottom row: 0 and Clear */}
          <button
            onClick={() => handleClick("0")}
            className="col-span-1 bg-gray-200 rounded-lg p-1 text-lg hover:bg-gray-400"
          >
            0
          </button>
          <button
            onClick={() => handleClick("<")}
            className="col-span-1 bg-gray-200 rounded-lg p-1 text-lg hover:bg-gray-400"
          >
            {"<"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calc;
