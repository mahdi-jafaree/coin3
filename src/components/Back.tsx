"use client";

import { useRouter } from "next/navigation";

export default function Back() {
  const router = useRouter();
  return (
    <button
      onClick={router.back}
      type="button"
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
    >
      Previous
    </button>
  );
}
