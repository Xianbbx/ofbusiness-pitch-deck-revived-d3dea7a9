
import React from 'react';
import { 
  Zap, 
  Wallet, 
  TrendingDown, 
  Truck, 
  ShieldCheck 
} from 'lucide-react';

const ValuePropositionSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content relative">
        {/* Background image with blur effect */}
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/warehouse-worker-scanning-package_53876-94939.jpg')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative z-10">
          <h2 className="slide-title">Value Proposition</h2>
          
          <div className="highlight-box">
            <h3 className="text-xl font-semibold text-ofbusiness-dark mb-4">
              What is it?
            </h3>
            <p className="text-xl font-bold text-center px-4 py-2 bg-white rounded-lg shadow-sm border border-ofbusiness-green/20">
              "OfBusiness is an online B2B e-commerce platform for SMEs, primarily in Delhi-NCR and Trichy region, who need raw materials like steel, TMT, chemicals, polymers at a rate cheaper than local suppliers and with assured delivery, as well as better credit lines."
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <span className="question-tag bg-red-500">What is it?</span>
              <span className="question-tag bg-blue-500">Who is it for?</span>
              <span className="question-tag bg-green-500">Why is it valuable?</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-ofbusiness-green animate-slide-in">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-bg-primary">
                  <TrendingDown size={20} />
                </div>
                <h3 className="font-semibold">Competitive Pricing</h3>
              </div>
              <p className="text-sm text-ofbusiness-gray">Transparent bidding system where multiple suppliers compete to offer the best prices. OfBusiness passes ~50% of margins to customers.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-ofbusiness-green animate-slide-in">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-bg-primary">
                  <Wallet size={20} />
                </div>
                <h3 className="font-semibold">Flexible Financing Options</h3>
              </div>
              <p className="text-sm text-ofbusiness-gray">Multiple payment options including Credit, Advance, Letters of Credit, Bank Guarantees, or Payment on Delivery - helping SMEs manage cash flows efficiently.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-ofbusiness-green animate-slide-in">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-bg-primary">
                  <Truck size={20} />
                </div>
                <h3 className="font-semibold">Seamless Logistics</h3>
              </div>
              <p className="text-sm text-ofbusiness-gray">Enhanced supply chain efficiency by removing middlemen between manufacturers and SMEs, ensuring on-time delivery with tracking capabilities.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-ofbusiness-brown animate-slide-in">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-bg-secondary">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-semibold">Quality Assurance</h3>
              </div>
              <p className="text-sm text-ofbusiness-gray">Vetted suppliers and quality checks ensure materials meet specifications, reducing quality-related risks for SMEs.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-footer">©DSSE</div>
    </div>
  );
};

export default ValuePropositionSlide;
