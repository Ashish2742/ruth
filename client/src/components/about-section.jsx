import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[var(--background-alt)] opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[var(--background-alt)] opacity-50"></div>
      
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 md:w-64 md:h-64 bg-[var(--primary)] rounded-tl-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                alt="Professional team at Ruth International" 
                className="w-full h-auto object-cover rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 md:w-64 md:h-64 bg-[var(--gold)] rounded-br-2xl"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full md:w-1/2 animate-slide-up">
            <SectionHeader title="About Us" />
            
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6 text-[var(--text-dark)]">
              Your Gateway to 
              <span className="text-[var(--gold)]"> Global Success</span>
            </h2>
            
            <p className="text-[var(--text-light)] text-lg mb-6">
              Established in 2015, Ruth International has earned a reputation for excellence in career placement and professional development. With a focus on maritime, hospitality, security, and IT sectors, we've successfully placed over 1000 candidates in prestigious positions worldwide.
            </p>
            
            <p className="text-[var(--text-light)] text-lg mb-8">
              Our comprehensive approach combines industry-specific training, certification courses, and direct placement services to ensure our candidates are well-prepared for global opportunities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Industry Connections",
                  desc: "Partnerships with leading global employers"
                },
                {
                  title: "Certified Training",
                  desc: "Internationally recognized qualifications"
                },
                {
                  title: "Career Guidance",
                  desc: "Personalized mentorship and support"
                },
                {
                  title: "Global Opportunities",
                  desc: "Placements across multiple continents"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="bg-[var(--primary)] rounded-full p-2 mr-3 flex-shrink-0 transition-all duration-300 group-hover:bg-[var(--gold)]">
                    <Check className="text-white h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-[var(--text-dark)]">{item.title}</h4>
                    <p className="text-[var(--text-light)] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="inline-flex items-center text-[var(--primary)] hover:text-[var(--gold)] transition duration-300 font-medium">
              <span>Learn more about our approach</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}