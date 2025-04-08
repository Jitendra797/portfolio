import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TimelineItem } from "@/components/timeline-item";
import { experiences } from "@/data/profile_data";

export function ExperienceSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} {...experience} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
