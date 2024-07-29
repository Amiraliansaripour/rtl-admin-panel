import React from 'react'
import { FaPlus } from "react-icons/fa6";

const ChargeCard = ({type,title,icon}) => {
  return (
    <div className='w-[33%] h-full flex flex-col items-center bg-white dark:bg-navy-700 shadow-2xl cursor-pointer hover:shadow-xl rounded-2xl gap-3 p-3'>
      <div className="w-[50%] h-[100px] flex items-center justify-center rounded-xl">
        {icon}
      </div>

      {
        type === "WALLET"
         ?
         <h2 className='text-xl font-bold dark:text-white'>شارژ کیف پول پنل</h2>
         :
         <h2 className='text-xl font-bold dark:text-white'>شارژ پنل {title}</h2>
      }

      <span className=' dark:text-white'>به صورت مستقیم پنل {title} را شارژ کنید </span>

      <button className='flex items-center justify-center w-full p-3 bg-navy-400 hover:bg-navy-600 rounded-lg'>
        <FaPlus className='text-2xl text-white' />
      </button>
    </div>
  )
}

export default ChargeCard
