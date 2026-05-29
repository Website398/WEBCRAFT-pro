import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800 px-4 md:px-10 lg:px-20 py-12 md:py-16">

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* BRAND */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            WebCraft.dev
          </h2>
          <p className="text-gray-400 text-sm leading-6">
            We build modern websites that help businesses grow online.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">📧 webcraft68494@gmail.com</p>
          <p className="text-gray-400 text-sm mt-2">📍 India</p>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>

          <a
            href="https://www.instagram.com/officialwebcraft/#"
            target="_blank"
            className="text-pink-500 text-sm block"
          >
            📸 Instagram
          </a>

       

          <a
            href="mailto:webcarft68494@gmail.com"
            className="text-gray-400 text-sm block mt-2"
          >
            ✉️ Email
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} WebCraft.dev — All Rights Reserved
      </div>

    </footer>
  );
}