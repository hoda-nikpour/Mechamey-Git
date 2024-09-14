
import DetailedCard from '../cards/DetailedCard';

const Modal = ({ expandedCard, handleLessClick }) => {

  return (expandedCard !== null && <>

    <div onClick={handleLessClick} 
    className={`
    ${expandedCard === null ? 'invisible' : 'visible bg-black/40 '}
     flex items-center justify-center  inset-0 transition-all fixed  z-[1002] duration-1000`}>

<div 
      onClick={(e)=> e.stopPropagation()} 
      className={`
      ${expandedCard === null ? ' scale-125 opacity-0 h-0 ' : ' scale-100 opacity-100 md:h-auto'} 
      backdrop-blur-md text-orange-400 bg-[url('https://i.postimg.cc/wMsSYKzc/Dark-Blue-Wallpaper-High-Quality-Free-Download.jpg')] md:w-4/5 w-full  overflow-y-auto md:p-8 p-2 h-96  rounded-lg shadow-xl max-w-2xl mx-auto transition-all duration-1000`}>
        <DetailedCard
          detail={`Detail for card ${expandedCard + 1}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellendus suscipit nemo, pariatur sed ab, perferendis impedit voluptatem nobis totam voluptates minima obcaecati unde. Harum quidem hic recusandae eveniet explicabo`}
          onLessClick={handleLessClick}
        />
      </div>
      
    </div>
  </>)
};

export default Modal;
