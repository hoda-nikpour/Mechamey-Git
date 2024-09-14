import React, { useEffect, useState } from 'react';

const Section1 = () => {
  const [time, setTime] = useState(false);
  
  useEffect(() => {
    const animate = () => {
      setTime(true);
      setTimeout(() => {
        setTime(false);
        setTimeout(animate, 2000); // 2000ms delay after animation completes
      }, 2700); // Duration of your animation
    };

    animate(); // Start the animation loop
  }, []);

  return (
    <section
      id="Home"
      className="font-sans h-[86vh] overflow-auto bg-cover bg-center xl:flex items-center justify-center "
    >
      <div className="w-full items-center xl:flex flex-row mt-24 xl:mt-0">
        <div className="xl:flex sm:space-x-4 md:mt-8">
          <div className="xl:flex  flex-col sm:flex-row items-center w-11/12 sm:w-3/4 mx-auto relative text-center">
            <div className=""></div>
            <img
              className="w-1/2 md:w-1/3 object-cover rounded-md mx-auto"
              src="https://i.postimg.cc/QM7YxQ5J/logononame-removebg-preview.png"
              alt="Mechamey"
            />
            <div className="sm:ml-8 md:mt-4 sm:mt-0 p-4">
              <div className="md:text-9xl font-serif text-5xl md:my-5 my-2  text-orange-400 items-center  justify-center text-center w-full">
                <div className='flex w-full'>
                  <div className={`${time ? 'animate-bounce duration-1000 [animation-delay:-0.7s]' : ''} transition-all`}>M</div>
                  <div className={`${time ? 'animate-bounce duration-1000 [animation-delay:-2.6s]' : ''} transition-all`}>E</div>
                  <div className={`${time ? 'animate-bounce duration-1000 [animation-delay:-2.5s]' : ''} transition-all`}>CH</div>
                  <div className={`${time ? 'animate-bounce [animation-delay:-0.4s]' : ''} transition-all`}>A</div>
                  <div className={`${time ? 'animate-bounce [animation-delay:-0.3s]' : ''} transition-all`}>M</div>
                  <div className={`${time ? 'animate-bounce [animation-delay:-0.2s]' : ''} transition-all`}>E</div>
                  <div className={`${time ? 'animate-bounce [animation-delay:-0.1s]' : ''} transition-all`}>Y</div>
                </div>
              </div>
              <br />
              <h1 className="text-orange-400 text-justify text-lg sm:text-2xl">
              Mechamey AB is a tech company mainly engaged in product
              design and development and also project management within
              the automotive industry and experimental aviation. We have
              extensive experience in electrification in heavy-duty
              commercial vehicles such as Trucks, Buses, and Construction
              equipment. The company headquarters is in Stockholm, Sweden.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
