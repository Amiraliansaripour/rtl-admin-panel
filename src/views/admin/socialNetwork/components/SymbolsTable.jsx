import React, { useMemo } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { columnsSymbols } from "views/admin/default/variables/columnsData";
import { symbolData } from "views/admin/default/variables/tableDataCheck copy";
import Card from "components/card";

import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { convertToJalali } from "utils/GregorianToJalaliConverter";

const SymbolsTable = ({ title, symbolModal, setSymbolModal }) => {
  const columns = useMemo(() => columnsSymbols, [columnsSymbols]);
  const data = useMemo(() => symbolData, [symbolData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  return (
    <div
      className={`${
        symbolModal ? "fixed" : "hidden"
      } top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-[#63616154] backdrop-blur-sm dark:bg-[#9ac8e246]`}
    >
      <div
        onClick={() => setSymbolModal(false)}
        className=" absolute top-3 left-3 cursor-pointer"
      >
        <IoMdClose className="text-black text-4xl dark:text-white" />
      </div>

      <div className="flex h-[80%] w-[80%] flex-col items-center overflow-hidden rounded-xl bg-white dark:bg-navy-700 md-max:w-[95%]">
        <div className="flex h-20 w-full items-center justify-between  border-b-2 border-[#969494] p-3 px-4 dark:border-[#fff]">
          <div className="title-bar flex items-center justify-between ">
            <h4 className="text-lg font-bold text-navy-700 dark:text-white">
              {title}
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

        <div className="h-full w-full">
          <Card extra={"w-full h-full sm:overflow-auto px-6"}>
            <header className="relative flex items-center justify-between pt-4">
              <div className="text-xl font-bold text-navy-700 dark:text-white">
                <div className="flex items-center gap-2"></div>
              </div>
            </header>
            <div className="mt-8 overflow-scroll overflow-x-scroll xl:overflow-x-hidden">
              <table
                {...getTableProps()}
                className="w-full"
                variant="simple"
                color="gray-500"
                mb="24px"
              >
                <thead>
                  {headerGroups.map((headerGroup, index) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                      {headerGroup.headers.map((column, index) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          className="border-b border-gray-200 pb-[10px]
                           text-center text-start dark:!border-navy-700"
                          key={index}
                        >
                          <div className="text-center text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                            {column.render("Header")}
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row, index) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} key={index}>
                        {row.cells.map((cell, index) => {
                          let data = "";
                          if (cell.column.Header === "نماد") {
                            data = (
                              <div className="flex items-center justify-center gap-2 text-center">
                                {/* <Checkbox /> */}
                                <div className="flex h-16 w-16 items-center justify-center">
                                  <img
                                    className="h-full w-full rounded-full"
                                    src={cell.value}
                                    alt="1"
                                  />
                                </div>
                              </div>
                            );
                          } else if (cell.column.Header === "نام") {
                            data = (
                              <div className="flex items-center justify-center text-center">
                                <p className="text-sm font-bold text-navy-700 dark:text-white">
                                  {cell.value}
                                </p>
                              </div>
                            );
                          } else if (cell.column.Header === "فعال / غیرفعال") {
                            data = (
                              <div className="flex items-center justify-center">
                                <label className="inline-flex cursor-pointer items-center">
                                  <input
                                    type="checkbox"
                                    value=""
                                    className="peer sr-only"
                                    checked={cell.value}
                                  />
                                  <div className="after:start-[2px] peer relative h-6 w-11 rounded-full bg-red-500 after:absolute after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                                  <span className="text-sm font-medium text-gray-700 ms-3 dark:text-gray-300"></span>
                                </label>
                              </div>
                            );
                          } else if (cell.column.Header === "نام کامل") {
                            data = (
                              <p className="text-center text-sm font-bold text-navy-700 dark:text-white">
                                {cell.value}
                              </p>
                            );
                          }
                          return (
                            <td
                              {...cell.getCellProps()}
                              key={index}
                              className="pt-[14px] pb-[16px] sm:text-[14px]"
                            >
                              {data}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SymbolsTable;
