"use client";

import React from "react";

interface TextWithUnderlineProps {
  text?: string;
  underlineWidth?: string;
}

const TextWithUnderline: React.FC<TextWithUnderlineProps> = ({
  text = "Sample Title",
  underlineWidth = "100%",
}) => {
  return (
    <div className="relative inline-block">
      <span className="font-serif text-2xl relative z-10">{text}</span>
      <span
        className="absolute left-0 rounded-sm z-0 bg-lightBrown h-[4px] bottom-2"
        style={{ width: underlineWidth }}
      ></span>
    </div>
  );
};

export default TextWithUnderline;

