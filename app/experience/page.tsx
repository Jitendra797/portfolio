import { TimelineItem } from "@/components/timeline-item"

const experiences = [
  {
    date: "2022 - Present",
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    description:
      "Leading development of web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices.",
  },
  {
    date: "2020 - 2022",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description:
      "Developed and maintained multiple client projects using MERN stack. Implemented CI/CD pipelines and improved application performance.",
  },
  {
    date: "2018 - 2020",
    title: "Frontend Developer",
    company: "WebCraft Studios",
    description:
      "Created responsive and interactive user interfaces using React and Vue.js. Collaborated with designers to implement pixel-perfect designs.",
  },
  {
    date: "2017 - 2018",
    title: "Junior Web Developer",
    company: "StartUp Nexus",
    description:
      "Assisted in the development of web applications using JavaScript and PHP. Gained experience in agile methodologies and version control.",
  },
]

export default function ExperiencePage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-12">Experience</h1>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <TimelineItem key={index} {...experience} />
        ))}
      </div>
    </div>
  )
}

