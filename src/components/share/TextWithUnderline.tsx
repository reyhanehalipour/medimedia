"use client";

import React from "react";

interface TextWithUnderlineProps {
  text?: string;
  underlineWidth?: string;
}

const TextWithUnderline: React.FC<TextWithUnderlineProps> = ({
  text = "Sample Title",
}) => {
  return (
    <div className="relative inline-block">
      <span className="font-serif text-2xl relative z-10">{text}</span>
      <span className="absolute left-0 rounded-sm z-0 bg-lightBrown h-[4px] w-full  bottom-2"></span>
    </div>
  );
};

export default TextWithUnderline;
