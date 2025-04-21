import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import CoursesSection from "@/components/courses-section";
import CareersSection from "@/components/careers-section";
import TestimonialsSection from "@/components/testimonials-section";
import ApplicationSection from "@/components/application-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <CareersSection />
      <TestimonialsSection />
      <ApplicationSection />
      <ContactSection />
    </>
  );
}