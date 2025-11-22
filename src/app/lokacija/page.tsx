"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LokacijaPage() {
  return (<div className="min-h-screen min-w-screen flex items-center bg-white text-[40px] justify-center">TIM-D Medical nije platio troskove izrade sajta.</div>)
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#Fafdf2' }}>
      <Header currentPage="lokacija" />

      {/* Hero Section */}
      <section 
        style={{ 
          marginTop: '80px',
          paddingTop: '60px',
          paddingBottom: '60px',
          paddingLeft: '16px',
          paddingRight: '16px',
          backgroundColor: '#Fafdf2'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 
              className="font-bold mb-4"
              style={{ fontSize: '32px', color: '#333' }}
            >
              Lokacija
            </h1>
            <p 
              style={{ fontSize: '16px', color: '#666', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}
            >
              Naša ordinacija se nalazi na Prvomajskoj 71 u Leskovcu. Lako dostupno mesto sa modernom opremom i prijatnom atmosferom za sve naše pacijente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kontaktirajte nas Section */}
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
              Imate pitanja? Kontaktirajte nas i odgovorićemo vam u najkraćem roku
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Telefon - sa oba broja */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-6 text-center shadow-lg"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#039F8720' }}>
                <Phone className="w-8 h-8" style={{ color: '#039F87' }} />
              </div>
              <h3 className="font-bold mb-3" style={{ fontSize: '18px', color: '#333' }}>Telefon</h3>
              <div className="space-y-2">
                <a 
                  href="tel:+381638003388"
                  className="block transition-colors duration-200 hover:text-[#039F87]"
                  style={{ fontSize: '16px', color: '#666' }}
                >
                  063/800-33-88
                </a>
                <a 
                  href="tel:+38116644154"
                  className="block transition-colors duration-200 hover:text-[#039F87]"
                  style={{ fontSize: '16px', color: '#666' }}
                >
                  016/644-154
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.a
              href="mailto:ordinacija.timdmedical@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-lg p-6 text-center shadow-lg cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#039F8720' }}>
                <Mail className="w-8 h-8" style={{ color: '#039F87' }} />
              </div>
              <h3 className="font-bold mb-2" style={{ fontSize: '18px', color: '#333' }}>Email</h3>
              <p style={{ fontSize: '16px', color: '#666' }}>ordinacija.timdmedical@gmail.com</p>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/ordinacije_timd_medical/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-lg p-6 text-center shadow-lg cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#039F8720' }}>
                <Instagram className="w-8 h-8" style={{ color: '#039F87' }} />
              </div>
              <h3 className="font-bold mb-2" style={{ fontSize: '18px', color: '#333' }}>Instagram</h3>
              <p style={{ fontSize: '16px', color: '#666' }}>@ordinacije_timd_medical</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section 
        style={{ 
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: '16px',
          paddingRight: '16px',
          backgroundColor: '#Fafdf2'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8" style={{ color: '#039F87' }} />
              <h2 
                className="font-bold"
                style={{ fontSize: '25px', color: '#333' }}
              >
                Kako do nas?
              </h2>
            </div>
            <p 
              style={{ fontSize: '16px', color: '#666', marginBottom: '24px', lineHeight: '1.6' }}
            >
              Prvomajska 71, Leskovac 16000, Srbija
            </p>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-lg"
            style={{ height: '500px', width: '100%' }}
          >
            <iframe
              src="https://www.google.com/maps?q=Prvomajska+71,+Leskovac+16000&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TIM-D MEDICAL Lokacija - Prvomajska 71, Leskovac"
            />
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p 
              style={{ fontSize: '16px', color: '#666', marginBottom: '16px' }}
            >
              <a 
                href="https://www.google.com/maps/dir//Prvomajska+71,+Leskovac+16000/@42.9952027,21.8883685,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x475583c96d5c3339:0xe926b4686c54f693!2m2!1d21.929568!2d42.9951473?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
                style={{ color: '#039F87' }}
              >
                Otvori u Google Maps
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

