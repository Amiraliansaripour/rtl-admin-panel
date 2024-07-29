import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
  columnsBlockUsers,
} from "./variables/columnsData";
import tableDataComplex from "./variables/tableDataComplex.json";
import BlockedUserTable from "components/table/BlockedUserTable";
import Card from "components/card";
import blockUser from "./variables/blockUser";
import UsersList from "./components/UsersList";
import ActivityReport from "../default/components/ActivityReport";
import WalletHistoryTable from "../default/components/WalletHistoryTable";
const Users = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <UsersList  />
        <Card extra={"w-full h-full relative sm:overflow-auto px-6"}>
          <BlockedUserTable
            columnsData={columnsBlockUsers}
            tableData={blockUser}
            title={"کاربران مسدود شده"}
          />
        </Card>
      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <WalletHistoryTable
         columnsData={columnsDataComplex}
         tableData={tableDataComplex}
        />

        <ActivityReport />

        {/* <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        /> */}
      </div>
    </div>
  );
};

export default Users;
