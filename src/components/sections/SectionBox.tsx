import React from "react";
import Button from "../share/Button";
import { ArrowLeft, ArrowRight } from "iconsax-reactjs";

export default function SectionBox() {
  return (
    <div className=" h-[300px] w-full  gap-5 flex items-center text-lg justify-center bg-darkBrown text-lightBrown">
      <Button
        text={<ArrowLeft size="30" className="text-white" />}
        w={"w-[60px]"}
      />
      <p className="flex flex-col items-center justify-center gap-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        <p className="text-white text-[14px] ">sjkkscmm</p>
      </p>
      <Button
        text={<ArrowRight size="30" className="text-white" />}
        w={"w-[60px]"}
      />
    </div>
  );
}
