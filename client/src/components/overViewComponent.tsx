"use client";
import { useState } from "react";

const OverviewComponent = () => {
  const [heights, setHeights] = useState<number[]>([200, 200, 200, 200, 200]);

  const increaseHeight = (index: number) => {
    const newHeights = [...heights];
    newHeights[index] += 24;
    setHeights(newHeights);
  };

  const handleArrowClick = () => {
    increaseHeight(2); // 3rd box from the right (index 2 in zero-based indexing)
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex justify-start space-x-4 overflow-x-scroll max-w-full scrollbar-hide">
        {heights.map((height, index) => (
          <div
            key={index}
            className="w-32 flex-shrink-0 cursor-pointer"
            style={{
              height: `${height}px`,
              backgroundColor: [
                "#F28B82", // red-like
                "#D7AEFB", // light purple
                "#A7FFEB", // mint green
                "#AA00FF", // bright purple
                "#1A237E", // dark blue
              ][index],
            }}
            onClick={() => increaseHeight(index)}
          ></div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-start space-y-4">
        <h1 className="text-3xl font-bold">Overveiw</h1>
        <p className="max-w-lg text-lg text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Arrow buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 flex space-x-4">
        <button
          className="p-2 bg-black text-white rounded-full"
          onClick={handleArrowClick}
        >
          &lt;
        </button>
        <button
          className="p-2 bg-black text-white rounded-full"
          onClick={handleArrowClick}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};


export default OverviewComponent;
