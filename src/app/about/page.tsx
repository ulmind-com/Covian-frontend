import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata = {
  title: "About Us | CoVian Advisory Pvt Ltd",
  description: "Your Workforce Partner for Sustainable Growth. Learn about our mission, vision, and core values.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-sky-600 selection:text-white">
      <Header />
      
      <main className="flex-1 w-full overflow-hidden">
        <AboutContent />
      </main>

      <Footer />
    </div>
  );
}
