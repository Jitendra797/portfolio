import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillSectionProps {
  title: string
  skills: string[]
}

export function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-sm py-1">
            {skill}
          </Badge>
        ))}
      </CardContent>
    </Card>
  )
}

