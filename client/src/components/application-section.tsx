import { useState } from "react";
import Container from "@/components/ui/container";
import AdmissionForm from "@/components/forms/admission-form";
import CareerForm from "@/components/forms/career-form";
import { Check } from "lucide-react";
import { FaTrophy, FaUserTie, FaGlobeAsia } from "react-icons/fa";

export default function ApplicationSection() {
  const [activeTab, setActiveTab] = useState<"admission" | "career">("admission");
  
  return (
    <section id="apply" className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-xl p-8">
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold mb-6 text-[#1A2348]">
              Apply for {activeTab === "admission" ? "Admission" : "Career"}
            </h2>
            
            <div className="mb-6">
              <div className="flex space-x-2 mb-4">
                <button 
                  className={`flex-1 py-2 text-center text-[#1A2348] ${activeTab === "admission" ? "bg-[#D4AF37]" : "bg-gray-200"} rounded-md font-medium`}
                  onClick={() => setActiveTab("admission")}
                >
                  Admission
                </button>
                <button 
                  className={`flex-1 py-2 text-center text-[#1A2348] ${activeTab === "career" ? "bg-[#D4AF37]" : "bg-gray-200"} rounded-md font-medium`}
                  onClick={() => setActiveTab("career")}
                >
                  Career
                </button>
              </div>
              
              {activeTab === "admission" ? <AdmissionForm /> : <CareerForm />}
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-[#D4AF37]"></div>
              <p className="ml-4 text-[#1A2348] font-medium uppercase tracking-wider">Join Our Network</p>
            </div>
            
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-6 text-[#1A2348]">
              Begin Your International Career Journey
            </h2>
            
            <p className="text-gray-700 mb-6">
              Whether you're seeking training or looking for direct placement, Ruth International provides the expertise and connections to launch your international career.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex mb-4">
                <div className="bg-[#1A2348] rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <FaTrophy className="text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2348] mb-1">Established Excellence</h3>
                  <p className="text-gray-600">Since 2015, we've been a trusted name in international placement services.</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                <div className="bg-[#1A2348] rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <FaUserTie className="text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2348] mb-1">Proven Track Record</h3>
                  <p className="text-gray-600">Over 1000 candidates successfully placed in prestigious positions worldwide.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-[#1A2348] rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <FaGlobeAsia className="text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2348] mb-1">Global Opportunities</h3>
                  <p className="text-gray-600">Access to positions across multiple countries and industries.</p>
                </div>
              </div>
            </div>
            
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-[#1A2348] p-4 rounded-lg text-center flex-1">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">1000+</div>
                <p className="text-white text-sm">Successful Placements</p>
              </div>
              
              <div className="bg-[#1A2348] p-4 rounded-lg text-center flex-1">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">6+</div>
                <p className="text-white text-sm">Specialized Sectors</p>
              </div>
              
              <div className="bg-[#1A2348] p-4 rounded-lg text-center flex-1">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">20+</div>
                <p className="text-white text-sm">Global Partners</p>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
