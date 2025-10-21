import React from "react";
import Button from "../share/Button";
import TextWithUnderline from "../share/TextWithUnderline";
import Carousel from "../ui/Carousel";

export default function HeroSection() {
  const slideContent = (
    <div className="bg-[url('/images/backgroundImage.png')] p-10 h-[400px] bg-contain text-center md:text-left bg-no-repeat bg-center flex items-center justify-center md:items-center md:justify-start flex-col gap-10 w-full">
      <div className="mt-10 md:mt-auto md:w-[80%] w-auto">
        <TextWithUnderline text="Fertuzy" />
        <p className="text-lightBrown text-[12px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <p className="text-text font-serif mt-5 text-[14px]">
          Lorem ipsum is a dummy or placeholder text commonly used in graphic
          <br />
          design, publishing, and web development. Its purpose is to permit
          <br />
          page layout to be designed, independently of the copy that will
          subsequently populate it.
        </p>
        <div className="my-10">
          starting at:{" "}
          <span className="text-lightBrown text-2xl">$450.000</span>
        </div>
      </div>
      <div className="mb-10 md:mb-auto">
        <Button text="EXPLORE WATCHES" w="w-[140px]" />
      </div>
    </div>
  );

  const slides = [slideContent, slideContent];

  return <Carousel slides={slides} />;
}
