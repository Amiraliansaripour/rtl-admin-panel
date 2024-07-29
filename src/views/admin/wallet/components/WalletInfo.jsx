import PieChart from "components/charts/PieChart";
import React from "react";
import { numberComma } from "utils/SplitNumber";
import { pieChartData } from "variables/charts";
import { pieChartOptions } from "variables/charts";

const WalletInfo = () => {
  return (
    <div className="mt-4 flex h-[250px] w-full flex-row items-center justify-between gap-3 overflow-hidden rounded-xl bg-navy-500 bg-banner bg-center bg-no-repeat transition-all ease-in md-max:h-auto md-max:flex-col">
      <div className="flex h-full w-6/12 flex-col items-center justify-center gap-4 p-8 md-max:w-full">
        <h2 className="text-xl text-white">ارزش کل دارایی (تومان)</h2>
        <span className="flex items-center gap-2 text-xl text-white">
          {numberComma(2500000)}
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </span>
        <span className="text-white">تاریخ آخرین واریز : 1403/02/01</span>
      </div>
      <div className="flex h-full w-6/12 flex-col text-white md-max:w-full">
        <PieChart options={pieChartOptions} series={pieChartData} />
      </div>
    </div>
  );
};

export default WalletInfo;
