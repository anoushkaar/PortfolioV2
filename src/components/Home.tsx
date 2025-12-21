import { ArrowRight, Download } from "lucide-react";
import resume from "../assets/anoushkasresume.pdf";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Simple Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 dark:bg-green-500/20 rounded-full border border-green-500/30 mb-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-green-700 dark:text-green-400">
            Available for opportunities
          </span>
        </div>

        {/* Main Heading */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-3">
          Hey there, I'm
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
            Anoushka.
          </span>
        </h1>

        {/* Role */}
        <p className="text-base sm:text-lg font-medium text-purple-600 dark:text-purple-400 mb-6">
          Full Stack Developer & Database Enthusiast
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Crafting elegant solutions with a passion for databases — Turning
          complex data into powerful, scalable applications. From crafting
          queries to optimizing performance, I build smart, reliable systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>

          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium border border-gray-200 dark:border-gray-700 hover:border-purple-500/50 transition-colors"
          >
            Explore My Work
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { number: "2+", label: "Years Experience" },
            { number: "15+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
