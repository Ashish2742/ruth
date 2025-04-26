import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";
import { scrollToElement } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleNavClick = (id: string) => {
    scrollToElement(id);
    setMobileMenuOpen(false);
  };
  
  return (
    <header className="bg-[#1A2348] shadow-md">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Logo />
          
          {/* Mobile Menu Toggle */}
          <button 
            className="block md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => handleNavClick("about")} className="text-white hover:text-[#D4AF37] transition duration-200">
              About
            </button>
            <button onClick={() => handleNavClick("courses")} className="text-white hover:text-[#D4AF37] transition duration-200">
              Courses
            </button>
            <button onClick={() => handleNavClick("contact")} className="text-white hover:text-[#D4AF37] transition duration-200">
              Contact
            </button>
            <Button 
              onClick={() => handleNavClick("apply")}
              className="bg-[#D4AF37] hover:bg-[#E6C755] text-[#1A2348] font-medium"
            >
              Apply Now
            </Button>
          </nav>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#2A3460] py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => handleNavClick("home")} className="text-white hover:text-[#D4AF37] transition duration-200">
                Home
              </button>
              <button onClick={() => handleNavClick("about")} className="text-white hover:text-[#D4AF37] transition duration-200">
                About
              </button>
              <button onClick={() => handleNavClick("courses")} className="text-white hover:text-[#D4AF37] transition duration-200">
                Courses
              </button>
              <button onClick={() => handleNavClick("careers")} className="text-white hover:text-[#D4AF37] transition duration-200">
                Careers
              </button>
              <button onClick={() => handleNavClick("contact")} className="text-white hover:text-[#D4AF37] transition duration-200">
                Contact
              </button>
              <Button 
                onClick={() => handleNavClick("apply")}
                className="bg-[#D4AF37] hover:bg-[#E6C755] text-[#1A2348] font-medium w-full"
              >
                Apply Now
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
