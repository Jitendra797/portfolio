import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { TimelineItem } from "@/components/timeline-item";
import { SkillSection } from "@/components/skill-section";

const experiences = [
  {
    date: "February 2025 - Present",
    title: "SDE Intern",
    company: "Aegion Dynamic Solutions",
    description:
      "Building web applications using NextJs, Supabase, TailwindCSS",
  },
  {
    date: "July 2024 - March 2025",
    title: "SDE Intern",
    company: "Facttwin",
    description:
      "Developing web applications using Angular, NestJS, and Django frameworks. Successfully designed and implemented Todo App and Spotify Clone.",
  },
];

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Nest.js", "Django", "GraphQL", "RESTful APIs"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Firebase", "supabase", "PostgreSQL"],
  },
  {
    title: "Mobile",
    skills: ["Flutter", "Android (Kotlin)"],
  },
  {
    title: "Tools & Methodologies",
    skills: ["VsCode", "Android Studio", "Git", "GitHub", "Figma"],
  },
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "Dart"],
  },
];

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6">
      <div className="space-y-6 sm:space-y-8">
        {/* Profile Card */}
        <Card className="overflow-hidden">
          <div className="md:flex">
            {/* Left Section - Image & Social */}
            <div className="md:w-1/3 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent p-8 flex flex-col items-center gap-6">
              <div className="relative">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
                  <Avatar className="w-full h-full">
                    <AvatarImage
                      src="/profile_pic.jpg"
                      alt="Profile"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-4xl">JM</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div className="flex gap-6">
                <a
                  href="https://github.com/Jitendra797"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all transform hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jitendra-maddi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:jitendramaddi7@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-all transform hover:scale-110"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Right Section - Info */}
            <div className="md:w-2/3 p-8 space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Jitendra Maddi
                </h1>
                <p className="text-xl text-muted-foreground">
                  Software Developer
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Visakhapatnam, India</span>
                </div>
              </div>

              <div className="prose prose-sm dark:prose-invert">
                <p>
                  Passionate software developer with expertise in full-stack
                  development and mobile app development. Currently building
                  innovative solutions at Aegion Dynamic Solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="default"
                  className="bg-primary/10 text-primary hover:bg-primary/20"
                >
                  Mobile Developer
                </Badge>
                <Badge
                  variant="default"
                  className="bg-primary/10 text-primary hover:bg-primary/20"
                >
                  Web Developer
                </Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">
                  Raghu Engineering College, Visakhapatnam
                </h4>
                <span className="text-sm text-muted-foreground">2021-2025</span>
              </div>
              <p className="text-muted-foreground">
                Computer Science Engineering BTech
              </p>
              <p className="text-sm text-muted-foreground">CGPA: 9.2</p>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">
                  Sri Chaitanya Boys Jr. College, Nidamanuru
                </h4>
                <span className="text-sm text-muted-foreground">2019-2021</span>
              </div>
              <p className="text-muted-foreground">MPC Intermediate</p>
              <p className="text-sm text-muted-foreground">Percentage: 96%</p>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">
                  Vidya Bharathi EM School, Nagayalanka
                </h4>
                <span className="text-sm text-muted-foreground">2018-2019</span>
              </div>
              <p className="text-muted-foreground">SSC (10th Standard)</p>
              <p className="text-sm text-muted-foreground">GPA: 10.0</p>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
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

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">
              Skills & Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {skillCategories.map((category, index) => (
                <SkillSection key={index} {...category} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
