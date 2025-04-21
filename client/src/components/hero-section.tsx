import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FaShip, FaHotel, FaLaptopCode } from "react-icons/fa";
import { scrollToElement } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-[#1A2348] text-white">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1496889472858-9a5a838a7b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
      <Container className="py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-[#D4AF37]">International</span> Career Opportunities
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Since 2015, we've successfully placed over 1000 candidates in prestigious positions worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => scrollToElement("courses")} 
              className="bg-[#D4AF37] hover:bg-[#E6C755] text-[#1A2348] font-semibold"
            >
              <span>Explore Courses</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              onClick={() => scrollToElement("apply")} 
              variant="outline" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Service Highlights */}
      <div className="bg-white/10 backdrop-blur-sm py-8 relative z-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="bg-[#D4AF37] rounded-full p-3 mr-4 flex-shrink-0">
                <FaShip className="text-[#1A2348] text-xl" />
              </div>
              <div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-2">Maritime Careers</h3>
                <p className="text-gray-200">Premium opportunities in Merchant Navy and Cruise Ships</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#D4AF37] rounded-full p-3 mr-4 flex-shrink-0">
                <FaHotel className="text-[#1A2348] text-xl" />
              </div>
              <div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-2">Hospitality Excellence</h3>
                <p className="text-gray-200">Positions in international luxury hotels worldwide</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#D4AF37] rounded-full p-3 mr-4 flex-shrink-0">
                <FaLaptopCode className="text-[#1A2348] text-xl" />
              </div>
              <div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-2">IT Opportunities</h3>
                <p className="text-gray-200">Career advancement in the technology sector</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
