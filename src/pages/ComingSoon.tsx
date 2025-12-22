const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-950 px-4">
      {/* Card */}
      <div
        className="w-full max-w-md rounded-2xl bg-white dark:bg-neutral-900
                      border-2 border-neutral-300 dark:border-neutral-700
                      shadow-lg px-8 py-10"
      >
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                        border border-green-300 dark:border-green-700
                        bg-green-50 dark:bg-green-900/20 mb-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>

          <span className="text-sm font-medium text-green-700 dark:text-green-400">
            Under Development
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
          Coming Soon
        </h1>

        {/* Description */}
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          I’m currently working on improving my portfolio to create a more
          refined and thoughtful experience. The updated version will be
          available shortly.
        </p>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Anoushka Raghuveeran
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
