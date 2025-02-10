import { TimelineItem } from "@/components/timeline-item";

const experiences = [
  {
    date: "2024 - Present",
    title: "SDE Intern",
    company: "Ageion Dynamics.",
    description:
      "Developed a web application for the company's internal use using Nextjs.",
  },
  {
    date: "2024 - present",
    title: "Software Engineer",
    company: "facttwin.",
    description: "Build a Blog Appliction using Angular and NestJs.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-12">Experience</h1>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <TimelineItem key={index} {...experience} />
        ))}
      </div>
    </div>
  );
}
