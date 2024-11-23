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
<<<<<<< HEAD
      <Menu />
=======
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
            <DoughnutChart
                name='BD'
                value={50}
            />
        </div>

        <Button
  variant="default"
  size="md"
  fullWidth={false}
  isLoading={false}
  disabled={false}
    onClick={() => alert('Button clicked!')}
>
  Submit
</Button>

<Button
  variant="default"
  size="md"
  fullWidth={false}
  isLoading={false}
  disabled={true}
    onClick={() => alert('Button clicked!')}
>
  Submit
</Button>


>>>>>>> origin/hiram

    </div>
  );
}

export default Dashboard;
