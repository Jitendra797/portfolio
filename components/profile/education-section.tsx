import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { educationData } from "@/data/profile_data";

export function EducationSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">Education</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {educationData.map((education, index) => (
          <div key={index}>
            <div className="flex justify-between items-start">
              <h4 className="font-semibold">{education.school}</h4>
              <span className="text-sm text-muted-foreground">
                {education.period}
              </span>
            </div>
            <p className="text-muted-foreground">{education.degree}</p>
            <p className="text-sm text-muted-foreground">{education.grade}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
