import Back from "@/components/Back";
import { type GitHubUser, User } from "@/components/User";
import axios from "axios";
import Link from "next/link";
import { Suspense } from "react";

async function getGitHubUsers(since?: string): Promise<GitHubUser[]> {
  try {
    const response = await axios.get<GitHubUser[]>(
      `https://api.github.com/users?per_page=21${since ? `&since=${since}` : ""}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    return [];
  }
}

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          GitHub Users
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover GitHub users and explore their profiles
        </p>
      </div>
      <Suspense
        fallback={<div className="m-auto text-center">loading ...</div>}
      >
        <Users searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

async function Users({
  searchParams,
}: {
  searchParams: Promise<{ since?: string }>;
}) {
  const params = await searchParams;
  const users = await getGitHubUsers(params.since);
  const lastUser = users[users.length - 1];

  if (users.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub Users
          </h1>
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 px-4 py-3 rounded">
            Failed to fetch users from GitHub API
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"
        >
          <User user={user} />
        </div>
      ))}
      <div className="col-span-full flex justify-center items-center gap-4 mt-8">
        <Back />
        <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium">
          Current page
        </span>
        <button
          type="button"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
          disabled={false}
        >
          <Link href={`/users?since=${lastUser.id}`}>Next</Link>
        </button>
      </div>
    </div>
  );
}
