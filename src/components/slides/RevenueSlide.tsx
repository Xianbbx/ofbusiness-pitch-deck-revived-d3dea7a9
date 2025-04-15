
import React from 'react';
import { BarChart, LayoutGrid, Banknote, Percent, CreditCard, TrendingUp, BarChart3, Lightbulb } from 'lucide-react';

const RevenueSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content">
        <h2 className="slide-title">Revenue & Profit Streams</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Revenue Streams Section */}
          <div className="space-y-6">
            <div className="gradient-card animate-slide-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-bg-primary">
                  <BarChart className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-xl text-ofbusiness-green">Revenue Streams</h3>
              </div>
              
              <div className="space-y-6 mt-2">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
                  <h4 className="font-medium mb-3 flex items-center gap-2 text-ofbusiness-dark">
                    <CreditCard size={18} className="text-ofbusiness-green" />
                    Transaction-Based Model
                  </h4>
                  <p className="text-sm text-ofbusiness-gray mb-2">
                    Primary revenue model based on transaction fees from procurement services, with a standard platform fee of approximately 1% per transaction.
                  </p>
                  <div className="flex items-center justify-center mt-4">
                    <img 
                      src="https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg" 
                      alt="Transaction Fees" 
                      className="h-24 w-auto rounded"
                    />
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
                  <h4 className="font-medium mb-3 flex items-center gap-2 text-ofbusiness-dark">
                    <Percent size={18} className="text-ofbusiness-green" />
                    Interest Income
                  </h4>
                  <p className="text-sm text-ofbusiness-gray">
                    Interest earned on purchase financing provided to SMEs, typically for a period of 3-6 months. This creates a recurring and predictable revenue stream with better margins than our transaction fees.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md animate-slide-in border-l-4 border-ofbusiness-green" style={{animationDelay: '0.2s'}}>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-ofbusiness-dark">
                <LayoutGrid className="text-ofbusiness-green" size={20} />
                How We Make Money
              </h3>
              
              <ul className="space-y-3 text-ofbusiness-gray">
                <li className="flex items-start gap-2">
                  <span className="text-ofbusiness-green font-bold">•</span>
                  <span><span className="font-medium text-ofbusiness-dark">Margins on Material Supply:</span> We buy materials in bulk from manufacturers and pass ~50% of the margin to our customers, retaining the remainder as profit.</span>
                </li>
                
                <li className="flex items-start gap-2">
                  <span className="text-ofbusiness-green font-bold">•</span>
                  <span><span className="font-medium text-ofbusiness-dark">Interest Spread on Financing:</span> We maintain a healthy spread between our borrowing cost and the interest we charge to SMEs.</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Road to Profitability Section */}
          <div className="space-y-6">
            <div className="gradient-card animate-slide-in" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-bg-secondary">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-xl text-ofbusiness-brown">Road to Profitability</h3>
              </div>
              
              <div className="mb-4">
                <p className="text-ofbusiness-dark font-medium italic">
                  Expecting to be profitable by the next financial year
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <BarChart3 size={24} className="text-ofbusiness-brown mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-ofbusiness-dark">Automating Backend Operations</h4>
                    <p className="text-sm text-ofbusiness-gray mt-1">
                      We are planning to automate more backend ops via our in-house ERP, OASYS, reducing operational costs and increasing efficiency.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Lightbulb size={24} className="text-ofbusiness-brown mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-ofbusiness-dark">B2B Tender Discovery Platform</h4>
                    <p className="text-sm text-ofbusiness-gray mt-1">
                      We are building a B2B tender discovery platform designed to help SMEs and businesses discover, track, and win government and private tenders across India. This will help significantly lower our LTV/CAC ratio.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Banknote size={24} className="text-ofbusiness-brown mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-ofbusiness-dark">High-Margin Sector Expansion</h4>
                    <p className="text-sm text-ofbusiness-gray mt-1">
                      We are planning to expand to higher-margin and underbanked sectors, creating new revenue streams and improving our overall profit margins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-center">
              <img 
                src="https://img.freepik.com/free-vector/profit-growth-concept-illustration_114360-8760.jpg" 
                alt="Road to Profitability" 
                className="w-4/5 h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="slide-footer">©DSSE</div>
    </div>
  );
};

export default RevenueSlide;
