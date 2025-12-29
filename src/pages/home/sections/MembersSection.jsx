import { motion } from "framer-motion";
import { container, fadeMove } from "../../../utils/animations";
import { Animated } from "../../../components/Animated";
import { teamMembers } from "../../../services/constant.service";
function MembersSection() {
  const floatAnimation = (delay = 0) => ({
    animate: { y: [0, -12, 0] },
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      delay,
    },
  });

  return (
    <section className="relative bg-red-50/50 py-24 px-6 md:px-4 overflow-hidden">
      {/* ================= FLOATING SHAPES ================= */}
      <div className="hidden lg:block">
        <motion.div
          {...floatAnimation(0)}
          className="absolute top-8 left-8 w-8 h-8 border-4 border-primary rounded-full"
        />
        <motion.div
          {...floatAnimation(0.4)}
          className="absolute top-32 left-16 w-12 h-12 border-4 border-chart-4 rotate-45"
        />
        <motion.div
          {...floatAnimation(0.2)}
          className="absolute top-4 right-4 w-8 h-8 border-4 border-[#8FBE5C] rotate-45"
        />
        <motion.div
          {...floatAnimation(0.6)}
          className="absolute bottom-32 left-5 w-16 h-16 border-4 border-chart-4 rotate-12"
        />
        <motion.div
          {...floatAnimation(0.8)}
          className="absolute top-12 right-12 w-10 h-10 border-4 border-chart-1 rounded-full"
        />
        <motion.div
          {...floatAnimation(1)}
          className="absolute bottom-8 right-16 w-12 h-12 border-4 border-[#8FBE5C] rotate-45"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <Animated
          variants={fadeMove("up", 40, 0)}
          className="text-center md:mb-16 mb-10"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-balance">
            Meet <span className="text-primary">Our Leadership</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Liture Edutech was founded with a vision to make quality learning
            accessible and career-focused for every learner, led by passionate
            educators and industry professionals.
          </p>
        </Animated>

        <motion.div
          variants={container(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeMove("up", 40, i * 0.2)}
              className={`flex flex-col items-center ${
                i % 2 === 0 ? "lg:mt-10" : ""
              }`}
            >
              <div
                className={`${member.bgColor} rounded-full w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 mb-3 md:mb-6 overflow-hidden`}
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-black text-xl sm:text-2xl md:mb-2 text-center">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default MembersSection;
