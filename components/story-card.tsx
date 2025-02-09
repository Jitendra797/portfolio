import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface StoryCardProps {
  title: string
  description: string
  imageUrl: string
  category: string
  link: string
}

export function StoryCard({ title, description, imageUrl, category, link }: StoryCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative aspect-video">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="text-sm font-medium text-primary mb-2">{category}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto pt-4">
        <Button variant="ghost" className="p-0 h-auto hover:bg-transparent" asChild>
          <a href={link} className="flex items-center gap-2 text-primary">
            Read More <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

