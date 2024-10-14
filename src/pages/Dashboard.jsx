import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Wallet, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const expenseData = [
    { name: 'Housing', value: 1200 },
    { name: 'Food', value: 400 },
    { name: 'Transportation', value: 200 },
    { name: 'Entertainment', value: 150 },
    { name: 'Others', value: 250 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Balance" value="$5,240" icon={<Wallet />} color="bg-blue-500" />
        <StatCard title="Income" value="$3,500" icon={<TrendingUp />} color="bg-green-500" />
        <StatCard title="Expenses" value="$2,260" icon={<TrendingDown />} color="bg-red-500" />
        <StatCard title="Savings" value="$1,240" icon={<DollarSign />} color="bg-yellow-500" />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Expense Breakdown</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <div className={`${color} text-white p-6 rounded-lg shadow-md`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm opacity-80">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      <div className="text-4xl opacity-80">{icon}</div>
    </div>
  </div>
);

export default Dashboard;