import {
  Code2,
  Database,
  Lightbulb,
  Palette,
  Rocket,
  Target,
} from "lucide-react";

const About: React.FC = () => {
  const features = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Building responsive, accessible interfaces with React & modern CSS.",
    },
    {
      icon: Database,
      title: "Backend & Databases",
      description: "Creating robust APIs and optimized database architectures.",
    },
    {
      icon: Palette,
      title: "Clean Code",
      description:
        "Writing maintainable, well-documented code following best practices.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Approaching challenges with creative and structured solutions.",
    },
  ];

  const traits = [
    { icon: Rocket, label: "Fast Learner" },
    { icon: Target, label: "Detail Oriented" },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-sm text-purple-700 dark:text-purple-400">
              Passionate Developer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a love for creating
            beautiful, functional applications. I enjoy turning complex problems
            into simple, elegant solutions.
          </p>
        </div>

        {/* Traits */}
        <div className="flex justify-center gap-4 mb-12">
          {traits.map((trait, index) => {
            const Icon = trait.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full border border-purple-100 dark:border-purple-800/30"
              >
                <Icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {trait.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-md transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-purple-600 rounded-xl">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
