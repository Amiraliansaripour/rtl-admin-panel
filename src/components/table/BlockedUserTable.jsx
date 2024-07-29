import React, { useMemo, useState } from "react";
import CardMenu from "components/card/CardMenu";
import Checkbox from "components/checkbox";
import Card from "components/card";

import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { convertToJalali } from "utils/GregorianToJalaliConverter";
import { FiSearch } from "react-icons/fi";
import { VscDiscard } from "react-icons/vsc";
import { Tooltip } from "@chakra-ui/tooltip";
import ConfirmBox from "components/modals/confirmBox/ConfirmBox";

const BlockUserTable = (props) => {
  const { columnsData, tableData, title } = props;
  const [confirmModal, setConfirmModal] = useState(false);
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

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
    <div className="relative h-full w-full">
      <ConfirmBox
       openModal={confirmModal} 
       setOpmenModal={setConfirmModal}
       title={"بازگردانی مسدودیت"}
       description={"آیا از بازگردانی مسدودیت کاربر مطمعن هستید ؟"}
       link={"/unblock"}
       userId={"45"}
        />
      <header className="relative flex h-[60px] items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          {title}
        </div>

        <div className="flex h-full items-center rounded-full bg-gray-200 text-navy-700 dark:bg-navy-700 dark:text-white xl:w-[225px]">
          <p className="text-xl pe-2 ps-3">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder="جستجو نماد"
            className="block h-full w-full rounded-full bg-gray-200 text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-700 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>
      </header>

      <div className="mt-8 overflow-x-auto xl:overflow-x-hidden">
        <table
          {...getTableProps()}
          className="w-full overflow-auto"
          variant="simple"
          color="gray-500"
          mb="24px"
        >
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border-b border-gray-200 pb-[10px] text-start dark:!border-navy-700"
                    key={index}
                  >
                    <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
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
                    if (cell.column.Header === "نام") {
                      data = (
                        <div className="flex items-center justify-start gap-2">
                          {/* <Checkbox /> */}
                          <p className="text-center text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header === "وضعیت") {
                      data = (
                        <div className="flex items-center justify-start">
                          <p className="text-sm font-bold text-red-500 ">
                            مسدود
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header === "علت") {
                      data = (
                        <p className="text-right text-sm text-navy-400 dark:text-blue-500">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "تاریخ عضویت") {
                      data = (
                        <p className="text-right text-sm font-bold text-navy-700 dark:text-white">
                          {convertToJalali(cell.value)}
                        </p>
                      );
                    } else if (cell.column.Header === "تاریخ مسدود") {
                      data = (
                        <p className="text-right text-sm font-bold text-navy-700 dark:text-white">
                          {convertToJalali(cell.value)}
                        </p>
                      );
                    } else if (cell.column.Header === "مسدود") {
                      data = (
                        <>
                          <Tooltip
                            placement={"top"}
                            label="رفع مسدود سازی"
                            className="rounded-lg bg-lightPrimary py-2 px-2 shadow-lg"
                            hasArrow={true}
                          >
                            <button
                              onClick={() => setConfirmModal(true)}
                              type="button"
                              className="mb-2 rounded-full bg-blue-700 px-1.5 py-1.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mb-0"
                            >
                              <VscDiscard className="text-lg" />
                            </button>
                          </Tooltip>
                        </>
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
    </div>
  );
};

export default BlockUserTable;
