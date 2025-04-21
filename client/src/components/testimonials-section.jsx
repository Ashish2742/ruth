import { Quote } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import { testimonials } from "@/lib/utils";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[var(--background-alt)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[var(--gold)]/10"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 rounded-full bg-[var(--gold)]/20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-[var(--primary)]/10"></div>
      
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <SectionHeader title="Testimonials" centered />
          
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6 text-[var(--text-dark)]">
            Success <span className="text-[var(--gold)]">Stories</span>
          </h2>
          
          <p className="text-[var(--text-light)] text-lg">
            Hear from our candidates who have successfully secured global positions through Ruth International's training and placement services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-sm transition-all duration-300 hover:shadow-lg relative group"
            >
              <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3">
                <div className="bg-[var(--gold)]/10 rounded-full p-4 text-[var(--gold)] w-16 h-16 flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <Quote className="w-8 h-8" />
                </div>
              </div>
              
              <div className="mb-6 pt-4">
                <p className="text-[var(--text-dark)] italic">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1][0]}
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-dark)]">{testimonial.name}</h4>
                  <p className="text-sm text-[var(--text-light)]">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA card */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] rounded-xl transform rotate-1 scale-[1.01] opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] rounded-xl"></div>
          
          <div className="relative z-10 p-10 md:p-16 text-center text-white">
            <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Global Career Journey?
            </h3>
            
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Join Ruth International's network of successful professionals. Our team is ready to guide you through the training and placement process.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#apply" className="btn-secondary">
                Apply Now
              </a>
              <a href="#contact" className="btn-outline border-white text-white hover:bg-white/10">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}