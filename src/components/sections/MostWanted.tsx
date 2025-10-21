import React from "react";
import TextWithUnderline from "../share/TextWithUnderline";
import Button from "../share/Button";

export default function MostWanted() {
  return (
    <div className="bg-[url('/images/mostwanteImage.png')]  h-[400px] bg-cover bg-no-repeat bg-center flex items-center justify-center flex-col gap-10 !w-full">
      <TextWithUnderline text="most ot wanlet the year" />
      <Button text="Shop now" w={"w-[120px]"}/>
    </div>
  );
}
