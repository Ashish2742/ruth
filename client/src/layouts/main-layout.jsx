import Header from "@/components/header";
import Footer from "@/components/footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--text-dark)]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}