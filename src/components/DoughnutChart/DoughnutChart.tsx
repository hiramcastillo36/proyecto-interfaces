// DoughnutChart.tsx
import React from 'react';
import './DoughnutChart.css';

interface DoughnutChartProps {
    name: string;
    value: number;
    color? : string;
    bg? : string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ name, value, color, bg }) => {
  return (
    <div
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}
    className='principal'
    >
    <div style={
            {
                display: 'flex',
                justifyContent: 'center',
                width: '50%',
                marginBottom: '30px'
            }
        }>
            <p className='title'>
                {name}
            </p>
        </div>
    <div className='container'>
        <div className='containerChart'>
            <p className='textChart'>
                {value}%
            </p>
            <svg xmlns="http://www.w3.org/2000/svg">
            <circle  cx="150" cy="150" className="donut" r="80" strokeWidth="10" stroke={color} fill="none"/>
            <circle  cx="150" cy="150" className="donut" r="80" strokeWidth="10" stroke="var(--azul-oscuro)" fill="none"/>
            <circle  cx="150" cy="150" className="donut" r="80" strokeWidth="10" stroke={bg} fill="none"/>
            </svg>
        </div>
    </div>
    </div>
  );
};

export default DoughnutChart;
