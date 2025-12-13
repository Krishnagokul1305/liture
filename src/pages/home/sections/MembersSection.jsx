import { motion } from "framer-motion";

function MembersSection() {
  const teamMembers = [
    {
      name: "CAMERON WILLIAMSON",
      role: "Head Counselor",
      image: "/man-with-glasses-and-beret-smiling.jpg",
      bgColor: "bg-primary",
    },
    {
      name: "JANE COOPER",
      role: "Program Director",
      image: "/smiling-curly-woman.png",
      bgColor: "bg-chart-4",
    },
    {
      name: "ROBERT FOX",
      role: "Assistant Director",
      image: "/man-with-backwards-cap-smiling.jpg",
      bgColor: "bg-chart-2",
    },
    {
      name: "EMILY RODRIGUEZ",
      role: "Manager",
      image: "/woman-with-red-hair-and-glasses.jpg",
      bgColor: "bg-chart-1",
    },
  ];

  const floatAnimation = (delay = 0) => ({
    animate: {
      y: [0, -12, 0],
    },
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      delay,
    },
  });

  return (
    <section className="relative bg-red-50/50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="hidden lg:block">
        <motion.div
          {...floatAnimation(0)}
          className="absolute top-8 left-8 w-8 h-8 border-4 border-primary rounded-full"
          aria-hidden="true"
        />

        <motion.div
          {...floatAnimation(0.4)}
          className="absolute top-32 left-16 w-12 h-12 border-4 border-chart-4 rotate-45"
          aria-hidden="true"
        />

        <motion.div
          {...floatAnimation(0.2)}
          className="absolute top-4 right-4 w-8 h-8 border-4 border-[#8FBE5C] rotate-45"
          aria-hidden="true"
        />

        <motion.div
          {...floatAnimation(0.6)}
          className="absolute bottom-32 left-5 w-16 h-16 border-4 border-chart-4 rotate-12"
          style={{ borderRadius: "0" }}
          aria-hidden="true"
        />
        <motion.div
          {...floatAnimation(0.8)}
          className="absolute top-12 right-12 w-10 h-10 border-4 border-chart-1 rounded-full"
          aria-hidden="true"
        />
        <motion.div
          {...floatAnimation(1)}
          className="absolute bottom-8 right-16 w-12 h-12 border-4 border-[#8FBE5C] rotate-45"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-balance">
            MEET <span className="text-primary">OUR LEADERSHIP</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            At our summer camp, we believe that every child deserves the
            opportunity to have fun, learn, and grow. We offer flexible
            scheduling options to accommodate busy families.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`flex flex-col items-center ${
                i % 2 == 0 && "lg:mt-10"
              }`}
            >
              <div
                className={`${member.bgColor} rounded-full w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 mb-6 overflow-hidden`}
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Role */}
              <h3 className="font-black text-xl sm:text-2xl mb-2 text-center">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembersSection;
