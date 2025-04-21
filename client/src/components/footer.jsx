import { ArrowRight, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";
import { scrollToElement } from "@/lib/utils";

export default function Footer() {
  // Handle scrolling to sections
  const handleClick = (e, id) => {
    e.preventDefault();
    scrollToElement(id);
  };
  
  // Footer quick links
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Careers", href: "#careers" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Apply Now", href: "#apply" }
  ];
  
  // Footer courses
  const footerCourses = [
    { label: "STCW Course", href: "#courses" },
    { label: "Merchant Navy", href: "#courses" },
    { label: "IT Sector", href: "#courses" },
    { label: "Security Training", href: "#courses" },
    { label: "Hotel Management", href: "#courses" }
  ];
  
  return (
    <footer className="bg-[var(--primary)] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[var(--primary-dark)] opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-[var(--gold)]/10"></div>
      
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-12 pb-10 border-b border-white/10">
          {/* Column 1: About */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <Logo footer />
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Ruth International specializes in global career placement and professional development services across maritime, hospitality, IT and security sectors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href.substring(1))}
                    className="text-white/70 hover:text-[var(--gold)] transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Courses */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 sm:mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {footerCourses.map((course, index) => (
                <li key={index}>
                  <a 
                    href={course.href}
                    onClick={(e) => handleClick(e, course.href.substring(1))}
                    className="text-white/70 hover:text-[var(--gold)] transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{course.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-bold mb-4 sm:mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <span className="text-white/70">1234 Career Avenue, Mumbai, Maharashtra 400001, India</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <span className="text-white/70">info@ruthinternational.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <span className="text-white/70">+91 98765 43210</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <a 
                href="#contact"
                onClick={(e) => handleClick(e, "contact")}
                className="btn-secondary inline-flex w-full sm:w-auto justify-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Ruth International. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}