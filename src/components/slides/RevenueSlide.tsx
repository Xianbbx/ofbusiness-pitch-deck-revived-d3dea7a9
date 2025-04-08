
import React from 'react';
import { BarChart, Banknote, Percent, CreditCard } from 'lucide-react';

const RevenueSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content">
        <h2 className="slide-title">Revenue & Profit Streams</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-ofbusiness-light p-6 rounded-lg animate-slide-in">
              <div className="flex items-center gap-3 mb-4">
                <BarChart className="text-ofbusiness-green" size={24} />
                <h3 className="font-semibold text-lg">Revenue Streams</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-ofbusiness-green">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <CreditCard size={18} className="text-ofbusiness-green" />
                    Transaction-Based Model
                  </h4>
                  <p className="text-sm text-ofbusiness-gray">
                    Primary revenue model based on transaction fees from procurement services, with a standard platform fee of approximately 1% per transaction.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-ofbusiness-green">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Percent size={18} className="text-ofbusiness-green" />
                    Interest Income
                  </h4>
                  <p className="text-sm text-ofbusiness-gray">
                    Interest earned on purchase financing provided to SMEs, typically for a period of 3-6 months. This creates a recurring and predictable revenue stream.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-ofbusiness-green p-6 rounded-lg animate-slide-in" style={{animationDelay: '0.2s'}}>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Banknote className="text-ofbusiness-green" size={20} />
                Typical Transaction
              </h3>
              
              <div className="space-y-3 text-sm text-ofbusiness-gray">
                <div className="flex justify-between border-b pb-2">
                  <span>SME Applies for Financing Limit</span>
                  <span className="font-medium">₹50 Lakhs</span>
                </div>
                
                <div className="flex justify-between border-b pb-2">
                  <span>Places Order for Raw Materials</span>
                  <span className="font-medium">₹20 Lakhs</span>
                </div>
                
                <div className="flex justify-between border-b pb-2">
                  <span>Platform Fee (1%)</span>
                  <span className="font-medium">₹20,000</span>
                </div>
                
                <div className="flex justify-between border-b pb-2">
                  <span>Credit Period</span>
                  <span className="font-medium">45 Days</span>
                </div>
                
                <div className="flex justify-between border-b pb-2">
                  <span>Interest Rate (Annualized)</span>
                  <span className="font-medium">16-18%</span>
                </div>
                
                <div className="flex justify-between text-ofbusiness-green font-medium">
                  <span>Interest Income (for 45 days)</span>
                  <span>~₹37,500</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md animate-slide-in" style={{animationDelay: '0.3s'}}>
              <h3 className="font-semibold text-lg mb-4">How We Make Money</h3>
              
              <div className="space-y-5">
                <div className="space-y-2">
                  <h4 className="font-medium text-ofbusiness-dark">1. Margins on Material Supply</h4>
                  <p className="text-sm text-ofbusiness-gray">
                    We buy materials in bulk from manufacturers and pass ~50% of the margin to our customers, retaining the remainder as profit. This creates a win-win scenario where SMEs get better prices and OfBusiness earns a reasonable margin.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-ofbusiness-dark">2. Interest Spread on Financing</h4>
                  <p className="text-sm text-ofbusiness-gray">
                    We maintain a healthy spread between our borrowing cost from banks/financial institutions and the interest we charge to SMEs. Our integrated approach allows us to maintain lower NPAs (1-1.2%) compared to traditional lenders.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-ofbusiness-dark">3. Transaction Platform Fees</h4>
                  <p className="text-sm text-ofbusiness-gray">
                    We charge a standard platform fee of 1% on all transactions processed through our platform, creating a scalable revenue stream as transaction volumes grow.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-ofbusiness-green bg-opacity-10 p-6 rounded-lg animate-slide-in" style={{animationDelay: '0.4s'}}>
              <h3 className="font-semibold text-lg mb-4 text-ofbusiness-dark">Unique Business Advantages</h3>
              
              <ul className="space-y-3 text-ofbusiness-gray">
                <li className="flex items-start gap-2">
                  <span className="text-ofbusiness-green font-bold">•</span>
                  <span><span className="font-medium text-ofbusiness-dark">Lower Risk Profile:</span> Our dual business model gives us intimate knowledge of customer businesses, reducing credit risk and NPAs</span>
                </li>
                
                <li className="flex items-start gap-2">
                  <span className="text-ofbusiness-green font-bold">•</span>
                  <span><span className="font-medium text-ofbusiness-dark">High Customer Retention:</span> 90% retention rate due to integrated procurement and financing offerings</span>
                </li>
                
                <li className="flex items-start gap-2">
                  <span className="text-ofbusiness-green font-bold">•</span>
                  <span><span className="font-medium text-ofbusiness-dark">Cross-Selling Opportunities:</span> Customers who initially use one service can be introduced to other services</span>
                </li>
                
                <li className="flex items-start gap-2">
                  <span className="text-ofbusiness-green font-bold">•</span>
                  <span><span className="font-medium text-ofbusiness-dark">Network Effects:</span> As more suppliers join, pricing becomes more competitive, attracting more SMEs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-footer">©DSSE</div>
    </div>
  );
};

export default RevenueSlide;
