const ComingSoon: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Glass container */}
      <div
        className="relative z-10 max-w-md w-full mx-4 rounded-2xl
                      bg-white/20 dark:bg-white/5
                      backdrop-blur-2xl
                      border border-white/20 dark:border-white/10
                      shadow-xl
                      px-10 py-12 text-center"
      >
        <span
          className="inline-block mb-6 px-4 py-1.5 text-xs tracking-wide uppercase font-medium
                         rounded-full bg-white/40 dark:bg-white/10
                         text-neutral-800 dark:text-neutral-300"
        >
          Under Construction
        </span>

        <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-900 dark:text-white mb-4">
          Coming Soon
        </h1>

        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          I’m currently crafting something meaningful and refined. The
          experience will be live shortly.
        </p>

        <p className="mt-10 text-xs text-neutral-500 dark:text-neutral-500">
          © {new Date().getFullYear()} Anoushka Raghuveeran
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
