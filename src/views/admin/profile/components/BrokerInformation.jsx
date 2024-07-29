import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import Switch from "components/switch";
import React from "react";
import { useForm } from "react-hook-form";

function BrokerInformation() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const updateInformation = (data) =>{
    console.log(data)
  }
  return (
    <Card extra={"w-full h-full p-3"}>
      <div className="m-auto w-full max-w-2xl ">
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          ویرایش اطلاعات کارگزاری
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600">
         ویرایش اطلاعات کارگزاری برای نمایش در صفحه " اطلاعات کارگزاری " در وبسایت بورس ویو
        </p>
      </div>
        <div className="m-auto grid grid-cols-2 gap-4">
          <div className="col-span-2 lg:col-span-1">
            <input
              type="text"
              className="w-full border-2 border-solid dark:bg-navy-800 border-gray-200 rounded-xl outline-0 p-3 md:text-xl"
              placeholder="نام کامل"
              {...register("full_name", {
                required: "لطفا فیلد نام کامل را تکمیل کنید",
              })
            }
            />
                  {errors.full_name && <span className="error-message text-red-500 text-sm">{errors.full_name.message}</span>}

          </div>

          <div className="col-span-2 lg:col-span-1">
            <input
              type="email"
              className="w-full border-2 border-solid dark:bg-navy-800 border-gray-200 rounded-xl outline-0 p-3 md:text-xl"
              placeholder="ایمیل"
              {...register("email", {
                required: "لطفا فیلد ایمیل را تکمیل کنید",
              })
              }
            />
                  {errors.email && <span className="error-message text-red-500 text-sm">{errors.email.message}</span>}

          </div>

          <div className="col-span-2 lg:col-span-1">
            <input
              type="text"
              className="w-full border-2 border-solid dark:bg-navy-800 border-gray-200 rounded-xl outline-0 p-3 md:text-xl"
              placeholder="تلفن"
              {...register("phone", {
                required: "شماره تلفن را وارد کنید",
                pattern: {
                  value: /^09\d{9}$/,
                  message: "فرمت شماره تلفن اشتباه است",
                },
              })
            }
            />
                  {errors.phone && <span className="error-message text-red-500 text-sm">{errors.phone.message}</span>}

          </div>

          <div className="col-span-2 lg:col-span-1">
            <input
              type="number"
              className="w-full border-2 border-solid dark:bg-navy-800 border-gray-200 rounded-xl outline-0 p-3 md:text-xl"
              placeholder="کد کارگزاری"
              {...register("broker_code", {
                required: "شماره همراه خود را وارد کنید",
                pattern: {
                  value: /^09\d{9}$/,
                  message: "فرمت شماره تلفن اشتباه است",
                },
              })
            }
            />
                  {errors.broker_code && <span className="error-message text-red-500 text-sm">{errors.broker_code.message}</span>}

          </div>


          <div className="col-span-2">
            <textarea
              cols="30"
              rows="4"
              className="w-full border-2 border-solid resize-none dark:bg-navy-800 border-gray-200 rounded-xl outline-0 p-3 md:text-xl"
              placeholder="توضیحات"
              {...register("description", {
                required: "لطفا فیلد توضیحات را تکمیل کنید",
              })
            }
            ></textarea>
                  {errors.description && <span className="error-message text-red-500 text-sm">{errors.description.message}</span>}

          </div>

          <div className="col-span-2">
            <textarea
              cols="30"
              rows="2"
              className="w-full border-2 border-solid resize-none dark:bg-navy-800 border-gray-200 rounded-xl outline-0 p-3 md:text-xl"
              placeholder="آدرس"
              {...register("address", {
                required: "لطفا فیلد آدرس را تکمیل کنید",
                
              })
            }
            ></textarea>
                  {errors.address && <span className="error-message text-red-500 text-sm">{errors.address.message}</span>}

          </div>

          <div className="col-span-2 text-right flex items-center justify-end">
            <button
            onClick={handleSubmit(updateInformation)} 
            className="w-full bg-blueSecondary rounded-xl py-3 px-6 font-bold text-white sm:w-32">
              ویرایش
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default BrokerInformation;
