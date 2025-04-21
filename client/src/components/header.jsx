import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";
import { scrollToElement } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, navigate] = useLocation();
  
  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);
  
  // Navigation items
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" }
  ];
  
  // Handle navigation - scroll to section if on homepage, navigate if not
  const handleNavigation = (e, href) => {
    e.preventDefault();
    
    if (href.startsWith("#")) {
      if (location === "/") {
        scrollToElement(href.substring(1));
      } else {
        navigate("/");
        setTimeout(() => {
          scrollToElement(href.substring(1));
        }, 100);
      }
    } else {
      navigate(href);
    }
    
    setIsMenuOpen(false);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? "py-2 md:py-3 bg-white shadow-md" 
          : "py-3 md:py-5 bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? "text-[var(--text-dark)] hover:text-[var(--gold)]" 
                    : "text-white hover:text-[var(--gold)]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#apply"
              onClick={(e) => handleNavigation(e, "#apply")}
              className={`btn-primary text-sm py-2 px-4 lg:px-6 ${
                isScrolled 
                  ? "bg-[var(--primary)] text-white hover:bg-[var(--gold)]" 
                  : "bg-[var(--gold)] text-[var(--primary)] hover:bg-white"
              }`}
            >
              Apply Now
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-[var(--text-dark)]" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-[var(--text-dark)]" : "text-white"}`} />
            )}
          </button>
        </div>
      </Container>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-[var(--primary)] transform transition-all duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <Logo footer />
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="focus:outline-none p-2"
            aria-label="Close menu"
          >
            <X className="text-white h-6 w-6" />
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-6 px-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleNavigation(e, item.href)}
              className="text-white text-xl font-medium hover:text-[var(--gold)] transition-colors duration-300 w-full text-center py-3 border-b border-white/10"
            >
              {item.label}
            </a>
          ))}
          
          <div className="pt-6 w-full">
            <a 
              href="#apply"
              onClick={(e) => handleNavigation(e, "#apply")}
              className="mt-4 btn-secondary w-full justify-center text-lg py-4"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}