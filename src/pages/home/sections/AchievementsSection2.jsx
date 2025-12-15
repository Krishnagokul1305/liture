function AchievementsSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Our Results In <span className="text-primary">Numbers</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At Liture EdTech, we measure success through real, measurable
              outcomes that create lasting impact. These numbers highlight our
              dedication to delivering quality education, fostering career
              growth, and ensuring meaningful learning experiences that leave
              our learners confident, skilled, and industry-ready.
            </p>
          </div>
          {/* bar content */}
          <div className="grid grid-cols-2 w-full lg:flex lg:items-end gap-4">
            {/* Bar 1 - Shortest on desktop */}
            <div className="bg-red-50/50 rounded-2xl p-6 shadow-xl lg:h-48 flex flex-col justify-between">
              <div className="text-xs text-muted-foreground mb-2">
                Active Investors
              </div>
              <div className="text-3xl font-bold ">2.5M+</div>
            </div>

            {/* Bar 2 - Tallest on desktop */}
            <div className="bg-primary/50 rounded-2xl p-6 shadow-xl lg:h-64 flex flex-col justify-between">
              <div className="text-xs text-muted mb-2">
                Assets Under Management
              </div>
              <div className="text-3xl font-bold text-white">$12.4B</div>
            </div>

            {/* Bar 3 - Medium height on desktop */}
            <div className="bg-primary rounded-2xl p-6 shadow-xl lg:h-52 flex flex-col justify-between">
              <div className="text-xs text-gray-400 mb-2">Platform Uptime</div>
              <div className="text-3xl font-bold text-white">99.9%</div>
            </div>

            {/* Bar 4 - Short on desktop */}
            <div className=" rounded-2xl p-6 shadow-xl lg:h-44 flex flex-col justify-between">
              <div className="text-xs text-gray-400 mb-2">Management Fee</div>
              <div className="text-3xl font-bold text-white">0.25%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;
