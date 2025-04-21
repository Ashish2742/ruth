import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import ContactForm from "@/components/forms/contact-form";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-[var(--background-alt)]"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[var(--gold)]/10"></div>
      
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2 animate-fade-in">
            <SectionHeader title="Contact Us" />
            
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6 text-[var(--text-dark)]">
              Get in <span className="text-[var(--gold)]">Touch</span>
            </h2>
            
            <p className="text-[var(--text-light)] text-lg mb-10">
              Have questions about our programs or placement services? Our team is here to provide you with the information you need to make informed decisions about your global career journey.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-[var(--primary)]/10 rounded-full p-3 mr-4 flex-shrink-0">
                  <MapPin className="text-[var(--primary)] h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)] mb-1">Our Location</h4>
                  <p className="text-[var(--text-light)]">1234 Career Avenue, Mumbai, Maharashtra 400001, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[var(--primary)]/10 rounded-full p-3 mr-4 flex-shrink-0">
                  <Mail className="text-[var(--primary)] h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)] mb-1">Email Us</h4>
                  <p className="text-[var(--text-light)]">info@ruthinternational.com</p>
                  <p className="text-[var(--text-light)]">careers@ruthinternational.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[var(--primary)]/10 rounded-full p-3 mr-4 flex-shrink-0">
                  <Phone className="text-[var(--primary)] h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)] mb-1">Call Us</h4>
                  <p className="text-[var(--text-light)]">+91 98765 43210</p>
                  <p className="text-[var(--text-light)]">+91 87654 32109</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[var(--primary)]/10 rounded-full p-3 mr-4 flex-shrink-0">
                  <Clock className="text-[var(--primary)] h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)] mb-1">Office Hours</h4>
                  <p className="text-[var(--text-light)]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-[var(--text-light)]">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[var(--background-alt)] p-6 rounded-lg">
              <h4 className="font-semibold text-[var(--text-dark)] mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--primary)] hover:bg-[var(--gold)] hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--primary)] hover:bg-[var(--gold)] hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--primary)] hover:bg-[var(--gold)] hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--primary)] hover:bg-[var(--gold)] hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-slide-up">
            <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-xl">
              <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-6 text-[var(--text-dark)]">
                Send us a Message
              </h3>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}