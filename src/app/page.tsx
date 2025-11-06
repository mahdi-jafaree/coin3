import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <Image
          className="mx-auto mb-8 dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={200}
          height={40}
          priority
        />

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to Your Next.js App
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          This is a responsive layout with navigation. You can navigate between
          Home and Users pages using the header navigation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/users"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-white transition-colors hover:bg-blue-700 min-w-40"
          >
            View Users
          </Link>

          <a
            className="inline-flex h-12 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 px-6 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white min-w-40"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </div>

      {/* Feature cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Responsive Design
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            The layout automatically adapts to different screen sizes with a
            mobile-friendly navigation menu.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Dark Mode
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Supports both light and dark themes based on your system
            preferences.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Next.js Ready
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Built with Next.js App Router and modern React patterns for optimal
            performance.
          </p>
        </div>
      </div>
    </div>
  );
}
