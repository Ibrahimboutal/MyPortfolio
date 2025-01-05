import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { cn } from '../../utils/classNames';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={cn(
        "p-2 rounded-lg transition-colors",
        "bg-gray-100 hover:bg-gray-200",
        "dark:bg-gray-800 dark:hover:bg-gray-700",
        "text-gray-600 dark:text-gray-300",
        "sm:p-2 sm:rounded-lg", // Ensure consistent spacing on larger screens
        "md:p-3 md:rounded-md" // Adjust spacing for medium screens
      )}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
