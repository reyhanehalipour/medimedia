import React from "react";
import TextWithUnderline from "../share/TextWithUnderline";
import Image from "next/image";
import Button from "../share/Button";
import { ArrowLeft, ArrowRight } from "iconsax-reactjs";

export default function RecentBlog() {
  return (
    <div className="bg-darkBrown h-[450px] w-full flex flex-col  gap-5 items-center justify-center">
      <TextWithUnderline text="RecentBlog" />
      <div className="flex  items-center justify-center gap-5">
        <div className=" hidden md:flex flex-col items-center justify-center gap-5">
          <Image
            src="/images/r.jpg"
            width={300}
            height={200}
            alt="watch"
            className=" cursor-pointer rounded-lg"
          />
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <Button text="shop now" w={"w-[120px]"} />
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <p>Lorem ipsum dolor</p>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <Button text="shop now" w={"w-[120px]"} />
          <Image
            src="/images/women1.jpg"
            width={300}
            height={200}
            alt="watch"
            className="  rounded-lg cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Button
          text={<ArrowLeft size="30" className="text-white" />}
          w={"w-[60px]"}
        />
        <Button
          text={<ArrowRight size="30" className="text-white" />}
          w={"w-[60px]"}
        />
      </div>
    </div>
  );
}
