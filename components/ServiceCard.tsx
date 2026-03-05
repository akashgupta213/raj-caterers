"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Service = {
  slug: string;
  title: string;
  location: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  images: string[];
  preferred?: boolean;
};

export default function ServiceCard({ service }: { service: Service }) {
  const [index, setIndex] = useState(0);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === service.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [service.images.length]);

  return (
    <Link href={`/services/${service.slug}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 cursor-pointer group">

        {/* IMAGE SLIDER */}
        <div className="relative h-60 w-full overflow-hidden">

          <Image
            src={service.images[index]}
            alt={service.title}
            fill
            className="object-cover transition duration-500"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Preferred */}
          {service.preferred && (
            <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-md shadow">
              ★ Most Preferred
            </div>
          )}

          {/* Photo Count */}
          <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
            📷 {service.images.length}+
          </div>

          {/* Shortlist */}
          <div className="absolute bottom-3 right-3 bg-white text-gray-800 text-xs px-3 py-1 rounded shadow">
            ❤️ Shortlist
          </div>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {service.images.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5 text-black">

          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">
                {service.location}
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold text-lg">
                {service.price}
              </p>
              <p className="text-sm text-gray-500">
                {service.category}
              </p>
            </div>
          </div>

          <div className="mt-2 text-sm text-gray-600">
            ⭐{" "}
            <span className="font-semibold text-orange-500">
              {service.rating}
            </span>{" "}
            {service.reviews === 0
              ? "No reviews yet"
              : `${service.reviews} reviews`}
          </div>

          <div className="flex gap-3 mt-4">
            <button className="flex-1 border border-gray-300 rounded-lg py-2 text-sm hover:bg-gray-100 transition">
              Send enquiry
            </button>

            <button className="shine-effect flex-1 border border-red-400 text-red-500 rounded-lg py-2 text-sm hover:bg-red-50 transition">
              View contact
            </button>
          </div>

        </div>
      </div>
    </Link>
  );
}