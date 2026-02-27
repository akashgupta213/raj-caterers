export default function Footer() {
  return (
    <footer className="bg-[#2b0007] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">Raj Caterers</h2>
          <p className="text-sm text-gray-300 mt-2">
            Premium catering services for weddings, corporate events, and
            special occasions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-sm text-gray-300">📍 Patna, Bihar</p>
          <p>
            <a
              href="tel:+919334127247"
              className="text-sm text-gray-300 hover:text-yellow-400 transition"
            >
              📞 +91 9334127247
            </a>
          </p>
          <p>
            <a
              href="mailto:info@rajcaterers.com"
              className="text-sm text-gray-300 hover:text-yellow-400 transition"
            >
              ✉️ rajcaterers247@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className=" border-white/10 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Raj Caterers. All rights reserved.
      </div>
    </footer>
  );
}
