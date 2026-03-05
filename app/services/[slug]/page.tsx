import Navbar from "@/components/Navbar";
import ServiceCollage from "@/components/ServiceCollage";

type ServiceDetail = {
  title: string;
  description: string;
  features: string[];
  images: string[];
  price: string;
  location: string;
  category: string;
  rating: number;
  reviews: number;
};

const serviceData: Record<string, ServiceDetail> = {
  "bridal-makeup": {
    title: "Bloom Bridal Studio",
    description:
      "Professional bridal makeup services with premium products to make your special day unforgettable.",
    features: [
      "HD Bridal Makeup",
      "Hair Styling",
      "Draping Service",
      "Trial Makeup Available",
    ],
    images: [
      "/images/bg.png",
      "/images/catering-bg.jpeg",
      "/images/catering-bg2.png",
      "/images/couple.png",
    ],
    price: "₹15,000",
    location: "Aminjikarai, Chennai",
    category: "Bridal Makeup",
    rating: 4.5,
    reviews: 0,
  },

  "wedding-catering": {
    title: "Royal Wedding Catering",
    description:
      "We provide premium wedding catering with multi-cuisine menus and professional staff to make your big day unforgettable.",
    features: [
      "Multi-Cuisine Menu",
      "Live Food Counters",
      "Professional Staff",
      "Elegant Presentation",
    ],
    images: [
      "/images/bg.png",
      "/images/catering-bg.jpeg",
      "/images/catering-bg2.png",
      "/images/couple.png",
    ],
    price: "₹800 / plate",
    location: "T Nagar, Chennai",
    category: "Wedding Catering",
    rating: 4.7,
    reviews: 12,
  },

  "birthday-parties": {
    title: "Birthday & Private Parties",
    description:
      "Celebrate birthdays and private events with customized menus and decorations tailored to your theme.",
    features: [
      "Theme Decoration",
      "Snacks & Desserts",
      "Custom Menu",
      "Live Counters",
    ],
    images: [
      "/images/bg.png",
      "/images/catering-bg.jpeg",
      "/images/catering-bg2.png",
      "/images/couple.png",
    ],
    price: "₹12,000",
    location: "Velachery, Chennai",
    category: "Private Events",
    rating: 4.5,
    reviews: 8,
  },

  "corporate-events": {
    title: "Corporate Events",
    description:
      "Professional catering solutions for meetings and corporate parties with reliable service.",
    features: ["Buffet Setup", "Professional Staff", "On-Time Service"],
    images: [
      "/images/bg.png",
      "/images/catering-bg.jpeg",
      "/images/catering-bg2.png",
      "/images/couple.png",
    ],
    price: "₹25,000",
    location: "OMR, Chennai",
    category: "Corporate Catering",
    rating: 4.3,
    reviews: 5,
  },

  "outdoor-catering": {
    title: "Outdoor Catering",
    description:
      "Complete outdoor catering setup for garden weddings and destination events.",
    features: ["Outdoor Setup", "Full Equipment", "Large Capacity"],
    images: [
      "/images/bg.png",
      "/images/catering-bg.jpeg",
      "/images/catering-bg2.png",
      "/images/couple.png",
    ],
    price: "₹30,000",
    location: "ECR, Chennai",
    category: "Outdoor Catering",
    rating: 4.6,
    reviews: 10,
  },
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#45000c] text-white">
        Service not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFECE9] overflow-x-hidden">
      <Navbar />
      <section className="pt-28 pb-20 px-4 md:px-6 max-w-6xl mx-auto">
        {/* IMAGE COLLAGE */}
        <div className="mb-10 bg-[#FF989840] rounded-2xl p-5 md:p-10 text-black shadow-md">
          <ServiceCollage images={service.images} title={service.title} />
        </div>
        {/* DETAILS PANEL */}
        <div className="bg-[#FF989840] rounded-2xl p-5 md:p-10 text-black shadow-md">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#45000c] mb-2">
                {service.title}
              </h1>
              <p className="text-gray-700">📍 {service.location}</p>
              <p className="mt-2 text-sm text-gray-700">
                ⭐{" "}
                <span className="text-orange-500 font-semibold">
                  {service.rating}
                </span>{" "}
                {service.reviews} reviews
              </p>
            </div>
            <div className="bg-white text-black px-5 py-3 rounded-xl shadow">
              <p className="text-xl md:text-2xl font-bold">{service.price}</p>
              <p className="text-sm text-gray-600">{service.category}</p>
            </div>
          </div>
          {/* DESCRIPTION */}
          <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg">
            {service.description}
          </p>
          {/* FEATURES */}
          <div className="bg-white/60 border border-pink-200 rounded-xl p-5 md:p-6 mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-[#45000c] mb-4">
              Features
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {service.features.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-800">
                  <span className="text-green-500">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+919334127247"
              className="px-6 py-3 bg-[#45000c] text-white font-semibold rounded-full hover:scale-105 transition text-center"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919334127247"
              target="_blank"
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:scale-105 transition text-center"
            >
              💬 WhatsApp
            </a>
            <a
              href="/contact#contact-form"
              className="border border-[#45000c] text-[#45000c] rounded-full py-3 px-6 text-sm hover:bg-white transition text-center"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}