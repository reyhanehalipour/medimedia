import React from "react";
import Image from "next/image";
import { Star1 } from "iconsax-reactjs";
import Button from "./Button";
export default function CategoryCard() {
  return (
    <div className="relative flex flex-col items-center gap-4 mt-10">
      <div className="h-[100px] w-[100px] bg-midBrown rounded-t-2xl"></div>

      <Image
        height={200}
        width={120}
        src={"/images/cardwatch.png"}
        alt="watch"
        className="absolute  "
      />
      <label className="mt-5">watch name</label>
      <span> $75.000</span>
      <div className="flex items-center justify-center gap-1">
        <Star1 size="14" className="text-yellow-400" variant="Bold" />
        <Star1 size="14" className="text-yellow-400" variant="Bold" />
        <Star1 size="14" className="text-yellow-400" variant="Bold" />
        <Star1 size="14" className="text-yellow-400" variant="Bold" />
        <Star1 size="14" className="text-yellow-400" variant="Bold" />
      </div>
      <span>lorejj</span>
      <Button text={"add to card"} w={"w-[100px]"} />
    </div>
  );
}
