import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import SocialNetwork from "views/admin/socialNetwork";
import Profile from "views/admin/profile";
import Users from "views/admin/users";
import AiChat from "views/admin/aiChat";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdPerson,
  MdLock,
  MdAccountBalanceWallet 
} from "react-icons/md";
import { SiChatbot } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import Wallet from "views/admin/wallet";

const routes = [
  {
    name: "داشبورد اصلی",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "کاربران",
    layout: "/admin",
    icon: <FaUsers className="h-6 w-6" />,
    path: "users",
    component: <Users />,
  },
  {
    name: "شبکه اجتماعی",
    layout: "/admin",
    path: "social-network",
    icon: <IoMdChatbubbles className="h-6 w-6" />,
    component: <SocialNetwork />,
    secondary: true,
  },
  {
    name: "چت هوش مصنوعی",
    layout: "/admin",
    icon: <SiChatbot className="h-6 w-6" />,
    path: "ai-chat",
    component: <AiChat />,
  },
  {
    name: "کیف پول",
    layout: "/admin",
    icon: <MdAccountBalanceWallet className="h-6 w-6" />,
    path: "wallet",
    component: <Wallet />,
  },
  {
    name: "حساب کاربری",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "ثبت نام",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
