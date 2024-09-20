import React from 'react';

interface CardProps {
  title: string;
  price: string;
  currentSlide: string;
  totalSlides: string;
  avatars: string[];
  bgColor: string; 
  buttonColor1: string; 
  buttonColor2: string; 
  buttonTesxtColorOne: string;
  buttonTesxtColorTwo: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  price, 
  currentSlide, 
  totalSlides, 
  avatars,
  bgColor,
  buttonColor1,
  buttonColor2,
  buttonTesxtColorOne,
  buttonTesxtColorTwo
}) => {
  return (
    <div className="max-w-sm w-full p-4 bg-white shadow-2xl rounded-3xl flex flex-col space-y-4 md:mb-0 mb-8">
      {/* Image/Content placeholder */}
      <div className={`${bgColor} rounded-lg h-48`}></div>

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
        <button className={`px-4 py-2 ${buttonColor1} ${buttonTesxtColorOne} rounded-full text-sm shadow focus:outline-none focus:ring-2 focus:ring-opacity-50 transition`}>
          Button 1
        </button>
        <button className={`px-4 py-2 ${buttonColor2}  ${buttonTesxtColorTwo} rounded-full text-sm shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition`}>
          Button 2
        </button>
      </div>
    </div>
  );
};

export default Card;
