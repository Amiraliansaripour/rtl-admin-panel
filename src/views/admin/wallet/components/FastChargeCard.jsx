import React from "react";
import { FaPlus } from "react-icons/fa";
import { numberComma } from "utils/SplitNumber";
import { FaMedal } from "react-icons/fa";

const FastChargeCard = ({title , icon , type}) => {
  return (
    <div className="flex h-full w-[33%] cursor-pointer flex-col items-center gap-3 rounded-2xl bg-white p-3 shadow-2xl hover:shadow-xl dark:bg-navy-700">
      <div className="flex h-[100px] w-[50%] items-center justify-center rounded-xl">
        <FaMedal  className="text-[40px] dark:text-white" />
      </div>

      {type === "WALLET" ? (
        <h2 className="text-xl font-bold dark:text-white">{numberComma(5000000)} تومان</h2>
      ) : (
        <h2 className="text-xl font-bold dark:text-white">{numberComma(7000000)} تومان</h2>
      )}

      <span className=" dark:text-white">
        به صورت مستقیم پنل {title} را شارژ کنید
      </span>

      <button className="flex w-full items-center justify-center rounded-lg bg-navy-400 p-3 hover:bg-navy-600">
        <FaPlus className="text-2xl text-white" />
      </button>
    </div>
  );
};

export default FastChargeCard;
