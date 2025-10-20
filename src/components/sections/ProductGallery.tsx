import Image from "next/image";

export default function ProductGallery() {
  const images = [
    "/images/w1.jpg",
    "/images/w2.jpg",
    "/images/w3.jpg",
    "/images/w4.jpg",
    "/images/w5.jpg",
    "/images/w6.jpg",
  ];

  return (
   
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <div key={i} className="relative w-full h-[300px]">
            <Image
              src={src}
              alt={`watch-${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
              priority={i < 3}
            />
          </div>
        ))}
       
      </div>
   
  );
}
