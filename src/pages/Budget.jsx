import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, Edit2, Trash2 } from 'lucide-react';

const Budget = () => {
  const [budgets, setBudgets] = useState([
    { id: 1, category: 'Housing', budget: 1200, spent: 1100 },
    { id: 2, category: 'Food', budget: 500, spent: 450 },
    { id: 3, category: 'Transportation', budget: 300, spent: 280 },
    { id: 4, category: 'Entertainment', budget: 200, spent: 180 },
    { id: 5, category: 'Others', budget: 300, spent: 250 },
  ]);

  const [newBudget, setNewBudget] = useState({ category: '', budget: '' });

  const handleInputChange = (e) => {
    setNewBudget({ ...newBudget, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const budget = {
      id: budgets.length + 1,
      ...newBudget,
      budget: parseFloat(newBudget.budget),
      spent: 0,
    };
    setBudgets([...budgets, budget]);
    setNewBudget({ category: '', budget: '' });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Budget</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Budget Overview</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={budgets}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="budget" fill="#8884d8" name="Budget" />
              <Bar dataKey="spent" fill="#82ca9d" name="Spent" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="category"
            value={newBudget.category}
            onChange={handleInputChange}
            placeholder="Category"
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="number"
            name="budget"
            value={newBudget.budget}
            onChange={handleInputChange}
            placeholder="Budget Amount"
            className="border rounded px-3 py-2"
            step="0.01"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 flex items-center justify-center">
            <DollarSign size={20} className="mr-2" />
            Add Budget
          </button>
        </div>
      </form>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spent</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remaining</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {budgets.map((budget) => (
              <tr key={budget.id}>
                <td className="px-6 py-4 whitespace-nowrap">{budget.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">${budget.budget.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">${budget.spent.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">${(budget.budget - budget.spent).toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Budget;