import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  CategoryScale,
  Chart as Chartjs,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chartjs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TEMP_DATA_1 = [0, 2, 1, 4, 7, 0, 3];
const TEMP_DATA_2 = [1, 3, 0, 2, 5, 2, 0, 1];

const data = {
  datasets: [
    {
      label: 'Solves',
      data: TEMP_DATA_1,
      fill: false,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Problems',
      data: TEMP_DATA_2,
      fill: false,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Student Analysis',
      font: {
        size: 24,
      },
    },
  },
  scales: {
    yAxes: {
      ticks: {
        beginAtZero: true,
        precision: 0,
      },
    },
  },
};

const StudentChart = () => (
  <div className="container chart">
    <Line className="my-5" height={100} width={'auto'} data={data} options={options} />
  </div>
);

export default StudentChart;
