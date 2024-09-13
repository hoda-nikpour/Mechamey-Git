
import React from 'react';
import Card from '../cards/Card';



const Section = ({ sectionId, title, cards, text, handleMoreClick }) => (
  <section
    id={sectionId}
    className="h-[86vh] bg-cover bg-center p-8 bg-[url('https://i.postimg.cc/wMsSYKzc/Dark-Blue-Wallpaper-High-Quality-Free-Download.jpg')] flex justify-center"
  >
  
    <div className="flex flex-col w-full w-7xl items-center md:my-36 my-20 overflow-auto h-[65vh]">
      <h3 className="text-4xl mb-10 font-semibold text-orange-600 text-center">
        {title}
       
      </h3>
      <div className='text-orange-500 text-2xl'>  {text} </div>
      <div className={`${sectionId=== 'Projects' ? ' md:grid-cols-3 md:gap-8' : ' md:grid-cols-2 md:gap-52'} grid grid-cols-1 gap-8  w-7xl`}>
        {cards.map((card, index) => (<>
        
          <Card
            id={index}
            {...card}
            onMoreClick={() => handleMoreClick(index)}
          />
        </>

        ))}
      </div>
    </div>
  </section>
);

export default Section;
