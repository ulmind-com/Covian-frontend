import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { WorkforceChallenge } from "@/components/home/WorkforceChallenge";
import { IndustriesSection } from "@/components/home/IndustriesSection";

import { RecruitmentSolutions } from "@/components/home/RecruitmentSolutions";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { EngagementModels } from "@/components/home/EngagementModels";
import { ClientLogosMarquee } from "@/components/home/ClientLogosMarquee";
import { ParallaxBanner } from "@/components/home/ParallaxBanner";
import { HiringProcess } from "@/components/home/HiringProcess";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogSection } from "@/components/home/BlogSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata = {
  title: "Covian Advisory Pvt Ltd",
  description: "Transform your workforce with AI-driven recruitment, seamless onboarding, and dynamic talent management. Build your dream team today.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-blue-600 selection:text-white">
      <Header />
      
      <main className="flex-1 w-full">
        {/* Sections before parallax */}
        <div className="relative z-10">
          <HeroSection />
          <WorkforceChallenge />
          <WhyChooseUs />
          <EngagementModels />
          <ClientLogosMarquee />
        </div>

        {/* Parallax sticky container */}
        <div className="relative">
          {/* Sticky parallax image — stays pinned while content below scrolls over it */}
          <div className="sticky top-0 z-0 h-screen">
            <ParallaxBanner />
          </div>

          {/* Content that slides UP over the parallax image */}
          <div className="relative z-10 -mt-[30vh]">
            <IndustriesSection />

            <RecruitmentSolutions />
            <FeaturedJobs />
            <HiringProcess />
            <Testimonials />
            <BlogSection />
            <CTASection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
