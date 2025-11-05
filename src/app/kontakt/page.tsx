"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageCircle, Heart, Gift, Cake, Sparkles, ArrowRight, CheckCircle, Instagram, Users, Award, Star } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    ime: "",
    email: "",
    poruka: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string; show: boolean } | null>(null);

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (toast && toast.show) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setToast({
          type: 'success',
          message: '🎉 Poruka je uspešno poslata! Odgovorićemo vam uskoro.',
          show: true
        });
        setFormData({ ime: "", email: "", poruka: "" });
      } else {
        throw new Error("Greška pri slanju poruke");
      }
    } catch (error) {
      setToast({
        type: 'error',
        message: '❌ Greška pri slanju poruke. Molimo pokušajte ponovo.',
        show: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Boje za TIM-D MEDICAL
  const primaryColor = "#039F87"; // Teal Green
  const secondaryColor = "#027F6C"; // Dark Teal
  const accentColor = "#00E1B2"; // Light Teal
  const backgroundColor = "#F0FDF4"; // Light green background
  const textColor = "#2C3E50"; // Dark Blue Gray
  const secondaryTextColor = "#6C757D"; // Medium Gray

  return (
    <div className="min-h-screen flex flex-col items-center w-full overflow-x-hidden bg-white" style={{ fontFamily: "PlusJakarta" }}>
      <Header currentPage="kontakt" />

      {/* Hero Section - Kreativni dizajn sa floating elementima */}
      <section className="relative w-full pt-24 pb-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-50 to-green-100">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-20 h-24 bg-green-300 rounded-full opacity-40"
          />
          <motion.div 
            animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-32 right-20 w-16 h-20 bg-emerald-300 rounded-full opacity-30"
          />
          <motion.div 
            animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-40 left-1/4 w-18 h-22 bg-green-300 rounded-full opacity-35"
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2 }} 
            className="text-center"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border-2 border-green-200 shadow-lg mb-8"
            >
              <Heart className="w-5 h-5" style={{ color: primaryColor }} />
              <span className="text-sm font-semibold" style={{ color: primaryColor }}>💌 Kontaktirajte TIM-D MEDICAL</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
            >
              <span className="block" style={{ color: textColor }}>Stvorimo</span>
              <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
                magiju
              </span>
              <span className="block" style={{ color: textColor }}>zajedno</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ color: secondaryTextColor }}
            >
              Potrebna vam je medicinska usluga? Kontaktirajte TIM-D MEDICAL za zakazivanje pregleda, 
              analiza ili informacije o našim uslugama. Radimo sa vama za vaše zdravlje.
            </motion.p>

            {/* Contact methods as floating cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <motion.a
                href="tel:+381638003388"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-pink-200 shadow-lg cursor-pointer overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}20` }}>
                    <Phone className="w-6 h-6" style={{ color: primaryColor }} />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg" style={{ color: textColor }}>Pozovite nas</div>
                    <div className="text-sm" style={{ color: secondaryTextColor }}>063/800-33-88</div>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+38116644154"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-pink-200 shadow-lg cursor-pointer overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}20` }}>
                    <Phone className="w-6 h-6" style={{ color: primaryColor }} />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg" style={{ color: textColor }}>Pozovite nas</div>
                    <div className="text-sm" style={{ color: secondaryTextColor }}>016/644-154</div>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/ordinacije_timd_medical/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-green-200 shadow-lg cursor-pointer overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${secondaryColor}20` }}>
                    <Instagram className="w-6 h-6" style={{ color: secondaryColor }} />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg" style={{ color: textColor }}>Instagram</div>
                    <div className="text-sm" style={{ color: secondaryTextColor }}>@ordinacije_timd_medical</div>
                  </div>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-green-200 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${accentColor}20` }}>
                    <MapPin className="w-6 h-6" style={{ color: accentColor }} />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg" style={{ color: textColor }}>Lokacija</div>
                    <div className="text-sm" style={{ color: secondaryTextColor }}>Prvomajska 71, Leskovac 16000</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section - Unique layout */}
      <section className="w-full py-20 relative">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: textColor }}>
              Pošaljite nam <span style={{ color: primaryColor }}>poruku</span>
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: secondaryTextColor }}>
              Pošaljite nam upit o našim uslugama i zakazivanju pregleda. Odgovorićemo vam u najkraćem roku.
            </p>
          </motion.div>

            <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 via-purple-200 to-teal-200 rounded-3xl opacity-30 blur-xl"></div>
            
            <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-pink-200 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="ime" className="block text-base font-semibold" style={{ color: textColor }}>
                      Vaše ime *
                    </label>
                    <input
                      type="text"
                      id="ime"
                      name="ime"
                      value={formData.ime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 focus:outline-none text-base placeholder-gray-500 duration-300 transition-all"
                      style={{ color: textColor }}
                      placeholder="Vaše ime i prezime"
                    />
                    </div>
                    
                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-base font-semibold" style={{ color: textColor }}>
                      Email adresa *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none text-base placeholder-gray-500 duration-300 transition-all"
                      style={{ color: textColor }}
                      placeholder="vas@email.com"
                      />
                  </div>
                    </div>
                    
                <div className="space-y-3">
                  <label htmlFor="poruka" className="block text-base font-semibold" style={{ color: textColor }}>
                    Vaša ideja *
                  </label>
                  <textarea
                    id="poruka"
                    name="poruka"
                    value={formData.poruka}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 focus:outline-none text-base resize-none placeholder-gray-500 duration-300 transition-all"
                    style={{ color: textColor }}
                    placeholder="Opišite nam koja medicinska usluga vas zanima, ili pošaljite upit za zakazivanje pregleda..."
                      />
                    </div>
                    
                <div className="text-center pt-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 font-bold text-lg text-white cursor-pointer overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #039F87 0%, #027F6C 50%, #00E1B2 100%)',
                      borderRadius: '50px',
                      boxShadow: '0 15px 35px rgba(22, 163, 74, 0.4)',
                      border: '3px solid transparent'
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Šalje se...
                        </>
                      ) : (
                        <>
                          <span>🎉</span>
                          Pošaljite poruku
                          <span>✨</span>
                        </>
                      )}
                    </span>
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #00E1B2 0%, #039F87 50%, #00E1B2 100%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.button>
                </div>
              </form>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Map Section - Unique design */}
      <section className="w-full py-20 relative" style={{ backgroundColor: backgroundColor }}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: textColor }}>
              Gde nas možete <span style={{ color: primaryColor }}>pronaći</span>
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: secondaryTextColor }}>
              Kontaktirajte nas za informacije o našim medicinskim uslugama i zakazivanje pregleda
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-300 via-emerald-300 to-green-300 rounded-3xl opacity-20 blur-xl"></div>
            
            <div className="relative bg-white rounded-3xl p-8 border border-green-200 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Map */}
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
              <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.234567890123!2d21.9456789!3d42.9987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354d5a6789abcdef%3A0x1234567890abcdef!2sPrvomajska%2071%2C%20Leskovac!5e0!3m2!1ssr!2srs!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                    title="TIM-D MEDICAL - Lokacija u Leskovcu"
                    className="rounded-2xl"
              ></iframe>
            </div>
            
                {/* Address info */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${primaryColor}20` }}>
                      <MapPin className="w-6 h-6" style={{ color: primaryColor }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: textColor }}>Lokacija</h3>
                      <p className="text-base" style={{ color: secondaryTextColor }}>
                        Prvomajska 71<br />
                        Leskovac 16000<br />
                        Srbija
                      </p>
                    </div>
                  </div>
                  
                  
                  <motion.a
                    href="https://www.google.com/maps/place/Prvomajska+71,+Leskovac"
                target="_blank"
                rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 font-bold text-base text-white rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #039F87 0%, #027F6C 50%, #00E1B2 100%)',
                      boxShadow: '0 10px 30px rgba(22, 163, 74, 0.3)'
                    }}
                  >
                    <MapPin className="w-5 h-5" />
                    Otvori u Google Maps
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      {/* Custom Toast Notification */}
      {toast && toast.show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.3 }}
          className={`fixed top-4 right-4 z-50 max-w-sm w-full p-6 rounded-2xl shadow-2xl border-l-4 ${
            toast.type === 'success' 
              ? 'bg-green-50 border-green-400 text-green-800' 
              : 'bg-red-50 border-red-400 text-red-800'
          }`}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {toast.type === 'success' ? (
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              ) : (
                <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <div className="ml-4 flex-1">
              <p className="text-base font-medium">{toast.message}</p>
            </div>
            <div className="ml-4 flex-shrink-0">
              <button
                onClick={() => setToast(null)}
                className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  toast.type === 'success' 
                    ? 'text-green-400 hover:bg-green-100 focus:ring-green-600' 
                    : 'text-red-400 hover:bg-red-100 focus:ring-red-600'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}