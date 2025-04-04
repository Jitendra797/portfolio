import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack application built with Next.js, TypeScript, and Stripe integration",
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "React-based productivity tool with real-time updates using Firebase",
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "AI-powered Chatbot",
    description:
      "Intelligent conversational agent built with Python and TensorFlow",
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects and skills, built with Next.js and Tailwind CSS",
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Weather Forecast App",
    description:
      "Real-time weather application using OpenWeatherMap API and React",
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Blog CMS",
    description:
      "Content Management System for blogs with markdown support and user authentication",
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-12">My Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
