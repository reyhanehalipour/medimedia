"use client";
import { Facebook, Instagram, Youtube } from "iconsax-reactjs";
import Image from "next/image";
import React from "react";
import useMobile from "@/utils/useMobile";

export default function Footer() {
  const columns = [
    {
      title: " Help",
      texts: [
        "Lorem ",
        "Consectetur ",
        "Sed do ",
        "Ut labore.",
        "Quis ",
        "Duis ",
      ],
    },
    {
      title: "support",
      texts: [
        "Excepteur",
        "Sunt in .",
        "Mollit ",
        "Integer.",
        "Sed cursus",
        "Nulla ",
      ],
    },
    {
      title: " information",
      texts: [
        "Duis",
        "Fusce nec",
        "Mauris massa",
        "Class.",
        "Curabitur ",
        "Sed dign.",
      ],
    },
    {
      title: " address",
      texts: [
        "Curabitur",
        "Aenean quam.",
        "Maecenas ",
        "Proin ut ",
        "Morbi ",
        "Aliquam ",
      ],
    },
  ];
  const isMobile = useMobile();
  return (
    <div>
      {/* بخش تصویری فوتر */}
      <div className="relative bg-[url('/images/imagefooter.jpg')] h-[300px] bg-cover bg-no-repeat bg-center w-full">
        <div className="relative flex flex-col items-center justify-between mx-auto w-[80%] md:grid md:grid-cols-4 gap-6 p-10 text-white">
          {columns.map((col, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2"
            >
              <h3 className="text-lg  font-semibold mb-3">{col.title}</h3>

              <>
                {col.texts.map((txt, j) => (
                  <p key={j} className="text-sm leading-snug hidden md:flex">
                    {txt}
                  </p>
                ))}
              </>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#120c07] w-full h-[150px] flex flex-col-reverse md:flex-row justify-around items-center px-10 text-white">
        {/* سمت چپ */}
        <div className="flex  items-center justify-center flex-col gap-4">
          <h3 className="text-lg font-serif uppercase">Connect with us</h3>
          <div className="flex gap-5 text-2xl">
            <Facebook
              size="20"
              variant="Bold"
              className="hover:text-lightBrow  cursor-pointer transition-colors"
            />
            <Instagram
              size="20"
              variant="Bold"
              className="hover:text-lightBrown cursor-pointer transition-colors"
            />
            <Facebook
              size="20"
              variant="Bold"
              className="hover:text-lightBrown  cursor-pointer transition-colors"
            />
            <Instagram
              size="20"
              variant="Bold"
              className="hover:text-lightBrown cursor-pointer transition-colors"
            />
            <Youtube
              size="20"
              variant="Bold"
              className="hover:text-lightBrow cursor-pointer transition-colors"
            />
          </div>
        </div>

        {/* سمت راست */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-lg font-semibold uppercase">Download our app</h3>
          <div className="flex gap-4 w-full">
            <Image
              src="/images/Google-Play-footer-.png"
              width={100}
              height={50}
              alt="Google Play"
              className=" cursor-pointer"
            />
            <Image
              src="/images/Google-Play-footer-.png"
              width={100}
              height={50}
              alt="Google Play"
              className=" cursor-pointer"
            />
            <Image
              src="/images/Google-Play-footer-.png"
              width={100}
              height={50}
              alt="Google Play"
              className=" cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[70px] bg-lightBrown  flex-col  justify-center md:flex md:flex-row items-center md:justify-around ">
        <div>all right reseved @ 2022 design Thems</div>
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/images/flag.jpg"
            width={30}
            height={5}
            alt="Google Play"
            className=" cursor-pointer"
          />
          <Image
            src="/images/flag.jpg"
            width={30}
            height={5}
            alt="Google Play"
            className=" cursor-pointer"
          />
          <Image
            src="/images/flag.jpg"
            width={30}
            height={5}
            alt="Google Play"
            className=" cursor-pointer"
          />
          <Image
            src="/images/flag.jpg"
            width={30}
            height={5}
            alt="Google Play"
            className=" cursor-pointer"
          />
          <Image
            src="/images/flag.jpg"
            width={30}
            height={5}
            alt="Google Play"
            className=" cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
