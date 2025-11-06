"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../hooks";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentTheme, toggleTheme } = useTheme();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              MyApp
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block ">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/users"
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Users
              </Link>
              <button
                type="button"
                onClick={toggleTheme}
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle theme"
              >
                {currentTheme === "dark" ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {/* Moon icon */}
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {/* Sun icon */}
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42" />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:text-blue-600 dark:focus:text-blue-400"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/"
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/users"
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Users
              </Link>
              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                aria-label="Toggle theme"
              >
                {currentTheme === "dark" ? (
                  <>
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      {/* Moon icon */}
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                    Dark Mode
                  </>
                ) : (
                  <>
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      {/* Sun icon */}
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42" />
                    </svg>
                    Light Mode
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
