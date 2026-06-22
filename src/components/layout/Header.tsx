"use client";
/* eslint-disable */


import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, PhoneCall, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { User } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  /* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-unused-vars, react-hooks/rules-of-hooks */
  // @ts-ignore
  useEffect(() => {
    setMounted(true);
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try { setUser(JSON.parse(userStr)); } catch (e) {}
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { 
      name: "Services", 
      isDropdown: true,
      items: [
        { name: "Permanent Hiring", href: "/services/permanent-hiring" },
        { name: "Temporary Staffing", href: "/services/temporary-staffing" },
        { name: "Executive Search", href: "/services/executive-search" },
        { name: "RPO", href: "/services/rpo" },
        { name: "Workforce Advisory", href: "/services/workforce-advisory" },
        { name: "Training & Development", href: "/services/training-and-development" },
      ]
    },
    { 
      name: "Industries", 
      isDropdown: true,
      items: [
        { name: "Healthcare & Hospitals", href: "/industries/healthcare" },
        { name: "Manufacturing", href: "/industries/manufacturing" },
        { name: "Retail & Services", href: "/industries/retail" },
        { name: "IT & Technology", href: "/industries/technology" },
        { name: "BFSI", href: "/industries/bfsi" },
        { name: "Education", href: "/industries/education" },
      ]
    },
    { name: "Jobs", href: "/jobs" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <header 
          className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-visible ${
            scrolled 
              ? "top-4 w-[95%] xl:w-[85%] rounded-full bg-[#003A70]/95 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-1 px-6 mt-3" 
              : "top-6 w-[98%] xl:w-[95%] rounded-[2rem] bg-[#003A70]/80 backdrop-blur-xl border border-white/15 py-2 px-8 mt-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]"
          }`}
          style={{
            boxShadow: scrolled ? "0 10px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)" : "none",
          }}
        >

          {/* Logo */}
          <Link href="/" className="flex items-center group z-50">
            <Image
              src="/covian_logo.png"
              alt="CoVian Advisory Logo"
              width={300}
              height={80}
              className="h-20 w-auto object-contain drop-shadow-md transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 justify-center flex-1 mx-4">
            {navLinks.map((link, i) => (
              <div 
                key={i} 
                className="relative"
                onMouseEnter={() => link.isDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.isDropdown ? (
                  <button className={`flex items-center gap-1 text-[15px] font-semibold tracking-wide transition-colors ${activeDropdown === link.name ? "text-blue-400" : "text-white/80 hover:text-white"}`}>
                    {link.name} <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link 
                    href={link.href!}
                    className={`text-[15px] font-semibold tracking-wide transition-colors relative py-1 ${isActive(link.href!) ? "text-blue-400" : "text-white/80 hover:text-white"}`}
                  >
                    {link.name}
                    {isActive(link.href!) && (
                      <motion.div 
                        layoutId="nav-indicator-desktop"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-blue-500 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.isDropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-72 bg-[#003A70]/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                        <div className="relative p-2 flex flex-col gap-1">
                          {link.items?.map((item, idx) => (
                            <Link 
                              key={idx} 
                              href={item.href}
                              className="px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all flex items-center justify-between group"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Icons */}
          <div className="hidden xl:flex items-center gap-4 shrink-0 relative z-50">
            <Link 
              href="tel:+919288065556" 
              aria-label="Call Us" 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all"
            >
              <PhoneCall className="w-4 h-4" />
            </Link>
            <Link 
              href="mailto:info@covian.in" 
              aria-label="Email Us" 
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all"
            >
              <Mail className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden relative z-50 p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#003A70]/60 backdrop-blur-sm z-40 xl:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-[#003A70] z-50 xl:hidden flex flex-col shadow-2xl border-l border-white/10"
            >
              <div className="p-6 flex items-center justify-between border-b border-white/10">
                <span className="font-bold text-xl tracking-tight text-white">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-white/70 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <div key={i}>
                    {link.isDropdown ? (
                      <div className="space-y-3">
                        <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider">{link.name}</span>
                        <div className="flex flex-col gap-2 pl-2 border-l border-white/10">
                          {link.items?.map((item, idx) => (
                            <Link 
                              key={idx} 
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-white/80 hover:text-white font-medium py-1 px-3"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link 
                        href={link.href!}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-lg font-bold transition-colors ${isActive(link.href!) ? "text-blue-400" : "text-white hover:text-blue-300"}`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-white/10 bg-white/5 space-y-3">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full h-12 font-bold shadow-lg shadow-blue-900/50 border-0">
                    Login
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
