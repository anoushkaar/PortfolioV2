import {
  Code2,
  Lightbulb,
  Palette,
  Rocket,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const About: React.FC = () => {
  const features = [
    {
      icon: Code2,
      title: "Efficient Development",
      description:
        "Building smarter, scalable software solutions with clean architecture.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Clean Code",
      description:
        "Writing maintainable, well-documented code that follows best practices.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Strategic Thinking",
      description:
        "Approaching problems with structured analysis and creative solutions.",
      gradient: "from-orange-500 to-yellow-500",
    },
  ];

  const highlights = [
    { icon: Rocket, text: "Fast Learner", color: "text-blue-500" },
    { icon: Target, text: "Goal Oriented", color: "text-purple-500" },
    { icon: Zap, text: "Problem Solver", color: "text-amber-500" },
  ];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full text-xs sm:text-sm font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Get to Know Me
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            I'm a passionate web developer with a love for creating beautiful,
            functional applications. I specialize in crafting full-stack
            solutions that make a real impact.
          </p>
        </div>

        {/* Quick Highlights */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700"
              >
                <Icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-5 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mb-4 bg-gradient-to-br ${feature.gradient} rounded-xl`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Content */}
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
