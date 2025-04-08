
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import IntroductionSlide from './slides/IntroductionSlide';
import ProblemSlide from './slides/ProblemSlide';
import TargetCustomersSlide from './slides/TargetCustomersSlide';
import ValuePropositionSlide from './slides/ValuePropositionSlide';
import RevenueSlide from './slides/RevenueSlide';
import TeamSlide from './slides/TeamSlide';

const PitchDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <IntroductionSlide key="intro" />,
    <ProblemSlide key="problem" />,
    <TargetCustomersSlide key="target" />,
    <ValuePropositionSlide key="value" />,
    <RevenueSlide key="revenue" />,
    <TeamSlide key="team" />
  ];

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      goToNextSlide();
    } else if (e.key === 'ArrowLeft') {
      goToPrevSlide();
    }
  };

  return (
    <div 
      className="h-screen w-full overflow-hidden" 
      tabIndex={0} 
      onKeyDown={handleKeyDown}
    >
      {currentSlide > 0 && (
        <button 
          onClick={goToPrevSlide} 
          className="nav-button left-4"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
      )}
      
      {currentSlide < slides.length - 1 && (
        <button 
          onClick={goToNextSlide} 
          className="nav-button right-4"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      )}

      <div className="h-full w-full">
        {slides[currentSlide]}
      </div>
      
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index 
                ? 'bg-ofbusiness-green' 
                : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PitchDeck;
