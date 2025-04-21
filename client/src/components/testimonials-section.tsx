import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import { testimonials } from "@/lib/utils";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#1A2348] text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeader title="Success Stories" color="gold" centered />
          
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-6">
            What Our Candidates Say
          </h2>
          
          <p className="text-gray-300">
            Hear from individuals who have successfully launched their international careers through Ruth International.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#2A3460] rounded-lg p-6 relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-[#1A2348] rounded-full w-10 h-10 flex items-center justify-center">
                <Quote className="h-6 w-6" />
              </div>
              
              <p className="text-gray-300 mb-6 pt-4 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <Avatar className="h-12 w-12 bg-gray-300 mr-4">
                  <AvatarFallback className="bg-gray-300 text-gray-600">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-[#D4AF37]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
