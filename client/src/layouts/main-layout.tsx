import { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-['Poppins'] bg-gray-50 text-gray-800">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
