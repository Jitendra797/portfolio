import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="container mx-auto py-12 px-4 md:px-6 space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold">Namasthe, I'm Jitendra</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Software Developer specializing in making scalable web apps and
            mobile apps and creating innovative solutions
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" asChild>
              <a href="/profile">View Profile</a>
            </Button>
            <Button asChild>
              <a href="/projects">See My Work</a>
            </Button>
          </div>
        </section>

        {/* Skills Overview */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">What I Do</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Angular</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mobile Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Flutter</Badge>
                  <Badge>Dart</Badge>
                  <Badge>Firebase</Badge>
                  <Badge>REST APIs</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Let's Connect</h2>
          <p className="text-muted-foreground">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:jitendramaddi7@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/Jitendra797"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/jitendra-maddi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 Jitendra Maddi. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="/projects"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Projects
              </a>
              <a
                href="/stories"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Stories
              </a>
              <a
                href="/experience"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Experience
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
