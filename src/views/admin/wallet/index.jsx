import React from "react";
import WalletInfo from "./components/WalletInfo";
import ChargeCard from "./components/ChargeCard";
import {
  MdAccountBalanceWallet,
  MdPublishedWithChanges,
  MdEmail,
} from "react-icons/md";
import { SiChatbot } from "react-icons/si";
import { RiWallet3Line } from "react-icons/ri";
import FastChargeCard from "./components/FastChargeCard";

const Wallet = () => {
  return (
    <div className="flex flex-col gap-3">
      {/* wallet info  */}
      <WalletInfo />
      {/* wallet info  */}

      {/* Charge */}
      <div className="flex flex-col gap-3">
        <div className="title-bar flex w-full flex-col items-start gap-3 p-2">
          <span className="flex gap-3">
            <MdPublishedWithChanges className="text-2xl dark:text-white" />
            <h2 className="text-xl font-bold dark:text-white">شارژ مستقیم</h2>
          </span>
          <span className="dark:text-white">
            با شارژ مستقیم میتوانید به صورت مستقیم شارژ پنل مورد نظر را انجام
            دهید
          </span>
        </div>
        <div className="flex h-[300px] w-full items-center gap-3 p-2">
          <ChargeCard
            type={"WALLET"}
            title={"کیف پول"}
            icon={
              <MdAccountBalanceWallet className="text-[40px] dark:text-white" />
            }
          />
          <ChargeCard
            type={"SMS"}
            title={"SMS"}
            icon={<MdEmail className="text-[40px] dark:text-white" />}
          />
          <ChargeCard
            type={"BOT"}
            title={"چت بات"}
            icon={<SiChatbot className="text-[40px] dark:text-white" />}
          />
        </div>
      </div>
      {/* Charge */}

      {/* Ready Charge */}
      <div className="flex flex-col gap-3 mt-3">
        <div className="title-bar flex w-full flex-col items-start gap-3 p-2">
          <span className="flex gap-3">
            <RiWallet3Line className="text-2xl dark:text-white" />
            <h2 className="text-xl font-bold dark:text-white">شارژ آماده</h2>
          </span>
          <span className="dark:text-white">
            با شارژ آماده میتوانید به صورت مستقیم چند پنل را باهم شارژ کنید  
            
          </span>
        </div>
        <div className="flex h-[300px] w-full items-center gap-3 p-2">
          <FastChargeCard
            type={"WALLET"}
            title={"کیف پول"}
            icon={<MdAccountBalanceWallet className="text-[40px] dark:text-white" />}
          />
          <FastChargeCard
            type={"SMS"}
            title={"SMS"}
            icon={<MdEmail className="text-[40px] dark:text-white" />}
          />
          <FastChargeCard
            type={"BOT"}
            title={"چت بات"}
            icon={<SiChatbot className="text-[40px] dark:text-white" />}
          />
        </div>
      </div>
      {/* Ready Charge */}
    </div>
  );
};

export default Wallet;
