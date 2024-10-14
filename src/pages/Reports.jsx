import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Download } from 'lucide-react';

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('monthly');

  const monthlyData = [
    { name: 'Jan', income: 3000, expenses: 2500 },
    { name: 'Feb', income: 3200, expenses: 2700 },
    { name: 'Mar', income: 3100, expenses: 2600 },
    { name: 'Apr', income: 3500, expenses: 2800 },
    { name: 'May', income: 3300, expenses: 2750 },
    { name: 'Jun', income: 3600, expenses: 3000 },
  ];

  const categoryData = [
    { name: 'Housing', value: 1200 },
    { name: 'Food', value: 500 },
    { name: 'Transportation', value: 300 },
    { name: 'Entertainment', value: 200 },
    { name: 'Others', value: 300 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Reports</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div className="space-x-2">
            <button
              onClick={() => setSelectedReport('monthly')}
              className={`px-4 py-2 rounded ${selectedReport === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Monthly Overview
            </button>
            <button
              onClick={() => setSelectedReport('category')}
              className={`px-4 py-2 rounded ${selectedReport === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Category Breakdown
            </button>
          </div>
          <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
            <Download size={20} className="mr-2" />
            Export Report
          </button>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            {selectedReport === 'monthly' ? (
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
              </LineChart>
            ) : (
              <LineChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Generate Custom Report</h2>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <div className="relative">
                <input type="date" className="w-full border rounded px-3 py-2 pr-10" />
                <Calendar className="absolute right-3 top-2 text-gray-400" size={20} />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <div className="relative">
                <input type="date" className="w-full border rounded px-3 py-2 pr-10" />
                <Calendar className="absolute right-3 top-2 text-gray-400" size={20} />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
            <select className="w-full border rounded px-3 py-2">
              <option>Income vs Expenses</option>
              <option>Category Breakdown</option>
              <option>Savings Analysis</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Generate Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reports;