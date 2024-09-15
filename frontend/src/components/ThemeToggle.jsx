import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon sun-icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v2m6.364-1.636l-1.414 1.414M20 12h2m-1.636-6.364l-1.414-1.414M12 20v2m-6.364-1.636l1.414-1.414M4 12H2m1.636 6.364l1.414 1.414M12 4a8 8 0 100 16 8 8 0 000-16z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon moon-icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 118.646 3.646a7 7 0 1011.708 11.708z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
