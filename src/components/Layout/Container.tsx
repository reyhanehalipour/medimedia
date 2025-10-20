import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-[1440px] flex  flex-col gap-10 justify-center items-center  mx-auto px-4 sm:px-6  ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

