import React from "react";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";

import { FaEthereum } from "react-icons/fa";
import Card from "components/card";

const TopSymbolList = ({
  title,
  activeSymbol,
  symbolModal,
  setSymbolModal,
  btnTitle
}) => {
  const HistoryData = [
    {
      image: Nft1,
      title: "خودرو",
      owner: "ایران خودرو",
      price: 0.4,
      time: "330",
    },
    {
      image: Nft2,
      title: "وبملت",
      owner: "داروسازی امین",
      price: 2.4,
      time: "50",
    },
    {
      image: Nft3,
      title: "شستا",
      owner: "سرمایه گذاری تامین اجتماعی",
      price: 0.3,
      time: "200",
    },
    {
      image: Nft4,
      title: "فولاد",
      owner: "فولاد",
      price: 0.4,
      time: "4",
    },
    {
      image: Nft5,
      title: "بوعلی",
      owner: "داروسازی امین",
      price: 0.4,
      time: "30",
    },
    {
      image: Nft6,
      title: "شپنا",
      owner: "شرکت پروانه نوین امین",
      price: 0.4,
      time: "2",
    },
  ];

  return (
    <Card extra={"mt-3 !z-5 overflow-hidden lg-max:sticky lg-max:top-0"}>
      {/* HistoryCard Header */}
      <div className="flex items-center justify-between rounded-t-3xl p-3">
        <div className="text-lg font-bold text-navy-700 dark:text-white">
          {title}
        </div>
        <button
          onClick={() => setSymbolModal(true)}
          className="linear rounded-[20px] border-2 border-navy-500 bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
        >
          {btnTitle}
        </button>
      </div>

      {/* History CardData */}
      {HistoryData.map((data, index) => (
        <div
          key={index}
          className="flex h-full w-full items-start justify-between bg-white px-3 py-[20px] hover:shadow-2xl dark:!bg-navy-800 dark:shadow-none dark:hover:!bg-navy-700"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center">
              <img
                className="h-full w-full rounded-full"
                src={data.image}
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-base font-bold text-navy-700 dark:text-white">
                {data.title}
              </h5>
              <p className="mt-1 text-sm font-normal text-gray-600">
                {data.owner}
              </p>
            </div>
          </div>

          {activeSymbol ? (
            <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
              <div className="flex items-center justify-center">
                <label className="inline-flex cursor-pointer items-center">
                  <input type="checkbox" value="" className="peer sr-only" />
                  <div className="after:start-[2px] peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                  <span className="text-sm font-medium text-gray-700 ms-3 dark:text-gray-300"></span>
                </label>
              </div>
            </div>
          ) : (
            <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
              <div className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                <p className="ml-1">تعداد پیام :</p>
              </div>
              <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                <p>{data.time}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </Card>
  );
};

export default TopSymbolList;
