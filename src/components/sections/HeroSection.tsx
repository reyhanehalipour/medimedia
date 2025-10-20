import React from "react";
import Button from "../share/Button";
import TextWithUnderline from "../share/TextWithUnderline";

export default function HeroSection() {
  return (
    <div className="bg-[url('/images/backgroundImage.png')] p-10 h-[400px] bg-cover text-center md:text-left bg-no-repeat bg-center flex items-center justify-center md:items-start  md:justify-start flex-col gap-10 w-full">
      <div>
        <TextWithUnderline text="Fertuzy" />
        <p className="text-lightBrown text-[12px] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit..
        </p>
        <p className="text-text font-serif mt-5 text-[14px] ">
          Lorem ipsum is a dummy or placeholder text commonly used in graphic
          <br />
          design, publishing, and web development. Its purpose is to permit{" "}
          <br />
          page layout to be designed, independently of the copy that will
          subsequently populate it,
        </p>
        <div className="my-10">
          starting at :{" "}
          <span className="text-lightBrown text-2xl ">$450.000</span>
        </div>
      </div>
      <Button text="EXPLORE watchs" w={"w-[125px]"} />
    </div>
  );
}
