import { SkillSection } from "@/components/skill-section"

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
      "Vue.js",
      "Webpack",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "Ruby on Rails", "PHP", "GraphQL", "RESTful APIs"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "AWS", "Google Cloud", "CI/CD", "Jenkins", "Terraform"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
  },
  {
    title: "Tools & Methodologies",
    skills: ["Git", "Agile", "Scrum", "Jira", "Figma", "Adobe XD", "Test-Driven Development"],
  },
]

export default function SkillsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-12">Skills</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <SkillSection key={index} {...category} />
        ))}
      </div>
    </div>
  )
}

