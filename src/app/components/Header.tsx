"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  currentPage: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Naslovna", href: "/" },
    { name: "Usluge", href: "/#usluge" },
    { name: "Cenovnik", href: "/cenovnik" },
    { name: "Lokacija", href: "/lokacija" }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 duration-300 ${
          isScrolled 
            ? `backdrop-blur-md shadow-lg border-b border-gray-200 bg-white/95` 
            : 'bg-white'
        }`}
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
              <div className="relative flex-shrink-0" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  src="/assets/logo.png"
                  alt="TIM-D MEDICAL Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <span className="font-bold" style={{ fontSize: '16px', color: '#039F87', lineHeight: '1' }}>
                TIM-D MEDICAL
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="cursor-pointer transition-colors duration-300 text-gray-600"
                  style={{ fontSize: '16px' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#039F87'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link href="/#kontakt">
                <button 
                  className="font-semibold text-white transition-all duration-300 cursor-pointer"
                  style={{ 
                    backgroundColor: '#039F87',
                    fontSize: '16px',
                    padding: '12px 24px',
                    borderRadius: '8px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#027F6C'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#039F87'}
                >
                  Kontakt
                </button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] lg:hidden"
              onClick={toggleMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-full h-screen shadow-2xl z-[9999] lg:hidden border-r border-gray-200 bg-white overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-200">
                <Link href="/" className="flex items-center gap-2" onClick={toggleMenu} style={{ textDecoration: 'none' }}>
                  <div className="relative flex-shrink-0" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                      src="/assets/logo.png"
                      alt="TIM-D MEDICAL Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <span className="font-bold" style={{ fontSize: '16px', color: '#039F87', lineHeight: '1' }}>
                    TIM-D MEDICAL
                  </span>
                </Link>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="p-5">
                <div className="space-y-5">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={toggleMenu}
                      className="block font-medium py-3 border-b border-gray-200 cursor-pointer transition-colors duration-300 text-gray-600"
                      style={{ fontSize: '16px' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#039F87'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Contact Button */}
                  <div style={{ paddingTop: '12px' }}>
                    <Link href="/#kontakt" onClick={toggleMenu}>
                      <button 
                        className="w-full font-semibold text-white transition-all duration-300 cursor-pointer"
                        style={{ 
                          backgroundColor: '#039F87',
                          fontSize: '16px',
                          padding: '12px 24px',
                          borderRadius: '8px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#027F6C'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#039F87'}
                      >
                        Kontakt
                      </button>
                    </Link>
                  </div>
                </div>
              </nav>

            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
