import DoughnutChart from "../components/DoughnutChart/DoughnutChart";
import Header from "../components/header/header";
import Table from "../components/table/table";

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
        <br />
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
                width: '50%'
            }
        }>
        </div>
        <div
            style={{
                width: '1000px',
                height: '1000px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'

            }}
        >
            <DoughnutChart data={[
                { name: 'A', value: 10, color: 'red' },
                { name: 'B', value: 20, color: 'blue' },
                { name: 'C', value: 30, color: 'green' },
                { name: 'D', value: 40, color: 'orange' }
            ]} />
        </div>


    </div>
  );
}

export default Dashboard;
