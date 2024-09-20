import CardExample from "@/components/cardExample";
import React from "react";
import PhotoComponent from "@/components/signUp";
import ColorBoxContainer from "@/components/colorBoxGrid";
import ResponsiveComponent from "@/components/explorNow";
import ColorChangingComponent from "@/components/collectionFeatured";
import Navbar from "@/components/navBar";
import { FaFilter } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="">
        <div>
          <Navbar />
          <div className="relative w-full h-auto">
            <svg
              className="w-full h-auto"
              viewBox="0 0 1440 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-1 147.299V1H1440V147.299C786.74 349.6 207.142 231.591 -1 147.299Z"
                fill="#363636"
                stroke="#000000"
              />
            </svg>
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-10 mt-20 md:mt-48 md:ml-44">
            <ColorBoxContainer />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-24 md:mt-64 font-semibold">
        <PhotoComponent />
      </div>
      <div className="flex items-center font-semibold justify-center md:mt-28">
        <ResponsiveComponent />
      </div>
      <div className="flex items-center justify-center py-16">
        <ColorChangingComponent />
      </div>

      <div className="flex justify-between items-center w-full px-10">
        <div className=" px-5">
          <h2 className="text-2xl md:text-5xl font-bold md:text-start text-start">Discover More</h2>


          <div className="flex justify-between items-center w-full md:my-10 my-2">

            <div className="flex md:space-x-3 md:space-y-0 space-y-3 md:flex-row flex-col text-sm md:text-xl">
              <button className="px-4 py-2 bg-[#3F05D4] text-white rounded-full">All Categories</button>
              <button className="px-4 py-2 bg-gray-200 text-black rounded-full">Art</button>
              <button className="px-4 py-2 bg-gray-200 text-black rounded-full">Celebrities</button>
              <button className="px-4 py-2 bg-gray-200 text-black rounded-full">Gaming</button>
              <button className="px-4 py-2 bg-gray-200 text-black rounded-full">Sport</button>
              <button className="px-4 py-2 bg-gray-200 text-black rounded-full">Music</button>
            </div>

            <div className="md:mb-0 md: mb-60 ml-3">
              <button className="flex items-center px-4 py-2 bg-gray-200 text-purple-600 rounded-full">
                <FaFilter className="mr-2" />
                All Filters
              </button>
            </div>

          </div>
        </div>
      </div>

      <div>
        <CardExample />
      </div>
    </div>
  );
}
