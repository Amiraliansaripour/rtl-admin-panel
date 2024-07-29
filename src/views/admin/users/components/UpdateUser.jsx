import Card from "components/card";
import React from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";

const UpdateUser = ({ user, openUpdateModal, setOpenUpdateModal }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const updateInformation = (data) => {
    console.log(data);
  };
  return (
    <div
      className={`${
        openUpdateModal ? "fixed" : "hidden"
      } top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-[#63616154] backdrop-blur-sm dark:bg-[#9ac8e246]`}
    >
      <div
        onClick={() => setOpenUpdateModal(false)}
        className=" absolute top-3 left-3 cursor-pointer"
      >
        <IoMdClose className="text-black text-4xl dark:text-white" />
      </div>
      <Card
        extra={
          "sm-max:w-[98%] max-h-[500px] p-3 rounded-lg overflow-y-auto light-scroll"
        }
      >
        <div className=" w-full max-w-2xl">
          <div className="mt-2 mb-8 w-full">
            <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
              ویرایش اطلاعات کاربر
            </h4>
          </div>
          <div className="m-auto grid grid-cols-2 gap-4">
            <div className="col-span-2 lg:col-span-1">
              <input
                type="text"
                className="w-full rounded-xl border-2 border-solid border-gray-200 p-3 outline-0 dark:bg-navy-800 md:text-xl"
                placeholder={user ? user.name : "نام"}
                {...register("first_name", {
                  required: "لطفا فیلد نام را تکمیل کنید",
                })}
              />
              {errors.first_name && (
                <span className="error-message text-sm text-red-500">
                  {errors.first_name.message}
                </span>
              )}
            </div>

            <div className="col-span-2 lg:col-span-1">
              <input
                type="text"
                className="w-full rounded-xl border-2 border-solid border-gray-200 p-3 outline-0 dark:bg-navy-800 md:text-xl"
                placeholder="نام خانوادگی"
                {...register("last_name", {
                  required: "نام خانوادگی خود را وارد کنید",
                })}
              />
              {errors.last_name && (
                <span className="error-message text-sm text-red-500">
                  {errors.last_name.message}
                </span>
              )}
            </div>

            <div className="col-span-2 lg:col-span-1">
              <input
                type="email"
                className="w-full rounded-xl border-2 border-solid border-gray-200 p-3 outline-0 dark:bg-navy-800 md:text-xl"
                placeholder="ایمیل"
                {...register("email", {
                  required: "لطفا فیلد ایمیل را تکمیل کنید",
                })}
              />
              {errors.email && (
                <span className="error-message text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="col-span-2 lg:col-span-1">
              <input
                type="text"
                className="w-full rounded-xl border-2 border-solid border-gray-200 p-3 outline-0 dark:bg-navy-800 md:text-xl"
                placeholder="تلفن"
                {...register("phone", {
                  required: "شماره تلفن را وارد کنید",
                  pattern: {
                    value: /^09\d{9}$/,
                    message: "فرمت شماره تلفن اشتباه است",
                  },
                })}
              />
              {errors.phone && (
                <span className="error-message text-sm text-red-500">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className="col-span-2 p-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-navy-700 dark:text-white">
                وضعیت کاربر
              </h3>

              <div className="mt-2 flex items-center justify-start">
                <span>مسدود</span>
                <label className="mr-2 inline-flex cursor-pointer items-center">
                  <input type="checkbox" value="" className="peer sr-only" />
                  <div className="after:start-[2px] peer relative h-6 w-11 rounded-full bg-red-400 after:absolute after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                  <span className="text-sm font-medium text-gray-700 ms-3 dark:text-gray-300"></span>
                </label>
                <span>فعال</span>
              </div>
            </div>

            <div className="col-span-2 flex flex-col justify-between p-2 lg:col-span-1">
              <p>
                <span className="font-bold">تاریخ عضویت :</span>1403/02/01
              </p>
              <p>
                <span className="font-bold">تاریخ عضویت :</span>1403/02/01
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center text-right">
            <button
              onClick={handleSubmit(updateInformation)}
              className="w-full rounded-lg bg-blueSecondary py-3 px-6 font-bold text-white"
            >
              ویرایش
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UpdateUser;
