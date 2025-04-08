
import React from 'react';

const TeamSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content">
        <h2 className="slide-title">Our Team</h2>
        
        <div className="text-center mb-8">
          <p className="text-ofbusiness-gray">Meet the DSSE team members who worked on this pitch deck</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map((member) => (
            <div key={member} className="flex flex-col items-center animate-fade-in" style={{animationDelay: `${0.1 * member}s`}}>
              <div className="w-24 h-24 rounded-full bg-ofbusiness-light mb-3 overflow-hidden flex items-center justify-center">
                <svg className="w-16 h-16 text-ofbusiness-green opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-ofbusiness-dark">Team Member</h3>
                <p className="text-sm text-ofbusiness-gray">Roll Number</p>
                <p className="text-xs text-ofbusiness-gray mt-1">Area of Interest</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center animate-slide-in">
          <p className="font-medium text-ofbusiness-green">Thank you for your attention!</p>
          <p className="text-sm text-ofbusiness-gray mt-1">Any questions?</p>
        </div>
      </div>
      <div className="slide-footer">©DSSE</div>
    </div>
  );
};

export default TeamSlide;
