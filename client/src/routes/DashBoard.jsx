import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { TextGenerateEffect } from '../components/text-generate-effect';
import { FaVideo, FaBolt, FaRecycle } from 'react-icons/fa';  // Icons for recommendations

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
    const [emissionData, setEmissionData] = useState({});
    const [internetUsageData, setInternetUsageData] = useState({
        Netflix: 0.4,
        YouTube: 0.2,
        Amazon: 0.3,
        facebook: 0.2,
        totalUsage: 1.1, // Example hardcoded total usage
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch emission data
        axios
            .post('http://localhost:3000/api/emissions', {
                energy: 10,
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
        const sites = Object.keys(emissionData);
        const emissions = sites.map(site => emissionData[site]);

        return {
            labels: sites,
            datasets: [
                {
                    label: 'Carbon Emissions (kg CO2)',
                    data: emissions,
                    backgroundColor: '#4CAF50',
                    borderColor: '#4CAF50',
                    borderWidth: 2,
                },
            ],
        };
    };

    const getInternetUsageChartData = () => {
        const sites = Object.keys(internetUsageData).filter(site => site !== 'totalUsage');
        const usage = sites.map(site => internetUsageData[site]);

        if (usage.length === 0) {
            return {
                labels: ['No Data Available'],
                datasets: [
                    {
                        data: [1],
                        backgroundColor: ['#D3D3D3'],
                        borderColor: '#fff',
                        borderWidth: 2,
                    },
                ],
            };
        }

        const siteColors = {
            Netflix: '#E50914',
            YouTube: '#FFFFFF',
            Amazon: '#000000',
            facebook: '#1877F2',
        };

        const backgroundColors = sites.map(site => siteColors[site] || '#FF9800');

        return {
            labels: sites,
            datasets: [
                {
                    label: 'Internet Usage (GB)',
                    data: usage,
                    backgroundColor: backgroundColors,
                    borderColor: '#fff',
                    borderWidth: 2,
                },
            ],
        };
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-2xl font-bold text-white">Loading...</div>
            </div>
        );
    }

    return (
        <div className="p-4 sm:p-6 md:p-8 min-h-screen text-white">
            <div className="text-center mb-12">
                <TextGenerateEffect
                    words="Carbon Emissions Dashboard"
                    className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-green-500"
                />
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-green-950 bg-opacity-70 shadow-lg rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold text-gray-300">Total Carbon Emissions</h3>
                    <p className="text-2xl font-bold text-green-400">{emissionData.totalEmissions} kg CO2</p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-green-950 bg-opacity-70 shadow-lg rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold text-gray-300">Energy Consumed</h3>
                    <p className="text-2xl font-bold text-green-400">{emissionData.energyConsumed} kWh</p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-green-950 bg-opacity-70 shadow-lg rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold text-gray-300">Total Internet Usage</h3>
                    <p className="text-2xl font-bold text-orange-400">{internetUsageData.totalUsage} GB</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mb-12">
                <div className="w-full lg:w-1/2 bg-green-950 bg-opacity-70 shadow-lg rounded-lg p-4 sm:p-6">
                    <div className="h-[300px] sm:h-[400px]">
                        <Bar
                            data={getEmissionChartData()}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                            }}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 bg-green-950 bg-opacity-70 shadow-lg rounded-lg p-4 sm:p-6">
                    <div className="h-[300px] sm:h-[400px]">
                        <Doughnut
                            data={getInternetUsageChartData()}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-green-950 bg-opacity-70 shadow-lg rounded-lg p-4 sm:p-6">
                <h3 className="text-xl font-semibold text-gray-300 mb-4">Recommendations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-green-600 rounded-lg p-6 shadow-lg flex items-start space-x-4">
                        <FaVideo className="text-3xl text-white" />
                        <div>
                            <h4 className="text-xl font-semibold text-white">Reduce Streaming Quality</h4>
                            <p className="text-gray-300">Lower the video quality when possible to save bandwidth and reduce emissions.</p>
                        </div>
                    </div>
                    <div className="bg-yellow-600 rounded-lg p-6 shadow-lg flex items-start space-x-4">
                        <FaBolt className="text-3xl text-white" />
                        <div>
                            <h4 className="text-xl font-semibold text-white">Use Energy-Efficient Devices</h4>
                            <p className="text-gray-300">Switch to energy-efficient devices to lower your electricity consumption and carbon footprint.</p>
                        </div>
                    </div>
                    <div className="bg-blue-600 rounded-lg p-6 shadow-lg flex items-start space-x-4">
                        <FaRecycle className="text-3xl text-white" />
                        <div>
                            <h4 className="text-xl font-semibold text-white">Opt for Green Energy</h4>
                            <p className="text-gray-300">Choose services that run on renewable energy to reduce the environmental impact of your internet usage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

