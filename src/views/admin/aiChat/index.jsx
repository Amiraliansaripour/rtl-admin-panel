import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { tableDataTopCreators } from "../socialNetwork/variables/tableColumnsTopCreators";
import ChatScreen from "./components/ChatScreen";
const AiChat = () => {
  const [openContactList, setOpenContactList] = useState(true);
  return (
    <div className="flex w-full flex-col gap-3 transition-all ease-in">
      <div className="title-bar flex items-center justify-start py-8">
        <h2 className="text-2xl font-bold dark:text-white">
          گزارشات چت کاربران
        </h2>
      </div>

      <div className="flex h-[80vh] w-full overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-navy-800">
        {/* contact list */}
        <div
          className={`relative flex h-full transition-all ease-in ${
            openContactList ? "w-[290px]" : "w-14"
          }  flex-col rounded-tl-xl rounded-bl-xl bg-lightPrimary dark:bg-navy-700`}
        >
          <div
            onClick={() => setOpenContactList(!openContactList)}
            className="absolute top-[50%] -left-9 sm-max:hidden flex h-20 w-9 items-center justify-center rounded-tl-xl  rounded-bl-xl bg-gray-500"
          >
            {openContactList ? (
              <IoIosArrowForward className="text-3xl text-white" />
            ) : (
              <IoIosArrowForward className="rotate-180 text-3xl text-white" />
            )}
          </div>

          {/* user search */}

          <div
            className={`flex h-[70px] ${
              openContactList ? "w-full" : "w-14"
            } items-center justify-center`}
          >
            <div className="search-box relative h-[80%] w-11/12 overflow-hidden rounded-full cursor-pointer
             bg-white dark:bg-navy-900">
              <input
                type="text"
                className={`h-full  ${
                  openContactList ? "" : "hidden"
                } w-full py-2 px-4 outline-0 dark:bg-navy-900 dark:text-white`}
                placeholder="جستجو ..."
              />
              <FiSearch
                className={`absolute ${
                  openContactList ? "left-3" : "left-4"
                } top-4 text-xl text-gray-400 dark:text-white`}
              />
            </div>
          </div>

          <div className="light-scroll bg-transparent h-full w-full overflow-y-scroll">
            {tableDataTopCreators.map((user) => {
              return (
                <div onClick={()=> setOpenContactList(!openContactList)} className="flex gap-3 rounded-lg p-2 hover:bg-navy-400 hover:text-white">
                  <div className="h-14 w-14 overflow-hidden rounded-full">
                    <img
                      src={user.name[1]}
                      alt={user.name[0]}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className={`flex ${
                      openContactList ? "" : "hidden"
                    } w-full flex-col p-2`}
                  >
                    <h3 className="font-bold dark:text-white">
                      {user.name[0]}
                    </h3>
                    <p className="text-sm text-gray-600">
                      میتونی بهم تحلیل کلی راجب نماد ...
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* contact list */}

        {/* chat screen */}
            <ChatScreen />
        {/* chat screen */}
      </div>
    </div>
  );
};

export default AiChat;
