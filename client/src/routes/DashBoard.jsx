import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TextGenerateEffect } from '../components/text-generate-effect';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const [emissionData, setEmissionData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch emissions data from the backend
        axios.post('http://localhost:3000/api/emissions', {
            energy: 10,  // Default energy value (this can be dynamic)
            unit: 'kWh',
        })
            .then(response => {
                setEmissionData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching emissions data:', error);
                setLoading(false);
            });
    }, []);

    const getEmissionChartData = () => {
        // Get site names and their emissions
        const sites = Object.keys(emissionData);
        const emissions = sites.map(site => emissionData[site]);

        return {
            labels: sites,
            datasets: [{
                label: 'Carbon Emissions (kg CO2)',
                data: emissions,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',  // Light green color
                borderColor: 'rgba(75, 192, 192, 1)',      // Darker green color
                borderWidth: 2,
            }],
        };
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <div className="text-2xl font-bold text-white">Loading...</div>
            </div>
        );
    }

    return (
        <div className="p-8 min-h-screen text-white">
            {/* Header with animated text */}
            <div className="text-center mb-8">
                <TextGenerateEffect
                    words="Carbon Emissions Dashboard"
                    className="text-3xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold text-green-500"
                />
            </div>

            {/* Centered Emission Cards Section */}
            <div className="flex justify-center items-center mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full sm:w-auto">
                    {/* Total Carbon Emissions Card */}
                    <div className="bg-gray-800 shadow-lg rounded-lg p-4 sm:p-6 flex flex-col justify-center items-center hover:shadow-2xl transition-all">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-300">Total Carbon Emissions</h3>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-400">{emissionData.totalEmissions} kg CO2</p>
                    </div>

                    {/* Energy Consumed Card */}
                    <div className="bg-gray-800 shadow-lg rounded-lg p-4 sm:p-6 flex flex-col justify-center items-center hover:shadow-2xl transition-all">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-300">Energy Consumed</h3>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-400">{emissionData.energyConsumed} kWh</p>
                    </div>
                </div>
            </div>


            {/* Bar Chart Section */}
            <div className="max-w-full sm:max-w-4xl mx-auto shadow-lg rounded-lg p-6 bg-gray-800">
                <div className="w-full" style={{ height: '400px', maxHeight: '60vh' }}>
                    <Bar
                        data={getEmissionChartData()}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false, // Prevents the chart from being squished
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    title: {
                                        display: true,
                                        text: 'Carbon Emissions (kg CO2)',
                                        font: {
                                            size: 16,
                                            weight: 'bold',
                                        },
                                        color: 'white',
                                    },
                                    grid: {
                                        color: 'rgba(255, 255, 255, 0.1)',
                                    },
                                },
                                x: {
                                    grid: {
                                        color: 'rgba(255, 255, 255, 0.1)',
                                    },
                                },
                            },
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Carbon Emissions by Site',
                                    font: {
                                        size: 18,
                                        weight: 'bold',
                                    },
                                    color: 'white',
                                },
                                legend: {
                                    position: 'top',
                                    labels: {
                                        font: {
                                            size: 14,
                                        },
                                        color: 'white',
                                    },
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
