
import React from 'react';

const IntroductionSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content flex flex-col items-center text-center">
        <img 
          src="/lovable-uploads/4d4e40eb-d9b1-4fdb-b200-a44d3c4559cf.png" 
          alt="OfBusiness Logo" 
          className="w-64 md:w-80 mb-8 animate-slide-in"
        />
        
        <h1 className="text-xl md:text-2xl font-medium mb-6 text-ofbusiness-dark animate-fade-in">
          <span className="text-ofbusiness-green font-bold">Simplified B2B Commerce</span> for India's SMEs
        </h1>
        
        <div className="mt-8 animate-slide-in">
          <h2 className="text-lg md:text-xl font-medium mb-1">Founded by</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <div className="founder">
              <p className="font-semibold">Asish Mohapatra</p>
              <p className="text-sm text-ofbusiness-gray">CEO</p>
            </div>
            <div className="founder">
              <p className="font-semibold">Ruchi Kalra</p>
              <p className="text-sm text-ofbusiness-gray">CFO</p>
            </div>
            <div className="founder">
              <p className="font-semibold">Vasant Sridhar</p>
              <p className="text-sm text-ofbusiness-gray">CSO</p>
            </div>
            <div className="founder">
              <p className="font-semibold">Bhuvan Gupta</p>
              <p className="text-sm text-ofbusiness-gray">CTO</p>
            </div>
            <div className="founder">
              <p className="font-semibold">Nitin Jain</p>
              <p className="text-sm text-ofbusiness-gray">COO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-footer">©DSSE</div>
    </div>
  );
};

export default IntroductionSlide;
