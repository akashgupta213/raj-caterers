"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/app/globals.css";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  slug: string;
  title: string;
  location: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  preferred?: boolean;
};

const services: Service[] = [
  {
    slug: "bridal-makeup",
    title: "Bloom Bridal Studio",
    location: "Aminjikarai, Chennai",
    category: "Bridal Makeup",
    price: "₹15,000",
    rating: 4.5,
    reviews: 0,
    image: "/images/bg.png",
    preferred: true,
  },
  {
    slug: "wedding-catering",
    title: "Royal Wedding",
    location: "T Nagar, Chennai",
    category: "Wedding Catering",
    price: "₹800 / plate",
    rating: 4.7,
    reviews: 12,
    image: "/images/bg.png",
  },
  {
    slug: "corporate-events",
    title: "Elite Event Planners",
    location: "Velachery, Chennai",
    category: "Corporate Events",
    price: "₹25,000",
    rating: 4.3,
    reviews: 5,
    image: "/images/bg.png",
  },
];

export default function ServicesPage() {
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 85%",
        },
      });

      gsap.from(".services-divider", {
        scale: 0.85,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 85%",
        },
      });
    });

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFECE9]">
      <Navbar />

      <section className="py-30 services-section max-w-7xl mx-auto px-6 py-20">
        {/* TITLE */}
        <h1 className="destination-title services-title">
          Services We Provide
        </h1>

        {/* DIVIDER */}
        <div className="flex justify-center -mt-20 services-divider">
          <img
            src="/images/gallery/divider-design.png"
            alt="divider"
            className="w-[350px]"
          />
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 -mt-12">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              
              {/* PINK BACKGROUND CARD */}
              <div className="card-wrapper">

                {/* WHITE SERVICE CARD */}
                <div className="service-card bg-white rounded-2xl overflow-hidden cursor-pointer group">

                  {/* IMAGE */}
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={300}
                      className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {service.preferred && (
                      <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-md shadow">
                        ★ Most Preferred
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 text-black">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold">{service.title}</h3>
                        <p className="text-sm text-gray-600">
                          {service.location}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-lg">{service.price}</p>
                        <p className="text-sm text-gray-500">
                          {service.category}
                        </p>
                      </div>
                    </div>

                    <div className="mt-2 text-sm text-gray-600">
                      ⭐
                      <span className="font-semibold text-orange-500 ml-1">
                        {service.rating}
                      </span>{" "}
                      {service.reviews === 0
                        ? "No reviews yet"
                        : `${service.reviews} reviews`}
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-3 mt-4">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/contact#contact-form");
                        }}
                        className="relative px-5 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-gray-100 transition overflow-hidden"
                      >
                        <span className="btn-shine"></span>
                        <span className="relative z-10">Send Enquiry</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = "tel:+919334127247";
                        }}
                        className="relative flex-1 border border-red-400 text-red-500 rounded-lg py-2 text-sm bg-white hover:bg-red-50 transition overflow-hidden"
                      >
                        <span className="btn-shine"></span>
                        <span className="relative z-10">View Contact</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}