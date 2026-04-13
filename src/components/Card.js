import React from 'react';

const Card = ({ title, description, status }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border-l-4 border-blue-500">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className={`px-3 py-1 rounded text-sm ${
        status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
      }`}>
        {status}
      </span>
    </div>
  );
};

export default Card;