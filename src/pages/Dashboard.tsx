import Button from "../components/Button/Button";
import DoughnutChart from "../components/DoughnutChart/DoughnutChart";
import Header from "../components/header/header";
import Table from "../components/table/table";
import Menu from "../components/Menu/menu";

const headers = ['Header 1', 'Header 2', 'Header 3'];

const data = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ];

function Dashboard() {
  return (
    <div>
      <Header />
      <Menu />

    </div>
  );
}

export default Dashboard;
