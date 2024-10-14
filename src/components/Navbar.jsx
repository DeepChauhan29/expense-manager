import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, PieChart, BarChart2, TrendingUp } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="gradient-bg text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <DollarSign className="mr-2" />
            ExpenseTrack
          </Link>
          <div className="flex space-x-4">
            <NavLink to="/" icon={<PieChart size={20} />} text="Dashboard" />
            <NavLink to="/expenses" icon={<BarChart2 size={20} />} text="Expenses" />
            <NavLink to="/budget" icon={<DollarSign size={20} />} text="Budget" />
            <NavLink to="/reports" icon={<TrendingUp size={20} />} text="Reports" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded transition duration-300">
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

export default Navbar;