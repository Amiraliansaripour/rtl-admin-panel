import Card from "components/card";
import React from "react";

const Information = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          اطلاعات کارگزاری
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600">
        شرکت کارگزاری سهم آشنا
        شرکت کارگزاری سهم آشنا با بیش از ۲۶ سال سابقه فعالیت در بازار سرمایه، سرمایه ثبتی 1600 میلیارد ریال و اخذ رتبه “الف” در بورس اوراق بهادار و بورس کالای ایران، همواره در طول مدت فعالیت خود از جمله کارگزاران پیشرو بوده است. از این رو سهم آشنا از بدو تاسیس با قرار دادن ماموریت سازمانی “توسعه پایدار با لحاظ ارتقا کیفیت خدمات” اهداف خود را بر مبنای بهبود مستمر کیفی و ارائه خدمات متنوع قرار داده تا بدینوسیله بتواند پاسخگوی اطمینان مشتریان خود باشد.
        </p>
      </div>
      {/* Cards */}
      
      <div className="grid grid-cols-2 gap-4 px-2">
      <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">نام کارگزاری</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            سهم آشنا
          </p>
        </div>
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">ایمیل</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
info@abco.ir 
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">کد کارگزاری</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            1102587588
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">تلفن</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
          ۰۲۱-2771
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none mt-3">
          <p className="text-sm text-gray-600">آدرس</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
          سعادت آباد، بالاتر از ميدان كاج، خیابان شهید یعقوبی (هشتم)، پلاك ٢٧، ساختمان سهم آشنا
          </p>
        </div>
    </Card>
  );
};

export default Information;
