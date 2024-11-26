import React, { useState } from "react";
import DoughnutChart from "../components/DoughnutChart/DoughnutChart";
import Header from "../components/header/header";
import Menu from "../components/Menu/menu";
import Grupos from "./Grupos";
import Interfaces from "./Interfaces";
import "./Dashboard.css";

function Dashboard() {
  const [currentView, setCurrentView] = useState("Dashboard");

  const renderContent = () => {
    switch (currentView) {
      case "Dashboard":
        return (
          <>
            <h1 className="dashboard-title">DASHBOARD</h1>
            <h1 className="section-title">AVANCE DE CURSOS</h1>
            <div className="grid-container">
              <DoughnutChart name="BD" value={65} color="#183B6B" bg="var(--azul-claro)"/>
              <DoughnutChart name="S.O." value={80} color="#183B6B" bg="var(--azul-claro)"/>
              <DoughnutChart name="ROBÓTICA" value={50} color="#183B6B" bg="var(--azul-claro)"/>
              <DoughnutChart name="WEB" value={94} color="#183B6B" bg="var(--azul-claro)"/>
            </div>
            <h1 className="section-title">PROMEDIOS GENERALES</h1>
            <div className="grid-container">
              <DoughnutChart name="BD" value={75} color="#008198" bg="#A7A7A7"/>
              <DoughnutChart name="S.O." value={60} color="#008198" bg="#A7A7A7"/ >
              <DoughnutChart name="ROBÓTICA" value={59} color="#980000" bg="#A7A7A7"/>
              <DoughnutChart name="WEB" value={90} color="#127621" bg="#A7A7A7"/>
            </div>
          </>
        );
      case "Grupos":
        return <Grupos setView={setCurrentView} />;
      case "Interfaces":
        return <Interfaces />;
      default:
        return <h1>Vista no encontrada</h1>;
    }
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="main-container">
        <div className="menu-container">
          <Menu setView={setCurrentView} />
        </div>
        <div className="content-container">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Dashboard;
