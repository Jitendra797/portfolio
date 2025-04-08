import { HeroSection } from "@/components/home/hero-section";
import { SkillsSection } from "@/components/home/skills-section";
import { AchievementsSection } from "@/components/home/achievements-section";
import { ContactSection } from "@/components/home/contact-section";
import { Footer } from "@/components/home/footer";

export default function Page() {
  return (
    <>
      <div className="container mx-auto py-12 px-4 md:px-6 space-y-20">
        <HeroSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
