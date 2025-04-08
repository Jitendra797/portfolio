import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/home_data";

export function ContactSection() {
  return (
    <section className="text-center space-y-6">
      <h2 className="text-3xl font-bold">Let's Connect</h2>
      <p className="text-muted-foreground">
        Feel free to reach out for collaborations or just a friendly hello
      </p>
      <div className="flex gap-4 justify-center">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <Button
              key={social.name}
              variant="outline"
              size="icon"
              className={social.hoverColor}
              asChild
            >
              <a
                href={social.href}
                target={social.name !== "Email" ? "_blank" : undefined}
                rel={
                  social.name !== "Email" ? "noopener noreferrer" : undefined
                }
              >
                <Icon className="h-5 w-5" />
              </a>
            </Button>
          );
        })}
      </div>
    </section>
  );
}
