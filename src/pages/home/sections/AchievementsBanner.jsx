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
    </section>
  );
}

export default AchievementsBanner;
//
