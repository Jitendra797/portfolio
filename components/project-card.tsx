import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  githubUrl: string
  liveUrl: string
}

export function ProjectCard({ title, description, imageUrl, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative aspect-video">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto pt-6">
        <div className="flex gap-4 w-full">
          <Button variant="outline" className="flex-1" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          <Button className="flex-1" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

