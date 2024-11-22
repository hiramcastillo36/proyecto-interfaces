// DoughnutChart.tsx
import React from 'react';
import './DoughnutChart.css';

interface DoughnutChartProps {
    name: string;
    value: number;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ name, value }) => {
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
                marginBottom: '80px'
            }
        }>
            <p className='title'>
                {name}
            </p>
        </div>
    <div className='container'>
        <div className='containerChart'>
            <p>
                {value}%
            </p>
            <svg xmlns="http://www.w3.org/2000/svg">
            <circle  cx="150" cy="150" className="donut" r="80" stroke-width="10" stroke="#183B6B" fill="none"/>
            <circle  cx="150" cy="150" className="donut" r="80" stroke-width="10" stroke="#183B6B" fill="none"/>
            <circle  cx="150" cy="150" className="donut" r="80" stroke-width="10" stroke="#00B2E2" fill="none"/>
            </svg>
        </div>
    </div>
    </div>
  );
};

export default DoughnutChart;
