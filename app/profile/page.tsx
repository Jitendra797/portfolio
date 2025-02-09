import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function ProfilePage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
          <Image src="/placeholder.svg" alt="Profile" fill className="object-cover" />
        </div>
        <h1 className="text-3xl font-bold">Your Name</h1>
        <p className="text-xl text-muted-foreground">Full Stack Developer</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            A passionate developer with experience in building modern web applications. Focused on creating
            user-friendly and performant solutions.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: your.email@example.com</p>
                <p>Location: City, Country</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Social</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>GitHub: @username</p>
                <p>LinkedIn: /in/username</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

