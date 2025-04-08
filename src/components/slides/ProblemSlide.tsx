
import React from 'react';
import { ShoppingBag, Percent, Clock, CreditCard } from 'lucide-react';

const ProblemSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content">
        <h2 className="slide-title">The Problem</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div className="col-span-1">
            <p className="text-ofbusiness-gray mb-6">
              Small and Medium Enterprises (SMEs) in manufacturing sectors face significant challenges in their supply chain and financing operations:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 animate-slide-in" style={{animationDelay: '0.1s'}}>
                <div className="bg-ofbusiness-green p-2 rounded-full text-white mt-1">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-ofbusiness-dark">Inefficient Supply Chain</h3>
                  <p className="text-sm text-ofbusiness-gray">Multiple intermediaries between manufacturers and SMEs lead to delayed deliveries and higher costs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-slide-in" style={{animationDelay: '0.2s'}}>
                <div className="bg-ofbusiness-green p-2 rounded-full text-white mt-1">
                  <Percent size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-ofbusiness-dark">Price Volatility</h3>
                  <p className="text-sm text-ofbusiness-gray">SMEs lack access to competitive pricing due to fragmented purchasing power and market opacity.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-slide-in" style={{animationDelay: '0.3s'}}>
                <div className="bg-ofbusiness-green p-2 rounded-full text-white mt-1">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-ofbusiness-dark">Limited Financing Options</h3>
                  <p className="text-sm text-ofbusiness-gray">SMEs rely on expensive local lenders with predatory rates, hurting their margins and growth potential.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-slide-in" style={{animationDelay: '0.4s'}}>
                <div className="bg-ofbusiness-green p-2 rounded-full text-white mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-ofbusiness-dark">Time-Consuming Procurement</h3>
                  <p className="text-sm text-ofbusiness-gray">Procurement processes are manual, time-consuming, and lack transparency.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 bg-ofbusiness-light rounded-lg p-6 flex flex-col justify-center animate-fade-in">
            <h3 className="font-bold text-xl mb-4 text-ofbusiness-dark">Why This Matters Now</h3>
            
            <ul className="space-y-3 text-ofbusiness-gray">
              <li className="flex items-start gap-2">
                <span className="text-ofbusiness-green font-bold">•</span>
                <span>India's manufacturing sector is growing rapidly with government initiatives like "Make in India"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ofbusiness-green font-bold">•</span>
                <span>Digital penetration has reached a tipping point for B2B transactions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ofbusiness-green font-bold">•</span>
                <span>SMEs contribute ~30% to India's GDP but lack access to efficient procurement and financing solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ofbusiness-green font-bold">•</span>
                <span>Fragmented industry creates opportunity for a platform that connects suppliers and buyers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="slide-footer">©DSSE</div>
    </div>
  );
};

export default ProblemSlide;
