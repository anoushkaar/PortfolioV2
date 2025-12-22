const ComingSoon: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background blur blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl"></div>

      {/* Glass Card */}
      <div
        className="relative z-10 max-w-lg w-full mx-4 rounded-2xl
                      bg-white/20 dark:bg-gray-800/30
                      backdrop-blur-2xl
                      border border-white/20 dark:border-gray-700/30
                      shadow-2xl
                      p-10 text-center"
      >
        <span
          className="inline-block mb-4 px-4 py-1.5 text-sm font-medium rounded-full
                         bg-purple-100/60 dark:bg-purple-900/30
                         text-purple-700 dark:text-purple-300"
        >
          🚧 Under Development
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Coming Soon
        </h1>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          I’m currently working on something exciting. My new portfolio
          experience will be live very soon.
        </p>

        <p className="mt-10 text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Anoushka Raghuveeran
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
