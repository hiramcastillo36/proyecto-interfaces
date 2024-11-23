import { useState, useEffect } from 'react';
import './modeButton.css';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importamos los iconos

const ModeButton = () => {
  const [theme, setTheme] = useState(() => {
    // Recuperar el tema de localStorage o usar 'light' por defecto
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Actualiza el atributo data-theme en <html> y guarda el tema en localStorage
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Cambia entre los temas 'light' y 'dark'
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button 
      className={`modeButton ${theme}`} 
      onClick={toggleTheme} 
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="modeButton-rectangle">
        {theme === 'light' ? (
          <FaSun className="modeButton-icon" />
        ) : (
          <FaMoon className="modeButton-icon" />
        )}
      </div>
    </button>
  );
};

export default ModeButton;