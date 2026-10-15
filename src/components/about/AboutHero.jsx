import { Link } from "react-router";
import { Home } from "lucide-react";
import Button from "../ui/Button";
import AboutPartners from "./AboutPartners";

const AboutHero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-4.5rem)] flex-col justify-between overflow-hidden bg-background">
      {/* Soft ambient background glow */}
      <div
        className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[2%] bottom-5 h-50 w-100 rounded-full bg-primary/10 blur-3xl md:bottom-16"
        aria-hidden="true"
      />

      {/* Main Hero Content (centered vertically) */}
      <div className="mx-auto my-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:py-14">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Kolom Kiri: Breadcrumb, Title & Subtitle */}
          <div className="flex flex-col lg:col-span-7">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-4 flex items-center gap-2 text-xs text-muted-foreground sm:text-sm"
            >
              <Link
                to="/"
                className="flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Home size={14} aria-hidden="true" />
                <span>Home</span>
              </Link>
              <span className="text-muted-foreground/60">/</span>
              <span className="font-medium text-foreground">About Us</span>
            </nav>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl xl:text-6xl xl:leading-[1.12]">
              Your Trusted Partner in Modern Living
            </h1>

            {/* Subtitle di bawah title */}
            <p className="mt-6 max-w-xl text-base text-justify md:text-left leading-relaxed text-muted-foreground sm:text-lg">
              Helping you find your ideal home and manage property assets
              efficiently, transparently, and reliably in the modern era.
            </p>
          </div>

          {/* Kolom Kanan: Small Image Card & Button di bawahnya */}
          <div className="flex flex-col items-center sm:items-end lg:col-span-5">
            <div className="w-60 overflow-hidden rounded-2xl sm:w-64 md:w-72">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-muted">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?w=800&q=80"
                  alt="Konsultasi properti tim Lumina Living"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Button di bawah gambar */}
            <div className="mt-4 flex w-60 sm:w-64 md:w-72">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                className="rounded-full shadow-card text-xs sm:text-sm"
              >
                Let&apos;s Work Together
              </Button>
            </div>
          </div>
        </div>
        <AboutPartners />
      </div>

      {/* Trusted Partners di bagian bawah layar hero */}
    </section>
  );
};

export default AboutHero;
