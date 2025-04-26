import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import ContactForm from "@/components/forms/contact-form";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp } from "react-icons/fa";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <SectionHeader title="Contact Us" />
            
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-6 text-[#1A2348]">
              Get in Touch With Our Team
            </h2>
            
            <p className="text-gray-700 mb-8">
              Have questions about our programs or career opportunities? Our team is ready to assist you with personalized guidance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-[#1A2348] rounded-full p-2 mr-3">
                    <FaMapMarkerAlt className="text-[#D4AF37]" />
                  </div>
                  <h4 className="font-medium">Office Address</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Office No. 05, Floor-1, Plot-17/19, Hira Building, Mint Road, Fort, Mumbai - 400001
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-[#1A2348] rounded-full p-2 mr-3">
                    <FaPhoneAlt className="text-[#D4AF37]" />
                  </div>
                  <h4 className="font-medium">Phone Numbers</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  +91 7888151116<br/>
                  +91 8591358938
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-[#1A2348] rounded-full p-2 mr-3">
                    <FaEnvelope className="text-[#D4AF37]" />
                  </div>
                  <h4 className="font-medium">Email Address</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  info@ruthinternational.com<br/>
                  careers@ruthinternational.com
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-[#1A2348] rounded-full p-2 mr-3">
                    <FaClock className="text-[#D4AF37]" />
                  </div>
                  <h4 className="font-medium">Office Hours</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM<br/>
                  Saturday: 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {/* facebook */}
              <a href="#" className="bg-[#1A2348] hover:bg-[#2A3460] text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <Facebook size={18} />
              </a>
              {/* instagram */}
              <a href="#" className="bg-[#1A2348] hover:bg-[#2A3460] text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <Instagram size={18} />
              </a>
              {/* linkedin */}
              {/* <a href="#" className="bg-[#1A2348] hover:bg-[#2A3460] text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <Linkedin size={18} />
              </a> */}
              {/* whatsapp */}
              {/* <a href="#" className="bg-[#1A2348] hover:bg-[#2A3460] text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <FaWhatsapp className="h-5 w-5" />
              </a> */}
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-gray-50 rounded-lg p-8 h-full">
              <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-6 text-[#1A2348]">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
