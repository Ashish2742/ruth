import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
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
    duration: "4-6 weeks",
    image: "https://images.unsplash.com/photo-1589317621382-0cbef7ffcc4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  },
  {
    id: "merchant-navy",
    title: "Merchant Navy",
    category: "Maritime",
    description: "Comprehensive training for careers in commercial shipping and international trade vessels.",
    duration: "12-16 weeks",
    image: "https://images.unsplash.com/photo-1596005554384-d293674c91d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  },
  {
    id: "it-sector",
    title: "IT Sector",
    category: "Technology",
    description: "Technology and digital skills training for positions in the global IT industry.",
    duration: "8-12 weeks",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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

export function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -100;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
