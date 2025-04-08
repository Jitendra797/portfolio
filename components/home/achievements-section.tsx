import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { achievements } from "@/data/home_data";

export function AchievementsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent>
          {achievements.map((achievement, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative left-0 translate-x-0 hover:bg-primary/20" />
          <CarouselNext className="relative right-0 translate-x-0 hover:bg-primary/20" />
        </div>
      </Carousel>
    </section>
  );
}
