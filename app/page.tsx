import { ProjectCard } from "@/components/project-card";
import { SkillSection } from "@/components/skill-section";
import { StoryCard } from "@/components/story-card";

export default function Page() {
  return (
    <div className="container py-12 px-4 md:px-6 space-y-20">
      {" "}
      {/* Added padding */}
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Namasthe, I'm Jitendra</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Software Developer specializing in making scalable web apps and mobile
          apps and creating innovative solutions
        </p>
      </section>
      {/* Featured Projects */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="E-commerce Platform"
            description="A full-stack application built with Next.js, TypeScript, and Stripe integration"
            imageUrl="/placeholder.svg?height=200&width=300"
            githubUrl="https://github.com"
            liveUrl="https://example.com"
          />
          <ProjectCard
            title="Task Management App"
            description="React-based productivity tool with real-time updates using Firebase"
            imageUrl="/placeholder.svg?height=200&width=300"
            githubUrl="https://github.com"
            liveUrl="https://example.com"
          />
          <ProjectCard
            title="AI-powered Chatbot"
            description="Intelligent conversational agent built with Python and TensorFlow"
            imageUrl="/placeholder.svg?height=200&width=300"
            githubUrl="https://github.com"
            liveUrl="https://example.com"
          />
        </div>
      </section>
      {/* Latest Stories */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Latest Stories</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <StoryCard
            title="Getting Started with Next.js"
            description="Learn how to build modern web applications with Next.js and its powerful features"
            imageUrl="/placeholder.svg?height=200&width=300"
            category="Web Development"
            link="/stories/nextjs"
          />
          <StoryCard
            title="The Power of TypeScript"
            description="Discover how TypeScript can improve your development workflow and code quality"
            imageUrl="/placeholder.svg?height=200&width=300"
            category="Programming"
            link="/stories/typescript"
          />
          <StoryCard
            title="Responsive Design Techniques"
            description="Explore advanced techniques for creating responsive and adaptive web layouts"
            imageUrl="/placeholder.svg?height=200&width=300"
            category="UI/UX"
            link="/stories/responsive-design"
          />
        </div>
      </section>
    </div>
  );
}
