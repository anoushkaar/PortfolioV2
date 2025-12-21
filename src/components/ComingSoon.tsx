const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon</h1>

      <p className="text-gray-400 max-w-xl mb-8">
        I’m currently working on something exciting. My new portfolio will be
        live very soon.
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/anoushkaar"
          target="_blank"
          className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
        >
          GitHub
        </a>

        <a
          href="mailto:anoushkaraghuveeran@gmail.com"
          className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
        >
          Contact Me
        </a>
      </div>

      <p className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Anoushka Raghuveeran
      </p>
    </div>
  );
};

export default ComingSoon;
