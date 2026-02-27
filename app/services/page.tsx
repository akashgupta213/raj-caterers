"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";

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
    title: "Royal Wedding Catering",
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

  return (
    <div className="min-h-screen bg-[#45000c] text-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-12">
          Our Services
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 cursor-pointer group">
                
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

                  <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    📷 40+
                  </div>

                  <div className="absolute bottom-3 right-3 bg-white text-gray-800 text-xs px-3 py-1 rounded shadow">
                    ❤️ Shortlist
                  </div>
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
                    ⭐{" "}
                    <span className="font-semibold text-orange-500">
                      {service.rating}
                    </span>{" "}
                    {service.reviews === 0
                      ? "No reviews yet"
                      : `${service.reviews} reviews`}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-3 mt-4">

                    {/* Send Enquiry */}
                    <button
                      onClick={(e) => {
                        e.preventDefault(); // stop card navigation
                        router.push("/contact#contact-form");
                      }}
                      className="px-6 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition"
                    >
                      Send Enquiry
                    </button>

                    {/* View Contact */}
                    <button
  onClick={(e) => {
    e.preventDefault();
    window.location.href = "tel:+919334127247";
  }}
  className="flex-1 border border-red-400 text-red-500 rounded-lg py-2 text-sm hover:bg-red-50 transition"
>
  View Contact
</button>

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