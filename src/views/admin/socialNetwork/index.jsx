import Banner from "./components/Banner";
import NFt8 from "assets/img/nfts/Nft8.png";

import tableDataTopCreators from "views/admin/socialNetwork/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/socialNetwork/variables/tableColumnsTopCreators";
import TopSymbolList from "./components/TopSymbolList";
import TableModal from "components/modals/tableModal/TableModal";
import { useEffect, useState } from "react";
import TopUsers from "./components/TopUsers";
import SymbolsList from "./components/SymbolsTable";
import PostCard from "components/card/PostCard";
import ViewePost from "./components/ViewePost";
import { postData } from "../default/variables/columnsData";
import { FiSearch } from "react-icons/fi";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

const SocialNetwork = () => {
  const [tableModal, setTableModal] = useState(false);
  const [symbolModal, setSymbolModal] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="relative mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <TableModal tableModal={tableModal} setTableModal={setTableModal} />
      {/* symbols list modal */}
      <SymbolsList
        title={"لیست نماد ها "}
        symbolModal={symbolModal}
        setSymbolModal={setSymbolModal}
      />
      {/* symbols list modal */}

      {/* post modal  */}
      <ViewePost
        openPost={openPost}
        setOpenPost={setOpenPost}
        selectedPost={selectedPost}
      />
      {/* post modal  */}
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/*  Banner */}
        <Banner setTableModal={setTableModal} />
        {/*  Header */}
        <div className="mb-4 mt-5 flex h-[50px] justify-between px-4 md:flex-row items-center md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            پست ها
          </h4>
          <div className="flex h-full items-center rounded-full bg-white text-navy-700 dark:bg-navy-700 dark:text-white xl:w-[225px]">
            <p className="text-xl pe-2 ps-3">
              <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
            </p>
            <input
              type="text"
              placeholder="جستجو نماد"
              className="block h-full w-full rounded-full  text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-700 dark:text-white dark:placeholder:!text-white sm:w-fit"
            />
          </div>
        </div>
        {/* date picker */}
        <div className="my-4 flex h-[50px] w-full items-center gap-5 px-4">

        <div className="flex items-center gap-2">
            <span className="font-bold text-sm dark:text-white"> شروع :</span>
          <DatePicker
          className=""
            inputPlaceholder="انتخاب تاریخ"   
            shouldHighlightWeekends
            locale="fa"
          />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm dark:text-white"> پایان :</span>
          <DatePicker
          className=""
            inputPlaceholder="انتخاب تاریخ"   
            shouldHighlightWeekends
            locale="fa"
          />
          </div>
        </div>

        {/*  trending post */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          {postData.map((post, index) => {
            return (
              <PostCard
                key={index}
                bidders={post.bidders}
                title={post.title}
                author={post.author}
                price="0.91"
                image={NFt8}
                post={post}
                setSelectedPost={setSelectedPost}
                openPost={openPost}
                setOpenPost={setOpenPost}
              />
            );
          })}
        </div>

        {/* Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            پست های گزارش شده
          </h4>
        </div>

        {/* Reported Posts */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          {postData.map((post, index) => {
            return (
              <PostCard
                key={index}
                bidders={post.bidders}
                title={post.title}
                author={post.author}
                price="0.91"
                image={NFt8}
                report={true}
                post={post}
                setSelectedPost={setSelectedPost}
                openPost={openPost}
                setOpenPost={setOpenPost}
              />
            );
          })}
        </div>
      </div>

      {/* left side section */}

      <div className="col-span-1 h-fit w-full rounded-xl lg:sticky lg:top-24 2xl:col-span-1">
        <TopSymbolList
          title={"نماد های داغ"}
          btnTitle={"اضافه کردن نماد"}
          activeSymbol={false}
          symbolModal={symbolModal}
          setSymbolModal={setSymbolModal}
        />
        {/* <TopSymbolList
          title={"نماد های غیرفعال"}
          btnTitle={"تنظیم نمادها"}
          activeSymbol={true}
          symbolModal={symbolModal}
          setSymbolModal={setSymbolModal}
        />

        <TopUsers
          extra="mt-5"
          tableData={tableDataTopCreators}
          columnsData={tableColumnsTopCreators}
        /> */}
      </div>
    </div>
  );
};

export default SocialNetwork;
