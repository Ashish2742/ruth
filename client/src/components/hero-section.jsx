import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/container";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-[var(--primary)] to-[var(--primary-light)] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--gold)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[var(--gold)]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-[var(--gold)]/20 rounded-full blur-xl"></div>
      
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-3/5 animate-fade-in">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--gold)] mr-2"></span>
                <span className="text-sm text-[var(--gold)] font-medium">Established 2015</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Gateway to{" "}
                <span className="text-[var(--gold)] font-['Playfair_Display'] italic">Global Career</span>{" "}
                Success
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 md:pr-10">
                Ruth International specializes in placing qualified candidates in 
                prestigious positions worldwide with comprehensive training and placement services.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#apply" className="btn-secondary">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#about" className="btn-outline border-white text-white hover:bg-white/10 hover:text-white">
                  Learn More
                </a>
              </div>
              
              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--gold)] mb-1">1000+</div>
                  <p className="text-white/70 text-sm">Successful Placements</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--gold)] mb-1">6+</div>
                  <p className="text-white/70 text-sm">Specialized Sectors</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--gold)] mb-1">20+</div>
                  <p className="text-white/70 text-sm">Global Partners</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/5 animate-fade-in">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[var(--gold)]/30 rounded-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-[var(--gold)]/10 rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1559523182-a284c3fb7cff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                  alt="Ruth International professionals" 
                  className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[var(--primary)] to-transparent">
                  <div className="flex space-x-2">
                    {["STCW", "Merchant Navy", "IT Sector", "Security", "Hotel"].map((category, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-[var(--primary)]/60 backdrop-blur-sm text-[var(--gold)] rounded-full text-xs whitespace-nowrap"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
          <path d="M0,96L60,80C120,64,240,32,360,26.7C480,21,600,43,720,48C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}