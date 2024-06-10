"use client";
import Link from "next/link";
import "../App.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import logo from "../../../public/Navbar/logo.svg";
import { IoCartOutline } from "react-icons/io5";

import Image from "next/image";
import { CiSearch } from "react-icons/ci";

function NavbarComponents() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* navbar full */}
      <div className="flex justify-between items-center px-16 py-6 z-20">
        <div>
          <Image src={logo} className="w-40" alt="" />
        </div>
        <div className="hidden dp:block">
          <div className="flex justify-center gap-4 text-l text-[#274C5B] font-medium font-[Roboto] ">
            <Link href="/">HOME</Link>
            <Link href="/shop">SHOP</Link>
            <Link href="/about-us">ABOUT US</Link>
            <Link href="/teams">OUR TEAM</Link>
          </div>
        </div>
        <div className="hidden dp:block">
          <div className="flex gap-2">
            <div className="flex items-center rounded-l-xl rounded-r-2xl bg-slate-100 w-full">
              <input className="bg-slate-100 w-full rounded-xl px-3 outline-none" />
              <div className=" w-10 rounded-full bg-[#7EB693] p-2 ">
                <CiSearch className=" text-white text-xl" />
              </div>
            </div>
            <div className=" w-10 rounded-full bg-[#274C5B] p-2 ">
              <IoCartOutline className=" text-white text-xl" />
            </div>
          </div>
        </div>

        {/* navbar logo */}
        <div className="dp:hidden relative z-30">
          <button onClick={() => setOpen(!open)}>
            <FaBars />
          </button>
          {open && (
            <div className="absolute bg-[#F9F8F8] right-[1px] top-4 w-[200px] p-2 rounded-l-lg rounded-b-lg">
              <div className="flex flex-col text-[#274C5B] font-medium font-[Roboto]">
                <Link href="/" className="py-[2px]">
                  HOME
                </Link>
                <Link href="/shop" className="py-[2px]">
                  SHOP
                </Link>
                <Link href="/about-us" className="py-[2px]">
                  ABOUT US
                </Link>
                <Link href="/teams" className="py-[2px]">
                  OUR TEAM
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default NavbarComponents;
