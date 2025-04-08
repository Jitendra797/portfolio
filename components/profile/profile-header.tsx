import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function ProfileHeader() {
  return (
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
            <p className="text-xl text-muted-foreground">Software Developer</p>
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
  );
}
