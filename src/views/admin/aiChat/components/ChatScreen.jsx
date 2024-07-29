import React from 'react'
import { RiRobot2Line } from 'react-icons/ri'

const ChatScreen = () => {
  return (
    <div className="flex h-full w-full flex-col p-2">
          {/* profile view */}
          <div className="flex h-20 w-full items-center justify-start border-b-2 p-4">
            <div className="flex gap-3">
              <div className="h-14 w-14 overflow-hidden rounded-full bg-blueSecondary">
                <img
                  src="https://pbs.twimg.com/profile_images/1404161552635371526/251mudeO_400x400.jpg"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-bold dark:text-white">ترانه غلامی</h3>
                <p className="text-sm text-gray-600">1403/03/25 </p>
              </div>
            </div>
          </div>
          {/* profile view */}

          {/* chat */}
          <div className="light-scroll flex h-full w-full flex-col overflow-y-scroll py-2">
            <span className="user mt-5 flex w-auto items-start justify-start gap-3 rounded-tl-xl rounded-bl-xl rounded-br-xl bg-lightPrimary p-2 dark:bg-navy-700">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://pbs.twimg.com/profile_images/1404161552635371526/251mudeO_400x400.jpg"
                alt=""
              />

              <p dir="rtl" className="text-right dark:text-white">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </span>

            <span className="bot  mt-5 flex w-auto flex-row-reverse items-start justify-start gap-3 self-end rounded-tr-xl rounded-bl-xl rounded-br-xl bg-lightPrimary p-2 dark:bg-navy-700 sm-max:w-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-500 p-2">
                <RiRobot2Line className="text-3xl text-white" />
              </div>

              <p dir="rtl" className="text-right dark:text-white">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
            </span>
          </div>
          {/* chat */}
        </div>
  )
}

export default ChatScreen
