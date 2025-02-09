import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CertificateCardProps {
  title: string
  description: string
  imageUrl: string
  issuer: string
  date: string
}

export function CertificateCard({ title, description, imageUrl, issuer, date }: CertificateCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative aspect-video">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>
          {issuer} • {date}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  )
}

