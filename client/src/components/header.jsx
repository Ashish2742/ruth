import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--primary)]/95 backdrop-blur-sm py-3 shadow-lg"
          : "bg-[var(--primary)] py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/#about" },
            { name: "Courses", path: "/#courses" },
            { name: "Careers", path: "/#careers" },
            { name: "Contact", path: "/#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-white hover:text-[var(--gold)] transition-colors text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href="#apply"
            className="btn-secondary"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--primary)]/95 backdrop-blur-sm">
          <Container className="py-5">
            <nav className="flex flex-col space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/#about" },
                { name: "Courses", path: "/#courses" },
                { name: "Careers", path: "/#careers" },
                { name: "Contact", path: "/#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-white hover:text-[var(--gold)] transition-colors text-sm font-medium p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#apply"
                className="btn-secondary inline-block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply Now
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}