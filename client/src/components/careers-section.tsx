import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";
import { careers } from "@/lib/utils";
import { FaShip, FaShieldAlt, FaHotel } from "react-icons/fa";

export default function CareersSection() {
  // Helper function to render the appropriate icon
  // const renderIcon = (iconName: string) => {
  //   switch (iconName) {
  //     case 'ship':
  //       return <FaShip className="text-[#1A2348] text-2xl" />;
  //     case 'shield-alt':
  //       return <FaShieldAlt className="text-[#1A2348] text-2xl" />;
  //     case 'hotel':
  //       return <FaHotel className="text-[#1A2348] text-2xl" />;
  //     default:
  //       return <FaShip className="text-[#1A2348] text-2xl" />;
  //   }
  // };

  return (
    <>
    </>
    // <section id="careers" className="py-16 md:py-24 bg-white">
    //   <Container>
    //     <div className="text-center max-w-3xl mx-auto mb-16">
    //       <SectionHeader title="Career Opportunities" centered />
          
    //       <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-6 text-[#1A2348]">
    //         Global Employment Opportunities
    //       </h2>
          
    //       <p className="text-gray-700">
    //         Ruth International specializes in placing qualified candidates in prestigious positions worldwide. Our extensive network of employers ensures a perfect match for your career aspirations.
    //       </p>
    //     </div>
        
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {careers.map((career) => (
    //         <div 
    //           key={career.id}
    //           className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]"
    //         >
    //           <div className="bg-[#1A2348]/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
    //             {renderIcon(career.icon)}
    //           </div>
              
    //           <h3 className="font-['Playfair_Display'] text-xl font-bold mb-3 text-[#1A2348]">{career.title}</h3>
    //           <p className="text-gray-600 mb-4">
    //             {career.description}
    //           </p>
              
    //           <ul className="space-y-2 mb-6">
    //             {career.benefits.map((benefit, index) => (
    //               <li key={index} className="flex items-start">
    //                 <Check className="text-[#D4AF37] mt-1 mr-2 h-4 w-4" />
    //                 <span className="text-gray-700">{benefit}</span>
    //               </li>
    //             ))}
    //           </ul>
              
    //           {/* <a 
    //             href={`#${career.id}`}
    //             className="text-[#1A2348] hover:text-[#D4AF37] transition duration-300 font-medium inline-flex items-center"
    //           >
    //             <span>View Positions</span>
    //             <ArrowRight className="ml-2 h-4 w-4" />
    //           </a> */}
    //         </div>
    //       ))}
    //     </div>
        
    //     <div className="mt-16 text-center">
    //       <Button className="bg-[#1A2348] hover:bg-[#2A3460] text-white font-medium">
    //         <span>Browse All Opportunities</span>
    //         <ArrowRight className="ml-2 h-4 w-4" />
    //       </Button>
    //     </div>
    //   </Container>
    // </section>
  );
}
