'use client'

import { useState } from 'react';

// Define the color arrays
const colors = [
  { id: 1, color: 'bg-[#2E4E3E]' },
  { id: 2, color: 'bg-[#26DBDB]' },
  { id: 3, color: 'bg-[#B126DB]' },
  { id: 4, color: 'bg-[#DB4126]' },
];

const colorsVertical = [
  { id: 5, color: 'bg-[#0FA958]' },
  { id: 6, color: 'bg-[#BE92FB]' },
  { id: 7, color: 'bg-[#FFACAC]' },
];

const ColorChangingComponent = () => {
  // State to manage the large box color
  const [selectedColor, setSelectedColor] = useState('bg-purple-600');
  // State to track the currently selected box ID
  const [selectedBoxId, setSelectedBoxId] = useState<number | null>(null);

  // Handle the click event
  const handleClick = (id: number, color: string) => {
    setSelectedColor(color);
    setSelectedBoxId(id); // Set the selected box ID to show the border
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-10 px-6 lg:px-56 space-y-10 lg:space-y-0">
      {/* Left Side: Color Boxes */}
      <div className="flex flex-wrap items-center lg:w-1/2">
        {/* Large Color Box */}
        <div
          className={`w-72 h-72 rounded-2xl ${selectedColor} transition-colors duration-500`}
        ></div>

        {/* Left Side: Small Color Boxes */}
        <div className="flex lg:flex-col items-start justify-center lg:items-start lg:w-1/2 space-y-4 ml-12">
          <div className="flex lg:flex-col justify-center gap-4">
            {colorsVertical.map((color) => (
              <div
                key={color.id}
                className={`w-24 h-24 rounded-lg cursor-pointer ${
                  selectedBoxId === color.id ? 'border-4' : ''
                } border-black ${color.color}`}
                onClick={() => handleClick(color.id, color.color)}
              ></div>
            ))}
          </div>
        </div>

        {/* Small Color Boxes */}
        <div className="flex flex-wrap justify-start gap-4 mt-4">
          {colors.map((color) => (
            <div
              key={color.id}
              className={`w-24 h-24 rounded-lg cursor-pointer ${
                selectedBoxId === color.id ? 'border-4' : ''
              } border-black ${color.color}`}
              onClick={() => handleClick(color.id, color.color)}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Side: Text */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl font-bold mb-4">Collection Featured</h2>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum sunt in culpa.
        </p>
      </div>
    </div>
  );
};

export default ColorChangingComponent;
