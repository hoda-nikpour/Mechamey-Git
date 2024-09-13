
import React, { useContext, useState } from 'react';
import { SectionContext } from '../context/SectionContext';
import Section1 from '../components/Section/Section1';
import Section from '../components/Section/Section';
import Modal from '../components/Modal/Modal';
import { sections } from '../data/cardData';

const Home = () => {
  const { visibleSection } = useContext(SectionContext);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleMoreClick = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const handleLessClick = () => {
    setExpandedCard(null);
  };

  return (
    <div className="font-sans">
        <Modal expandedCard={expandedCard} handleLessClick={handleLessClick} />

          
      {sections.map((section) => {
        if (visibleSection !== section.id) return null;
        if (section.id === 'Home') {
          return <Section1 key={section.id} />;
        }
        return (
          <Section
            key={section.id}
            sectionId={section.id}
            title={section.title}
            cards={section.cards}
            text={section.text}

            handleMoreClick={handleMoreClick}
          />
        );
      })}
      
    </div>
  );
};

export default Home;
