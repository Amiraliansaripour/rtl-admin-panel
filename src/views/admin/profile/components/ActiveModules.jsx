import { MdFileUpload } from "react-icons/md";
import Card from "components/card";
import React from "react";
import { SiChatbot } from "react-icons/si";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoMdChatbubbles } from "react-icons/io";
import { PiChartLineDuotone } from "react-icons/pi";
import { MdLogin } from "react-icons/md";

const ActiveModules = () => {
  return (
    <Card className="grid h-full w-full grid-cols-1 grid-rows-2 gap-3 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none ">
      <div className="flex h-full w-full items-center justify-center gap-2 px-2">
        <div className="flex h-full w-full flex-col items-center gap-5 rounded-xl  bg-white dark:bg-navy-700 dark:text-white border-2 dark:border-0 px-2 pb-2 pt-4 shadow-inner">
          <SiChatbot className="text-3xl" />

          <h2 className=" text-center text-xl font-bold">چت  مصنوعی</h2>

          <div className="flex w-full items-center justify-evenly">
            <div className="flex items-center justify-center">
              <label className="inline-flex cursor-pointer items-center">
                <input type="checkbox" value="" className="peer sr-only" />
                <div className="after:start-[2px] peer relative h-6 w-11 rounded-full bg-gray-500 after:absolute after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                <span className="text-sm font-medium text-gray-700 ms-3 dark:text-gray-300"></span>
              </label>
            </div>
            <AiOutlineQuestionCircle className="cursor-pointer text-2xl" />
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-center gap-5 rounded-xl  bg-white dark:bg-navy-700 dark:text-white border-2 dark:border-0 px-2 pb-2 pt-4 shadow-inner">
          <MdLogin className="text-3xl" />

          <h2 className=" text-center text-xl font-bold">ورود کاربر با پسورد</h2>

          <div className="flex w-full items-center justify-evenly">
            <div className="flex items-center justify-center">
              <label className="inline-flex cursor-pointer items-center">
                <input type="checkbox" value="" className="peer sr-only" />
                <div className="after:start-[2px] peer relative h-6 w-11 rounded-full bg-gray-500 after:absolute after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                <span className="text-sm font-medium text-gray-700 ms-3 dark:text-gray-300"></span>
              </label>
            </div>
            <AiOutlineQuestionCircle className="cursor-pointer text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center gap-2 px-2">
        <div className="flex h-full w-full flex-col items-center gap-5 rounded-xl  bg-white dark:bg-navy-700 dark:text-white border-2 dark:border-0 px-2 pb-2 pt-4 shadow-inner">
          <PiChartLineDuotone className="text-3xl" />

          <h2 className=" text-center text-xl font-bold">نمودار تکنیکال</h2>

          <div className="flex w-full items-center justify-evenly">
            <div className="flex items-center justify-center">
              <label className="inline-flex cursor-pointer items-center">
                <input type="checkbox" value="" className="peer sr-only" />
                <div className="after:start-[2px] peer relative h-6 w-11 rounded-full bg-gray-500 after:absolute after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                <span className="text-sm font-medium text-gray-700 ms-3 dark:text-gray-300"></span>
              </label>
            </div>
            <AiOutlineQuestionCircle className="cursor-pointer text-2xl" />
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-center gap-5 rounded-xl  bg-white dark:bg-navy-700 dark:text-white border-2 dark:border-0 px-2 pb-2 pt-4 shadow-inner">
          <IoMdChatbubbles className="text-3xl" />

          <h2 className=" text-center text-xl font-bold">شبکه اجتماعی</h2>

          <div className="flex w-full items-center justify-evenly">
            <div className="flex items-center justify-center">
              <label className="inline-flex cursor-pointer items-center">
                <input type="checkbox" value="" className="peer sr-only" />
                <div className="after:start-[2px] peer relative h-6 w-11 rounded-full bg-gray-500 after:absolute after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                <span className="text-sm font-medium text-gray-700 ms-3 dark:text-gray-300"></span>
              </label>
            </div>
            <AiOutlineQuestionCircle className="cursor-pointer text-2xl" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ActiveModules;
