import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

import { tableData } from "views/admin/default/variables/tableDataCheck copy";
import { columnsUsers } from "views/admin/default/variables/columnsData";
import UsersList from "views/admin/users/components/UsersList";
const TableModal = ({ tableModal, setTableModal }) => {
  return (
    <div
      className={`${
        tableModal ? "fixed" : "hidden"
      } top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-[#63616154] backdrop-blur-sm dark:bg-[#9ac8e246]`}
    >
      <div
        onClick={() => setTableModal(false)}
        className=" absolute top-3 left-3 cursor-pointer"
      >
        <IoMdClose className="text-black text-4xl dark:text-white" />
      </div>  
      <div className="flex h-[80%] w-[80%] flex-col items-center overflow-hidden rounded-xl bg-white dark:bg-navy-700 md-max:w-[95%] light-scroll">
        <div className="flex h-20 w-full items-center justify-between  border-b-2 border-[#969494] p-3 px-4 dark:border-[#fff]">
          <div className="title-bar flex items-center justify-between sm-max:hidden">
            <h4 className="text-lg font-bold text-navy-700 dark:text-white">
              کاربران شبکه اجتماعی
            </h4>
          </div>

          <div className="search-bar">
            <div className="relative h-[50px] w-[300px] overflow-hidden rounded-full">
              <input
                type="text"
                placeholder="جستجو کاربران"
                className="h-full w-full bg-lightPrimary  p-3 text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white"
              />
              <FiSearch className="absolute top-2 left-2 text-3xl text-gray-400 dark:text-white" />
            </div>
          </div>
        </div>

        <div className="w-full">
          <UsersList isModal={true} extra_styles={"h-[calc(100%-85px)] overflow-y-auto light-scroll"} />
        </div>
      </div>
    </div>
  );
};

export default TableModal;
