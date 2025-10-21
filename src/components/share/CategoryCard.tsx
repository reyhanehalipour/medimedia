import React from "react";
import Image from "next/image";
import { Star1 } from "iconsax-reactjs";
import Button from "./Button";
import type { CategoryItem } from "../../data";

interface CategoryCardProps {
  item: CategoryItem;
  onAdd?: (item: CategoryItem) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ item}) => {
  const priceFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(item.price);

  return (
    <div className="relative flex flex-col items-center mt-10 gap-y-4 w-[180px]">
      <div className="h-[100px] w-full bg-darkBrown rounded-t-2xl"></div>

      <div className="absolute -top-6">
        <Image
          height={120}
          width={120}
          src={item.image}
          alt={item.name}
          className="object-contain"
        />
      </div>

      <label className="mt-16 text-sm font-medium">{item.name}</label>
      <span className="text-sm">{priceFormatted}</span>

      <div className="flex items-center justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star1
            key={i}
            size="14"
            className={i < item.rating ? "text-yellow-400" : "text-gray-300"}
            variant="Bold"
          />
        ))}
      </div>

      <span className="text-xs text-gray-500">{item.seller}</span>

      <Button text="Add to cart" w="w-[120px]"  />
    </div>
  );
};

export default CategoryCard;
