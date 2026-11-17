import React from 'react';

function Header({ theme, setTheme }) {
  const isDark = theme === 'dark';

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-8 text-center border-b-4 border-blue-800 relative">
      <button 
        onClick={() => setTheme(isDark ? 'light' : 'dark')} 
        className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white px-3 py-1 rounded transition"
      >
        {isDark ? '☀️ Денний режим' : '🌙 Нічний режим'}
      </button>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-wide">Євген Бігей</h1>
      <p className="text-lg md:text-xl text-blue-100 font-medium">Студент напряму "Кібербезпека" | React-розробник"</p>
    </header>
  );
}

export default Header;