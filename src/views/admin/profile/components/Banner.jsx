import React from "react";
import avatar from "assets/img/profile/logo-white.png";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";

const Banner = () => {
  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <input
          type="file"
          id="actual-btn"
          accept="image/png, image/gif, image/jpeg"
          hidden
        />
        <label htmlFor="actual-btn" className="absolute -bottom-12">
          <div className=" flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-[#000] dark:!border-navy-700 dark:bg-navy-400">
            <img className="h-full w-full rounded-full" src={avatar} alt="" />
          </div>
        </label>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          گارگزاری سهم آشنا
        </h4>
        <p className="text-base font-normal text-gray-600">
          صندوق سرمایه گذاری
        </p>
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            15.8K
          </p>
          <p className="text-sm font-normal text-gray-600">پست کاربران</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            9.7K
          </p>
          <p className="text-sm font-normal text-gray-600">کاربران</p>
        </div>
        {/* <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            434
          </p>
          <p className="text-sm font-normal text-gray-600">Following</p>
        </div> */}
      </div>
    </Card>
  );
};

export default Banner;
