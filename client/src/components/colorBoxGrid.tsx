"use client";
import React, { useState } from 'react';

const ColorBoxComponent: React.FC = () => {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

  return (
    <div className="flex items-start justify-start space-x-10 w-fit h-fit">
      {/* Box 1 */}
      <div
        onMouseEnter={() => setHoveredBox(1)}
        onMouseLeave={() => setHoveredBox(null)}
        className={`bg-[#C02424] transition-x-[20px] duration-300 justify-between ${
          hoveredBox === 1
            ? 'w-[290px] h-[290px] scale-120 z-10'
            : 'w-[250px] h-[250px] translate-x-[-20px] translate-y-[-10px]'
        }`}
      ></div>

      {/* Box 2 */}
      <div
        onMouseEnter={() => setHoveredBox(2)}
        onMouseLeave={() => setHoveredBox(null)}
        className={`bg-[#146FE8] transition-all duration-300 justify-between ${
          hoveredBox === 2
            ? 'w-[270px] h-[270px] scale-110 z-10'
            : 'w-[220px] h-[220px] translate-y-[5px] translate-x-[-16px]'
        }`}
      ></div>

      {/* Box 3 */}
      <div
        onMouseEnter={() => setHoveredBox(3)}
        onMouseLeave={() => setHoveredBox(null)}
        className={`bg-[#E76666] transition-all duration-300 ${
          hoveredBox === 3
            ? 'w-[290px] h-[290px] scale-120 z-10'
            : 'w-[250px] h-[250px] translate-y-[-10px] translate-x-[-20px]'
        }`}
      ></div>

      {/* Box 4 */}
      <div
        onMouseEnter={() => setHoveredBox(4)}
        onMouseLeave={() => setHoveredBox(null)}
        className={`bg-[#A0FCD9] transition-all duration-300 ${
          hoveredBox === 4
            ? 'w-[270px] h-[270px] scale-110 z-10'
            : 'w-[220px] h-[220px] translate-y-[5px] translate-x-[-16px]'
        }`}
      ></div>
    </div>
  );
};

export default ColorBoxComponent;

