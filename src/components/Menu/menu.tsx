import React, { useState } from "react";
import "./menu.css";
import Grid from "../../assets/Grid.svg";
import Bell from "../../assets/Bell.svg";
import Folder from "../../assets/Folder.svg";
import Settings from "../../assets/Settings.svg";
import LogOut from "../../assets/LogOut.svg";
import Right from "../../assets/right.svg";
import Left from "../../assets/left.svg";
import MenuH from "../../assets/Menu.svg";

const Menu: React.FC<{ setView: (view: string) => void }> = ({ setView }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { icon: Grid, label: "Dashboard", view: "Dashboard" },
    { icon: Bell, label: "Notificaciones" },
    { icon: Folder, label: "Grupos", view: "Grupos" },
    { icon: Settings, label: "Configuración" },
    { icon: LogOut, label: "Salir", isLogout: true },
  ];

  return (
    <>
      <div className={`menu ${isExpanded ? "menu-expanded" : ""}`}>
        <div className="menu-header">
          {isExpanded && <h2>Dashboard</h2>}


          <div className="menu-items-container">

            <div className="menu-item">
                <img
                src={isExpanded ? Left : Right}
                alt="Toggle Menu"
                className="menu-toggle-icon"
                onClick={() => setIsExpanded(!isExpanded)}
            />
            </div>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`menu-item ${item.isLogout ? (isExpanded ? "logout-expanded" : "") : ""}`}
                onClick={() => item.view && setView(item.view)}
              >
                <img src={item.icon} alt={item.label} />
                {isExpanded && <span className="menu-item-label">{item.label}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(true)}>
        <img src={MenuH} alt="Menu Hamburguesa" />
      </div>

      {/* Menú Hamburguesa */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <img
              src={isExpanded ? Left : Right}
              alt="Toggle Menu"
              className="menu-toggle-icon"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
          <div className="mobile-menu-items">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="mobile-menu-item"
                onClick={() => {
                  item.view && setView(item.view);
                  setIsMobileMenuOpen(false);
                }}
              >
                <img src={item.icon} alt={item.label} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
