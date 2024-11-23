import React, { useState } from 'react';
import './menu.css';
import Grid from '../../assets/Grid.svg';
import Bell from '../../assets/Bell.svg';
import Folder from '../../assets/Folder.svg';
import Settings from '../../assets/Settings.svg';
import LogOut from '../../assets/LogOut.svg';
import Right from '../../assets/right.svg';
import Left from '../../assets/left.svg';

const Menu: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const menuItems = [
        { icon: isExpanded ? Left : Right, label: '' }, // Cambiamos el ícono dinámicamente
        { icon: Grid, label: 'Dashboard' },
        { icon: Bell, label: 'Notificaciones' },
        { icon: Folder, label: 'Grupos' },
        { icon: Settings, label: 'Configuración' },
        { icon: LogOut, label: 'Salir' },
    ];

    return (
        <div className={`menu ${isExpanded ? "menu-expanded" : ""}`}>
            {menuItems.map((item, index) => (
                <div
                    key={index}
                    className={`menu-item ${index === 0 ? "menu-toggle" : ""}`}
                    onClick={index === 0 ? () => setIsExpanded(!isExpanded) : undefined}
                >
                    <img src={item.icon} alt={item.label} />
                    {isExpanded && <span>{item.label}</span>}
                </div>
            ))}
        </div>
    );
};

export default Menu;
