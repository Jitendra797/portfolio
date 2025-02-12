import { SkillSection } from "@/components/skill-section";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Django", "GraphQL", "RESTful APIs"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "supabase"],
  },
  {
    title: "Mobile",
    skills: ["Flutter", "Android (Kotlin)"],
  },
  {
    title: "Tools & Methodologies",
    skills: ["Git", "Figma", "VsCode", "Android Studio"],
  },
];

export default function SkillsPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      {" "}
      {/* Added padding */}
      <h1 className="text-4xl font-bold mb-12">Skills</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <SkillSection key={index} {...category} />
        ))}
      </div>
    </div>
  );
}
