import { Code2, Lightbulb, Palette } from "lucide-react";
import React from "react";

const About: React.FC = () => {
  const features = [
    {
      icon: Code2,
      title: "Efficient Development",
      description: "Smarter, scalable software solutions.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Clean Code",
      description: "Maintainable code following best practices.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Strategic Thinking",
      description: "Structured and creative problem solving.",
      gradient: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            As a web developer, I specialize in creating visually appealing and
            highly functional websites with clean, efficient code.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br ${feature.gradient} rounded-xl shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h2 className="relative text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h2>
                <p className="relative text-gray-600 dark:text-gray-400">
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
