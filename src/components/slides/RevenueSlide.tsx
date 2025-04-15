
import React from 'react';
import { BarChart, Banknote, Percent, TrendingUp, BarChart3, Lightbulb } from 'lucide-react';

const RevenueSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content relative">
        {/* Background image with blur effect */}
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-confident-professional-businesswoman-cfo-company-founder-showing-presentation-pointing-finance-report-office_1258-59194.jpg')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative z-10">
          <h2 className="slide-title">Revenue & Profit Streams</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Revenue Streams Section */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-ofbusiness-green animate-slide-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-bg-primary">
                    <BarChart className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-xl text-ofbusiness-green">Revenue Streams</h3>
                </div>
                
                <ul className="space-y-4 text-ofbusiness-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-ofbusiness-green font-bold">•</span>
                    <span><span className="font-medium text-ofbusiness-dark">Margins on Material Supply:</span> We buy materials in bulk from manufacturers and pass ~50% of the margin to our customers, retaining the remainder as profit.</span>
                  </li>
                  
                  <li className="flex items-start gap-2">
                    <span className="text-ofbusiness-green font-bold">•</span>
                    <span><span className="font-medium text-ofbusiness-dark">Interest Spread on Financing:</span> We maintain a healthy spread between our borrowing cost and the interest we charge to SMEs for purchase financing (typically 3-6 months period).</span>
                  </li>
                </ul>
                
                <div className="mt-6 flex justify-center">
                  <img 
                    src="https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg" 
                    alt="Revenue Model" 
                    className="h-32 w-auto rounded-lg shadow-sm border border-gray-100"
                  />
                </div>
              </div>
            </div>
            
            {/* Road to Profitability Section */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-ofbusiness-brown animate-slide-in">
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
                  <div className="flex items-start gap-3">
                    <BarChart3 size={24} className="text-ofbusiness-brown mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-ofbusiness-gray">
                        We are planning to automate more backend ops via our in-house ERP, OASYS, reducing operational costs and increasing efficiency.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Lightbulb size={24} className="text-ofbusiness-brown mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-ofbusiness-gray">
                        We are building a B2B tender discovery platform designed to help SMEs and businesses discover, track, and win government and private tenders across India. This will help significantly lower our LTV/CAC ratio.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Banknote size={24} className="text-ofbusiness-brown mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-ofbusiness-gray">
                        We are planning to expand to higher-margin and underbanked sectors, creating new revenue streams and improving our overall profit margins.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <img 
                    src="https://img.freepik.com/free-vector/profit-growth-concept-illustration_114360-8760.jpg" 
                    alt="Road to Profitability" 
                    className="h-32 w-auto rounded-lg shadow-sm border border-gray-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-footer">©DSSE</div>
    </div>
  );
};

export default RevenueSlide;
