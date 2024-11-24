import React, { useState } from "react";
import "./Card.css";

type CardProps = {
  title: string;
  imageSrc: string;
  onNavigate?: () => void; // Nuevo prop para manejar la navegación
};

const Card: React.FC<CardProps> = ({ title, imageSrc, onNavigate }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
    
    // Si es la card de INTERFACES, ejecutamos la navegación
    if (title === "INTERFACES" && onNavigate) {
      onNavigate();
    }
  };

  return (
    <div
      className={`card ${isSelected ? "selected" : ""}`}
      onClick={handleCardClick}
    >
      <img src={imageSrc} alt={title} />
      <p className="card-title">{title}</p>
    </div>
  );
};

export default Card;