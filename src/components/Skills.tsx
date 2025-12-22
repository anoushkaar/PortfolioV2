const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 88 },
        { name: "Next.js", level: 60 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Redux Toolkit", level: 60 },
      ],
      barColor: "bg-purple-600",
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "SQL", level: 90 },
        { name: "MongoDB", level: 82 },
        { name: "Express", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "REST APIs", level: 85 },
      ],
      barColor: "bg-purple-600",
    },
    {
      title: "Tools",
      skills: [
        { name: "GitHub", level: 90 },
        { name: "Netlify", level: 85 },
        { name: "Vercel", level: 70 },
        { name: "Postman", level: 80 },
      ],
      barColor: "bg-purple-600",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm text-blue-700 dark:text-blue-400">
              Always Learning
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-md transition-all duration-300"
              >
                {/* Header */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
                  {category.title}
                </h3>

                {/* Skills with Progress Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${category.barColor} rounded-full transition-all duration-500`}
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

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["TypeScript", "MySQL", "VS Code", "Linux"].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 transition-colors"
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
