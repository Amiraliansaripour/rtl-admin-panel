import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { BiMessage } from "react-icons/bi";
import { MdBarChart } from "react-icons/md";
import { TbDeviceAnalytics } from "react-icons/tb";
import { SiChatbot } from "react-icons/si";
import { MdReportGmailerrorred } from "react-icons/md";
import { RiLoginCircleLine } from "react-icons/ri";
import {
  columnsBlockUsers,
  columnsDataCheck,
  columnsDataComplex,
} from "./variables/columnsData";
import blockUser from "./variables/blockUser";
import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import WalletHistoryTable from "views/admin/default/components/WalletHistoryTable";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import { numberComma } from "utils/SplitNumber";
import ActivityReport from "./components/ActivityReport";
import PieChart from "components/charts/PieChart";
import Card from "components/card";
import BlockedUserTable from "components/table/BlockedUserTable";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"کیف پول"}
          subtitle={`${numberComma(450000)} تومان`}
        />

        <Widget
          icon={<SiChatbot className="h-7 w-7" />}
          title={"شارژ ربات"}
          subtitle={`${numberComma(5450000)} تومان`}
        />
        <Widget
          icon={<BiMessage className="h-6 w-6" />}
          title={"شارژ SMS"}
          subtitle={`${numberComma(1200000)} تومان`}
        />
        <Widget
          icon={<TbDeviceAnalytics className="h-6 w-6" />}
          title={"تعداد تحلیل کاربران"}
          subtitle={"790 عدد"}
        />
        <Widget
          icon={<MdReportGmailerrorred className="h-7 w-7" />}
          title={"تخلف کاربران"}
          subtitle={"145"}
        />
        <Widget
          icon={<RiLoginCircleLine className="h-6 w-6" />}
          title={"احراز هویت"}
          subtitle={"شماره تلفن"}
        />
      </div>

      {/* Charts */}

      {/* <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div> */}

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}

        <div>
          <PieChartCard title={"روند مصرف کیف پول"} />
        </div>

        <div>
          <WeeklyRevenue title={"نماد های داغ این هفته"} />
        </div>

        <div>
          <CheckTable
            title={"لیست کاربران"}
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>

        <div>
          <Card extra={"w-full h-full sm:overflow-auto px-6"}>
            <BlockedUserTable
              title={"کاربران مسدود شده"}
              columnsData={columnsBlockUsers}
              tableData={blockUser}
            />
          </Card>
        </div>

        {/* Traffic chart & Pie Chart */}
        {/* 
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div> */}

        {/* Complex Table , Task & Calendar */}

        <WalletHistoryTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />

        <ActivityReport />

        {/* Task chart & Calendar */}

        {/* <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
