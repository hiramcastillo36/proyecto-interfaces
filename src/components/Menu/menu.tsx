import React, { useState } from "react";
import "./menu.css";
import Grid from "../../assets/Grid.svg";
import Bell from "../../assets/Bell.svg";
import Folder from "../../assets/Folder.svg";
import Settings from "../../assets/Settings.svg";
import LogOut from "../../assets/LogOut.svg";
import Right from "../../assets/right.svg";
import Left from "../../assets/left.svg";


const Menu: React.FC<{ setView: (view: string) => void }> = ({ setView }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { icon: Grid, label: "Dashboard", view: "Dashboard" },
    { icon: Bell, label: "Notificaciones"},
    { icon: Folder, label: "Grupos", view: "Grupos" },
    { icon: Settings, label: "Configuración" },
    { icon: LogOut, label: "Salir", isLogout: true },
  ];

  return (
    <div className={`menu ${isExpanded ? "menu-expanded" : ""}`}>
      <div className="menu-header">
        {isExpanded && <h2>Dashboard</h2>}
        <img
          src={isExpanded ? Left : Right}
          alt="Toggle Menu"
          className="menu-toggle-icon"
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </div>

      <div className="menu-content">
        <div className="menu-items-container"> 
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
  );
};

export default Menu;