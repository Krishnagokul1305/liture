import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AchievementsBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      value: 30,
      suffix: "+",
      label: "Expert Webinars",
    },
    {
      value: 500,
      suffix: "+",
      label: "Students Trained",
    },
    {
      value: 40,
      suffix: "+",
      label: "Internship Opportunities",
    },
    {
      value: 95,
      suffix: "%",
      label: "Student Satisfaction",
    },
  ];

  return (
    <section ref={ref} className="w-full bg-primary text-white py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                className="mb-2 text-5xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  initial={{ count: 0 }}
                  animate={{ count: isInView ? stat.value : 0 }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                >
                  {Math.floor(isInView ? stat.value : 0)}
                </motion.span>
                {stat.suffix}
              </motion.div>

              <div className="text-sm md:text-base font-semibold text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* import { BarChart3, Eye, Globe, Users } from "lucide-react";
export default function AchievementsBanner() {
  const stats = [
    {
      value: "30",
      suffix: "+",
      label: "Expert Webinars",
      icon: BarChart3,
    },
    {
      value: "500",
      suffix: "+",
      label: "Students Trained",
      icon: Eye,
    },
    {
      value: "40",
      suffix: "+",
      label: "Internship Opportunities",
      icon: Globe,
    },
    {
      value: "95",
      suffix: "%",
      label: "Student Satisfaction",
      icon: Users,
    },
  ];
  return (
    <section className="w-full bg-primary py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Why Liture ?
            </h2>
            <p className="text-sm                                  text-muted leading-relaxed max-w-md">
              Liture EdTech offers expert-led learning focused on real-world
              skills and career growth. Students gain hands-on experience
              through projects, internships, and industry exposure. With
              flexible, affordable learning and a strong community-driven
              approach, we support continuous upskilling and long-term success.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 mx-auto lg:mx-0 lg:gap-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <div className="text-4xl md:text-5xl font-bold text-white leading-none">
                        {stat.value}
                        {stat.suffix}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm md:text-base font-medium text-white">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
 */}
    </section>
  );
}

export default AchievementsBanner;
//
