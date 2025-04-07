import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function CertificatesPage() {
  return (
    <div className="container mx-auto h-[calc(100vh-4rem)] flex items-center justify-center px-4 md:px-6 overflow-hidden">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="flex flex-col items-center justify-center p-12 text-center space-y-4">
          <Clock className="h-12 w-12 text-muted-foreground animate-pulse" />
          <h1 className="text-2xl sm:text-3xl font-bold">
            Certificates Coming Soon
          </h1>
          <p className="text-muted-foreground">
            I will shortly add my certifications and achievements in software
            development.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
