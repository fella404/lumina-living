import { useEffect, useState } from "react";
import Hero from "../components/home/Hero";
import FloatingSearch from "../components/home/FloatingSearch";
import FeaturedProperties from "../components/home/FeaturedProperties";
import PropertyCatalog from "../components/home/PropertyCatalog";
import PopularRegions from "../components/home/PopularRegions";
import HomeBlogs from "../components/home/HomeBlogs";
import Testimonials from "../components/shared/Testimonials";

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 150);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <Hero searchDimmed={scrolled} />
      <FloatingSearch visible={scrolled} />
      <FeaturedProperties />
      <PropertyCatalog />
      <PopularRegions />
      <HomeBlogs />
      <Testimonials />
    </main>
  );
};

export default HomePage;
