"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import { 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  FileText, 
  Users, 
  Star,
  Award,
  Stethoscope,
  Microscope,
  Scan,
  Home,
  Heart,
  BookOpen,
  ArrowUp
} from "lucide-react";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Features - Usluge
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Kardiologija",
      description: "Nudimo detaljne kardiološke preglede, dijagnostiku i lečenje srčanih bolesti, uključujući EKG, kao i ultrazvuk srca."
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Vaskularna hirurgija",
      description: "Specijalizovani smo za dijagnostiku i lečenje bolesti krvnih sudova, uključujući minimalno invazivne zahvate."
    },
    {
      icon: <Scan className="w-8 h-8" />,
      title: "Radiologija ultrazvučne dijagnostike",
      description: "Naša napredna oprema za ultrazvuk omogućava preciznu i brzu dijagnostiku različitih medicinskih stanja."
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Laboratorijske usluge",
      description: "Pružamo širok spektar laboratorijskih analiza, uključujući krvne pretrage, biohemijske analize i druge specifične testove."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Kućno lečenje",
      description: "Za pacijente kojima je potrebna nega kod kuće, naši stručnjaci obezbeđuju medicinske usluge u udobnosti vašeg doma."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Opšta Medicina",
      description: "Specijalizovani smo za opštu medicinu i pružamo konsultativne preglede za najbolju moguću zdravstvenu zaštitu."
    }
  ];

  // Kako radi - proces
  const proces = [
    {
      step: "1",
      title: "Kontaktirajte nas",
      description: "Pozovite nas ili pošaljite upit za zakazivanje pregleda. Odgovaramo na sve vaše upite."
    },
    {
      step: "2",
      title: "Zakazivanje",
      description: "Zakazujemo pregled ili analize u najbližem terminu koji vam odgovara."
    },
    {
      step: "3",
      title: "Pregled i dijagnostika",
      description: "Obavljamo potrebne preglede, analize ili ultrazvučne preglede sa najnovijom opremom."
    },
    {
      step: "4",
      title: "Rezultati i konsultacija",
      description: "Dobijate rezultate i detaljnu konsultaciju sa našim lekarima o vašem zdravstvenom stanju."
    },
    {
      step: "5",
      title: "Tretman i praćenje",
      description: "Planiranje tretmana i kontinuirano praćenje vašeg zdravlja sa patronažnom službom."
    }
  ];



  return (
    <div className="min-h-screen" style={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#Fafdf2' }}>
      <Header currentPage="home" />

      {/* Hero Sekcija */}
      <section 
        id="hero" 
        className="relative overflow-hidden"
        style={{ 
          marginTop: isMobile ? '80px' : '80px',
          paddingTop: isMobile ? '20px' : '40px',
          paddingBottom: isMobile ? '20px' : '40px',
          backgroundColor: '#Fafdf2'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-0 items-center relative">
            {/* Leva strana - žena */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full"
              style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                order: isMobile ? 1 : 0
              }}
            >
              <img
                src="/assets/hero.jpg"
                alt="TIM-D MEDICAL - Medicinske usluge"
                className="w-full"
                style={{ 
                  height: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  maxHeight: isMobile ? '300px' : 'none'
                }}
              />
            </motion.div>

              {/* Desna strana - tekst */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ 
                paddingLeft: isMobile ? '16px' : '60px',
                paddingRight: isMobile ? '16px' : '60px',
                paddingTop: isMobile ? '20px' : '60px',
                paddingBottom: isMobile ? '20px' : '60px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                order: isMobile ? 2 : 0
              }}
            >
              <h1 
                className="font-bold mb-6"
                style={{ 
                  fontSize: isMobile ? '22px' : '32px',
                  lineHeight: '1.2',
                  color: '#333',
                }}
              >
                Dobrodošli u Specijalističku ordinaciju TIM-D MEDICAL
              </h1>
              <p 
                className="mb-8"
                style={{ 
                  fontSize: '16px', 
                  color: '#666',
                  lineHeight: '1.6',
                  maxWidth: '600px'
                }}
              >
                Naša ordinacija pruža sveobuhvatne medicinske usluge iz različitih oblasti kako bismo osigurali najbolju moguću zdravstvenu zaštitu za naše pacijente. Specijalizovani smo za opštu medicinu, a uz to pružamo i konsultativne preglede.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/#kontakt" className="w-full sm:w-auto">
                  <button
                    className="font-semibold text-white transition-all duration-300 cursor-pointer w-full sm:w-auto"
                    style={{
                      backgroundColor: '#039F87',
                      fontSize: '16px',
                      padding: isMobile ? '14px 24px' : '16px 32px',
                      borderRadius: '8px',
                      display: 'block',
                      textAlign: 'center'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#027F6C'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#039F87'}
                  >
                    Kontaktirajte nas
                  </button>
                </Link>
                <Link href="/lokacija" className="w-full sm:w-auto">
                  <button
                    className="font-semibold transition-all duration-300 cursor-pointer w-full sm:w-auto"
                    style={{
                      backgroundColor: 'transparent',
                      border: '2px solid #039F87',
                      color: '#039F87',
                      fontSize: '16px',
                      padding: isMobile ? '14px 24px' : '16px 32px',
                      borderRadius: '8px',
                      display: 'block',
                      textAlign: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#039F87';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#039F87';
                    }}
                  >
                    Kako do nas?
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Sekcija */}
      <section 
        id="usluge" 
        style={{ backgroundColor: '#Fafdf2', paddingTop: '80px', paddingBottom: '80px', paddingLeft: '16px', paddingRight: '16px' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
            style={{ marginBottom: '48px' }}
          >
            <h2 
              className="font-bold"
              style={{ fontSize: '25px', color: '#333', marginBottom: '16px' }}
            >
              Naše usluge
            </h2>
            <p 
              style={{ fontSize: '16px', color: '#666', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}
            >
              Naš posvećen tim lekara i medicinskog osoblja koristi najsavremeniju tehnologiju i pristupe u lečenju kako bi osigurao vašu zdravstvenu zaštitu. Posvećeni smo svakom pacijentu pojedinačno, pružajući personalizovanu negu i pažnju koja vam je potrebna.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '32px', justifyItems: 'center', margin: '0 auto' }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ padding: '0px', width: '100%', maxWidth: '350px' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ 
                      width: '64px', 
                      height: '64px', 
                      backgroundColor: '#E6F5E6',
                      color: '#039F87'
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3 
                    className="font-bold"
                    style={{ fontSize: '18px', color: '#333' }}
                  >
                    {feature.title}
                  </h3>
                </div>
                <p 
                  style={{ fontSize: '16px', color: '#666', lineHeight: '1.6' }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kako radi - Proces */}
      <section 
        id="proces" 
        style={{ backgroundColor: '#Fafdf2', paddingTop: '80px', paddingBottom: '80px', paddingLeft: '16px', paddingRight: '16px' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
            style={{ marginBottom: '48px' }}
          >
            <h2 
              className="font-bold"
              style={{ fontSize: '25px', color: '#333', marginBottom: '16px' }}
            >
              Proces
            </h2>
            <p 
              style={{ fontSize: '16px', color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}
            >
              Jednostavan proces od kontakta do završetka pregleda i dobijanja rezultata
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5" style={{ gap: '24px' }}>
            {proces.map((korak, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div 
                  className="rounded-full mx-auto flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: '#039F87', fontSize: '24px', width: '64px', height: '64px', marginBottom: '16px' }}
                >
                  {korak.step}
                </div>
                <h3 
                  className="font-bold"
                  style={{ fontSize: '18px', color: '#333', marginBottom: '8px' }}
                >
                  {korak.title}
                </h3>
                <p 
                  style={{ fontSize: '16px', color: '#666', lineHeight: '1.6' }}
                >
                  {korak.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
            style={{ marginTop: '48px' }}
          >
            <Link href="/#kontakt">
              <button
                className="font-semibold text-white transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: '#039F87',
                  fontSize: '16px',
                  padding: '16px 32px',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#027F6C'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#039F87'}
              >
                Krenimo
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Dodatni tekst posle usluga */}
      <section 
        style={{ backgroundColor: '#Fafdf2', paddingTop: '40px', paddingBottom: '40px', paddingLeft: '16px', paddingRight: '16px' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              fontSize: '18px', 
              color: '#333',
              lineHeight: '1.8',
              marginBottom: '24px'
            }}
          >
            Posetite nas u Specijalističkoj ordinaciji TIM-D MEDICAL i uverite se zašto smo Vaš najbolji izbor za zdravlje. Vaše zdravlje je naša najvažnija misija.
          </motion.p>
        </div>
      </section>

      {/* Saradnici Sekcija */}
      <section 
        id="saradnici"
        style={{ backgroundColor: '#Fafdf2', paddingTop: '80px', paddingBottom: '80px', paddingLeft: '16px', paddingRight: '16px' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
            style={{ marginBottom: '48px' }}
          >
            <h2 
              className="font-bold"
              style={{ fontSize: '25px', color: '#333', marginBottom: '16px' }}
            >
              Saradnici
            </h2>
            <p 
              style={{ fontSize: '16px', color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}
            >
              Naš tim iskusnih lekara specijalista posvećen je vašem zdravlju
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Specijalisti */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 py-6 border-b border-gray-200">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E6F5E6' }}>
                  <Stethoscope className="w-8 h-8" style={{ color: '#039F87' }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1" style={{ fontSize: '20px', color: '#333' }}>
                    Dr Milan Zdravković
                  </h3>
                  <p style={{ fontSize: '16px', color: '#666' }}>Specijalista opšte medicine</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 py-6 border-b border-gray-200">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E6F5E6' }}>
                  <Heart className="w-8 h-8" style={{ color: '#039F87' }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1" style={{ fontSize: '20px', color: '#333' }}>
                    Dr Ivica Đurić
                  </h3>
                  <p style={{ fontSize: '16px', color: '#666' }}>Internista - Kardiolog</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 py-6 border-b border-gray-200">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E6F5E6' }}>
                  <Scan className="w-8 h-8" style={{ color: '#039F87' }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1" style={{ fontSize: '20px', color: '#333' }}>
                    Prof. Dr Tomislav Jovanović
                  </h3>
                  <p style={{ fontSize: '16px', color: '#666' }}>Specijalista Radiologije</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-4 py-6 border-b border-gray-200">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E6F5E6' }}>
                  <Stethoscope className="w-8 h-8" style={{ color: '#039F87' }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1" style={{ fontSize: '20px', color: '#333' }}>
                    Dr Aleksandar Zarić
                  </h3>
                  <p style={{ fontSize: '16px', color: '#666' }}>Specijalista vaskularne hirurgije</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-4 py-6 border-b border-gray-200">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E6F5E6' }}>
                  <Stethoscope className="w-8 h-8" style={{ color: '#039F87' }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1" style={{ fontSize: '20px', color: '#333' }}>
                    Dr Aleksandar Antanasijević
                  </h3>
                  <p style={{ fontSize: '16px', color: '#666' }}>Specijalista urgentne medicine</p>
                </div>
              </div>
            </motion.div>

            {/* Opšta Medicina */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-4 py-6 border-b border-gray-200">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E6F5E6' }}>
                  <Award className="w-8 h-8" style={{ color: '#039F87' }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1" style={{ fontSize: '20px', color: '#333' }}>
                    Dr Ivana Mišić
                  </h3>
                  <p style={{ fontSize: '16px', color: '#666' }}>Opšta Medicina</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-4 py-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E6F5E6' }}>
                  <Award className="w-8 h-8" style={{ color: '#039F87' }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1" style={{ fontSize: '20px', color: '#333' }}>
                    Dr Marjan Stanković
                  </h3>
                  <p style={{ fontSize: '16px', color: '#666' }}>Opšta Medicina</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed z-50 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#00E1B2',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(64, 185, 60, 0.3)',
              border: 'none',
              bottom: '32px',
              right: isMobile ? '16px' : '32px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#039F87';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(64, 185, 60, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#00E1B2';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(64, 185, 60, 0.3)';
            }}
            aria-label="Nazad na vrh"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
