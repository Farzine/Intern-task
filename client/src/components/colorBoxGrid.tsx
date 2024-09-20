"use client";
import React, { useState } from 'react';

const ColorBoxComponent: React.FC = () => {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

  return (
    <div className='w-full h-full overflow-x-auto flex justify-start'>
    <div className="flex items-start justify-start space-x-10 w-fit h-fit px-16">
      {/* Box 1 */}
      <div
        onMouseEnter={() => setHoveredBox(1)}
        onMouseLeave={() => setHoveredBox(null)}
        className={`bg-[#C02424] transition-x-[20px] duration-300 justify-between ${
          hoveredBox === 1
            ? 'w-[190px] h-[190px] scale-120 z-10 md:w-[290px] md:h-[290px]'
            : 'w-[150px] h-[150px] translate-x-[-20px] translate-y-[-10px] md:w-[250px] md:h-[250px]'
        }`}
      ></div>

      {/* Box 2 */}
      <div
        onMouseEnter={() => setHoveredBox(2)}
        onMouseLeave={() => setHoveredBox(null)}
        className={`bg-[#146FE8] transition-all duration-300 justify-between ${
          hoveredBox === 2
            ? 'w-[170px] h-[170px] scale-110 z-10 md:w-[270px] md:h-[270px]'
            : 'w-[120px] h-[120px] translate-y-[12px] translate-x-[-16px] md:w-[210px] md:h-[210px]'
        }`}
      ></div>

      {/* Box 3 */}
      <div
        onMouseEnter={() => setHoveredBox(3)}
        onMouseLeave={() => setHoveredBox(null)}
        className={`bg-[#E76666] transition-all duration-300 ${
          hoveredBox === 3
            ? 'w-[190px] h-[190px] scale-120 z-10 md:w-[290px] md:h-[290px]'
            : 'w-[150px] h-[150px] translate-y-[-10px] translate-x-[-20px] md:w-[250px] md:h-[250px]'
        }`}
      ></div>

      {/* Box 4 */}
      <div
        onMouseEnter={() => setHoveredBox(4)}
        onMouseLeave={() => setHoveredBox(null)}
        className={`bg-[#A0FCD9] transition-all duration-300 ${
          hoveredBox === 4
            ? 'w-[170px] h-[170px] scale-110 z-10 md:w-[270px] md:h-[270px]'
            : 'w-[120px] h-[120px] translate-y-[12px] translate-x-[-16px] md:w-[210px] md:h-[210px]'
        }`}
      ></div>
    </div>
    </div>
  );
};

export default ColorBoxComponent;

