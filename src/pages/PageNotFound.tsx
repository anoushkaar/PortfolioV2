import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center px-6">
      <h1 className="text-7xl font-bold text-gray-900 dark:text-white mb-4">
        404
      </h1>

      <p className="text-gray-500 dark:text-gray-400 mb-8">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="px-6 py-3 border border-gray-900 dark:border-white rounded-lg
                   text-gray-900 dark:text-white
                   hover:bg-gray-900 hover:text-white
                   dark:hover:bg-white dark:hover:text-black
                   transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default PageNotFound;
