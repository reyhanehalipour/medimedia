import React from "react";
import TextWithUnderline from "../share/TextWithUnderline";
import Carousel from "../ui/Carousel";
import Slider from "../ui/Carousel";

export default function BrandExperience() {
  const slides = [
  <div className="flex items-center justify-center text-text font-bold gap-11 text-4xl">
      <div className="flex flex-col items-center justify-center leading-[1.4rem]">
        {" "}
        <p>BOOST</p> <p className="text-[14px]">corporation</p>
      </div>
      <div className="flex items-center justify-center gap-2 mb-2">
        <p>NTW</p>
        <div className="h-[30px] w-[4px] bg-text"></div>
        <p className="text-[12px] leading-[0.9rem]">
          North <br />
          Time
          <br /> group
        </p>
      </div>
      <div className="flex flex-col items-center justify-center leading-[1.4rem]">
        {" "}
        <p>ALASKA</p>
        <div className="flex items-center justify-center gap-1">
          <div className="h-[4px] w-[70px] bg-text"></div>
          <p className="text-[14px]">Enterprice</p>
        </div>
      </div>
      <div className="flex items-center flex-col leading-[1.4rem]">
        <p>HIPESTER</p>
        <p className="text-[14px]">collections</p>
      </div>
    </div>, 
      
        <div className="flex items-center justify-center text-text font-bold gap-11 text-4xl">
      <div className="flex flex-col items-center justify-center leading-[1.4rem]">
        {" "}
        <p>BOOST</p> <p className="text-[14px]">corporation</p>
      </div>
      <div className="flex items-center justify-center gap-2 mb-2">
        <p>NTW</p>
        <div className="h-[30px] w-[4px] bg-text"></div>
        <p className="text-[12px] leading-[0.9rem]">
          North <br />
          Time
          <br /> group
        </p>
      </div>
      <div className="flex flex-col items-center justify-center leading-[1.4rem]">
        {" "}
        <p>ALASKA</p>
        <div className="flex items-center justify-center gap-1">
          <div className="h-[4px] w-[70px] bg-text"></div>
          <p className="text-[14px]">Enterprice</p>
        </div>
      </div>
      <div className="flex items-center flex-col leading-[1.4rem]">
        <p>HIPESTER</p>
        <p className="text-[14px]">collections</p>
      </div>
    </div>, 
      <div className="flex items-center justify-center text-text font-bold gap-11 text-4xl">
      <div className="flex flex-col items-center justify-center leading-[1.4rem]">
        {" "}
        <p>BOOST</p> <p className="text-[14px]">corporation</p>
      </div>
      <div className="flex items-center justify-center gap-2 mb-2">
        <p>NTW</p>
        <div className="h-[30px] w-[4px] bg-text"></div>
        <p className="text-[12px] leading-[0.9rem]">
          North <br />
          Time
          <br /> group
        </p>
      </div>
      <div className="flex flex-col items-center justify-center leading-[1.4rem]">
        {" "}
        <p>ALASKA</p>
        <div className="flex items-center justify-center gap-1">
          <div className="h-[4px] w-[70px] bg-text"></div>
          <p className="text-[14px]">Enterprice</p>
        </div>
      </div>
      <div className="flex items-center flex-col leading-[1.4rem]">
        <p>HIPESTER</p>
        <p className="text-[14px]">collections</p>
      </div>
    </div>, 
  ];
  return (
    <div
      className="w-full h-[200px]  bg-darkBrown flex  flex-col gap-5
     items-center justify-center"
    >
      <TextWithUnderline text="the crade Experience" />
      <Slider slides={slides} />
    </div>
  );
}
