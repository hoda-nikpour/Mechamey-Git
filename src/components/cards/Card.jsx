

import React from 'react';

const Card = ({ text, image, direction, onMoreClick }) => {
  return (
    <div 
    className={`cursor-pointer hover:scale-105 transition-all duration-300 flex ${direction === "vertical" ? "flex-col " : "flex-row " } group z-50 rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl max-w-sm md:max-w-md `}>
      <div className={`${direction === "vertical" ? "w-full h-60" : "w-1/3 h-auto"} `}>
        <img src={image} alt="Card" className={` ${direction === "vertical" ? "bg-cover " : " object-cover"} 
          w-96 h-full `} />
      </div>
      <div className="p-4 flex flex-col justify-between flex-1">
        <p className="text-lg text-orange-400 group-hover:translate-y-2  group-hover:scale-105 transition-all duration-300">{text}</p>
        {direction === "vertical" && (
          <div>
            <button
              className="mt-4 text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded transition-all duration-1000 ease-in-out"
              onClick={onMoreClick}
            >
              More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

