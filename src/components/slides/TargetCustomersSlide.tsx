
import React from 'react';
import { Factory, Map, TrendingUp, Users } from 'lucide-react';

const TargetCustomersSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content">
        <h2 className="slide-title">Target Customers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-ofbusiness-light p-6 rounded-lg animate-slide-in">
              <div className="flex items-center gap-3 mb-4">
                <Factory className="text-ofbusiness-green" size={24} />
                <h3 className="font-semibold text-lg">Manufacturing SMEs</h3>
              </div>
              
              <ul className="space-y-2 text-ofbusiness-gray">
                <li className="flex items-start gap-2">
                  <span className="text-ofbusiness-green font-bold">•</span>
                  <span>Turnover of ₹10-100 crores annually</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ofbusiness-green font-bold">•</span>
                  <span>Industries: Steel, TMT, Chemicals, Petrochemicals, Polymers, Agri-products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ofbusiness-green font-bold">•</span>
                  <span>Regular procurement needs with recurring purchases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ofbusiness-green font-bold">•</span>
                  <span>Need for working capital solutions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-ofbusiness-light p-6 rounded-lg animate-slide-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-ofbusiness-green" size={24} />
                <h3 className="font-semibold text-lg">Supplier Segment</h3>
              </div>
              
              <ul className="space-y-2 text-ofbusiness-gray">
                <li className="flex items-start gap-2">
                  <span className="text-ofbusiness-green font-bold">•</span>
                  <span>Raw material manufacturers seeking wider distribution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ofbusiness-green font-bold">•</span>
                  <span>Suppliers looking to reduce sales and collection costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ofbusiness-green font-bold">•</span>
                  <span>Manufacturers wanting access to SME market without credit risk</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white border border-ofbusiness-green p-6 rounded-lg animate-slide-in" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-3 mb-4">
                <Map className="text-ofbusiness-green" size={24} />
                <h3 className="font-semibold text-lg">Geographical Focus</h3>
              </div>
              
              <p className="mb-3 text-ofbusiness-gray">Initial cluster-based approach with focus on:</p>
              
              <div className="grid grid-cols-2 gap-2 text-ofbusiness-gray">
                <div>
                  <ul className="space-y-1">
                    <li>• Delhi-NCR</li>
                    <li>• Haryana</li>
                    <li>• Uttar Pradesh</li>
                    <li>• Uttarakhand</li>
                    <li>• Punjab</li>
                    <li>• Madhya Pradesh</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-1">
                    <li>• Andhra Pradesh</li>
                    <li>• Telangana</li>
                    <li>• Tamil Nadu (Trichy)</li>
                    <li>• Karnataka</li>
                    <li>• Chhattisgarh</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-ofbusiness-green p-6 rounded-lg animate-slide-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-ofbusiness-green" size={24} />
                <h3 className="font-semibold text-lg">Customer Persona</h3>
              </div>
              
              <div className="space-y-3 text-ofbusiness-gray">
                <p className="font-medium">SME Owner/Procurement Manager who is:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-ofbusiness-green font-bold">•</span>
                    <span>Frustrated with the inefficiencies of traditional procurement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ofbusiness-green font-bold">•</span>
                    <span>Looking for better financing options than local lenders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ofbusiness-green font-bold">•</span>
                    <span>Seeking reliable, quality-assured material suppliers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ofbusiness-green font-bold">•</span>
                    <span>Open to technology solutions that can save time and money</span>
                  </li>
                </ul>
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
