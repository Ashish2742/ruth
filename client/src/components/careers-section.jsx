import { ArrowRight, Check, Award, Globe, Briefcase } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import { careers } from "@/lib/utils";
import { FaShip, FaShieldAlt, FaHotel } from "react-icons/fa";

export default function CareersSection() {
  // Helper function to render the appropriate icon
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'ship':
        return <FaShip className="text-[var(--gold)] text-2xl" />;
      case 'shield-alt':
        return <FaShieldAlt className="text-[var(--gold)] text-2xl" />;
      case 'hotel':
        return <FaHotel className="text-[var(--gold)] text-2xl" />;
      default:
        return <Briefcase className="text-[var(--gold)] text-2xl" />;
    }
  };

  return (
    <section id="careers" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTguOTY4IDIuMTk4IDIuMlYzOGMwIDEuMjMyLS45NjggMi4yLTIuMTk4IDIuMkgxOGMtMS4yMyAwLTIuMTk4LS45NjgtMi4xOTgtMi4yVjIwLjJjMC0xLjIzMi45NjgtMi4yIDIuMTk4LTIuMmgxOHoiIHN0cm9rZT0iI2Q0YWYzNyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGZpbGw9IiNkNGFmMzciIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iMjciIGN5PSIyNyIgcj0iNCIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <SectionHeader title="Career Opportunities" centered />
          
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6 text-[var(--text-dark)]">
            Global <span className="text-[var(--gold)]">Employment</span> Opportunities
          </h2>
          
          <p className="text-[var(--text-light)] text-lg">
            Ruth International specializes in placing qualified candidates in prestigious positions worldwide. Our extensive network of employers ensures a perfect match for your career aspirations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          {careers.map((career) => (
            <div 
              key={career.id}
              className="group bg-white border border-gray-100 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:border-[var(--gold)] relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--background-alt)] rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="bg-[var(--primary)]/5 group-hover:bg-[var(--gold)]/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 transition-colors duration-300">
                  {renderIcon(career.icon)}
                </div>
                
                <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4 text-[var(--text-dark)] group-hover:text-[var(--gold)] transition-colors">
                  {career.title}
                </h3>
                
                <p className="text-[var(--text-light)] mb-6">
                  {career.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {career.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-[var(--gold)]/10 rounded-full p-1 mr-3 flex-shrink-0">
                        <Check className="text-[var(--gold)] h-4 w-4" />
                      </div>
                      <span className="text-[var(--text-dark)]">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`#${career.id}`}
                  className="inline-flex items-center text-[var(--primary)] hover:text-[var(--gold)] transition-colors font-medium"
                >
                  <span>View Positions</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-1 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--gold)]">
            <a href="#apply" className="btn-primary bg-white text-[var(--primary)] hover:bg-transparent hover:text-white">
              <span>Browse All Opportunities</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[var(--background-alt)] rounded-xl p-8 text-center flex flex-col items-center justify-center group hover:bg-[var(--primary)] transition-colors duration-500">
            <div className="bg-white p-4 rounded-full mb-4 group-hover:bg-[var(--gold)]/20 transition-colors">
              <Award className="h-8 w-8 text-[var(--gold)]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-dark)] group-hover:text-white transition-colors">1000+</h3>
            <p className="text-[var(--text-light)] group-hover:text-white/80 transition-colors">Successful Placements</p>
          </div>
          
          <div className="bg-[var(--background-alt)] rounded-xl p-8 text-center flex flex-col items-center justify-center group hover:bg-[var(--primary)] transition-colors duration-500">
            <div className="bg-white p-4 rounded-full mb-4 group-hover:bg-[var(--gold)]/20 transition-colors">
              <Briefcase className="h-8 w-8 text-[var(--gold)]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-dark)] group-hover:text-white transition-colors">6+</h3>
            <p className="text-[var(--text-light)] group-hover:text-white/80 transition-colors">Specialized Sectors</p>
          </div>
          
          <div className="bg-[var(--background-alt)] rounded-xl p-8 text-center flex flex-col items-center justify-center group hover:bg-[var(--primary)] transition-colors duration-500">
            <div className="bg-white p-4 rounded-full mb-4 group-hover:bg-[var(--gold)]/20 transition-colors">
              <Globe className="h-8 w-8 text-[var(--gold)]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-dark)] group-hover:text-white transition-colors">20+</h3>
            <p className="text-[var(--text-light)] group-hover:text-white/80 transition-colors">Global Partners</p>
          </div>
        </div>
      </Container>
    </section>
  );
}