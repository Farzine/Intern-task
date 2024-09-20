import Image from 'next/image';
import React from 'react';

const PhotoComponent: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-between w-full px-4 lg:px-56 py-8">
      {/* Left Section with Photos */}
      <div className="flex flex-col space-y-14">
        {/* Photo 1 */}
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 w-60 h-60 rounded-3xl flex justify-center items-center text-white text-xl font-semibold">
          Photo 1
          <div className="absolute bottom-[-20px] right-[-20px]">
            <Image
              src="https://res.cloudinary.com/djmgdgx86/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1719695814/cld-sample-3.jpg"
              alt="Person 1"
              width={60}
              height={60}
              className="rounded-full border-4 border-white"
            />
          </div>
        </div>

        {/* Photo 3 */}
        <div className="relative bg-gradient-to-tl from-red-600 to-red-400 w-40 h-40 rounded-3xl flex justify-center items-center text-white text-xl font-semibold ml-[75px]">
          Photo 3
          <div className="absolute bottom-[-20px] right-[-20px]">
            <Image
              src="https://res.cloudinary.com/djmgdgx86/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1719695814/cld-sample-3.jpg"
              alt="Person 3"
              width={60}
              height={60}
              className="rounded-full border-4 border-white"
            />
          </div>
        </div>
      </div>

      {/* Photo 2 with Background Image */}
      <div
        className="relative w-48 h-48 rounded-3xl flex justify-center items-center text-white text-xl font-semibold mx-12"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dsd4b2lkg/image/upload/v1726798040/459255185_1193629701754424_7864280097299550147_n_wiik0w.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        Photo 2
        <div className="absolute bottom-[-20px] right-[-20px]">
          <Image
            src="https://res.cloudinary.com/djmgdgx86/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1719695814/cld-sample-3.jpg"
            alt="Person 2"
            width={60}
            height={60}
            className="rounded-full border-4 border-white"
          />
        </div>
      </div>

      {/* Right Section with Text */}
      <div className="flex-1 space-y-8 px-20 lg:px-36">
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore e.
        </p>
        <button className="bg-transparent border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default PhotoComponent;
