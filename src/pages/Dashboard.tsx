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
              <DoughnutChart name="BD" value={65} />
              <DoughnutChart name="S.O." value={80} />
              <DoughnutChart name="ROBÓTICA" value={50} />
              <DoughnutChart name="WEB" value={94} />
            </div>

            <h1 className="section-title">PROMEDIOS GENERALES</h1>
            <div className="grid-container">
              <DoughnutChart name="BD" value={75} />
              <DoughnutChart name="S.O." value={60} />
              <DoughnutChart name="ROBÓTICA" value={59} />
              <DoughnutChart name="WEB" value={90} />
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
