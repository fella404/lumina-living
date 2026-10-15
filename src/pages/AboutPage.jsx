import AboutHero from "../components/about/AboutHero";
import AboutMissionStats from "../components/about/AboutMissionStats";
import AboutWhyChooseUs from "../components/about/AboutWhyChooseUs";
import AboutTeam from "../components/about/AboutTeam";
import Testimonials from "../components/shared/Testimonials";

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <AboutMissionStats />
      <AboutWhyChooseUs />
      <AboutTeam />
      <Testimonials />
    </main>
  );
};

export default AboutPage;
