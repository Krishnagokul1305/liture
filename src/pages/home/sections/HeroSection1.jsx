import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <div className="h-screen relative overflow-hidden flex items-center justify-center">
      <section className="max-w-5xl mx-auto px-6  py-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Education is a <span className="text-primary">Previlage</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-muted-foreground text-base md:text-lg">
          Liture EdTech is a next-generation learning platform delivering
          high-quality education, industry-driven skill training, and real-world
          opportunities for students, professionals, and institutions.
        </p>
        <Button className="md:mt-8 mt-6 rounded-full group text-lg py-6 px-10">
          Explore Now{" "}
          <ArrowRight
            className="relative z-10 size-5 transition-transform duration-300
               group-hover:translate-x-1"
          />
        </Button>
      </section>
    </div>
  );
}

export default HeroSection;
