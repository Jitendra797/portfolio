import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const skills: { title: string; skills: string[] }[] = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "Angular", "TypeScript", "Tailwind"],
  },
  {
    title: "Mobile Development",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
];

const achievements: { title: string; description: string }[] = [
  {
    title: "Google Developer Student Clubs",
    description: "Core Team Member at Raghu Engineering College (2023-2024)",
  },
  {
    title: "HackOverFlow 2.0",
    description:
      "Achieved Top 10 at national-level app development hackathon at PHOC College",
  },
  {
    title: "Topper - CSM Branch (B.Tech 1st Year)",
    description:
      "Awarded with a certificate and memento for securing the highest CGPA in the CSM branch during B.Tech 1st year.",
  },
];

const socialLinks: {
  name: string;
  icon: any;
  href: string;
  hoverColor: string;
}[] = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:jitendramaddi7@gmail.com",
    hoverColor: "hover:text-blue-500 hover:border-blue-500",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Jitendra797",
    hoverColor: "hover:text-violet-500 hover:border-violet-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jitendra-maddi/",
    hoverColor: "hover:text-blue-600 hover:border-blue-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/33_kittu_/",
    hoverColor: "hover:text-pink-600 hover:border-pink-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/MaddiKittu",
    hoverColor: "hover:text-sky-500 hover:border-sky-500",
  },
];

export { skills, achievements, socialLinks };
