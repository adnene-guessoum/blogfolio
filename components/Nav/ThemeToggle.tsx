import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = (): JSX.Element => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800 border border-gray-800 dark:border-gray-200 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:ring"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-800 dark:text-gray-200"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="5" x2="12" y2="5.01" />
          <line x1="12" y1="19" x2="12" y2="19.01" />
          <line x1="5" y1="12" x2="5" y2="12.01" />
          <line x1="19" y1="12" x2="19" y2="12.01" />
          <line x1="4" y1="4" x2="4" y2="4.01" />
          <line x1="4" y1="20" x2="4" y2="20.01" />
          <line x1="20" y1="4" x2="20" y2="4.01" />
          <line x1="20" y1="20" x2="20" y2="20.01" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-800 dark:text-gray-200"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="7" y1="7" x2="7" y2="7.01" />
          <line x1="17" y1="7" x2="17" y2="7.01" />
          <line x1="7" y1="17" x2="7" y2="17.01" />
          <line x1="17" y1="17" x2="17" y2="17.01" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
