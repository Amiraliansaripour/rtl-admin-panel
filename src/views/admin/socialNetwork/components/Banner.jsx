import nft1 from "assets/img/nfts/NftBanner1.png";

const Banner1 = ({ setTableModal }) => {
  const blobs = [
    {
      top: 20,
      left: 1,
      radius: "90px",
    },
    {
      top: 45,
      left: 4,
      radius: "20px",
    },
    {
      top: 55,
      left: 4,
      radius: "450px",
    },
    {
      top: 6,
      left: 4,
      radius: "70px",
    },
    {
      top: 30,
      left: 5,
      radius: "50px",
    },
    {
      top: 60,
      left: 4,
      radius: "55px",
    },
    {
      top: 80,
      left: 4,
      radius: "80px",
    },
  ];
  return (
    <div
      className="relative flex w-full flex-col overflow-hidden rounded-[20px] bg-[#3810E7] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      // style={{ backgroundImage: `url(${nft1})` }}
    >
      {blobs.map((blob, index) => {
        return (
          <div
            key={index}
            style={{
              width: blob.radius,
              height: blob.radius,
              top: `${blob.top}%`,
              left: `${blob.left}%`,
            }}
            className={`absolute top-[${blob.top}%] left-[${blob.left}%] rounded-full bg-[#ffffff80] sm-max:hidden`}
          ></div>
        );
      })}
      <div className="w-full">
        <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
          ایجاد لیست تحلیل
        </h4>
        <p className="mb-[40px] max-w-full text-base font-medium text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
          در این قسمت میتوانید لیست نحلیلگران را انتخاب کنید برای انتشار تحلیل
          خود در شبکه اجتماعی
        </p>

        <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
          <button
            onClick={() => setTableModal(true)}
            className="text-black linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70"
          >
            انتخاب کاربران
          </button>
          <button
            href=" "
            className="text-base font-medium text-lightPrimary hover:text-lightPrimary 2xl:ml-2"
          >
            نمایش ویدیو راهنما
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
