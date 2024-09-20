import Card from "./card";

const CardExample = () => {
    const avatars = [
      'https://randomuser.me/api/portraits/women/1.jpg',
      'https://randomuser.me/api/portraits/men/1.jpg',
      'https://randomuser.me/api/portraits/men/2.jpg',
      'https://randomuser.me/api/portraits/women/2.jpg'
    ];
  
    return (
      <div className=" min-h-screen py-16">
      <div className="flex flex-col lg:flex-row justify-center px-10 md:space-x-8 items-center md:py-5 bg-white">
        <Card 
          title="Art stuff" 
          price="598 TK" 
          currentSlide={"1"} 
          totalSlides={"09"} 
          avatars={avatars} 
          bgColor="bg-gradient-to-r from-[#DED4F8] to-[#BE92FB]" 
          buttonColor1="bg-gradient-to-r from-[#9747FF] to-[#651BC6]" 
          buttonColor2="bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]" 
          buttonTesxtColorOne="text-white"
          buttonTesxtColorTwo="text-black"
        />
        <Card 
          title="ABCD" 
          price="777 TK" 
          currentSlide={"1"} 
          totalSlides={"19"} 
          avatars={avatars} 
          bgColor="bg-gradient-to-r from-[#0FA958] to-[#94FFE6]"
          buttonColor1="bg-gradient-to-r from-[#9747FF] to-[#651BC6]"
          buttonColor2="bg-gradient-to-r from-[#6D8BB4] to-[#016EFF]"
          buttonTesxtColorOne="text-white"
          buttonTesxtColorTwo="text-white"
        />
        <Card 
          title="EFGH" 
          price="58 TK" 
          currentSlide={"1"} 
          totalSlides={"9"} 
          avatars={avatars} 
          bgColor="bg-gradient-to-r from-[#2768BF] to-[#E6E6E6]"
          buttonColor1="bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]"
          buttonColor2="bg-gradient-to-r from-red-600 to-red-400"
          buttonTesxtColorOne="text-black"
          buttonTesxtColorTwo="text-black"
        />
        <Card 
          title="XYZ" 
          price="0" 
          currentSlide={"1"} 
          totalSlides={"06"} 
          avatars={avatars} 
          bgColor="bg-gradient-to-r from-[#4C2F72] to-[#BE92FB]"
          buttonColor1="bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]"
          buttonColor2="bg-gradient-to-r from-orange-600 to-orange-400"
          buttonTesxtColorOne="text-black"
          buttonTesxtColorTwo="text-black"
        />
      </div>
      
      <div className="flex flex-col lg:flex-row justify-center px-10 md:space-x-8 items-center md:py-5 bg-white">
      <Card 
          title="Art stuff" 
          price="598 TK" 
          currentSlide={"1"} 
          totalSlides={"09"} 
          avatars={avatars} 
          bgColor="bg-gradient-to-r from-[#DED4F8] to-[#BE92FB]" 
          buttonColor1="bg-gradient-to-r from-[#9747FF] to-[#651BC6]" 
          buttonColor2="bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]" 
          buttonTesxtColorOne="text-white"
          buttonTesxtColorTwo="text-black"
        />
        <Card 
          title="ABCD" 
          price="777 TK" 
          currentSlide={"1"} 
          totalSlides={"19"} 
          avatars={avatars} 
          bgColor="bg-gradient-to-r from-[#0FA958] to-[#94FFE6]"
          buttonColor1="bg-gradient-to-r from-[#9747FF] to-[#651BC6]"
          buttonColor2="bg-gradient-to-r from-[#6D8BB4] to-[#016EFF]"
          buttonTesxtColorOne="text-white"
          buttonTesxtColorTwo="text-white"
        />
        <Card 
          title="EFGH" 
          price="58 TK" 
          currentSlide={"1"} 
          totalSlides={"9"} 
          avatars={avatars} 
          bgColor="bg-gradient-to-r from-[#2768BF] to-[#E6E6E6]"
          buttonColor1="bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]"
          buttonColor2="bg-gradient-to-r from-red-600 to-red-400"
          buttonTesxtColorOne="text-black"
          buttonTesxtColorTwo="text-black"
        />
        <Card 
          title="XYZ" 
          price="0" 
          currentSlide={"1"} 
          totalSlides={"06"} 
          avatars={avatars} 
          bgColor="bg-gradient-to-r from-[#4C2F72] to-[#BE92FB]"
          buttonColor1="bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]"
          buttonColor2="bg-gradient-to-r from-orange-600 to-orange-400"
          buttonTesxtColorOne="text-black"
          buttonTesxtColorTwo="text-black"
        />
      </div>         
      </div>
    );
  };
  
  export default CardExample;
