import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale } from "chart.js/auto";

Chart.register(CategoryScale);
export default function UserData() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Active Vendors",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "lightgreen",
        borderColor: "",
      },
      {
        label: "Inactive Vendors",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        backgroundColor: "gray",
        borderColor: "#742774",
      },
    ],
  };

  return (
    <div className="h-[30rem] flex justify-center items-center w-full bg-slate-300">
      <Bar data={data} />
    </div>
  );
}
