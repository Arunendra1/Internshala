import { FaLongArrowAltUp } from "react-icons/fa";
import React, { useState } from 'react';
import './leaderboard.css';

const Leaderboard = () => {
  const [sortOption, setSortOption] = useState('name'); // Default sort option
  const [filterOption, setFilterOption] = useState('all'); // Default filter option
  const [data, setData] = useState([
    { name: 'Selling with re entr', Calmar: 3.96, Overall: 381845, Avg: 319.54, Win: 0.65, Price: null, Action: 'View' },
    { name: 'strategy_name', Calmar: 3.62, Overall: 268872.5, Avg: 216.31, Win: 0.64, Price: 500, Action: 'Buy' },
    { name: 'Based on premium and', Calmar: 3.42, Overall: 255425, Avg: 208.51, Win: 0.64, Price: null, Action: 'View' },
    { name: 'strategy_name', Calmar: 3.22, Overall: 370845, Avg: 303.47, Win: 0.65, Price: null, Action: 'View' },
    { name: 'strategy_name', Calmar: 3.22, Overall: 370845, Avg: 303.47, Win: 0.65, Price: null, Action: 'View' },
    { name: 'Based on premium wit', Calmar: 3.01, Overall: 135980, Avg: 185.77, Win: 0.65, Price: null, Action: 'View' },
    { name: 'strategy_name', Calmar: 2.76, Overall: 267867.5, Avg: 218.49, Win: 0.6, Price: null, Action: 'view' },
    { name: 'Wait and trade_Save', Calmar: 2.62, Overall: 178252.5, Avg: 161.9, Win: 0.63, Price: null, Action: 'View' },
    { name: 'iron condor', Calmar: 2.44, Overall: 176420, Avg: 137.51, Win: 0.65, Price: null, Action: 'View' },
    { name: 'strategy_name', Calmar: 2.04, Overall: 244555, Avg: 198.66, Win: 0.35, Price: null, Action: 'View' },
  ]);

  const handleSortChange = (e) => {
    const { value } = e.target;
    setSortOption(value);
  };

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilterOption(value);
  };

  const sortedData = [...data].sort((a, b) => {
    switch (sortOption) {
      case 'calmar':
        return b.Calmar - a.Calmar;
      case 'overall':
        return b.Overall - a.Overall;
      case 'avg':
        return b.Avg - a.Avg;
      case 'win':
        return b.Win - a.Win;
      case 'price':
        return (b.Price || 0) - (a.Price || 0);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const filteredData = sortedData.filter(player => {
    if (filterOption === 'all') return true;
    return Math.abs(player.Win - parseFloat(filterOption)) < 0.05;
  });

  return (
    <div className="leaderboard">
      <h1 className="board">LeaderBoards</h1>
      <div className="Backtest">
        <div className="Basic">Basic Basket</div>
        <div className="Slippage">
          <label htmlFor="Slippage">Slippage</label>
          <select>
            <option value="0">0%</option>
            <option value="0.5">0.5%</option>
            <option value="1">1%</option>
          </select>
        </div>
        <div className="Controls">
          <div className="SortOptions">
            <label htmlFor="SortOptions">Sort By: </label>
            <select id="SortOptions" value={sortOption} onChange={handleSortChange}>
              <option value="name">Name</option>
              <option value="calmar">Calmar Ratio</option>
              <option value="overall">Overall Profit</option>
              <option value="avg">Avg. Daily Profit</option>
              <option value="win">Win% (Day)</option>
              <option value="price">Price (Rs)</option>
            </select>
          </div>
          <div className="FilterOptions">
            <label htmlFor="FilterOptions">Filter By Win%: </label>
            <select id="FilterOptions" value={filterOption} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="0.6">60%</option>
              <option value="0.65">65%</option>
              <option value="0.7">70%</option>
            </select>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Calmar Ratio</th>
              <th>Overall Profit</th>
              <th>Avg. Daily Profit</th>
              <th>Win% (Day)</th>
              <th>Price (Rs)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((player, index) => (
              <tr key={index}>
                <td data-label="Rank">{index + 1}</td>
                <td data-label="Name">{player.name}</td>
                <td data-label="Calmar Ratio"><FaLongArrowAltUp />{player.Calmar}</td>
                <td data-label="Overall Profit">{player.Overall}</td>
                <td data-label="Avg. Daily Profit">{player.Avg}</td>
                <td data-label="Win% (Day)">{player.Win}</td>
                <td data-label="Price (Rs)">{player.Price !== null && player.Price !== undefined ? player.Price : '-'}</td>
                <td data-label="Action"><a href="#">{player.Action}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
