"use client";

import Image from "next/image";

type ServiceCollageProps = {
  images: string[];
  title: string;
};

export default function ServiceCollage({ images, title }: ServiceCollageProps) {
  return (
    <div className="w-full">

      {/* DESKTOP COLLAGE */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-4 h-[420px]">

        {/* Large left image */}
        <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden">
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Top right */}
        <div className="col-span-2 row-span-1 relative rounded-xl overflow-hidden">
          <Image
            src={images[1] ?? images[0]}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom right images */}
        <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden">
          <Image
            src={images[2] ?? images[0]}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden">
          <Image
            src={images[3] ?? images[0]}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

      </div>

      {/* MOBILE SLIDER */}
      <div className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory">

        {images.map((img, i) => (
          <div
            key={i}
            className="min-w-[85%] h-[320px] relative rounded-xl overflow-hidden snap-center flex-shrink-0"
          >
            <Image
              src={img}
              alt={`${title}-${i}`}
              fill
              className="object-cover"
            />
          </div>
        ))}

      </div>

    </div>
  );
}