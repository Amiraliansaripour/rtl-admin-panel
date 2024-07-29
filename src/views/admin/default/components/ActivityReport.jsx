import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import React from "react";
import { numberComma } from "utils/SplitNumber";

const ActivityReport = () => {
  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto light-scroll"}>
      <div className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          گزارش مالی
        </div>
        <CardMenu />
      </div>

      <div className="mt-8 overflow-x-auto xl:overflow-hidden light-scroll">
        <table className="w-full">
          <thead>
            <tr>
              <th className="border-b border-gray-200 pb-[10px] text-start dark:!border-navy-700">
                <p className="text-xs tracking-wide text-gray-600">شرح</p>
              </th>
              <th className="border-b border-gray-200 pb-[10px] text-start dark:!border-navy-700">
                <p className="text-xs tracking-wide text-gray-600">مبلغ</p>
              </th>
              <th className="border-b border-gray-200 pb-[10px] text-start dark:!border-navy-700">
                <p className="text-xs tracking-wide text-gray-600">تاریخ</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="p-[20px] text-start dark:!border-navy-700">
              <td className="pt-[14px] pb-[18px] ">
                <p className="text-sm  font-bold text-navy-700 dark:text-white">
                  افزایش اعتبار
                </p>
              </td>
              <td className="pt-[14px] pb-[18px] ">
                <p className="text-sm font-bold text-green-500">
                  {numberComma(1400500)}
                </p>
              </td>
              
              <td className="pt-[14px] pb-[18px] ">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  1403/02/05
                </p>
              </td>
              
            </tr>
            <tr className=" p-[20px] text-start dark:!border-navy-700">
              <td className="pt-[14px] pb-[18px] ">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                   شارژ پنل SMS
                </p>
              </td>
              <td className="pt-[14px] pb-[18px] ">
                <p className="text-sm font-bold text-red-500 ">
                  {numberComma(1201000)}
                </p>
              </td>
              
              <td className="pt-[14px] pb-[18px] ">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  1403/02/05
                </p>
              </td>
              
            </tr>
            <tr className="p-[20px] text-start dark:!border-navy-700">
              <td className="p-2">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  افزایش اعتبار
                </p>
              </td>
              <td className="p-2">
                <p className="text-sm font-bold text-green-500 ">
                  {numberComma(1200000)}
                </p>
              </td>
              
              <td className="p-2">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  1403/02/05
                </p>
              </td>
              
            </tr>
            
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ActivityReport;
