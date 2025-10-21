"use client";
import React, { useState, ReactNode } from "react";
import Button from "../share/Button";
import { ArrowLeft, ArrowRight } from "iconsax-reactjs";

interface SliderProps {
  slides: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<SliderProps> = ({
  slides,
  autoPlay = false,
  interval = 3000,
}) => {
  const [current, setCurrent] = useState<number>(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  React.useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [current, autoPlay, interval]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* اسلایدها */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="flex-shrink-0 w-full">
            {slide}
          </div>
        ))}
      </div>

      {/* دکمه چپ */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <Button
          onClick={prevSlide}
          text={<ArrowLeft size="20" className="text-white" />}
          w="w-[60px]"
        />
      </div>

      {/* دکمه راست */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <Button
          onClick={nextSlide}
          text={<ArrowRight size="20" className="text-white" />}
          w="w-[60px]"
        />
      </div>
    </div>
  );
};

export default Carousel;
