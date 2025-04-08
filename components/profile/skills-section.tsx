import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillSection } from "@/components/skill-section";
import { skillCategories } from "@/data/profile_data";

export function SkillsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">Skills & Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillSection key={index} {...category} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
