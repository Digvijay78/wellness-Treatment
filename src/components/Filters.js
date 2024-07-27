import React from 'react';

const Filters = ({ onFilterChange }) => {
  const handleDateChange = (e) => {
    onFilterChange({ date: e.target.value });
  };

  const handleTypeChange = (e) => {
    onFilterChange({ type: e.target.value });
  };

  return (
    <div className="flex justify-between mb-4">
      <select onChange={handleDateChange} className="p-2 border rounded">
        <option value="">Filter by Date</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
      <select onChange={handleTypeChange} className="p-2 border rounded">
        <option value="">Filter by Type</option>
        <option value="Signature">Signature</option>
        <option value="Standalone">Standalone</option>
      </select>
    </div>
  );
};

export default Filters;
