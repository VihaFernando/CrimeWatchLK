import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './AdminInterface.css';
import AdminHeader from './AdminHeader';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminInterface = () => {
  const data = {
    labels: [
      'Financial Fraud',
      'Unauthorized Access',
      'Malware Attacks',
      'Online Harassment and Abuse',
      'Intellectual Property Theft',
      'Cyber Espionage',
      'Cyber Terrorism',
      'Infringement of Privacy',
      'Social Engineering',
      'Other Cybercrimes'
    ],
    datasets: [
      {
        data: [65, 8, 90, 81, 56, 40, 10, 55, 40, 56],
        backgroundColor: [
          '#36A2EB',
          '#00FF00',
          '#FFCE56',
          '#990000',
          '#34495E',
          '#5DADE2',
          '#AF601A',
          '#9966FF',
          '#CCCC99',
          '#D3D3D3'
        ],
        hoverBackgroundColor: [
          '#36A2EB',
          '#00FF00',
          '#FFCE56',
          '#990000',
          '#34495E',
          '#5DADE2',
          '#AF601A',
          '#9966FF',
          '#CCCC99',
          '#D3D3D3'
        ]
      }
    ]
  };

  const legendOptions = {
    display: true,
    position: 'bottom', // Adjust the position as needed
    labels: {
      padding: 20, // Padding between legend and chart
      boxWidth: 15, // Width of each legend box
      usePointStyle: true // Use custom marker instead of colored square
    }
  };
  const chartOptions = {
    plugins: {
      legend: legendOptions
    },
    responsive: true,
    maintainAspectRatio: false // Allow the chart to adjust size based on container
  };

  return (
    <div className="admin-interface">
      <AdminHeader />
      <div className="content">
        <div className="sidebar">
          <div className="reported-cases-title">REPORTED CASES</div>
          <ul className="reported-cases-list">
            <li>Financial Fraud <span className="arrow-icon"><i className="fas fa-chevron-right"></i></span></li>
            <li>Unauthorized Access <span className="arrow-icon"><i className="fas fa-chevron-right"></i></span></li>
            <li>Malware Attacks <span className="arrow-icon"><i className="fas fa-chevron-right"></i></span></li>
            <li>Online Harassment and Abuse <span className="arrow-icon"><i className="fas fa-chevron-right"></i></span></li>
            <li>Intellectual Property Theft <span className="arrow-icon"><i className="fas fa-chevron-right"></i></span></li>
            <li>Cyber Espionage <span className="arrow-icon"><i className="fas fa-chevron-right"></i></span></li>
            <li>Cyber Terrorism <span className="arrow-icon"><i className="fas fa-chevron-right"></i></span></li>
            <li>Infringement of Privacy <span className="arrow-icon"><i className="fas fa-chevron-right"></i></span></li>
            <li>Social Engineering <span className="arrow-icon"><i className="fas fa-chevron-right"></i></span></li>
            <li>Other Cybercrimes <span className="arrow-icon"><i className="fas fa-chevron-right"></i></span></li>
          </ul>
        </div>
        <div className="main-content">
          <div className="main">
            <div className="top-info">
              <div className="total-cases">
                <div>Total Cases in Last 30 Days</div>
                <div className="total-number">145</div>
              </div>
              <div className="status">
                <div className="assigned">
                  <h2>Assigned</h2>
                  <h3 className="assigned-number">145</h3>
                </div>
                <div className="pending">
                  <h2>Pending</h2>
                  <h3 className="pending-number">145</h3>
                </div>
              </div>
            </div>
            <div className="locations">
              <div className="locations-title">Locations with Most Reported Cases</div>
              <div className="location"><span>1. Colombo</span><span className="location-number">10 Cases</span></div>
              <div className="location"><span>2. Kandy</span><span className="location-number">6 Cases</span></div>
              <div className="location"><span>3. Galle</span><span className="location-number">5 Cases</span></div>
            </div>
          </div>
          <div className="chart">
    <Pie data={data} options={chartOptions} />
  </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInterface;
