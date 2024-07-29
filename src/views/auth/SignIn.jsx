import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const loginHandler = (data) =>{
    console.log(data)
  }

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div
        dir="rtl"
        className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]"
      >
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          ورود
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          برای ورود به پنل مدیریت شماره تلفن و رمز عبور را وارد کنید
        </p>
        {/* <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div> */}
        {/* <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div> */}
        {/* Email */}

        <div className="mb-3">
          <label
            htmlFor="phone"
            className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white"
          >
              شماره تلفن *
          </label>

          <input
            type="number"
            id="phone"
            placeholder="شماره تلفن"
            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none "
            {...register("phone", {
                required: "شماره همراه خود را وارد کنید",
                pattern: {
                  value: /^09\d{9}$/,
                  message: "فرمت شماره تلفن اشتباه است",
                },
              })
            }
          />
                  {errors.phone && <span className="error-message text-red-500 text-sm">{errors.phone.message}</span>}
        </div>

<div className="mb-3">
<label
            htmlFor="phone"
            className="ml-1.5 text-sm font-medium text-navy-700 dark:text-white"
          >
             رمز عبور *
          </label>
        <input
            type="password"
            id="password"
            placeholder="رمز عبور"
            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none "
            {
              ...register("password", {
                required: "لطفا رمز عبور خود را وارد کنید",
              })
            }
          />
                  {errors.password && <span className="error-message text-red-500 text-sm">{errors.password.message}</span>}
        </div>
      
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center">
            <Checkbox />
            <p className="mr-2 text-sm font-medium text-navy-700 dark:text-white">
              مرا به خاطر بسپار
            </p>
          </div>
          <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href=" "
          >
            فراموشی رمزعبور
          </a>
        </div>
        <button
        onClick={handleSubmit(loginHandler)}
        className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          ورود
        </button>
        {/* <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <a
            href=" "
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Create an account
          </a>
        </div> */}
      </div>
    </div>
  );
}
