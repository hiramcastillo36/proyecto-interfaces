import React from "react";
import Card from "../components/Card/card";
import INTERFACES from "../assets/images/interfaces.png";
import WEB from "../assets/images/web.png";
import EST_DATOS from "../assets/images/est_datos.png";
import OBJETOS from "../assets/images/objetos.png";
import BD from "../assets/images/bd.png";
import ROBOTICA from "../assets/images/robotica.png";
import SO from "../assets/images/SO.png";
import "./Grupos.css";

function Grupos({ setView }: { setView: (view: string) => void }) {
  const menuItems = [
    { icon: INTERFACES, label: "INTERFACES", view: "Interfaces" },
    { icon: WEB, label: "WEB", view: "Web" },
    { icon: EST_DATOS, label: "EST_DATOS", view: "EstructuraDatos" },
    { icon: OBJETOS, label: "OBJETOS", view: "Objetos" },
    { icon: BD, label: "BD", view: "BasesDeDatos" },
    { icon: ROBOTICA, label: "ROBOTICA", view: "Robotica" },
    { icon: SO, label: "S.O.", view: "SistemasOperativos" },
  ];

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">GRUPOS</h1>
      <div className="content-container">
        <div className="groups-grid">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              title={item.label}
              imageSrc={item.icon}
              onNavigate={() => setView(item.view)}
            />          
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grupos;