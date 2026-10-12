import { Link } from "react-router";
import { Mail, Phone, MapPin, Clock, ArrowUp, Send } from "lucide-react";
import Button from "../ui/Button";

const currentYear = new Date().getFullYear();

const socialIcons = {
  instagram: (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
    </svg>
  ),
  facebook: (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  linkedin: (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  ),
  youtube: (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
};

const socialLinks = [
  { icon: "instagram", href: "https://instagram.com", label: "Instagram" },
  { icon: "facebook", href: "https://facebook.com", label: "Facebook" },
  { icon: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
  { icon: "youtube", href: "https://youtube.com", label: "YouTube" },
];

const exploreLinks = [
  { to: "/properties", label: "Properties" },
  { to: "/regions", label: "Regions" },
  { to: "/blogs", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const propertyTypeLinks = [
  { type: "house", label: "House" },
  { type: "apartment", label: "Apartment" },
  { type: "villa", label: "Villa" },
  { type: "townhouse", label: "Townhouse" },
  { type: "studio", label: "Studio" },
];

const Footer = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
    alert("Thanks! You’ll receive the latest property updates via email.");
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Band */}
      <section className="border-b border-primary-foreground/10 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to find your next home?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-primary-foreground/90">
            Find a home that fits your needs, lifestyle, and budget—all in one
            place.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              to="/contact"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Contact Us
            </Button>
            <Button
              to="/properties"
              size="lg"
              variant="outline"
              className="w-full border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground/60 sm:w-auto"
            >
              Browse Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="mb-4 inline-flex">
              <img
                src="/logo.png"
                alt="Lumina Living"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mb-6 text-sm text-primary-foreground/80">
              Find your dream home with ease. Lumina Living is your trusted
              platform for buying, selling, and renting properties across
              Indonesia.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {socialIcons[link.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="mb-4 font-semibold">Explores</h3>
            <ul className="space-y-2 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Property Types */}
          <div>
            <h3 className="mb-4 font-semibold">Property Type</h3>
            <ul className="space-y-2 text-sm">
              {propertyTypeLinks.map((item) => (
                <li key={item.type}>
                  <Link
                    to={`/properties?type=${item.type}`}
                    className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0" aria-hidden />
                <span className="text-primary-foreground/80">
                  Jl. Senayan No. 123, Jakarta Selatan 12210
                </span>
              </li>
              <li>
                <a
                  href="tel:+622122334455"
                  className="flex gap-3 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  <Phone size={18} className="shrink-0" aria-hidden />
                  <span>+62 (21) 2233-4455</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@luminaliving.id"
                  className="flex gap-3 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  <Mail size={18} className="shrink-0" aria-hidden />
                  <span>hello@luminaliving.id</span>
                </a>
              </li>
              <li className="flex gap-3 pt-2">
                <Clock size={18} className="shrink-0" aria-hidden />
                <div className="text-xs text-primary-foreground/80">
                  <p>Senin–Jumat: 09:00–18:00</p>
                  <p>Sabtu: 10:00–16:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-y border-primary-foreground/10 px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h3 className="mb-2 text-center font-semibold">
            Get the Latest Property Updates
          </h3>
          <p className="mb-4 text-center text-sm text-primary-foreground/80">
            Subscribe to our newsletter and receive notifications for the newest
            property listings.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 sm:flex-row"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Masukkan email Anda"
              required
              className="flex-1 rounded-full bg-primary-foreground/10 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:opacity-90"
            >
              <Send size={16} aria-hidden />
              Subscribe
            </button>
          </form>
          <p className="mt-2 text-center text-xs text-primary-foreground/60">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="px-4 py-6 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} Lumina Living. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a
              href="#"
              className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              Terms of Service
            </a>
            <button
              type="button"
              onClick={handleScrollTop}
              className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              aria-label="Kembali ke atas"
            >
              Back to Top
              <ArrowUp size={14} aria-hidden />
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
