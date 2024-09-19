import React from 'react';

interface CardProps {
  title: string;
  price: string;
  currentSlide: number;
  totalSlides: number;
  avatars: string[];
}

const Card: React.FC<CardProps> = ({ title, price, currentSlide, totalSlides, avatars }) => {
  return (
    <div className="max-w-sm w-full p-4 bg-white shadow-lg rounded-lg flex flex-col space-y-4">
      {/* Image/Content placeholder */}
      <div className="bg-gradient-to-r from-purple-200 to-purple-300 rounded-lg h-48"></div>
      
      {/* Avatars */}
      <div className="flex items-center -space-x-2">
        {avatars.map((avatar, index) => (
          <img 
            key={index} 
            src={avatar} 
            alt={`Avatar ${index}`} 
            className="w-8 h-8 border-2 border-white rounded-full" 
          />
        ))}
      </div>
      
      {/* Title and Price */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-purple-600">{title}</h3>
          <p className="text-sm text-gray-500">{price}</p>
        </div>
        <div className="text-xs text-gray-500">
          {currentSlide} of {totalSlides}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-sm shadow focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition">
          DSVBD
        </button>
        <button className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-400 text-white rounded-full text-sm shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50 transition">
          DSVBD
        </button>
      </div>
    </div>
  );
};

export default Card;
