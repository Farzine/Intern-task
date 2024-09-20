import Image from 'next/image';
import React from 'react';

const PhotoComponent: React.FC = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center justify-between w-full px-2 lg:px-16 mt-20">
      {/* Left Section with Photos */}
      <div className="relative flex flex-col space-y-14 md:ml-16 w-full lg:w-auto">
        {/* Photo 1 */}
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 md:w-60 w-40 h-40 md:h-60 rounded-3xl flex justify-center items-center text-white text-xl font-semibold md:ml-0 ml-3">
          Photo 1
          <div className="absolute md:bottom-[-20px] md:right-[-20px] bottom-[-15px] right-[-15px]">
            <Image
              src="https://res.cloudinary.com/djmgdgx86/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1719695814/cld-sample-3.jpg"
              alt="Person 1"
              width={60}
              height={60}
              className="rounded-full border-4 border-white md:w-16 w-12 md:h-16 h-12"
            />
          </div>
        </div>

        {/* Photo 3 */}
        <div className="relative bg-gradient-to-tl from-red-600 to-red-400 md:w-40 w-28 h-28 md:translate-y-0 translate-y-[-16px] md:h-40 rounded-3xl flex justify-center items-center text-white text-xl font-semibold ml-[55px] md:ml-[75px]">
          Photo 3
          <div className="absolute md:bottom-[-20px] md:right-[-20px] bottom-[-15px] right-[-15px]">
            <Image
              src="https://res.cloudinary.com/djmgdgx86/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1719695814/cld-sample-3.jpg"
              alt="Person 3"
              width={60}
              height={60}
              className="rounded-full border-4 border-white md:w-16 w-12 md:h-16 h-12"
            />
          </div>
        </div>
      </div>

      {/* Photo 2 with Background Image */}
      <div
        className="absolute md:relative md:w-48 w-32 h-32 md:h-48 rounded-3xl flex justify-center items-center text-black text-xl font-semibold mx-12 md:ml-10 ml-52 md:mb-0 mb-96"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dsd4b2lkg/image/upload/v1726798040/459255185_1193629701754424_7864280097299550147_n_wiik0w.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        Photo 2
        <div className="absolute md:bottom-[-20px] md:right-[-20px] bottom-[-15px] right-[-15px]">
          <Image
            src="https://res.cloudinary.com/djmgdgx86/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1719695814/cld-sample-3.jpg"
            alt="Person 2"
            width={60}
            height={60}
            className="rounded-full border-4 border-white md:w-16 w-12 md:h-16 h-12"
          />
        </div>
      </div>

      {/* Right Section with Text */}
      <div className="flex-1 space-y-8 px-6 lg:px-28 md:py-0 py-12">
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore e.
        </p>
        <div className="flex items-center justify-center">
          <button className="bg-transparent border-2 border-[#4000FF] text-[#4000FF] px-6 py-2 rounded-2xl hover:bg-[#4000FF] hover:text-white transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoComponent;
