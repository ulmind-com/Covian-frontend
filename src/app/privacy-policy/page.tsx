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
                            ? "bg-[#1E88E5]/10 text-[#1E88E5] border border-[#1E88E5]/20"
                            : "text-[#003A70]/50 hover:text-[#003A70] hover:bg-[#003A70]/5"
                        }`}
                      >
                        <span
                          className={`text-[10px] font-black transition-colors ${
                            activeSection === s.id ? "text-[#1E88E5]" : "text-[#003A70]/25"
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
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#1E88E5]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1E88E5]/10 to-[#00A86B]/10 flex items-center justify-center shrink-0 border border-[#1E88E5]/10">
                        <section.icon className="w-5 h-5 text-[#1E88E5]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1E88E5]/50 block mb-1">
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
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1E88E5] to-[#00A86B] mt-2 shrink-0" />
                            <span className="text-[#003A70]/55 text-[15px] font-medium leading-relaxed">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.note && (
                      <div className="mt-5 px-4 py-3 rounded-xl bg-[#1E88E5]/[0.04] border border-[#1E88E5]/10">
                        <p className="text-sm text-[#1E88E5]/80 font-semibold">{section.note}</p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Contact Card */}
                <div className="relative bg-gradient-to-br from-[#001a3a] via-[#003A70] to-[#00264d] rounded-[1.5rem] p-8 md:p-10 text-white overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-50%] right-[-30%] w-[400px] h-[400px] rounded-full bg-[#1E88E5]/15 blur-[100px]" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-heading font-bold mb-3 tracking-tight">
                      Questions About Our Privacy Policy?
                    </h3>
                    <p className="text-white/50 text-[15px] font-medium mb-6 max-w-lg">
                      If you have any concerns about your data or privacy, our team is always available to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1]">
                        <Mail className="w-4 h-4 text-[#1E88E5]" />
                        <span className="text-sm font-semibold text-white/70">info@covian.in</span>
                      </div>
                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1]">
                        <Phone className="w-4 h-4 text-[#00A86B]" />
                        <span className="text-sm font-semibold text-white/70">9288065556</span>
                      </div>
                      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1]">
                        <Globe className="w-4 h-4 text-[#1E88E5]" />
                        <span className="text-sm font-semibold text-white/70">www.covian.in</span>
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
