import { StoryCard } from "@/components/story-card"

const stories = [
  {
    title: "Getting Started with Next.js",
    description: "Learn how to build modern web applications with Next.js and its powerful features",
    imageUrl: "/placeholder.svg?height=200&width=300",
    category: "Web Development",
    link: "/stories/nextjs",
  },
  {
    title: "The Power of TypeScript",
    description: "Discover how TypeScript can improve your development workflow and code quality",
    imageUrl: "/placeholder.svg?height=200&width=300",
    category: "Programming",
    link: "/stories/typescript",
  },
  {
    title: "Responsive Design Techniques",
    description: "Explore advanced techniques for creating responsive and adaptive web layouts",
    imageUrl: "/placeholder.svg?height=200&width=300",
    category: "UI/UX",
    link: "/stories/responsive-design",
  },
  {
    title: "Optimizing React Applications",
    description: "Learn performance optimization techniques for large-scale React applications",
    imageUrl: "/placeholder.svg?height=200&width=300",
    category: "Web Development",
    link: "/stories/react-optimization",
  },
  {
    title: "Introduction to GraphQL",
    description: "Understand the basics of GraphQL and how it differs from traditional REST APIs",
    imageUrl: "/placeholder.svg?height=200&width=300",
    category: "Backend",
    link: "/stories/graphql-intro",
  },
  {
    title: "Mastering Git Workflows",
    description: "Improve your version control skills with advanced Git techniques and best practices",
    imageUrl: "/placeholder.svg?height=200&width=300",
    category: "DevOps",
    link: "/stories/git-workflows",
  },
]

export default function StoriesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-12">Stories</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story, index) => (
          <StoryCard key={index} {...story} />
        ))}
      </div>
    </div>
  )
}

