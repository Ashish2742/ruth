import { useState } from "react";
import { ArrowRight, Check, BookOpen, Briefcase } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import AdmissionForm from "@/components/forms/admission-form";
import CareerForm from "@/components/forms/career-form";

export default function ApplicationSection() {
  // Tab state for form selection
  const [activeTab, setActiveTab] = useState("admission");

  return (
    <section id="apply" className="py-16 md:py-20 bg-[var(--primary)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[var(--primary-dark)] opacity-50"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-[var(--gold)]/10 animate-pulse-slow"></div>
      
      <Container>
        <div className="flex flex-col lg:flex-row items-start gap-10 md:gap-16">
          <div className="w-full lg:w-1/2 text-white animate-fade-in">
            <SectionHeader title="Apply Now" color="gold" />
            
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
              Start Your <span className="text-[var(--gold)]">Journey</span> Today
            </h2>
            
            <p className="text-white/80 text-base sm:text-lg mb-6 md:mb-8">
              Ready to explore global career opportunities? Fill out our application form to begin your journey with Ruth International. Our team will review your qualifications and contact you to discuss the next steps.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-10">
              <div className="flex items-start">
                <div className="bg-[var(--gold)]/20 rounded-full p-2 mr-3 sm:mr-4 flex-shrink-0">
                  <Check className="text-[var(--gold)] h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base mb-0.5 sm:mb-1">Application Review</h4>
                  <p className="text-white/70 text-xs sm:text-sm">Our admissions team reviews applications within 3-5 business days.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[var(--gold)]/20 rounded-full p-2 mr-3 sm:mr-4 flex-shrink-0">
                  <Check className="text-[var(--gold)] h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base mb-0.5 sm:mb-1">Initial Consultation</h4>
                  <p className="text-white/70 text-xs sm:text-sm">Selected candidates receive a personal consultation to discuss career goals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[var(--gold)]/20 rounded-full p-2 mr-3 sm:mr-4 flex-shrink-0">
                  <Check className="text-[var(--gold)] h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base mb-0.5 sm:mb-1">Training Program</h4>
                  <p className="text-white/70 text-xs sm:text-sm">Admission to appropriate training programs based on career objectives.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[var(--gold)]/20 rounded-full p-2 mr-3 sm:mr-4 flex-shrink-0">
                  <Check className="text-[var(--gold)] h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base mb-0.5 sm:mb-1">Placement Support</h4>
                  <p className="text-white/70 text-xs sm:text-sm">Comprehensive assistance in securing global employment opportunities.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/20 mb-10 lg:mb-0">
              <h4 className="font-semibold text-white text-sm sm:text-base mb-2 sm:mb-3">Eligibility Requirements</h4>
              <ul className="text-white/80 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li className="flex items-center">
                  <ArrowRight className="text-[var(--gold)] h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span>Minimum educational qualification: High school diploma or equivalent</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-[var(--gold)] h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span>Age: 18 years and above</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-[var(--gold)] h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span>English language proficiency for international placements</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-[var(--gold)] h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span>Valid passport and ability to obtain work visas if required</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-slide-up">
            {/* Form Tabs */}
            <div className="flex mb-4 border-b border-white/20">
              <button 
                className={`px-4 py-3 flex items-center ${activeTab === 'admission' ? 'bg-white text-[var(--primary)]' : 'bg-[var(--primary)]/50 text-white'} rounded-t-lg mr-2 transition-colors duration-200 text-sm sm:text-base`}
                onClick={() => setActiveTab('admission')}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Admission Form
              </button>
              <button 
                className={`px-4 py-3 flex items-center ${activeTab === 'career' ? 'bg-white text-[var(--primary)]' : 'bg-[var(--primary)]/50 text-white'} rounded-t-lg transition-colors duration-200 text-sm sm:text-base`}
                onClick={() => setActiveTab('career')}
              >
                <Briefcase className="h-4 w-4 mr-2" />
                Career Form
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 relative">
              <div className="absolute -top-4 -left-4 bg-[var(--gold)] w-12 h-12 sm:w-16 sm:h-16 rounded-tl-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-8 sm:h-8">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              
              <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[var(--text-dark)] mt-2 sm:mt-4">
                {activeTab === 'admission' ? 'Application Form' : 'Career Application'}
              </h3>
              
              {activeTab === 'admission' ? (
                <div className="admission-form">
                  <div className="text-sm text-[var(--text-light)] mb-4">
                    <p>Please fill out the admission form with your details. Fields to include:</p>
                    <ul className="list-disc pl-5 mt-2 text-xs sm:text-sm space-y-1">
                      <li>Name</li>
                      <li>Position of interest</li>
                      <li>Educational background</li>
                    </ul>
                  </div>
                  <AdmissionForm />
                </div>
              ) : (
                <div className="career-form">
                  <div className="text-sm text-[var(--text-light)] mb-4">
                    <p>Please fill out the career application form with your details. Fields to include:</p>
                    <ul className="list-disc pl-5 mt-2 text-xs sm:text-sm space-y-1">
                      <li>Career interests</li>
                      <li>Experience level</li>
                      <li>Name and position</li>
                      <li>Educational qualifications</li>
                    </ul>
                  </div>
                  <CareerForm />
                </div>
              )}
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