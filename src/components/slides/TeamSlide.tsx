
import React from 'react';
import { Users, Briefcase, BookOpen } from 'lucide-react';

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
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-ofbusiness-green/20 to-ofbusiness-brown/20 mb-3 overflow-hidden flex items-center justify-center border-2 border-ofbusiness-green/30 shadow-md">
                <svg className="w-16 h-16 text-ofbusiness-green opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="col-span-1 bg-gradient-to-br from-ofbusiness-green/10 to-blue-50 p-5 rounded-lg shadow-sm animate-slide-in border border-ofbusiness-green/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-full bg-ofbusiness-green/20">
                <Users className="text-ofbusiness-green" size={20} />
              </div>
              <h3 className="font-medium text-ofbusiness-dark">Our Collaboration</h3>
            </div>
            <p className="text-sm text-ofbusiness-gray">
              Our team worked collaboratively to research, design, and present this pitch deck, focusing on the unique value proposition of OfBusiness.
            </p>
          </div>
          
          <div className="col-span-1 bg-gradient-to-br from-ofbusiness-brown/10 to-amber-50 p-5 rounded-lg shadow-sm animate-slide-in border border-ofbusiness-brown/20" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-full bg-ofbusiness-brown/20">
                <Briefcase className="text-ofbusiness-brown" size={20} />
              </div>
              <h3 className="font-medium text-ofbusiness-dark">Course Project</h3>
            </div>
            <p className="text-sm text-ofbusiness-gray">
              This pitch deck was created as part of our DSSE course project to understand and analyze successful Indian startups.
            </p>
          </div>
          
          <div className="col-span-1 bg-gradient-to-br from-blue-50 to-teal-50 p-5 rounded-lg shadow-sm animate-slide-in border border-blue-200/20" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-full bg-blue-400/20">
                <BookOpen className="text-blue-500" size={20} />
              </div>
              <h3 className="font-medium text-ofbusiness-dark">Key Learnings</h3>
            </div>
            <p className="text-sm text-ofbusiness-gray">
              Through this project, we gained valuable insights into B2B platforms, supply chain optimization, and innovative financing models for SMEs.
            </p>
          </div>
        </div>
        
        <div className="mt-10 text-center animate-slide-in">
          <p className="font-medium text-ofbusiness-green text-lg">Thank you for your attention!</p>
          <p className="text-sm text-ofbusiness-gray mt-1">Any questions?</p>
        </div>
      </div>
      <div className="slide-footer">©DSSE</div>
    </div>
  );
};

export default TeamSlide;
