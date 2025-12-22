import { ArrowRight, Download } from "lucide-react";
import resume from "../assets/anoushkasresume.pdf";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-sm text-green-700 dark:text-green-400">
            Available for opportunities
          </span>
        </div>

        {/* Main Heading */}
        <p className="text-gray-600 dark:text-gray-400 mb-2">Hey there, I'm</p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3">
          Anoushka
        </h1>

        {/* Role */}
        <p className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-6">
          Full Stack Developer & Database Enthusiast
        </p>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
          Crafting elegant solutions with a passion for databases — Turning
          complex data into powerful, scalable applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>

          <a
            href="#about"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Explore My Work
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Stats */}
        {/* <div className="flex justify-center gap-8 sm:gap-12">
          {[
            { number: "2+", label: "Years Experience" },
            { number: "15+", label: "Projects" },
            { number: "100%", label: "Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Home;
