import axios from "axios";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";

const ConfirmBox = (props) => {
  const { openModal, setOpmenModal, description, link, userId ,title } = props;
  
  // const confirmHandler = async () =>{
  //   await axios.put(``).then((re))


  // }
  return (
    <div
      className={`${
        openModal ? "fixed" : "hidden"
      } top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-[#63616154] backdrop-blur-sm dark:bg-[#9ac8e246] transition-all ease-out`}
    >
      <div
        onClick={() => setOpmenModal(false)}
        className=" absolute top-3 left-3 cursor-pointer"
      >
        <IoMdClose className="text-black text-4xl dark:text-white" />
      </div>

      <div className="flex relative h-[200px] w-[350px] flex-col justify-between rounded-lg bg-white dark:bg-navy-700 py-3 px-3 shadow-md">
      <IoMdClose 
      onClick={() => setOpmenModal(false)}
      className="absolute top-3 left-2 text-black text-2xl dark:text-white cursor-pointer" />
        
        <h3 className="text-lg font-bold flex items-center gap-2"> {title} <IoMdInformationCircleOutline className="text-2xl"/></h3>
        <hr />
        <p className="mt-4">{description}</p>
        <div className="flex w-full items-center justify-end self-end p-2 gap-2">
          <button onClick={()=> setOpmenModal(false)} className="bg-transparent border-2 border-gray-400 flex items-center justify-center p-2 rounded-lg">انصراف</button>
          <button className="bg-navy-500 text-white  flex items-center justify-center p-2 rounded-lg hover:bg-navy-800" >بازگردانی</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBox;
