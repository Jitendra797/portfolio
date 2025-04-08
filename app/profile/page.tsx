import { ProfileHeader } from "@/components/profile/profile-header";
import { EducationSection } from "@/components/profile/education-section";
import { ExperienceSection } from "@/components/profile/experience-section";
import { SkillsSection } from "@/components/profile/skills-section";
import { CertificationsSection } from "@/components/profile/certifications-section";

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6">
      <div className="space-y-6 sm:space-y-8">
        <ProfileHeader />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
      </div>
    </div>
  );
}
