import Image from "next/image";

export type GitHubUser = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  type: string;
};

export function User({ user }: { user: GitHubUser }) {
  return (
    <div className="flex items-center space-x-4">
      <Image
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        width={64}
        height={64}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {user.login}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          {user.type}
        </p>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
        >
          View Profile
          <svg
            className="ml-1 w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <title>External link</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
