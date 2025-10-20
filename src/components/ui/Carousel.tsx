"use client";
import { useState, ReactNode } from "react";

interface SliderProps {
  slides: ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState<number>(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full  mx-auto relative overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            {slide}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === current ? "bg-lightBrown" : "bg-midBrown"
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
