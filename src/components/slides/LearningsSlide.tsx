
import React from 'react';
import { Lightbulb, Zap } from 'lucide-react';

const LearningsSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content relative">
        {/* Background image with blur effect */}
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/business-people-discussing-ideas_53876-101583.jpg')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative z-10">
          <h2 className="slide-title">Learnings & Reflections</h2>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-ofbusiness-green">
              <h3 className="text-xl font-bold mb-4 text-ofbusiness-green flex items-center gap-2">
                <Lightbulb className="text-ofbusiness-green" />
                Key Learnings
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-ofbusiness-green/10 rounded-full p-2 text-ofbusiness-green font-bold mt-1">1</div>
                  <p className="text-ofbusiness-dark">
                    We learned that acting as a procurement aggregator truly allowed us to negotiate better terms with raw material suppliers. By pooling demand from SMEs, we were able to secure discounts that no single SME could obtain on its own. Passing on 50% of our margins not only built trust but also created a compelling value proposition for our customers.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-ofbusiness-green/10 rounded-full p-2 text-ofbusiness-green font-bold mt-1">2</div>
                  <p className="text-ofbusiness-dark">
                    A significant portion of our SMEs needed working capital to manage their operations. Our decision to offer purchase financing—while not mandatory for all—proved crucial in addressing cash flow issues. However, we also learned that managing credit risk is as important as securing a good discount rate. Ensuring robust credit checks and risk management was fundamental in maintaining a healthy portfolio.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-ofbusiness-brown">
              <h3 className="text-xl font-bold mb-4 text-ofbusiness-brown flex items-center gap-2">
                <Zap className="text-ofbusiness-brown" />
                What Would We Have Done Differently?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-ofbusiness-brown/10 rounded-full p-2 text-ofbusiness-brown font-bold mt-1">1</div>
                  <p className="text-ofbusiness-dark">
                    Strengthening our relationship management with suppliers—even beyond the bulk-order negotiations—could have further optimized our logistics and delivery performance. A more integrated supplier relationship management system might have helped in aligning production and delivery schedules, reducing delays.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-ofbusiness-brown/10 rounded-full p-2 text-ofbusiness-brown font-bold mt-1">2</div>
                  <p className="text-ofbusiness-dark">
                    We would built a better customer acquisition tool/platform that reduces our LTV-to-CAC ratio, something like a universal platform to list tenders, that not only helps the customers who can use it for free, but it gives us very valuable data and upsells them to raw material procurement through OfBusiness.
                  </p>
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

export default LearningsSlide;
