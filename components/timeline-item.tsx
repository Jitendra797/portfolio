import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TimelineItemProps {
  date: string
  title: string
  company: string
  description: string
}

export function TimelineItem({ date, title, company, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-primary after:absolute after:left-[7px] after:top-6 after:h-full after:w-[2px] after:bg-border last:pb-0 last:after:hidden">
      <Card>
        <CardHeader className="pb-2">
          <div className="text-sm font-medium text-muted-foreground">{date}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="font-medium text-primary">{company}</div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  )
}

