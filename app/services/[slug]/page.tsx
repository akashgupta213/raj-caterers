import Navbar from "@/components/Navbar";
import ServiceSlider from "@/components/ServiceSlider";

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
    features: [
      "Buffet Setup",
      "Professional Staff",
      "On-Time Service",
    ],
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
    features: [
      "Outdoor Setup",
      "Full Equipment",
      "Large Capacity",
    ],
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
      <div className="min-h-screen flex items-center justify-center text-white">
        Service not found: {slug}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#45000c] text-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">

        {/* IMAGE */}
        <div className="mb-8">
  <ServiceSlider
    images={service.images}
    title={service.title}
  />
</div>

        {/* HEADER INFO */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">

          <div>
            <h1 className="text-4xl font-bold text-yellow-400 mb-2">
              {service.title}
            </h1>

            <p className="text-gray-300">
              📍 {service.location}
            </p>

            <p className="mt-2 text-sm text-gray-300">
              ⭐{" "}
              <span className="text-orange-400 font-semibold">
                {service.rating}
              </span>{" "}
              {service.reviews} reviews
            </p>
          </div>

          <div className="bg-white text-black px-6 py-4 rounded-xl shadow-lg">
            <p className="text-2xl font-bold">
              {service.price}
            </p>
            <p className="text-sm text-gray-600">
              {service.category}
            </p>
          </div>

        </div>

        {/* DESCRIPTION */}
        <p className="text-lg text-gray-200 mb-10 leading-relaxed">
          {service.description}
        </p>

        {/* FEATURES */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Features
          </h2>

          <ul className="grid sm:grid-cols-2 gap-3">
            {service.features.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-green-400">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap gap-4">

          <a
            href="tel:+919334127247"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:scale-105 transition"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919334127247"
            target="_blank"
            className="px-6 py-3 bg-green-500 font-semibold rounded-full hover:scale-105 transition"
          >
            💬 WhatsApp
          </a>

          <a
  href="/contact#contact-form"
  className="flex-1 border border-red-400 text-red-500 rounded-lg py-2 text-sm hover:bg-red-50 transition inline-block text-center"
>
  Send Enquiry
</a>

        </div>

      </section>
    </div>
  );
}