import React from 'react'
import Image from "next/image";

export default function ProductCard() {
  return (
     <div className="relative flex flex-col items-center gap-4 mt-10">
         <div className="h-[100px] w-[100px] bg-midBrown rounded-t-2xl"></div>
         
   
         <Image
           height={200}
           width={150}
           src={"/images/cardwatch.png"}
           alt="watch"
           className="absolute top-4 "
         />
       
         <span>lorejj</span>
         
       </div>
  )
}
