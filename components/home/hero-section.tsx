import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-5xl font-bold">Namasthe, I'm Jitendra</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        "I always believe in 'యద్భావం తద్భవతి'."
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
  );
}
