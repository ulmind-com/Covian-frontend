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
        <section className="relative py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar TOC */}
              <aside className="lg:w-72 shrink-0">
                <div className="lg:sticky lg:top-28">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#003A70]/40 mb-4">
                    Contents
                  </p>
                  <nav className="flex flex-col gap-1">
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                          activeSection === s.id
                            ? "bg-[#00A86B]/10 text-[#00A86B] border border-[#00A86B]/20"
                            : "text-[#003A70]/50 hover:text-[#003A70] hover:bg-[#003A70]/5"
                        }`}
                      >
                        <span
                          className={`text-[10px] font-black transition-colors ${
                            activeSection === s.id ? "text-[#00A86B]" : "text-[#003A70]/25"
                          }`}
                        >
                          {s.number}
                        </span>
                        {s.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Main Content Cards */}
              <div className="flex-1 flex flex-col gap-8">
                {sections.map((section, idx) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className={`group relative bg-white rounded-[1.5rem] border border-[#003A70]/[0.06] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,58,112,0.04)] hover:shadow-[0_8px_40px_rgba(0,58,112,0.08)] transition-all duration-500 ${
                      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${idx * 80}ms` }}
                  >
                    {/* Accent bar */}
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#00A86B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00A86B]/10 to-[#1E88E5]/10 flex items-center justify-center shrink-0 border border-[#00A86B]/10">
                        <section.icon className="w-5 h-5 text-[#00A86B]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00A86B]/50 block mb-1">
                          Section {section.number}
                        </span>
                        <h2 className="text-xl md:text-2xl font-heading font-bold text-[#003A70] tracking-tight">
                          {section.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-[#003A70]/60 leading-relaxed text-[15px] font-medium">
                      {section.content}
                    </p>

                    {section.bullets && (
                      <ul className="mt-5 flex flex-col gap-3">
                        {section.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00A86B] to-[#1E88E5] mt-2 shrink-0" />
                            <span className="text-[#003A70]/55 text-[15px] font-medium leading-relaxed">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.note && (
                      <div className="mt-5 px-4 py-3 rounded-xl bg-[#00A86B]/[0.04] border border-[#00A86B]/10">
                        <p className="text-sm text-[#00A86B]/80 font-semibold">{section.note}</p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Contact Card */}
                <div className="relative bg-gradient-to-br from-[#001a3a] via-[#003A70] to-[#00264d] rounded-[1.5rem] p-8 md:p-10 text-white overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-50%] left-[-30%] w-[400px] h-[400px] rounded-full bg-[#00A86B]/15 blur-[100px]" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-heading font-bold mb-2 tracking-tight">
                      Contact Information
                    </h3>
                    <p className="text-white/50 text-[15px] font-medium mb-6 max-w-lg">
                      For any queries related to Privacy Policy or Terms of Use, reach out to us.
                    </p>
                    <div className="space-y-3">
                      <p className="text-white/80 font-bold text-lg">Covian Advisory Pvt Ltd</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1]">
                          <Globe className="w-4 h-4 text-[#00A86B]" />
                          <span className="text-sm font-semibold text-white/70">www.covian.in</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1]">
                          <Mail className="w-4 h-4 text-[#1E88E5]" />
                          <span className="text-sm font-semibold text-white/70">info@covian.in</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1]">
                          <Phone className="w-4 h-4 text-[#00A86B]" />
                          <span className="text-sm font-semibold text-white/70">9288065556</span>
                        </div>
                      </div>
                    </div>
                  </div>
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
