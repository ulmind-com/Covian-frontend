"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, Lock, Cookie, ExternalLink, UserCheck, RefreshCw, Mail, Phone, Globe } from "lucide-react";

const sections = [
  {
    id: "info-collect",
    number: "01",
    icon: UserCheck,
    title: "Information We Collect",
    content: "We may collect personal, professional, and business-related information including:",
    bullets: [
      "Name, contact details, email address, and location",
      "Resume/CV, educational qualifications, and professional experience",
      "Employment-related information shared during recruitment processes",
      "Company details and workforce requirements from business clients",
      "Website usage information such as browser details, device information, and cookies",
    ],
  },
  {
    id: "use-info",
    number: "02",
    icon: Shield,
    title: "Use of Information",
    content: "The information collected is used for:",
    bullets: [
      "Providing recruitment, staffing, workforce, and advisory services",
      "Connecting candidates with suitable employment opportunities",
      "Understanding client requirements and delivering customized solutions",
      "Improving our services, communication, and user experience",
      "Maintaining business records and complying with applicable legal requirements",
    ],
  },
  {
    id: "info-sharing",
    number: "03",
    icon: Lock,
    title: "Information Sharing",
    content:
      "Covian Advisory Pvt Ltd does not sell, trade, or misuse personal information. Information may be shared only with:",
    bullets: [
      "Clients for recruitment and workforce requirements",
      "Authorized service partners where required for service delivery",
      "Government authorities or legal bodies when required under applicable laws",
    ],
    note: "We ensure that all information is handled responsibly and professionally.",
  },
  {
    id: "data-protection",
    number: "04",
    icon: Shield,
    title: "Data Protection & Security",
    content:
      "We take appropriate technical and organizational measures to protect personal information against unauthorized access, misuse, loss, or disclosure. While we follow industry-standard practices, no online platform can guarantee complete security of information.",
  },
  {
    id: "cookies",
    number: "05",
    icon: Cookie,
    title: "Cookies & Website Analytics",
    content:
      "Our website may use cookies and similar technologies to improve website functionality, analyze visitor experience, and enhance our services. Users may control cookie preferences through their browser settings.",
  },
  {
    id: "third-party",
    number: "06",
    icon: ExternalLink,
    title: "Third-Party Links",
    content:
      "Our website may contain links to external websites. Covian Advisory Pvt Ltd is not responsible for the privacy practices, content, or policies of third-party websites.",
  },
  {
    id: "user-rights",
    number: "07",
    icon: UserCheck,
    title: "User Rights",
    content: "Users may request to:",
    bullets: [
      "Access their personal information",
      "Update incorrect information",
      "Request removal of information where applicable",
    ],
    note: "For any privacy-related concerns, please contact us.",
  },
  {
    id: "policy-updates",
    number: "08",
    icon: RefreshCw,
    title: "Policy Updates",
    content:
      "Covian Advisory Pvt Ltd reserves the right to update this Privacy Policy from time to time. Any changes will be published on this page.",
  },
];

export default function PrivacyPolicyPage() {
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
            <div className="absolute top-[-30%] right-[-15%] w-[700px] h-[700px] rounded-full bg-[#1E88E5]/10 blur-[150px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#00A86B]/8 blur-[120px]" />
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
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.06] border border-white/[0.12] text-[#1E88E5] text-[10px] font-black uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                <Shield className="w-4 h-4" />
                Legal Document
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.05] tracking-tight mb-6">
                Privacy{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E88E5] to-[#00A86B]">
                  Policy
                </span>
              </h1>
              <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed font-medium">
                At Covian Advisory Pvt Ltd, we value the trust of our clients, candidates, partners,
                and website visitors. This Privacy Policy explains how we collect, use, protect, and
                manage information shared through our website and services.
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
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1E88E5] mt-2.5 shrink-0" />
                            <span className="text-[16px] leading-relaxed font-medium">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.note && (
                      <p className="text-[15px] font-semibold text-[#1E88E5] mt-4">
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
                Questions About Our Privacy Policy?
              </h3>
              <p className="text-slate-500 text-[16px] mb-8 max-w-lg">
                If you have any concerns about your data or privacy, our team is always available to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#1E88E5]" />
                  <span className="text-[16px] font-semibold text-[#003A70]">info@covian.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#00A86B]" />
                  <span className="text-[16px] font-semibold text-[#003A70]">9288065556</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#1E88E5]" />
                  <span className="text-[16px] font-semibold text-[#003A70]">www.covian.in</span>
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
