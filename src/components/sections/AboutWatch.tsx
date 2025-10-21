import React from "react";
import Button from "../share/Button";

export default function AboutWatch() {
  return (
    <div className="w-full h-fit md:h-[230px] bg-[url('/images/about.png')] bg-cover bg-center flex items-center justify-center md:justify-start px-5">
      <div className="text-white md:w-2/4 flex flex-col gap-5 text-center md:text-left items-center md:items-start">
        <p className="font-bold text-xl my-2">Lorem ipsum</p>
        <p className="text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Asperiores error minima, veritatis odit autem quas <br />
          assumenda repudiandae praesentium aut nulla expedita quia laudantium
          <br />
          voluptatum dolore voluptatem ipsam necessitatibus ipsa. Ad!
        </p>
        <Button text="Shop now" w="w-[120px]" />
      </div>
    </div>
  );
}
