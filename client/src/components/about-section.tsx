import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="bg-[#1A2348] absolute -top-6 -left-6 w-64 h-64 rounded-tl-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                alt="Professional team at Ruth International" 
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
              <div className="bg-[#D4AF37] absolute -bottom-6 -right-6 w-64 h-64 rounded-br-lg"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full md:w-1/2">
            <SectionHeader title="About Us" />
            
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-6 text-[#1A2348]">
              Your Gateway to Global Career Success
            </h2>
            
            <p className="text-gray-700 mb-6">
              Established in 2015, Ruth International has earned a reputation for excellence in career placement and professional development. With a focus on maritime, hospitality, security, and IT sectors, we've successfully placed over 1000 candidates in prestigious positions worldwide.
            </p>
            
            <p className="text-gray-700 mb-8">
              Our comprehensive approach combines industry-specific training, certification courses, and direct placement services to ensure our candidates are well-prepared for global opportunities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-[#1A2348] rounded-full p-2 mr-3 flex-shrink-0">
                  <Check className="text-[#D4AF37] h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Industry Connections</h4>
                  <p className="text-gray-600 text-sm">Partnerships with leading global employers</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#1A2348] rounded-full p-2 mr-3 flex-shrink-0">
                  <Check className="text-[#D4AF37] h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Certified Training</h4>
                  <p className="text-gray-600 text-sm">Internationally recognized qualifications</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#1A2348] rounded-full p-2 mr-3 flex-shrink-0">
                  <Check className="text-[#D4AF37] h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Career Guidance</h4>
                  <p className="text-gray-600 text-sm">Personalized mentorship and support</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#1A2348] rounded-full p-2 mr-3 flex-shrink-0">
                  <Check className="text-[#D4AF37] h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Global Opportunities</h4>
                  <p className="text-gray-600 text-sm">Placements across multiple continents</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="inline-flex items-center text-[#1A2348] hover:text-[#D4AF37] transition duration-300 font-medium">
              <span>Learn more about our approach</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
