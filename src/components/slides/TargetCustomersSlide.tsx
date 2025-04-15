
import React from 'react';
import { Factory, Building, Users, MapPin, Target, TrendingUp, Truck, Coins } from 'lucide-react';

const TargetCustomersSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content relative">
        {/* Background image with blur effect */}
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/medium-shot-man-working-factory_23-2149058253.jpg')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative z-10">
          <h2 className="slide-title">Target Customers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primary Customer Segment - Takes 2/3 of the space */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-ofbusiness-green animate-slide-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-bg-primary">
                    <Factory size={24} />
                  </div>
                  <h3 className="font-semibold text-xl text-ofbusiness-green">Manufacturing SMEs</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Target className="text-ofbusiness-green mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium text-ofbusiness-dark">Business Profile</h4>
                        <ul className="space-y-2 text-ofbusiness-gray mt-2">
                          <li className="flex items-start gap-2">
                            <span className="text-ofbusiness-green font-bold">•</span>
                            <span>Turnover of ₹10-1000 crores annually</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-ofbusiness-green font-bold">•</span>
                            <span>Industries: Steel, TMT, Chemicals, Petrochemicals, Polymers, Agri-products</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-ofbusiness-green font-bold">•</span>
                            <span>Regular procurement needs with recurring purchases</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="text-ofbusiness-green mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium text-ofbusiness-dark">Location Focus</h4>
                        <div className="grid grid-cols-2 gap-2 text-ofbusiness-gray mt-2">
                          <ul className="space-y-1">
                            <li>• Delhi-NCR</li>
                            <li>• Haryana</li>
                            <li>• Uttar Pradesh</li>
                            <li>• Uttarakhand</li>
                          </ul>
                          <ul className="space-y-1">
                            <li>• Tamil Nadu (Trichy)</li>
                            <li>• Andhra Pradesh</li>
                            <li>• Telangana</li>
                            <li>• Karnataka</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Users className="text-ofbusiness-green mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium text-ofbusiness-dark">Pain Points</h4>
                        <ul className="space-y-2 text-ofbusiness-gray mt-2">
                          <li className="flex items-start gap-2">
                            <span className="text-ofbusiness-green font-bold">•</span>
                            <span>Struggle with high prices of raw materials due to fragmented supply chain</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-ofbusiness-green font-bold">•</span>
                            <span>Frustrated by unreliable delivery and quality issues</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-ofbusiness-green font-bold">•</span>
                            <span>Dependent on expensive local lenders with predatory rates</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-ofbusiness-green font-bold">•</span>
                            <span>Seeking transparent, reliable procurement solutions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Secondary Customer Segment - Takes 1/3 of the space */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-ofbusiness-brown animate-slide-in" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-bg-secondary">
                    <Building size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-ofbusiness-brown">Raw Material Manufacturers</h3>
                </div>
                
                <div className="space-y-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Truck className="text-ofbusiness-brown mt-1 flex-shrink-0" size={18} />
                    <div>
                      <h4 className="font-medium text-ofbusiness-dark">Supply Goals</h4>
                      <ul className="space-y-2 text-ofbusiness-gray mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-ofbusiness-brown font-bold">•</span>
                          <span>Looking to expand distribution networks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-ofbusiness-brown font-bold">•</span>
                          <span>Want to reach SME markets without credit risk</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Coins className="text-ofbusiness-brown mt-1 flex-shrink-0" size={18} />
                    <div>
                      <h4 className="font-medium text-ofbusiness-dark">Pain Points</h4>
                      <ul className="space-y-2 text-ofbusiness-gray mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-ofbusiness-brown font-bold">•</span>
                          <span>High sales and collection costs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-ofbusiness-brown font-bold">•</span>
                          <span>Difficulty accessing fragmented SME market</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-ofbusiness-brown font-bold">•</span>
                          <span>Payment collection challenges</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="https://img.freepik.com/free-photo/male-worker-factory_23-2148336703.jpg" 
                  alt="Factory Worker" 
                  className="h-40 rounded-lg shadow-md object-cover"
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

export default TargetCustomersSlide;
