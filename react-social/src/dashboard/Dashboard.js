// Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="dashboard-buttons">
        {Array.from(Array(10).keys()).map((number) => (
          <button key={number}>Feature {number + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
