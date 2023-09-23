import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "Category 1", value: 10 },
  { name: "Category 2", value: 15 },
  { name: "Category 3", value: 8 },
  { name: "Category 4", value: 20 },
  { name: "Category 5", value: 12 },
];

const MyBarChart = () => {
  return (
    <BarChart width={600} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default MyBarChart;
