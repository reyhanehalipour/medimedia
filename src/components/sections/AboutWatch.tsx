import React from "react";
import Image from "next/image";
import Button from "../share/Button";
export default function AboutWatch() {
  return (
    <div className="w-full h-fit md:h-[230px] flex items-center text-center md:text-left px-5  justify-center md:justify-between">
      <div className="w-2/4 flex flex-col gap-5">
        <p className="text-bold text-xl my-5"> Lorem ipsum</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br /> Asperiores error minima, veritatis odit autem quas <br />
        assumenda repudiandae praesentium aut nulla expedita quia laudantium{" "}
        <br />
        voluptatum dolore voluptatem ipsam necessitatibus ipsa. Ad!
        <Button text="Shop now" w={"w-[120px]"} />
      </div>

      <Image
        height={80}
        width={120}
        src={"/images/aboutwatch.jpg"}
        alt="watch"
        className="w-1/4 "
      />
    </div>
  );
}
