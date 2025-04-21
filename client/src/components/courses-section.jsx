import { ArrowRight, Clock, BookOpen } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import { courses } from "@/lib/utils";

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16 md:py-20 bg-[var(--background-alt)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-24 right-0 w-96 h-96 rounded-full bg-[var(--gold)]/5 blur-3xl"></div>
      <div className="absolute top-1/2 left-10 w-64 h-64 rounded-full bg-[var(--gold)]/5 blur-3xl"></div>
      
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 animate-fade-in">
          <SectionHeader title="Our Courses" centered />
          
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-[var(--text-dark)]">
            Comprehensive <span className="text-[var(--gold)]">Training</span> Programs
          </h2>
          
          <p className="text-[var(--text-light)] text-base sm:text-lg px-4 sm:px-0">
            We offer specialized courses designed to equip you with the skills and certifications required for international career opportunities. Our training programs meet global industry standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-slide-up">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl"
            >
              <div className="h-48 sm:h-56 bg-[var(--primary)] relative overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/60 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <span className="inline-block px-3 py-1 bg-[var(--gold)] text-[var(--primary)] rounded-full text-xs font-semibold">
                    {course.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[var(--text-dark)] group-hover:text-[var(--gold)] transition-colors">
                  {course.title}
                </h3>
                <p className="text-[var(--text-light)] text-sm sm:text-base mb-4 sm:mb-6">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
                  <span className="text-xs sm:text-sm text-[var(--text-light)] flex items-center">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-[var(--gold)]" />
                    {course.duration}
                  </span>
                  <span className="text-xs sm:text-sm text-[var(--text-light)] flex items-center">
                    <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-[var(--gold)]" />
                    Certificate
                  </span>
                </div>
                <a 
                  href="#apply" 
                  className="mt-4 sm:mt-6 inline-flex items-center text-[var(--gold)] hover:text-[var(--text-dark)] transition-colors font-medium text-sm sm:text-base"
                >
                  Learn more 
                  <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 md:mt-16 text-center">
          <a href="#apply" className="btn-primary inline-block text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6">
            <span>View All Courses</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </Container>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,85.3C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}