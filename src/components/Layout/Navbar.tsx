import {
   ArrowDown2,
  Bag2,
  HamburgerMenu,
  SearchNormal1,
  User,
} from "iconsax-reactjs";
import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className=" w-full  flex items-center justify-between  h-[50px]  font-[5px] bg-midBrown px-5">
      <div className="flex  items-center  justify-center gap-[-10px]">
        <Image height={60} width={60} src={"/images/logo.png"} alt="watch" />
        <h1 className="text-xl font-serif text-primary  ">
          <Link href="/">BRIONZZ</Link>
          <p className="text-[14px] leading-[1.2rem] text-lightBrown">Luxury watch</p>
        </h1>
      </div>
      <HamburgerMenu size="20" className=" flex md:hidden text-lightBrown " />
      <nav className=" hidden  md:flex  items-center justify-center gap-5">
        <Link className="text-lightBrown" href={"/"}>
          Home
        </Link>
        <Link href={"/pages"}>Pages</Link>
        <Link href={"/Shopping"}>Shopping</Link>
        <Link href={"/contactus"}>Contact Us</Link>
      </nav>
      <div className=" hidden md:flex items-center justify-center gap-5">
        {" "}
        <User size={20} className="text-lightBrown" variant="Bold" />{" "}
        <SearchNormal1 size={20} className="text-lightBrown" />
        <Bag2 size={20} className="text-lightBrown" variant="Bold" />
        <div className="flex items-center gap-1 justify-center">
          <p>US</p>
          <Image
            src="/images/flag.jpg"
            width={30}
            height={5}
            alt="Google Play"
            className=" cursor-pointer"
          />
          <ArrowDown2 size="14" />
        </div>
      </div>
    </div>
  );
}
