import React from "react";
import "./SimpleBarChart.css";

const SimpleBarChart = ({ data, equipmentData }) => {
  // Convert data object into an array of objects for easier handling
  const dataArray = Object.entries(data).map(([id, value]) => ({
    id: id,
    value: value,
    name: equipmentData[id]?.title || "Null", // Get equipment name or 'Null' if ID not found
  }));

  // Find the maximum value in the data array for scaling
  const maxValue = Math.max(...dataArray.map((item) => item.value));

  return (
    <div className="bar-chart">
      {dataArray.map((item) => (
        <div
          key={item.id}
          className="bar"
          style={{ height: `${(item.value / maxValue) * 100}%` }}
        >
          <div>{item.value}</div>
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SimpleBarChart;
