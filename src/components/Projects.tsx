import { ExternalLink, Folder, Github, Star } from "lucide-react";
import otp from "../assets/otppic.jpg";
import sky from "../assets/sky.jpg";
import weather from "../assets/weather.jpg";

const Projects: React.FC = () => {
  const projects = [
    {
      image: sky,
      title: "Authentication System",
      description:
        "A secure, production-ready authentication system featuring JWT tokens, email verification, password reset, and role-based access control.",
      tags: ["Node.js", "Prisma", "NeonDB", "JWT"],
      gradient: "from-blue-500 to-cyan-500",
      link: "#",
      github: "#",
    },
    {
      image: otp,
      title: "SwiftPay",
      description:
        "A modern digital payment application with seamless transactions, wallet management, and real-time notifications using Zustand.",
      tags: ["MongoDB", "Axios", "Zustand", "React"],
      gradient: "from-purple-500 to-pink-500",
      link: "#",
      github: "#",
    },
    {
      image: sky,
      title: "Password Generator",
      description:
        "An elegant password generator with customizable options, strength indicators, copy functionality, and password history.",
      tags: ["React", "Tailwind", "JavaScript"],
      gradient: "from-green-500 to-emerald-500",
      link: "#",
      github: "#",
    },
    {
      image: weather,
      title: "Weather App",
      description:
        "Real-time weather application with beautiful visualizations, 7-day forecasts, location detection, and multiple city support.",
      tags: ["API", "React", "TypeScript"],
      gradient: "from-orange-500 to-amber-500",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="project"
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full text-xs sm:text-sm font-medium mb-3">
            <Folder className="w-3.5 h-3.5" />
            My Work
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Featured Badge */}
              {project && (
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
                  <Star className="w-3 h-3 fill-white" />
                  Featured
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={project.link}
                    className="flex items-center gap-1.5 px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                    aria-label="View project"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform"
                    aria-label="View code"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10 sm:mt-12">
          <a
            href="https://github.com/anoushkaar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition-opacity"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
