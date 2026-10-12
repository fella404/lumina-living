import SearchBar from "../shared/SearchBar";

const Hero = ({ searchDimmed }) => (
  <section className="relative flex min-h-[calc(100dvh-4.5rem)] items-center overflow-hidden">
    <img
      src="/bg.webp"
      alt="Rumah modern dengan taman"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/35 to-black/60" />
    <div className="relative flex flex-col items-center gap-8 mx-auto w-full max-w-7xl px-4 sm:px-6">
      <div className="w-full text-center text-white">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Discover property more easily
        </h1>
        <p className="mt-4 text-lg text-white/85">
          Lumina Living help people find their perfect home for better life
        </p>
      </div>
      <div
        className={`w-full max-w-3xl transition-all duration-300 ease-out ${
          searchDimmed
            ? "-translate-y-2 scale-90 opacity-0"
            : "translate-y-0 scale-100 opacity-100"
        } ${searchDimmed ? "pointer-events-none" : ""}`}
      >
        <SearchBar />
      </div>
    </div>
  </section>
);

export default Hero;
