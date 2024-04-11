"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo_wesync.png";
import { SIDENAV_ITEMS } from "@/constants/sidebar-constants";
import { SideNavItem } from "@/constants/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const SideNav = () => {
  return (
    <div className="md:w-20 bg-[#000000] h-screen flex-1 fixed border-r border-[#27272A] hidden md:flex">
      <div className="flex flex-col  space-y-6 w-full">
        <Link href="/" className="flex items-center justify-center h-12 w-full">
          <img src={logo.src} width={40} className="mt-5" alt="" />
          {/* <span className="font-bold text-xl hidden text-white md:flex">Wesync</span> */}
        </Link>

        <div className="flex flex-col space-y-2  ">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="">
            <Link
              href={item.path}
              className={`flex flex-row items-center justify-center p-4 hover:bg-slate-700/30 ${
                item.path === pathname ? "border-l-4 border-l-color-n-14" : ""
              }`}
            >
              {item.icon}
              <span className="font-semibol flex text-white">{item.title}</span>
            </Link>
          </div>
        </TooltipTrigger>
        <TooltipContent>{item.tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
