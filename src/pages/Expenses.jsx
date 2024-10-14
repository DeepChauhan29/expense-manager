import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

const Expenses = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, date: '2023-05-15', category: 'Food', amount: 25.50, description: 'Lunch with colleagues' },
    { id: 2, date: '2023-05-14', category: 'Transportation', amount: 30.00, description: 'Uber ride' },
    { id: 3, date: '2023-05-13', category: 'Entertainment', amount: 50.00, description: 'Movie tickets' },
  ]);

  const [newExpense, setNewExpense] = useState({ date: '', category: '', amount: '', description: '' });

  const handleInputChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: expenses.length + 1,
      ...newExpense,
      amount: parseFloat(newExpense.amount),
    };
    setExpenses([expense, ...expenses]);
    setNewExpense({ date: '', category: '', amount: '', description: '' });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Expenses</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="date"
            name="date"
            value={newExpense.date}
            onChange={handleInputChange}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="category"
            value={newExpense.category}
            onChange={handleInputChange}
            placeholder="Category"
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="number"
            name="amount"
            value={newExpense.amount}
            onChange={handleInputChange}
            placeholder="Amount"
            className="border rounded px-3 py-2"
            step="0.01"
            required
          />
          <input
            type="text"
            name="description"
            value={newExpense.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="border rounded px-3 py-2"
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 flex items-center">
          <Plus size={20} className="mr-2" />
          Add Expense
        </button>
      </form>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td className="px-6 py-4 whitespace-nowrap">{expense.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{expense.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">${expense.amount.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{expense.description}</td>
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

export default Expenses;