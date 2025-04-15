
import React from 'react';
import { 
  Zap, 
  Wallet, 
  TrendingDown, 
  Clock, 
  Truck, 
  Search, 
  ShieldCheck 
} from 'lucide-react';

const ValuePropositionSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content">
        <h2 className="slide-title">Value Proposition</h2>
        
        <div className="flex flex-col gap-6">
          <div className="text-center mb-4 bg-gradient-to-r from-ofbusiness-green/10 to-ofbusiness-brown/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-ofbusiness-dark">
              "OfBusiness is an online B2B platform for SMEs providing raw materials at competitive rates with assured delivery and better credit lines"
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-ofbusiness-green animate-slide-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-bg-primary">
                  <TrendingDown size={20} />
                </div>
                <h3 className="font-semibold">Competitive Pricing</h3>
              </div>
              <p className="text-sm text-ofbusiness-gray">Transparent bidding system where multiple suppliers compete to offer the best prices. OfBusiness passes ~50% of margins to customers.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-ofbusiness-green animate-slide-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-bg-primary">
                  <Wallet size={20} />
                </div>
                <h3 className="font-semibold">Credit Financing</h3>
              </div>
              <p className="text-sm text-ofbusiness-gray">Up to 45-day credit period with competitive interest rates, helping SMEs manage cash flows and reduce dependency on local lenders.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-ofbusiness-green animate-slide-in" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-bg-primary">
                  <Truck size={20} />
                </div>
                <h3 className="font-semibold">Seamless Logistics</h3>
              </div>
              <p className="text-sm text-ofbusiness-gray">Enhanced supply chain efficiency by removing middlemen between manufacturers and SMEs, ensuring on-time delivery with tracking capabilities.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-ofbusiness-brown animate-slide-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-bg-secondary">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-semibold">Quality Assurance</h3>
              </div>
              <p className="text-sm text-ofbusiness-gray">Vetted suppliers and quality checks ensure materials meet specifications, reducing quality-related risks for SMEs.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-ofbusiness-brown animate-slide-in" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-bg-secondary">
                  <Search size={20} />
                </div>
                <h3 className="font-semibold">Business Opportunities</h3>
              </div>
              <p className="text-sm text-ofbusiness-gray">Aggregation of government and private tenders, helping SMEs discover new business opportunities to grow their revenue.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-ofbusiness-brown animate-slide-in" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-bg-secondary">
                  <Zap size={20} />
                </div>
                <h3 className="font-semibold">Simplified Ordering</h3>
              </div>
              <p className="text-sm text-ofbusiness-gray">Easy RFQ submission, bidding, negotiation, and order placement through a streamlined digital platform with minimal paperwork.</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg mt-4 animate-fade-in border border-ofbusiness-green/20">
            <h3 className="font-semibold text-center mb-4 text-ofbusiness-dark">Customer Journey</h3>
            
            <div className="flex flex-wrap justify-between gap-4 text-center">
              <div className="flex-1 min-w-[150px]">
                <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-3 border-2 border-ofbusiness-green shadow-md">
                  <span className="font-bold text-ofbusiness-green text-xl">1</span>
                </div>
                <p className="text-sm font-medium">Submit RFQ for raw materials</p>
              </div>
              
              <div className="flex-1 min-w-[150px]">
                <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-3 border-2 border-ofbusiness-green shadow-md">
                  <span className="font-bold text-ofbusiness-green text-xl">2</span>
                </div>
                <p className="text-sm font-medium">Receive competitive bids from suppliers</p>
              </div>
              
              <div className="flex-1 min-w-[150px]">
                <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-3 border-2 border-ofbusiness-green shadow-md">
                  <span className="font-bold text-ofbusiness-green text-xl">3</span>
                </div>
                <p className="text-sm font-medium">Choose supplier and payment method</p>
              </div>
              
              <div className="flex-1 min-w-[150px]">
                <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-3 border-2 border-ofbusiness-green shadow-md">
                  <span className="font-bold text-ofbusiness-green text-xl">4</span>
                </div>
                <p className="text-sm font-medium">Track order and receive on-time delivery</p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <img 
                src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg" 
                alt="Business Partnership" 
                className="w-1/2 h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="slide-footer">©DSSE</div>
    </div>
  );
};

export default ValuePropositionSlide;
