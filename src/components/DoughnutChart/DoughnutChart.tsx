// DoughnutChart.tsx
import React from 'react';
import './DoughnutChart.css';

interface DataItem {
  name: string;
  value: number;
  color: string;
}

interface DoughnutChartProps {
  data: DataItem[];
  size?: number;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
}) => {

  return (
    <div className='container'>
         <p>Donut Chart</p>
        <svg xmlns="http://www.w3.org/2000/svg">
        <circle  cx="400" cy="400" className="donut" r="300" stroke-width="60" stroke="#ff8c69" fill="none"/>
        <circle  cx="400" cy="400" className="donut" r="300" stroke-width="60" stroke="#ffff00" fill="none"/>
        <circle  cx="400" cy="400" className="donut" r="300" stroke-width="60" stroke="#008000" fill="none"/>
        <circle  cx="400" cy="400" className="donut" r="300" stroke-width="60" stroke="#87CEFA" fill="none"/>
        </svg>
    </div>
  );
};

export default DoughnutChart;
