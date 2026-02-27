"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ServiceSlider({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const imageRef = useRef<HTMLDivElement>(null);

  // GSAP Animation
  useEffect(() => {
    if (!imageRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      {
        opacity: 0,
        x: 60 * direction,
        scale: 1.08,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power4.out",
      }
    );
  }, [index, direction]);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  const next = () => {
    setDirection(1);
    setIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">

      {/* Animated Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={images[index]}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full backdrop-blur hover:scale-110 transition"
      >
        ◀
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full backdrop-blur hover:scale-110 transition"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`h-2 w-2 rounded-full cursor-pointer transition ${
              i === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}