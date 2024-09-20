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
    <div className="flex flex-col lg:flex-row items-center justify-center py-24 px-6 lg:px-10 space-y-10 lg:space-y-0">
      {/* Left Side: Color Boxes */}
      <div className="flex flex-wrap items-center lg:w-1/2 ml-14 md:ml-20 w-full">
        {/* Large Color Box */}
        <div
          className={`w-56 h-56 md:w-72 md:h-72 rounded-2xl ${selectedColor} transition-colors duration-500`}
        ></div>

        {/* Left Side: Small Color Boxes */}
        <div className="flex flex-col items-start justify-center lg:items-start lg:w-1/2 space-y-4 md:ml-12 ml-4">
          <div className="flex flex-col justify-center gap-4">
            {colorsVertical.map((color) => (
              <div
                key={color.id}
                className={`w-16 md:w-24 h-16 md:h-24 rounded-lg cursor-pointer ${
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
              className={`w-16 md:w-24 h-16 md:h-24 rounded-lg cursor-pointer ${
                selectedBoxId === color.id ? 'border-4' : ''
              } border-black ${color.color}`}
              onClick={() => handleClick(color.id, color.color)}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Side: Text */}
      <div className="lg:w-1/2 text-start lg:text-left md:px-10 py-5 ml-6 md:ml-0">
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
