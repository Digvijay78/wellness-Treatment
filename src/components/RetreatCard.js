import React from 'react';

const RetreatCard = ({ retreat }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={retreat.image} alt={retreat.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{retreat.title}</h3>
        <p>{retreat.description}</p>
        <p>Date: {new Date(retreat.date * 1000).toLocaleDateString()}</p>
        <p>Location: {retreat.location}</p>
        <p>Price: ${retreat.price}</p>
      </div>
    </div>
  );
};

export default RetreatCard;
