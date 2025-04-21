import { ArrowRight, Clock } from "lucide-react";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";
import { courses } from "@/lib/utils";

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeader title="Our Courses" centered />
          
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-6 text-[#1A2348]">
            Comprehensive Training Programs
          </h2>
          
          <p className="text-gray-700">
            We offer specialized courses designed to equip you with the skills and certifications required for international career opportunities. Our training programs meet global industry standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-48 bg-[#1A2348] relative overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A2348] to-transparent h-1/2"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[#D4AF37] font-semibold">{course.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-['Playfair_Display'] text-xl font-bold mb-3 text-[#1A2348]">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {course.duration}
                  </span>
                  <a 
                    href="#apply" 
                    className="text-[#D4AF37] hover:text-[#B7972A] font-medium transition duration-300 flex items-center"
                  >
                    Learn more 
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-[#1A2348] hover:bg-[#2A3460] text-white font-medium">
            <span>View All Courses</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
