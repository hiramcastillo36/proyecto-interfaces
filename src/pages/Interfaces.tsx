import React from "react";
import Table from "../components/table/table"; 
import Button from "../components/Button/Button"; 
import "./Interfaces.css"; 

const Interfaces = () => {
  // Datos de ejemplo para la tabla - ajusta según tus necesidades
  const headers = ["Nombre", "Promedio", "Tareas", "Faltas"];
  const data = [
    ["Ivan Linares", "84", "2/3", "1"],
    ["Marco Saucedo", "90", "3/3", "4"],
    ["Sara Hernández", "62", "1/3", "5"],
    ["Melissa Tovar", "43", "2/3", "6"],
  ];

  return (
    <div className="dashboard">
      <div className="main-container">
        <aside className="menu-container">
          {/* Aquí puedes agregar tu menú lateral si lo necesitas */}
        </aside>
        
        <main className="content-container">
          <h1 className="interfaces-title">Diseño de Interfaces</h1>
          
          <div className="interfaces-buttons">
            <Button 
              variant="default" 
              size="md"
              onClick={() => console.log("Inicio")}
            >
              Nuevo
            </Button>
            
            <Button 
              variant="default" 
              size="md"
              onClick={() => console.log("Tareas")}
            >
              Editar
            </Button>
            
            <Button 
              variant="default" 
              size="md"
              onClick={() => console.log("Calificaciones")}
            >
              Eliminar
            </Button>
            
            <Button 
              variant="default" 
              size="md"
              onClick={() => console.log("Asistencia")}
            >
              Ver Detalles
            </Button>
          </div>

          <Table headers={headers} data={data} />
        </main>
      </div>
    </div>
  );
};

export default Interfaces;