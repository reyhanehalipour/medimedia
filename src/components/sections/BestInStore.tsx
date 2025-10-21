"use client";
import React, { useState } from "react";
import CategoryCard from "../share/CategoryCard";
import TextWithUnderline from "../share/TextWithUnderline";
import useMobile from "@/utils/useMobile";
import Carousel from "../ui/Carousel";
export default function BestInStore() {
  const [active, setActive] = useState("Classic");
  const isMobile = useMobile();
  const tabs = [
    { id: "Classic", label: "Classic", href: "/" },
    { id: "Modern", label: "Modern", href: "/Modern" },
    { id: "Digital", label: "Digital", href: "/Digital" },
  ];
  const slideContent = (
    <div className="flex items-center justify-center gap-4 w-full">
      {" "}
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
  const slides = [slideContent, slideContent];
  return (
    <div className="flex  flex-col items-center justify-center py-8">
      <TextWithUnderline text="best in store" />

      <nav role="tablist" className="flex justify-center gap-6 mt-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            onClick={() => setActive(tab.id)}
            className={`
            pb-2 text-[14px] font-medium transition-colors
            ${
              active === tab.id &&
              "text-lightBrown  border-b-2 border-lightBrown "
            }
          `}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <div className="flex items-center justify-center gap-4 w-full">
        {isMobile ? (
          <>
            {" "}
            <CategoryCard />
          </>
        ) : (
          <>
            {" "}
            <Carousel slides={slides} />
          </>
        )}
      </div>
    </div>
  );
}
