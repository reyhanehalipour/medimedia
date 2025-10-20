import Image from "next/image";
import React from "react";

export default function PromoBanners() {
  return (
    <div className="flex  flex-col md:flex-row items-center justify-center gap-5 w-full ">
      <Image
        src={"/images/watch1.jpg"}
        width={300}
        height={70}
        alt={"alt"}
        className="w-full md:w-1/4 border-2 border-text rounded-md"
      />
      <div className=" h-[30px] w-full md:h-[200px] md:w-[30px] bg-lightBrown rounded-sm"></div>

      <Image
        src={"/images/watch1.jpg"}
        width={100}
        height={70}
        alt={"alt"}
        className=" w-full md:w-1/4  border-2 border-text rounded-md"
      />
      <div className="h-[30px] w-full md:h-[200px] md:w-[30px] bg-lightBrown rounded-sm"></div>

      <Image
        src={"/images/watch1.jpg"}
        width={200}
        height={70}
        alt={"alt"}
        className="w-full md:w-1/4 border-2 border-text rounded-md"
      />
    </div>
  );
}
