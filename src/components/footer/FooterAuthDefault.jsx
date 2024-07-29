/*eslint-disable*/
import React from "react";
import { IoIosCall } from "react-icons/io";

export default function Footer() {
  return (
    <div className="z-[5] mx-auto flex w-full max-w-screen-sm flex-col items-center justify-between px-[20px] pb-4 lg:mb-6 lg:max-w-[100%] lg:flex-row xl:mb-2 xl:w-[1310px] xl:pb-6">
      <p className="mb-6 text-center text-sm text-gray-600 md:text-base lg:mb-0">
        
      </p>
      <ul className="flex flex-wrap items-center sm:flex-nowrap mb-4">
        <li className="mr-24">
          <a
            target="blank"
            href="mailto:info@psa.com"
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-600 md:text-base lg:text-white lg:hover:text-white"
          >
            <IoIosCall className="" />
            پشتیبانی
          </a>
        </li>
      </ul>
    </div>
  );
}
