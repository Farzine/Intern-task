import React from 'react';
import Image from 'next/image';

interface PhotoProps {
  id: string;
  color: string;
  avatar?: string;
}

const Photo: React.FC<PhotoProps> = ({ id, color, avatar }) => (
  <div className={`relative aspect-square rounded-3xl ${color} shadow-md`}>
    <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
      Photo {id}
    </span>
    {avatar && (
      <div className="absolute -bottom-3 -right-3 w-12 h-12">
        <Image
          src={avatar}
          alt="Avatar"
          width={48}
          height={48}
          className="rounded-full border-2 border-white"
        />
      </div>
    )}
  </div>
);

const Photogrid: React.FC = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="md:col-span-2 lg:row-span-2">
          <Photo id="1" color="bg-indigo-500" avatar="https://res.cloudinary.com/djmgdgx86/image/upload/v1719935885/iakiez3xo3g0v2nxymhj.jpg" />
        </div>
        <div>
          <Photo id="2" color="bg-gray-300" avatar="https://res.cloudinary.com/djmgdgx86/image/upload/v1719935885/iakiez3xo3g0v2nxymhj.jpg"  />
        </div>
        <div className="md:col-start-2 lg:col-start-3">
          <Photo id="3" color="bg-red-500" avatar="https://res.cloudinary.com/djmgdgx86/image/upload/v1719935885/iakiez3xo3g0v2nxymhj.jpg" />
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md h-full">
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e.
            </p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photogrid;