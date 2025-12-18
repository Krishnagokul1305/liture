"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fadeMove } from "../../../utils/animations";
import { Animated } from "../../../components/Animated";

function OpportunitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activities = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661682777553-d620975e42c8",
      title: "Learn From Industry Leaders",
      description:
        "Expert-led webinars on emerging tech, design, careers, AI, and personal branding with live interaction and recorded access.",
      date: "WEBINARS",
      cta: "Explore Webinars",
    },
    {
      image: "https://images.unsplash.com/photo-1506784926709-22f1ec395907",
      title: "Join the Liture EdTech Team",
      description:
        "Work with a fast-growing EdTech startup. Opportunities for educators, developers, designers, marketers, and mentors.",
      date: "CAREERS",
      cta: "View Open Roles",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1726081012679-3f470ee279a7",
      title: "Build Real Skills with Internships",
      description:
        "Hands-on internships with real projects, expert mentorship, certifications, and career-ready experience.",
      date: "INTERNSHIPS",
      cta: "Apply Now",
    },
    {
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      title: "Partner With Liture EdTech",
      description:
        "Collaborate with us for training programs, internships, joint webinars, curriculum support, and skill development.",
      date: "PARTNERSHIPS",
      cta: "Become a Partner",
    },
  ];

  // Index limits
  const maxIndex = isDesktop ? activities.length - 2 : activities.length - 1;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      className="bg-red-50/50 py-12 md:py-24 px-6 md:px-4 lg:px-8"
      id="opportunities"
    >
      <div className="mx-auto max-w-7xl">
        <Animated
          variants={fadeMove("up", 40, 0)}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12"
        >
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-black mb-6 text-balance">
              Explore <span className="text-primary">Our Opportunities</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Discover webinars led by industry experts, exciting career
              opportunities, hands-on internships, and meaningful partnerships
              designed to help you learn, grow, and succeed.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <Button
              onClick={handlePrevious}
              size="icon"
              className="h-14 w-14 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={handleNext}
              size="icon"
              className="h-14 w-14 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </Animated>

        {/* 🔹 CAROUSEL (appears after header) */}
        <Animated variants={fadeMove("up", 40, 0.25)}>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (isDesktop ? 50 : 100)
                }%)`,
              }}
            >
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="w-full  md:w-1/2 flex-shrink-0 px-2"
                >
                  <Card className="overflow-hidden rounded-lg h-full p-0">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-72 object-cover"
                    />

                    <CardContent className="p-6 pt-0 space-y-4">
                      <h2 className="text-2xl font-black text-gray-900">
                        {activity.title}
                      </h2>

                      <p className="text-gray-600 leading-relaxed">
                        {activity.description}
                      </p>

                      <div className="flex items-center justify-between pt-2">
                        <button className="text-primary font-bold text-sm hover:text-primary/90">
                          {activity.cta}
                        </button>

                        <span className="text-muted-foreground text-sm font-medium">
                          {activity.date}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Animated>

        {/* 🔹 INDICATORS */}
        <Animated variants={fadeMove("up", 20, 0.35)}>
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? "w-8 bg-primary" : "w-2 bg-gray-300"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </Animated>
      </div>
    </section>
  );
}

export default OpportunitiesSection;
