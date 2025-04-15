
import React from 'react';
import { ShoppingBag, Percent, Clock, CreditCard, AlertTriangle } from 'lucide-react';

const ProblemSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content relative">
        {/* Background image with blur effect */}
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/businessman-holding-pen-pointing-document_1262-2151.jpg')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative z-10">
          <h2 className="slide-title">The Problem</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="col-span-1">
              <p className="text-ofbusiness-gray mb-6">
                Small and Medium Enterprises (SMEs) in manufacturing sectors face significant challenges in their supply chain and financing operations:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 animate-slide-in">
                  <div className="icon-bg-primary">
                    <ShoppingBag size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ofbusiness-dark">Inefficient Supply Chain</h3>
                    <p className="text-sm text-ofbusiness-gray">Multiple intermediaries between manufacturers and SMEs lead to delayed deliveries and higher costs.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 animate-slide-in" style={{animationDelay: '0.2s'}}>
                  <div className="icon-bg-primary">
                    <Percent size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ofbusiness-dark">Price Volatility</h3>
                    <p className="text-sm text-ofbusiness-gray">SMEs lack access to competitive pricing due to fragmented purchasing power and market opacity.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 animate-slide-in" style={{animationDelay: '0.3s'}}>
                  <div className="icon-bg-primary">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ofbusiness-dark">Limited Financing Options</h3>
                    <p className="text-sm text-ofbusiness-gray">SMEs rely on expensive local lenders with predatory rates, hurting their margins and growth potential.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 animate-slide-in" style={{animationDelay: '0.4s'}}>
                  <div className="icon-bg-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ofbusiness-dark">Time-Consuming Procurement</h3>
                    <p className="text-sm text-ofbusiness-gray">Procurement processes are manual, time-consuming, and lack transparency.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-span-1 flex flex-col gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-ofbusiness-brown animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-bg-secondary">
                    <AlertTriangle size={20} />
                  </div>
                  <h3 className="font-bold text-xl text-ofbusiness-brown">Why This Matters Now</h3>
                </div>
                
                <ul className="space-y-3 text-ofbusiness-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-ofbusiness-brown font-bold">•</span>
                    <span>India's manufacturing sector is growing rapidly with government initiatives like "Make in India"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ofbusiness-brown font-bold">•</span>
                    <span>Digital penetration has reached a tipping point for B2B transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ofbusiness-brown font-bold">•</span>
                    <span>SMEs contribute ~30% to India's GDP but lack access to efficient procurement and financing solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ofbusiness-brown font-bold">•</span>
                    <span>Fragmented industry creates opportunity for a platform that connects suppliers and buyers</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="https://img.freepik.com/free-photo/close-up-supply-chain-representation_23-2149853372.jpg" 
                  alt="Supply Chain Problems" 
                  className="w-4/5 h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-footer">©DSSE</div>
    </div>
  );
};

export default ProblemSlide;
