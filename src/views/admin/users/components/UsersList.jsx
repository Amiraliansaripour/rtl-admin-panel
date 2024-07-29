import React, { useMemo, useState } from "react";
import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import Checkbox from "components/checkbox";
import { MdEdit } from "react-icons/md";

import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import UpdateUser from "./UpdateUser";

const UsersList = (props) => {
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [user, setUser] = useState(null);
  const { isModal, extra_styles } = props;

  const tableMockData = [
    {
      name: "مهدی شریفی",
      messageCount: "129",
      status: "فعال",
      created_at: "1403/01/25",
      updated_at: "1403/01/29",
    },
    {
      name: "علیرضا رضایی",
      messageCount: "56",
      status: "فعال",
      created_at: "1403/02/15",
      updated_at: "1403/02/20",
    },
    {
      name: "حسین محمدی",
      messageCount: "87",
      status: "فعال",
      created_at: "1403/03/10",
      updated_at: "1403/03/12",
    },
    {
      name: "سارا حسینی",
      messageCount: "34",
      status: "مسدود",
      created_at: "1403/04/05",
      updated_at: "1403/04/08",
    },
    {
      name: "نرگس احمدی",
      messageCount: "76",
      status: "فعال",
      created_at: "1403/05/20",
      updated_at: "1403/05/25",
    },
    {
      name: "علی کاظمی",
      messageCount: "102",
      status: "فعال",
      created_at: "1403/06/11",
      updated_at: "1403/06/14",
    },
    {
      name: "زهرا مرادی",
      messageCount: "45",
      status: "مسدود",
      created_at: "1403/07/01",
      updated_at: "1403/07/03",
    },
    {
      name: "محمد تقی زاده",
      messageCount: "68",
      status: "فعال",
      created_at: "1403/08/09",
      updated_at: "1403/08/12",
    },
    {
      name: "فاطمه کریمی",
      messageCount: "95",
      status: "فعال",
      created_at: "1403/09/17",
      updated_at: "1403/09/20",
    },
    {
      name: "رضا امیری",
      messageCount: "59",
      status: "مسدود",
      created_at: "1403/10/04",
      updated_at: "1403/10/06",
    },
  ];

  return (
    <Card extra={`w-full overflow-y-auto p-4  ${extra_styles}`}>
      <UpdateUser
      user={user}
        openUpdateModal={openUpdateModal}
        setOpenUpdateModal={setOpenUpdateModal}
      />
      {isModal ? (
        <header className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            <div className="flex items-center gap-2">
              انتخاب
              <label className="inline-flex cursor-pointer items-center">
                <input type="checkbox" value="" className="peer sr-only" />
                <div className="after:start-[2px] peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                <span className="text-sm font-medium text-gray-700 ms-3 dark:text-gray-300"></span>
              </label>
              همه
            </div>
          </div>
        </header>
      ) : (
        <header className="relative flex items-center justify-between">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            لیست کاربران
          </div>

          <CardMenu />
        </header>
      )}

      {/* <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden bg-yellow-400"> */}
      <table
        className="mb-6 mt-3 h-full w-full"
        variant="simple"
        color="gray-500"
      >
        <thead>
          <tr>
            <th className="border-b border-gray-200 pb-[10px] text-start dark:!border-navy-700">
              <div className="text-right text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                نام
              </div>
            </th>
            <th className="border-b border-gray-200 pb-[10px] text-start dark:!border-navy-700">
              <div className="h-full w-full text-right text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                تعداد پیام
              </div>
            </th>
            <th className="border-b border-gray-200 pb-[10px] text-start dark:!border-navy-700">
              <div className="h-full w-full text-right text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                وضعیت
              </div>
            </th>
           
            <th className="border-b border-gray-200 pb-[10px] text-start dark:!border-navy-700">
              <div className="h-full w-full text-right text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                تاربخ عضویت
              </div>
            </th>
            <th className="border-b border-gray-200 pb-[10px] text-start dark:!border-navy-700">
              <div className="h-full w-full text-right text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                مسدود
              </div>
            </th>
            {!isModal && (
              <th className="p border-b border-gray-200 pb-[10px] text-end dark:!border-navy-700">
                <div className="h-full w-full text-right text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                  ویرایش
                </div>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {tableMockData.map((tb, index) => {
            return (
              <tr key={index}>
                <td className="cursor-pointer pt-[14px] pb-[16px] sm:text-[14px]">
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    {tb.name}
                  </p>
                </td>
                <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    {tb.messageCount}
                  </p>
                </td>
                <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    <span className={`${tb.status === "فعال" ?"text-green-500":"text-red-500" }`}>{tb.status} </span>
                  </p>
                </td>
                
                <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    {tb.created_at}
                  </p>
                </td>
                <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                  <div className="flex items-center justify-start">
                    <label className="inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        defaultChecked={tb.status === "مسدود" ? false : true}
                        className="peer sr-only"
                      />
                      <div className="after:start-[2px] peer relative h-6 w-11 rounded-full bg-gray-300 after:absolute after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                      <span className="text-sm font-medium text-gray-700 ms-3 dark:text-gray-300"></span>
                    </label>
                  </div>
                </td>
                {!isModal && (
                  <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                    <button
                      onClick={() => (
                        setOpenUpdateModal(true), setUser(tb)
                      )}
                      className="rounded-full bg-navy-400 p-2"
                    >
                      <MdEdit className="text-white" />
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* </div> */}
    </Card>
  );
};

export default UsersList;
