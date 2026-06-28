"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  FileText,
  Briefcase,
  Globe,
  UserCheck,
  Building2,
  Copyright,
  AlertTriangle,
  Lock,
  RefreshCw,
  Mail,
  Phone,
} from "lucide-react";

const sections = [
  {
    id: "about-services",
    number: "01",
    icon: Briefcase,
    title: "About Covian Services",
    content:
      "Covian Advisory Pvt Ltd provides workforce solutions, recruitment support, staffing services, manpower solutions, caregiver staffing, and business advisory services. Our objective is to create meaningful connections between businesses and professionals through reliable and structured workforce solutions.",
  },
  {
    id: "website-usage",
    number: "02",
    icon: Globe,
    title: "Website Usage",
    content: "Users agree to use this website responsibly and only for lawful purposes. Users must not:",
    bullets: [
      "Submit incorrect or misleading information",
      "Attempt unauthorized access to the website",
      "Copy, modify, or misuse website content",
      "Use the website for unlawful activities",
    ],
  },
  {
    id: "candidate-info",
    number: "03",
    icon: UserCheck,
    title: "Candidate Information & Recruitment Process",
    content:
      "Candidates submitting their details, resumes, or applications confirm that the information provided is accurate and complete. Submission of information does not guarantee employment or placement. Final selection decisions remain with the respective hiring organization.",
  },
  {
    id: "client-responsibilities",
    number: "04",
    icon: Building2,
    title: "Client Responsibilities",
    content:
      "Clients engaging with Covian Advisory Pvt Ltd agree to provide accurate workforce requirements and necessary information required for effective service delivery.",
  },
  {
    id: "intellectual-property",
    number: "05",
    icon: Copyright,
    title: "Intellectual Property Rights",
    content: "All website content including:",
    bullets: [
      "Logo and branding",
      "Text and graphics",
      "Website design",
      "Company materials",
    ],
    note: "are the intellectual property of Covian Advisory Pvt Ltd and cannot be copied or reproduced without prior permission.",
  },
  {
    id: "service-disclaimer",
    number: "06",
    icon: AlertTriangle,
    title: "Service Disclaimer",
    content:
      "Covian Advisory Pvt Ltd works to provide reliable and professional services; however, we are not responsible for decisions taken independently by clients, candidates, or third parties.",
  },
  {
    id: "confidentiality",
    number: "07",
    icon: Lock,
    title: "Confidentiality",
    content:
      "We maintain confidentiality of information shared by clients, candidates, and partners and ensure responsible handling of business and personal information.",
  },
  {
    id: "modification",
    number: "08",
    icon: RefreshCw,
    title: "Modification of Terms",
    content:
      "Covian Advisory Pvt Ltd may update these Terms of Use whenever required. Continued use of the website after updates indicates acceptance of revised terms.",
  },
];

export default function TermsOfUsePage() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const sectionElements = sections.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));
      for (const sec of sectionElements.reverse()) {
        if (sec.el && sec.el.getBoundingClientRect().top < 300) {
          setActiveSection(sec.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-sky-600 selection:text-white">
      <Header />

      <main className="flex-1 w-full overflow-hidden">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#001a3a] via-[#003A70] to-[#00264d] py-24 md:py-32">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-30%] left-[-15%] w-[700px] h-[700px] rounded-full bg-[#00A86B]/10 blur-[150px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#1E88E5]/8 blur-[120px]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <div
              className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.06] border border-white/[0.12] text-[#00A86B] text-[10px] font-black uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                <FileText className="w-4 h-4" />
                Legal Document
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.05] tracking-tight mb-6">
                Terms of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A86B] to-[#1E88E5]">
                  Use
                </span>
              </h1>
              <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed font-medium">
                Welcome to www.covian.in. By accessing or using this website, you agree to comply with
                the following Terms of Use. These terms define the guidelines for using our website and
                services provided by Covian Advisory Pvt Ltd.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/40 text-sm">
                <RefreshCw className="w-4 h-4" />
                Effective Date: 26 June, 2026
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="relative py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg prose-slate max-w-none text-[#003A70]/80">
              <div className="space-y-12">
                {sections.map((section, idx) => (
                  <div key={section.id} id={section.id} className="scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#003A70] mb-4">
                      {section.number}. {section.title}
                    </h2>
                    <p className="text-[16px] leading-relaxed mb-4 font-medium">
                      {section.content}
                    </p>
                    {section.bullets && (
                      <ul className="list-none pl-0 space-y-3 mb-6">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00A86B] mt-2.5 shrink-0" />
                            <span className="text-[16px] leading-relaxed font-medium">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.note && (
                      <p className="text-[15px] font-semibold text-[#00A86B] mt-4">
                        {section.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="mt-16 relative bg-[#f8fafc] rounded-2xl border border-slate-200 p-8 md:p-10">
              <h3 className="text-2xl font-heading font-bold text-[#003A70] mb-3">
                Contact Information
              </h3>
              <p className="text-slate-500 text-[16px] mb-8 max-w-lg">
                For any queries related to Privacy Policy or Terms of Use, reach out to us.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#00A86B]" />
                  <span className="text-[16px] font-semibold text-[#003A70]">www.covian.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#1E88E5]" />
                  <span className="text-[16px] font-semibold text-[#003A70]">info@covian.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#00A86B]" />
                  <span className="text-[16px] font-semibold text-[#003A70]">9288065556</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
