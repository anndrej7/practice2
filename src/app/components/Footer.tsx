"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Instagram,
  Mail,
  Send,
  ArrowUp
} from "lucide-react";
import Image from "next/image";
import { toast } from 'react-toastify';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    ime: "",
    email: "",
    poruka: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.ime,
          email: formData.email,
          message: formData.poruka
        })
      });

      if (response.ok) {
        toast.success('Poruka je uspešno poslata! Odgovorićemo vam uskoro.');
        setFormData({ ime: "", email: "", poruka: "" });
      } else {
        throw new Error("Greška pri slanju poruke");
      }
    } catch (error) {
      toast.error('Greška pri slanju poruke. Molimo pokušajte ponovo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickLinks = [
    { name: "Naslovna", href: "/" },
    { name: "O nama", href: "/o-nama" },
    { name: "Proces", href: "/#proces" },
    { name: "Cene", href: "/#cene" },
    { name: "Kontakt", href: "/#kontakt" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Kontakt Sekcija */}
      <section 
        id="kontakt"
        style={{ 
          backgroundColor: '#039F87',
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: '16px',
          paddingRight: '16px'
        }}
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
              style={{ fontSize: '22px', color: '#fff', marginBottom: '16px' }}
            >
              Kontaktirajte nas
            </h2>
            <p 
              style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}
            >
              Imate pitanja? Pošaljite nam poruku i odgovorićemo vam u najkraćem roku
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {/* Kontakt Forma */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="ime"
                    className="block font-medium"
                    style={{ fontSize: '16px', color: '#fff', marginBottom: '8px' }}
                  >
                    Ime i prezime *
                  </label>
                  <input
                    type="text"
                    id="ime"
                    name="ime"
                    value={formData.ime}
                    onChange={handleChange}
                    required
                    className="w-full rounded"
                    style={{
                      padding: '12px 16px',
                      fontSize: '16px',
                      border: '1px solid rgba(255,255,255,0.3)',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: '#fff'
                    }}
                    placeholder="Vaše ime i prezime"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email"
                    className="block font-medium"
                    style={{ fontSize: '16px', color: '#fff', marginBottom: '8px' }}
                  >
                    Email adresa *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded"
                    style={{
                      padding: '12px 16px',
                      fontSize: '16px',
                      border: '1px solid rgba(255,255,255,0.3)',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: '#fff'
                    }}
                    placeholder="vas@email.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="poruka"
                    className="block font-medium"
                    style={{ fontSize: '16px', color: '#fff', marginBottom: '8px' }}
                  >
                    Poruka *
                  </label>
                  <textarea
                    id="poruka"
                    name="poruka"
                    value={formData.poruka}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded resize-none"
                    style={{
                      padding: '12px 16px',
                      fontSize: '16px',
                      border: '1px solid rgba(255,255,255,0.3)',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: '#fff'
                    }}
                    placeholder="Vaša poruka..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-semibold text-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-8px"
                  style={{
                    backgroundColor: '#00E1B2',
                    fontSize: '16px',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    marginBottom: '16px'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.color = '#039F87';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) e.currentTarget.style.backgroundColor = '#00E1B2';
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  {isSubmitting ? (
                    <>Šalje se...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Pošalji poruku
                    </>
                  )}
                </button>
                <Link href="/lokacija" className="w-full">
                  <button
                    type="button"
                    className="w-full font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center gap-8px"
                    style={{
                      backgroundColor: 'transparent',
                      border: '2px solid #00E1B2',
                      color: '#00E1B2',
                      fontSize: '16px',
                      padding: '16px 32px',
                      borderRadius: '8px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#00E1B2';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#00E1B2';
                    }}
                  >
                    <MapPin className="w-5 h-5" />
                    Kako do nas?
                  </button>
                </Link>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full relative overflow-hidden border-t border-gray-200"
        style={{ 
          backgroundColor: '#039F87',
          fontFamily: 'Montserrat, sans-serif',
          paddingTop: '48px',
          paddingBottom: '48px',
          paddingLeft: '16px',
          paddingRight: '16px'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" style={{ marginBottom: '32px' }}>
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="font-bold" style={{ fontSize: '18px', color: '#fff' }}>
                  TIM-D MEDICAL
                </div>
              </div>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: '16px' }}>
                Specijalistički pregledi, laboratorijske analize, ultrazvučna dijagnostika i patronažna služba sa kućnim lečenjem. Prvomajska 71, Leskovac.
              </p>
              <div className="flex" style={{ gap: '12px' }}>
                <a
                  href="https://www.instagram.com/ordinacije_timd_medical/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: '#fff'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#00E1B2';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold flex items-center" style={{ fontSize: '18px', color: '#fff', marginBottom: '16px' }}>
                Brze veze
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-300"
                      style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#00E1B2'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold" style={{ fontSize: '18px', color: '#fff', marginBottom: '16px' }}>
                Naše usluge
              </h3>
              <ul className="space-y-2">
                <li style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}>
                  Specijalistički pregledi
                </li>
                <li style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}>
                  Kompletne laboratorijske analize
                </li>
                <li style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}>
                  Ultrazvučna dijagnostika
                </li>
                <li style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}>
                  Patronažna služba sa kućnim lečenjem
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold" style={{ fontSize: '18px', color: '#fff', marginBottom: '16px' }}>
                Pravne informacije
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="transition-colors duration-300"
                    style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#00E1B2'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                  >
                    Politika privatnosti
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="transition-colors duration-300"
                    style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#00E1B2'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                  >
                    Uslovi korišćenja
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="transition-colors duration-300"
                    style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#00E1B2'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                  >
                    Cookie politika
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '24px' }}>
            <div className="flex flex-col md:flex-row justify-between items-center" style={{ gap: '16px' }}>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
                <p>
                  &copy; {currentYear} <span className="font-bold" style={{ color: '#fff' }}>
                    TIM-D MEDICAL
                  </span>. Sva prava zadržana.
                </p>
                <p style={{ marginTop: '8px' }}>Prvomajska 71, Leskovac 16000</p>
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
                <p>Profesionalna medicinska usluga</p>
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
                <p>Powered by <a href="https://kreirajsajt.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00E1B2' }}>Kreiraj Sajt</a></p>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
