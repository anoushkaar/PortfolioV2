import { ExternalLink, Github } from "lucide-react";
import otp from "../assets/otppic.jpg";
import sky from "../assets/sky.jpg";
import weather from "../assets/weather.jpg";

const Projects: React.FC = () => {
  const projects = [
    {
      image: sky,
      title: "Authentication System",
      description:
        "Secure auth system using Node.js, Prisma, NeonDB with token verification.",
      tags: ["Node.js", "Prisma", "NeonDB", "JWT"],
      gradient: "from-blue-500 to-cyan-500",
      link: "#",
      github: "#",
    },
    {
      image: otp,
      title: "SwiftPay",
      description:
        "Digital payment app using MongoDB, Axios and Zustand for state management.",
      tags: ["MongoDB", "Axios", "Zustand", "React"],
      gradient: "from-purple-500 to-pink-500",
      link: "#",
      github: "#",
    },
    {
      image: sky,
      title: "Password Generator",
      description:
        "React + Tailwind password generator with copy support and customization options.",
      tags: ["React", "Tailwind", "JavaScript"],
      gradient: "from-green-500 to-emerald-500",
      link: "#",
      github: "#",
    },
    {
      image: weather,
      title: "Weather App",
      description:
        "Real-time weather data using external APIs with beautiful UI and forecasts.",
      tags: ["API", "React", "TypeScript"],
      gradient: "from-orange-500 to-amber-500",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="project"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Some of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                ></div>

                {/* Hover Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 bg-white dark:bg-gray-800 rounded-full hover:scale-110 transition-transform"
                    aria-label="View project"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-900 dark:text-white" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 bg-white dark:bg-gray-800 rounded-full hover:scale-110 transition-transform"
                    aria-label="View code"
                  >
                    <Github className="w-5 h-5 text-gray-900 dark:text-white" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-sm bg-gradient-to-r ${project.gradient} text-white rounded-full font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
