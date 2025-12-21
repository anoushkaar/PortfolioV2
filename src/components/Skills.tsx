import { Code, Database, GitBranch, Sparkles } from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 88 },
        { name: "Next.js", level: 60 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Redux Toolkit", level: 60 },
      ],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Database,
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "SQL", level: 90 },
        { name: "MongoDB", level: 82 },
        { name: "Express", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "REST APIs", level: 85 },
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: GitBranch,
      title: "Tools",
      skills: [
        { name: "GitHub", level: 90 },
        { name: "Netlify", level: 85 },
        { name: "Vercel", level: 70 },
        { name: "Postman", level: 80 },
      ],
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs sm:text-sm font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            What I Work With
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              My Skills
            </span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mb-4 bg-gradient-to-br ${category.gradient} rounded-xl`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {category.title}
                </h2>

                {/* Skills with Progress Bars */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-10 sm:mt-12 text-center">
          <h3 className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400 mb-4">
            Also familiar with
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {["TypeScript", "MySQL", "VS Code", "Linux"].map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
