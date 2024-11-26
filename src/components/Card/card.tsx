import React, { useState } from "react";
import "./Card.css";

type CardProps = {
  title: string;
  imageSrc: string;
  onNavigate?: () => void; 
};

const Card: React.FC<CardProps> = ({ title, imageSrc, onNavigate }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
    
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