import { CertificateCard } from "@/components/certificate-card";

const certificates = [
  {
    title: "Advanced Web Development",
    description:
      "Comprehensive course covering modern web development practices, including React, Node.js, and cloud deployment",
    imageUrl: "/placeholder.svg?height=200&width=300",
    issuer: "Tech Academy",
    date: "2023",
  },
  {
    title: "AWS Certified Solutions Architect",
    description:
      "Professional certification demonstrating expertise in designing distributed systems on Amazon Web Services",
    imageUrl: "/placeholder.svg?height=200&width=300",
    issuer: "Amazon Web Services",
    date: "2022",
  },
  {
    title: "Google Cloud Professional Developer",
    description:
      "Certification validating skills in developing and managing applications on Google Cloud Platform",
    imageUrl: "/placeholder.svg?height=200&width=300",
    issuer: "Google",
    date: "2021",
  },
  {
    title: "Certified Scrum Master",
    description:
      "Certification in Agile project management and Scrum methodologies",
    imageUrl: "/placeholder.svg?height=200&width=300",
    issuer: "Scrum Alliance",
    date: "2020",
  },
  {
    title: "Machine Learning Specialization",
    description:
      "In-depth course series covering machine learning algorithms, neural networks, and practical applications",
    imageUrl: "/placeholder.svg?height=200&width=300",
    issuer: "Coursera",
    date: "2019",
  },
  {
    title: "Responsive Web Design",
    description:
      "Course focused on creating adaptive and mobile-friendly web layouts using HTML, CSS, and JavaScript",
    imageUrl: "/placeholder.svg?height=200&width=300",
    issuer: "freeCodeCamp",
    date: "2018",
  },
];

export default function CertificatesPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-12">Certificates</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} {...certificate} />
        ))}
      </div>
    </div>
  );
}
