
import React from 'react';
import { Factory } from 'lucide-react';

const IntroductionSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content flex flex-col items-center text-center relative">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/lovable-uploads/dd144ea4-f53c-432d-8f99-c0654482fefd.png')] bg-cover bg-center opacity-30"></div>
        
        <div className="relative z-10">
          <img 
            src="/lovable-uploads/4d4e40eb-d9b1-4fdb-b200-a44d3c4559cf.png" 
            alt="OfBusiness Logo" 
            className="w-64 md:w-80 mb-4 animate-slide-in border-4 border-ofbusiness-green shadow-lg rounded-lg p-2 bg-white/80"
          />
          
          <div className="max-w-2xl mx-auto">
            <h1 className="text-xl md:text-2xl font-medium mb-8 text-ofbusiness-dark animate-fade-in">
              <span className="text-ofbusiness-green font-bold">One-stop solution</span> for raw materials and purchase financing needs of Indian SMEs
            </h1>
          </div>
          
          <div className="mt-8 animate-slide-in w-full max-w-2xl">
            <h2 className="text-lg md:text-xl font-medium mb-2 text-ofbusiness-brown">Founded by</h2>
            <div className="mt-4 flex justify-center">
              <img 
                src="/lovable-uploads/be2f4ff8-d411-4d8b-8d1c-2ffd3e4d0b04.png" 
                alt="OfBusiness Founders" 
                className="w-full max-w-lg rounded-xl shadow-lg border-2 border-ofbusiness-green"
              />
            </div>
          </div>
          
          <div className="mt-8 flex justify-center gap-6">
            <div className="flex items-center gap-2 text-ofbusiness-green">
              <Factory size={24} />
              <span className="font-medium">Empowering SMEs</span>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-footer">©DSSE</div>
    </div>
  );
};

export default IntroductionSlide;
