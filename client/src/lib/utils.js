import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import securityguard from "@/lib/images/securityguard.jpeg";
import cruisejobs from "@/lib/images/curisejobs.jpeg";
import internationalhoteljobs from "@/lib/images/internationaljobs.jpeg";
import itsector from "@/lib/images/itsector.jpeg";
import martinetimenavy from "@/lib/images/marinetimenavy.jpeg";
import stcwcourses from "@/lib/images/stcwcourse.jpeg";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const phoneRegex = /^\+?[0-9]{10,15}$/;
export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const courses = [
  {
    id: "stcw",
    title: "STCW Course",
    category: "Maritime",
    description: "Standards of Training, Certification and Watchkeeping for Seafarers - essential for maritime careers.",
    image: stcwcourses
  },
  {
    id: "merchant-navy",
    title: "Merchant Navy",
    category: "Maritime",
    description: "Comprehensive training for careers in commercial shipping and international trade vessels.",
    image: martinetimenavy
  },
  {
    id: "cruise-jobs",
    title: "Cruise Jobs",
    category: "Hospitality",
    description: "Specialized training for various positions in the cruise line industry, from service to operations.",
    image: cruisejobs
  },
  {
    id: "security-guard",
    title: "Security Guard",
    category: "Security",
    description: "Professional security training for international security positions and certifications.",
    image: securityguard
  },
  {
    id: "hotel-jobs",
    title: "International Hotel Jobs",
    category: "Hospitality",
    description: "Comprehensive hospitality training for positions in international hotels and resorts.",
    image: internationalhoteljobs
  },
  {
    id: "it-sector",
    title: "IT Sector",
    category: "Technology",
    description: "Technology and digital skills training for positions in the global IT industry.",
    image: itsector
  }
];

export const careers = [
  {
    id: "cruise-jobs",
    title: "Cruise Jobs",
    icon: "ship",
    description: "Exciting opportunities on international cruise lines, including hospitality, entertainment, and technical positions.",
    benefits: [
      "Luxury cruise liners",
      "Competitive salaries",
      "Travel opportunities"
    ]
  },
  {
    id: "security-guard",
    title: "Security Guard",
    icon: "shield-alt",
    description: "Professional security positions in various international settings, from corporate to hospitality sectors.",
    benefits: [
      "Certified training",
      "International placements",
      "Career advancement"
    ]
  },
  {
    id: "hotel-jobs",
    title: "International Hotel Jobs",
    icon: "hotel",
    description: "Positions in luxury hotels and resorts around the world, from entry-level to management roles.",
    benefits: [
      "5-star properties",
      "Global locations",
      "Growth opportunities"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    text: "Ruth International's STCW course and placement services were exceptional. Within three months of completing my training, I secured a position on a luxury cruise liner.",
    name: "Rajesh K.",
    position: "Cruise Staff, Royal Caribbean"
  },
  {
    id: 2,
    text: "The hotel management training program at Ruth International prepared me for my role at a 5-star hotel in Dubai. Their industry connections made the placement process seamless.",
    name: "Priya M.",
    position: "Guest Relations, Jumeirah Group"
  },
  {
    id: 3,
    text: "As someone transitioning to the IT sector, Ruth International's specialized training and placement services were invaluable. I'm now working with a leading tech company.",
    name: "Aditya S.",
    position: "Software Developer, TCS"
  }
];

export function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -100;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}