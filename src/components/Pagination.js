import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-between mt-4">
      <button onClick={handlePrevious} disabled={currentPage === 1} className="p-2 bg-blue-900 text-white rounded">
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages} className="p-2 bg-blue-900 text-white rounded">
        Next
      </button>
    </div>
  );
};

export default Pagination;
