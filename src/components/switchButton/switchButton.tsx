import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi"; 
import "./switchButton.css"; 

const switchButton: React.FC = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.classList.add(`${savedTheme}-mode`);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.remove(`${theme}-mode`);
    document.body.classList.add(`${newTheme}-mode`);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="theme-switch-container">
      <div
        className={`theme-switch ${theme === "dark" ? "dark" : "light"}`}
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <FiSun className="icon" />
        ) : (
          <FiMoon className="icon" />
        )}
      </div>
    </div>
  );
};

export default switchButton;
