"use client";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

interface barChartProps {
    month: string[];
    calls: number[];
  title:string;
}

export default function BarChart({ month, calls,title }: barChartProps) {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  const data: any = {
    labels: month,
    datasets: [
      {
        label: "Departments",
        data: calls,
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
          "rgba(153, 102, 255)",
          "rgba(201, 203, 207)",
        ],
        // borderColor: [
        //   "rgb(255, 99, 132)",
        //   "rgb(255, 159, 64)",
        //   "rgb(255, 205, 86)",
        //   "rgb(75, 192, 192)",
        //   "rgb(54, 162, 235)",
        //   "rgb(153, 102, 255)",
        //   "rgb(201, 203, 207)",
        // ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-full">
      <Bar
        data={data}
        options={{
          responsive: true,
          plugins: {
     
            title: {
              display: true,
              text: title,
            },
          },
        }}
      />
    </div>
  );
}
