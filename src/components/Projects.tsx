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
        "A secure authentication system with JWT tokens, email verification, and role-based access control.",
      tags: ["Node.js", "Prisma", "NeonDB", "JWT"],
      link: "https://reflectify-mu60p.sevalla.app/register",
      github: "https://github.com/anoushkaar/Reflectify",
    },
    {
      image: otp,
      title: "SwiftPay",
      description:
        "A digital payment app with seamless transactions, wallet management, and real-time notifications.",
      tags: ["MongoDB", "Axios", "Zustand", "React"],
      link: "https://swiftpay-demo.netlify.app",
      github: "https://github.com/anoushkaar/SwiftPay",
    },
    {
      image: sky,
      title: "Password Generator",
      description:
        "Password generator with customizable options, strength indicators, and copy functionality.",
      tags: ["React", "Tailwind", "JavaScript"],
      link: "https://github.com/anoushkaar/reactjs-project/tree/main/21-password-generator",
      github:
        "https://github.com/anoushkaar/reactjs-project/tree/main/21-password-generator",
    },
    {
      image: weather,
      title: "Weather App",
      description:
        "Real-time weather app with 7-day forecasts, location detection, and multiple city support.",
      tags: ["API", "React", "TypeScript"],
      link: "https://anouweatherapp.netlify.app/",
      github: "https://github.com/anoushkaar/Weather-Application",
    },
  ];

  return (
    <section
      id="project"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-sm text-orange-700 dark:text-orange-400">
              Building Cool Stuff
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/anoushkaar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
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
