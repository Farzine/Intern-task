import Image from 'next/image';
import { FC } from 'react';

interface ProfileCardProps {
    name: string;
    title: string;
    profilePic: string;
}

const ProfileCard: FC<ProfileCardProps> = ({ name, title, profilePic }) => (
    <div className="relative z-10 flex flex-col bg-[#1F3B68] text-white p-6 rounded-xl shadow-lg w-64 h-64">
        <h2 className="font-bold text-xl mb-2">Lorem ipsum</h2>
        <div className="flex items-center gap-2 mb-10">
            <Image
                src={profilePic}
                alt="Profile Picture"
                width={30}
                height={30}
                className="rounded-full"
            />
            <span className="text-sm">Wade Warren</span>
        </div>
        <div className="absolute bottom-6 bg-gradient-to-r from-slate-500 to-slate-600 rounded-lg h-fit w-fit">
            <div className='px-3'>
                <p className="text-md font-semibold text-gray-300">{name}</p>
                <p className="text-gray-400 text-sm">{title}</p>
            </div>
        </div>
    </div>
);

const ProfileCardStack: FC = () => (
    <div className="relative flex justify-center items-center mb-6">
        {/* Stacked Cards */}
        <div className="absolute bg-[#31096A] rounded-xl w-56 h-52 transform translate-x-12"></div>
        <div className="absolute bg-[#980FA7] rounded-xl w-60 h-60 transform translate-x-6"></div>
        {/* Top Profile Card */}
        <ProfileCard
            name="Lawrance Stroll"
            title="Hegifueshho dnfsiu foiehhsio"
            profilePic="https://res.cloudinary.com/djmgdgx86/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1719695814/cld-sample-3.jpg"
        />
    </div>
);

const ResponsiveComponent: FC = () => (
    <div className="flex flex-col lg:flex-row justify-between items-center py-10 px-6 lg:px-20 space-y-10 lg:space-y-0">
        {/* Left Text Block */}
        <div className="lg:w-1/2">
            <p className="text-gray-700 text-lg lg:text-xl mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="px-6 py-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition">
                Explore Now
            </button>
        </div>

        {/* Right Profile Card Stack */}
        <div className="lg:w-1/2 flex justify-center">
            <ProfileCardStack />
        </div>
    </div>
);

export default ResponsiveComponent;
