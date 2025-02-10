import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      {" "}
      {/* Added padding */}
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-col md:flex-row gap-4 md:items-center">
            <Avatar className="w-23 h-24 md:w-32 md:h-32">
              <AvatarImage
                src="/profile_pic.jpg"
                alt="Profile"
                className="object-cover"
              />
              <AvatarFallback>JM</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-3xl">Jitendra Maddi</CardTitle>
              <p className="text-xl text-muted-foreground">
                Software Developer
              </p>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary">Flutter</Badge>
                <Badge variant="secondary">NextJs</Badge>
                <Badge variant="secondary">Angular</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-8 text-muted-foreground">
              <div className="flex gap-4">
                <a
                  href="https://github.com/Jitendra797"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jitendra-maddi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:jitendramaddi7@gmail.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Mail size={24} />
                </a>
              </div>
              <div className="flex gap-2">
                <MapPin size={24} />
                <span>Visakhapatnam, India</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Software Developer Intern at Ageion Dynamics, focused on building
              scalable web applications using Next.js. I also develop
              cross-platform mobile applications with Flutter in my spare time.
              Passionate about creating efficient and user-friendly experiences.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Favourite Tech Stack</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge>Flutter</Badge>
            <Badge>Angular</Badge>
            <Badge>Next.js</Badge>
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>Firebase</Badge>
            <Badge>Supabase</Badge>
            <Badge>MongoDB</Badge>
            <Badge>PostgreSQL</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
