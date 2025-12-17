import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

function HeroSection() {
  return (
    <div className="min-h-[85vh] mt-10">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-10 md:text-center">
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

      {/* Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Card 1 */}

          <div className="relative bg-primary h-72 rounded-3xl overflow-hidden">
            {/* <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              className="absolute inset-0 h-full w-full object-cover"
              alt="teacher"
            />
            <div className="absolute inset-0 bg-black/40" /> */}
            <div className="relative z-10 p-6 text-white">
              <p className="text-3xl font-bold">500+</p>
              <p className="mt-2 text-sm">
                Trained teachers empowering young minds everyday
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative h-64 bg-primary mt-auto rounded-3xl overflow-hidden">
            {/* <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              className="absolute inset-0 h-full w-full object-cover"
              alt="teacher"
            />
            <div className="absolute inset-0 bg-black/40" /> */}
            <div className="relative z-10 p-6 text-white">
              <p className="text-3xl font-bold">500+</p>
              <p className="mt-2 text-sm">
                Trained teachers empowering young minds everyday
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-primary h-52 mt-auto rounded-3xl overflow-hidden">
            {/* <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              className="absolute inset-0 h-full w-full object-cover"
              alt="teacher"
            /> */}
            {/* <div className="absolute inset-0 bg-black/40" /> */}
            <div className="relative z-10 p-6 text-white">
              <p className="text-3xl font-bold">500+</p>
              <p className="mt-2 text-sm">
                Trained teachers empowering young minds everyday
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative h-64 bg-primary mt-auto rounded-3xl overflow-hidden">
            {/* <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              className="absolute inset-0 h-full w-full object-cover"
              alt="teacher"
            />
            <div className="absolute inset-0 bg-black/40" /> */}
            <div className="relative z-10 p-6 text-white">
              <p className="text-3xl font-bold">500+</p>
              <p className="mt-2 text-sm">
                Trained teachers empowering young minds everyday
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative h-72 bg-primary mt-auto rounded-3xl overflow-hidden">
            {/* <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
              className="absolute inset-0 h-full w-full object-cover"
              alt="child"
            />
            <div className="absolute inset-0 bg-black/40" /> */}
            <p className="relative z-10 p-6 text-white text-xl leading-snug">
              Be the reason <br /> a child smiles
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
