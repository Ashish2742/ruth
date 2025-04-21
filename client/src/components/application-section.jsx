import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import AdmissionForm from "@/components/forms/admission-form";

export default function ApplicationSection() {
  return (
    <section id="apply" className="py-20 bg-[var(--primary)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[var(--primary-dark)] opacity-50"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-[var(--gold)]/10 animate-pulse-slow"></div>
      
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 text-white animate-fade-in">
            <SectionHeader title="Apply Now" color="gold" />
            
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6 text-white">
              Start Your <span className="text-[var(--gold)]">Journey</span> Today
            </h2>
            
            <p className="text-white/80 text-lg mb-8">
              Ready to explore global career opportunities? Fill out our application form to begin your journey with Ruth International. Our team will review your qualifications and contact you to discuss the next steps.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start">
                <div className="bg-[var(--gold)]/20 rounded-full p-2 mr-4 flex-shrink-0">
                  <Check className="text-[var(--gold)] h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Application Review</h4>
                  <p className="text-white/70">Our admissions team reviews applications within 3-5 business days.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[var(--gold)]/20 rounded-full p-2 mr-4 flex-shrink-0">
                  <Check className="text-[var(--gold)] h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Initial Consultation</h4>
                  <p className="text-white/70">Selected candidates receive a personal consultation to discuss career goals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[var(--gold)]/20 rounded-full p-2 mr-4 flex-shrink-0">
                  <Check className="text-[var(--gold)] h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Training Program</h4>
                  <p className="text-white/70">Admission to appropriate training programs based on career objectives.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[var(--gold)]/20 rounded-full p-2 mr-4 flex-shrink-0">
                  <Check className="text-[var(--gold)] h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Placement Support</h4>
                  <p className="text-white/70">Comprehensive assistance in securing global employment opportunities.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h4 className="font-semibold text-white mb-3">Eligibility Requirements</h4>
              <ul className="text-white/80 space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="text-[var(--gold)] h-4 w-4 mr-2" />
                  <span>Minimum educational qualification: High school diploma or equivalent</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-[var(--gold)] h-4 w-4 mr-2" />
                  <span>Age: 18 years and above</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-[var(--gold)] h-4 w-4 mr-2" />
                  <span>English language proficiency for international placements</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-[var(--gold)] h-4 w-4 mr-2" />
                  <span>Valid passport and ability to obtain work visas if required</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-slide-up">
            <div className="bg-white rounded-xl shadow-2xl p-8 relative">
              <div className="absolute -top-4 -left-4 bg-[var(--gold)] w-16 h-16 rounded-tl-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              
              <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-6 text-[var(--text-dark)] mt-4">
                Application Form
              </h3>
              
              <AdmissionForm />
            </div>
          </div>
        </div>
      </Container>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
          <path d="M0,32L48,48C96,64,192,96,288,101.3C384,107,480,85,576,80C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}