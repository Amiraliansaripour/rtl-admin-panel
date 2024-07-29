import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import Card from "components/card";
import { FaTrash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { FaRegComment, FaRegHeart } from "react-icons/fa";

const PostCard = ({
  title,
  author,
  price,
  image,
  bidders,
  extra,
  report,
  setSelectedPost,
  post,
  setOpenPost,
}) => {
  const [heart, setHeart] = useState(true);

  const postViewHandler = () => {
    setSelectedPost(post);
    setOpenPost(true);
  };
  return (
    <Card
      extra={`flex flex-col w-full h-full ${
        report ? "border-2 border-red-400 danger-shadow" : ""
      } !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={image}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
          <button
            onClick={() => setHeart(!heart)}
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer"
          >
            {/* <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50 dark:text-navy-900">
              {heart ? (
                <IoHeartOutline />
              ) : (
                <IoHeart className="text-brand-500" />
              )}
            </div> */}
          </button>
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {title}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              تاریخ : {author}
            </p>
          </div>

        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <div className="flex">
            <p className="mb-2 text-sm font-bold text-brand-500 dark:text-white">
              {/* Current Bid: {price} <span>ETH</span> */}
            </p>
          </div>
          <div className="flex w-full items-center justify-between self-end ">

            <div className="w-6/12 flex">
              <div className="flex w-full items-center gap-2">
                {report && (
                  <button className="linear bg-transparent rounded-[20px] border-2 border-red-500 px-4 py-2 text-base font-medium text-red-500 transition duration-200 hover:bg-red-500 hover:text-white">
                    <FaTrash />
                  </button>
                )}
                <button
                  onClick={postViewHandler}
                  className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
                >
                  <FaEye />
                </button>
              </div>
            </div>

            <div className="flex w-6/12  items-center justify-end gap-2">
            <div className="like flex items-center gap-2 dark:text-white">
                <span>34</span>
                <FaRegHeart className="text-xl dark:text-red-500" />
              </div>
              <div className="comment flex items-center gap-2 dark:text-white">
                <span>4</span>
                <FaRegComment className="text-xl dark:text-white" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
