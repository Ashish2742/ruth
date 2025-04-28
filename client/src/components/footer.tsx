import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { scrollToElement } from "@/lib/utils";

export default function Footer() {
  const handleNavClick = (id: string) => {
    scrollToElement(id);
  };

  return (
    <footer className="bg-[#1A2348] text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              {/* <div className="w-10 h-10 rounded-full bg-[#1A2348] border-2 border-[#D4AF37] flex items-center justify-center mr-3">
                <div className="text-[#D4AF37] text-xl">R</div>
              </div> */}
              <div className="flex flex-col items-center leading-tight">
                {/* RUTH text */}
                <h1 className="text-[#fdd05a] font-bold text-base  uppercase font-serif">
                  RUTH
                </h1>

                {/* INTERNATIONAL text */}
                <h2 className="text-[#fdd05a] font-bold text-base uppercase font-serif tracking-widest">
                  INTERNATIONAL
                </h2>

                {/* Divider and Slogan */}
                <div className="flex items-center justify-center mt-1 space-x-3">
                  {/* Left lines */}
                  <div className="flex flex-col items-end space-y-0.5">
                    <div className="w-1 border-t-2 border-[#fdd05a]" />
                    <div className="w-4 border-t-2 border-[#fdd05a]" />
                    <div className="w-4 border-t-2 border-[#fdd05a]" />
                  </div>

                  {/* Slogan text */}
                  <p className="text-[#fdd05a] text-xs  uppercase tracking-[0.25em] font-light">
                    WE CREATE SUCCESS
                  </p>

                  {/* Right lines */}
                  <div className="flex flex-col items-start space-y-0.5">
                    <div className="w-1 border-t-2 border-[#fdd05a]" />
                    <div className="w-4 border-t-2 border-[#fdd05a]" />
                    <div className="w-4 border-t-2 border-[#fdd05a]" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6">
              Your trusted partner for international career opportunities since 2015. We specialize in training and placement services across multiple sectors.
            </p>

            <div className="flex space-x-4">
              <a className="text-white hover:text-[#D4AF37] transition duration-300">
                <Facebook size={18} />
              </a>
              {/* <a href="#" className="text-white hover:text-[#D4AF37] transition duration-300">
                <Linkedin size={18} />
                </a> */}
              <a className="text-white hover:text-[#D4AF37] transition duration-300">
                <Instagram size={18} />
              </a>
              {/* <a href="#" className="text-white hover:text-[#D4AF37] transition duration-300">
                <FaWhatsapp size={18} />
                </a> */}
            </div>
          </div>

          <div>
            <h4 className="text-[#D4AF37] font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("about")}
                  className="text-gray-300 hover:text-[#D4AF37] transition duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("courses")}
                  className="text-gray-300 hover:text-[#D4AF37] transition duration-200"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("apply")}
                  className="text-gray-300 hover:text-[#D4AF37] transition duration-200"
                >
                  Apply Now
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="text-gray-300 hover:text-[#D4AF37] transition duration-200"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#D4AF37] font-semibold text-lg mb-4">Our Courses</h4>
            <ul className="space-y-3">
              <li><a onClick={() => handleNavClick("courses")} className="text-gray-300 hover:text-[#D4AF37] cursor-pointer transition duration-200">STCW Course</a></li>
              <li><a onClick={() => handleNavClick("courses")} className="text-gray-300 hover:text-[#D4AF37]  cursor-pointer transition duration-200">Merchant Navy</a></li>
              <li><a onClick={() => handleNavClick("courses")} className="text-gray-300 hover:text-[#D4AF37]  cursor-pointer transition duration-200">IT Sector</a></li>
              <li><a onClick={() => handleNavClick("courses")} className="text-gray-300 hover:text-[#D4AF37]  cursor-pointer transition duration-200">Cruise Jobs Training</a></li>
              <li><a onClick={() => handleNavClick("courses")} className="text-gray-300 hover:text-[#D4AF37]  cursor-pointer transition duration-200">Security Guard</a></li>
              <li><a onClick={() => handleNavClick("courses")} className="text-gray-300 hover:text-[#D4AF37]  cursor-pointer  transition duration-200">Hotel Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#D4AF37] font-semibold text-lg mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#D4AF37] mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Office No. 05, Floor-1, Plot-17/19, Hira Building, Mint Road, Fort, Mumbai - 400001</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-[#D4AF37] mr-3 flex-shrink-0" />
                <span className="text-gray-300">022 45199936</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#D4AF37] mr-3 flex-shrink-0" />
                <span className="text-gray-300"> <a href="mailto:info@ruthinternational.com">info@ruthinternational.com</a></span>
              </li>
              <li className="flex items-center">
                <FaClock className="text-[#D4AF37] mr-3 flex-shrink-0" />
                <span className="text-gray-300">Mon-Fri: 9am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Ruth International. All rights reserved.
            </p>

            <div className="flex space-x-6">
              {/* <a href="#" className="text-gray-400 hover:text-[#D4AF37] text-sm transition duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] text-sm transition duration-200">Terms of Service</a> */}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
