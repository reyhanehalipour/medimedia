import React from "react";
import Carousel from "../ui/Carousel";

export default function SectionBox() {
  const slideContent = (
    <div className=" h-[300px] w-full  gap-5 flex items-center text-lg justify-center bg-darkBrown text-lightBrown">
      <p className="flex flex-col  text-center items-center justify-center gap-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        <span className="text-white text-[14px] ">sjkkscmm</span>
      </p>
    </div>
  );
  const slides = [slideContent, slideContent];
  return <Carousel slides={slides} />;
}
