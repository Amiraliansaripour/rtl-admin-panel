import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";

import NFt1 from "assets/img/nfts/Nft1.png";

const ViewePost = ({ selectedPost, openPost, setOpenPost }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const defaultText =
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با   استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در  ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز  و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد";
  return (
    <div
      className={`${
        openPost ? "fixed" : "hidden"
      } top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-[#63616154] backdrop-blur-sm dark:bg-[#9ac8e246]`}
    >
      <div
        onClick={() => setOpenPost(false)}
        className=" absolute top-3 left-3 cursor-pointer"
      >
        <IoMdClose className="text-black text-4xl dark:text-white" />
      </div>

      <div className="light-scroll flex h-[80%] w-[40%] flex-col items-center overflow-hidden overflow-y-auto rounded-xl bg-white dark:bg-navy-700 md-max:w-[100%] lg-max:w-[90%]">
        <div className="img-box h-[50%] w-full">
          <img
            src={selectedPost ? selectedPost.image : NFt1}
            alt={selectedPost ? selectedPost.title : "تحلیل کاربر"}
            className="h-full w-full"
          />
        </div>
        <div className="w-full flex-col p-3">
          <div className="mt-2 flex h-[50px] w-full items-center">
            <div className="flex h-full w-6/12 flex-col">
              <h3 className="font-bold dark:text-white ">
                {selectedPost ? selectedPost.title : "کاربر یافت نشد"}
              </h3>
              <span className="mt-2 text-xs text-gray-500">
                تاریخ : {selectedPost ? selectedPost.author : "0000/00/00"}
              </span>
            </div>

            {/* like  */}
            <div className="flex h-full w-6/12 items-start justify-end gap-2">
              <div className="like flex items-center gap-2 dark:text-white">
                <span>34</span>
                <FaRegHeart className="text-xl dark:text-white" />
              </div>
              <div className="comment flex items-center gap-2 dark:text-white">
                <span>4</span>
                <FaRegComment className="text-xl dark:text-white" />
              </div>
            </div>
            {/* like  */}
          </div>

          <div className="des text-right">
            <p dir="rtl" className="text-right dark:text-white">
              {isExpanded
                ? `${defaultText.substring(0, 150)} ...`
                : defaultText}
              <span
                onClick={() => setIsExpanded(!isExpanded)}
                className="mr-1 text-gray-400"
              >
                {isExpanded ? "بیشتر" : "نمایش کمتر"}
              </span>
            </p>
          </div>

          {/* comments */}
          <div className="comments mt-3 flex flex-col">
            <h3 className="border-b-2 py-3 font-bold dark:text-white">
              کامنت ها (25)
            </h3>
            {/* comment box */}
            <div className="flex h-auto w-full flex-col p-2">
              <div className="comment-box flex w-full flex-col ">
                <img
                  className="h-[300px] w-full rounded-lg"
                  src={NFt1}
                  alt=""
                />
              </div>

              <div className="mt-2 flex h-[50px] w-full items-center">
                <div className="flex h-full w-6/12 flex-col">
                  <h3 className="font-bold dark:text-white ">
                    {selectedPost ? selectedPost.title : "کاربر یافت نشد"}
                  </h3>
                  <span className="mt-2 text-xs text-gray-500">
                    تاریخ : {selectedPost ? selectedPost.author : "0000/00/00"}
                  </span>
                </div>
              </div>

              {/* comment text */}
              <div className="des text-right">
                <p dir="rtl" className="text-right dark:text-white">
                  {isExpanded
                    ? `${defaultText.substring(0, 150)} ...`
                    : defaultText}
                  <span
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mr-1 text-gray-400"
                  >
                    {isExpanded ? "بیشتر" : "نمایش کمتر"}
                  </span>
                </p>
              </div>
            </div>
            {/* comment box */}
          </div>
          {/* comments */}
        </div>
      </div>
    </div>
  );
};

export default ViewePost;
