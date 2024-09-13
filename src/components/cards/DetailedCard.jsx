
import React from 'react';


const DetailedCard = ({ detail, onLessClick }) => {
  return (
    <div className="p-4 ">
      <div className='font-bold mb-4 flex flex-col items-center justify-center'>Details: </div>
      <div className="text-lg my-2  ">{detail}</div>
      <div className="text-lg my-2 ">{detail}</div>
      <button
        className="mt-4 text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded transition duration-200 ease-in-out"
        onClick={onLessClick}
      >
        Close
      </button>
    </div>
  );
};

export default DetailedCard;
