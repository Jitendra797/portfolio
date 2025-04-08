import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Online Shopping",
    description:
      "I built an e-commerce app that consists of a splash screen, onboarding screens, login page, home, store, wishlist, and profile sections.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/Jitendra797/online_shopping",
    liveUrl: "https://example.com",
  },
  {
    title: "ToDo App Using Flutter",
    description:
      "Implemented a user-friendly interface with intuitive navigation and clear task organization.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/Jitendra797/Flutter_ToDoApp",
    liveUrl: "https://example.com",
  },
  {
    title: "Insta Pro",
    description:
      "Using the flutter for frontend and nestjs for backend I created an with instagram features.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/Jitendra797/Insta-Pro",
    liveUrl: "https://example.com",
  },
  {
    title: "Readme Generator",
    description:
      "Giving the github link it will generate the readme file for our project.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/Jitendra797/ReadmeGenerator",
    liveUrl: "https://example.com",
  },
  {
    title: "Hashnode",
    description: "A Social media app to post all our articles.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/Jitendra797/hashnode",
    liveUrl: "https://example.com",
  },
  {
    title: "Duolingo Clone",
    description: "Using Recat Expo I have cloned the Duolingo App.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/Jitendra797/Duolingo",
    liveUrl: "https://example.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-8">
        <div className="bg-muted/50 rounded-lg p-4 text-center text-muted-foreground">
          Images and live demos will be added shortly
        </div>

        <h1 className="text-4xl font-bold">My Projects</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} liveUrl={undefined} />
          ))}
        </div>
      </div>
    </div>
  );
}
