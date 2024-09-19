import Card from "./card";

const CardExample = () => {
    const avatars = [
      'https://randomuser.me/api/portraits/women/1.jpg',
      'https://randomuser.me/api/portraits/men/1.jpg',
      'https://randomuser.me/api/portraits/men/2.jpg',
      'https://randomuser.me/api/portraits/women/2.jpg'
    ];
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Card 
          title="Art stuff" 
          price="598 TK" 
          currentSlide={1} 
          totalSlides={9} 
          avatars={avatars} 
        />
      </div>
    );
  };
  
  export default CardExample;
  