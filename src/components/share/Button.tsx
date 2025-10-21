import React, { ReactNode } from "react";
type ButtonProps = {
  text: string | ReactNode;
  w: string;
  onClick?: () => void;
};

export default function Button({ text, w, onClick }: ButtonProps) {
  return (
    <button
      className="flex otems-center justify-center flex-col"
      onClick={onClick}
    >
      <div
        className={`bg-backgroundButton  text-nowrap rounded-t-md w-[120px] ${w} h-[30px] flex items-center justify-center  text-[14px]`}
      >
        {text}
      </div>
      <div
        className={`bg-lightBrown  w-[120px] ${w}  rounded-b-md h-[6px]`}
      ></div>
    </button>
  );
}
