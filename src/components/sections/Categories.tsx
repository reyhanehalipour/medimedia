"use client";
import React, { useState } from "react";
import TextWithUnderline from "../share/TextWithUnderline";
import ProductCard from "../share/ProductCard";

export default function Categories() {
  const [active, setActive] = useState("Classic");

  const tabs = [
    { id: "Classic", label: "Classic", href: "/" },
    { id: "Modern", label: "Modern", href: "/Modern" },
    { id: "Digital", label: "Digital", href: "/Digital" },
    { id: "Sport", label: "Sport", href: "/Sport" },
  ];
  return (
    <div className=" h-fit md:h-[400px] w-full flex  flex-col items-center justify-center">
      <TextWithUnderline text="products Categories" />
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
      <div className="flex flex-col md:flex-row items-center  w-full justify-center gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
