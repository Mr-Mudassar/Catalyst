import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./chart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ graphData, mode }) => {
  const data =
    mode === "RedemptionsGraph"
      ? {
          labels: graphData?.map((item) => item?.day ?? item?.month),
          datasets: [
            {
              label: "Sent but not redeemed",
              data: graphData?.map((item) => item?.notRedeemedCount),
              backgroundColor: "rgb(0, 102, 51)", // Greenish color
            },
            {
              label: "Redeemed",
              data: graphData?.map((item) => item?.redeemedCount),
              backgroundColor: "rgb(221, 173, 38)", // Yellowish color
            },
          ],
        }
      : {
          labels: graphData?.map((item) => item?.state ?? item?.shelterName),
          datasets: [
            {
              label: "Adopters Count",
              data: graphData?.map((item) => item?.count),
              backgroundColor: "rgb(0, 102, 51)",
            },
          ],
        };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Redemptions",
        color: "#003000",
        fontSize: "200px",
        fontWeight: "700",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          // stepSize: 0,
          callback: function (value) {
            return value ;
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Chart;
