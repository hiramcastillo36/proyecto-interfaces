import Button from "../components/Button/Button";
import DoughnutChart from "../components/DoughnutChart/DoughnutChart";
import Header from "../components/header/header";
import Menu from "../components/Menu/menu";
import './Dashboard.css'; // Asegúrate de tener los estilos actualizados aquí

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <Menu />
      {/* Sección de Avance de Cursos */}
      <h1 className="section-title">AVANCE DE CURSOS</h1>
      <div className="grid-container">
        <DoughnutChart name="BD" value={65} />
        <DoughnutChart name="S.O." value={80} />
        <DoughnutChart name="ROBÓTICA" value={50} />
        <DoughnutChart name="WEB" value={94} />
      </div>

      {/* Sección de Promedios Generales */}
      <h1 className="section-title">PROMEDIOS GENERALES</h1>
      <div className="grid-container">
        <DoughnutChart name="BD" value={75} />
        <DoughnutChart name="S.O." value={60} />
        <DoughnutChart name="ROBÓTICA" value={59} />
        <DoughnutChart name="WEB" value={90} />
      </div>
    </div>
  );
}

export default Dashboard;
