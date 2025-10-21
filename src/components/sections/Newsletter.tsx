import React from "react";
import TextWithUnderline from "../share/TextWithUnderline";
import Button from "../share/Button";
import { Facebook, Instagram, Link1, Youtube } from "iconsax-reactjs";

export default function Newsletter() {
  const socialIcons = [
    { icon: <Facebook />, name: "Facebook" },
    { icon: <Instagram />, name: "Instagram" },
    { icon: <Youtube />, name: "Twitter" },
    { icon: <Link1 />, name: "LinkedIn" },
    { icon: <Youtube />, name: "YouTube" },
    { icon: <Youtube />, name: "YouTube" },
  ];

  return (
    <div className="w-full">
      <div className="h-[300px] w-full flex flex-col items-center justify-center bg-[url('/images/new.jpg')]  bg-cover bg-center">
        <TextWithUnderline text="Newsletter" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
          <input
            placeholder="Email address"
            className="text-white bg-black bg-opacity-50 w-[90%] md:w-[400px] h-[40px] border-x-text border-t-black border-b-text border-2 rounded-md px-3 placeholder-gray-300"
          />
          <Button text="Submit" w="w-[120px]" />
        </div>
        <p className="text-white mt-2 text-center text-[12px] ">
          Subscribe to get the latest updates
        </p>

        <div className="flex gap-3 mt-4">
          {socialIcons.map((social, index) => (
            <Button key={index} text={social.icon} w="w-[50px]" />
          ))}
        </div>
      </div>
    </div>
  );
}
