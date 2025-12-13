import AboutUsSection from "./sections/AboutUsSection";
import AchievementsBanner from "./sections/AchievementsBanner";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import MembersSection from "./sections/MembersSection";

function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AchievementsBanner />
      <AboutUsSection />
      <MembersSection />
      <ContactSection />
    </div>
  );
}

export default Home;
