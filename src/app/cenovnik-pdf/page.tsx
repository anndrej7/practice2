"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function CenovnikPDFPage() {
  useEffect(() => {
    // Auto-trigger print dialog when page loads
    const timer = setTimeout(() => {
      window.print();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white p-8 print:p-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 1.5cm;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div className="max-w-4xl mx-auto bg-white">
        {/* Header */}
        <div className="text-center mb-8 pb-6 border-b-4 border-black">
          <h1 className="text-5xl font-bold text-black mb-4">
            Maskote Džentlmen i Dama
          </h1>
          <p className="text-2xl font-semibold" style={{ color: '#E8972A' }}>
            CENOVNIK USLUGA
          </p>
        </div>

        {/* Intro */}
        <div className="mb-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4" style={{ borderColor: '#E8972A' }}>
          <p className="text-lg text-gray-800 leading-relaxed">
            Maskote su <span className="font-bold" style={{ color: '#E8972A' }}>LUXURY, PREMIUM kvalitet</span> izrade namenjen tržištu EU. 
            Identične njihovom likovima iz crtaća.
          </p>
        </div>

        {/* Lux Maskote */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-300">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="relative w-full h-40 mb-3">
                <Image
                  src="/assets/lux1.png"
                  alt="Lav Alex"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-gray-700">Lav Alex</p>
            </div>
            <div className="text-center">
              <div className="relative w-full h-40 mb-3">
                <Image
                  src="/assets/lux8.jpg"
                  alt="Slon Dambo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-gray-700">Slon Dambo</p>
            </div>
            <div className="text-center">
              <div className="relative w-full h-40 mb-3">
                <Image
                  src="/assets/lux3.jpg"
                  alt="Maca Meri"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-semibold text-gray-700">Maca Meri</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-black mb-4">Lux Maskote</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-3 border-b-2 border-gray-300">
              <span className="text-xl text-gray-700">20 minuta</span>
              <span className="text-3xl font-bold" style={{ color: '#E8972A' }}>70 €</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-xl text-gray-700">30 minuta</span>
              <span className="text-3xl font-bold" style={{ color: '#E8972A' }}>90 €</span>
            </div>
          </div>
        </div>

        {/* Animatorski Tim */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-300">
          <div className="flex items-center mb-4">
            <div className="relative w-32 h-32 mr-6">
              <Image
                src="/assets/animatori1.jpg"
                alt="Animatorski Tim"
                fill
                className="object-cover rounded"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black">Animatorski Tim</h2>
              <p className="text-gray-600 text-lg">Bez maskote</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-3 border-b-2 border-gray-300">
              <span className="text-xl text-gray-700">120 minuta (1 animator)</span>
              <span className="text-3xl font-bold" style={{ color: '#E8972A' }}>95 €</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-xl text-gray-700">120 minuta (2 animatora)</span>
              <span className="text-3xl font-bold" style={{ color: '#E8972A' }}>135 €</span>
            </div>
          </div>
        </div>

        {/* Kompletan Paket - ISTAKNUTO */}
        <div className="mb-8 p-8 rounded-lg text-white" style={{ background: 'linear-gradient(to bottom right, #E8972A, #d68520)' }}>
          <h2 className="text-4xl font-bold mb-4">⭐ KOMPLETAN PAKET ⭐</h2>
          <p className="text-xl mb-6 opacity-90">Maskota + Animatorski tim</p>
          <div className="flex justify-between items-center py-4 border-t-2 border-b-2 border-white/30">
            <span className="text-2xl">120 minuta programa</span>
            <span className="text-5xl font-bold">175 €</span>
          </div>
        </div>

        {/* DJ Kids Show */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-300">
          <div className="flex items-center mb-4">
            <div className="relative w-32 h-32 mr-6">
              <Image
                src="/assets/djshow1.jpg"
                alt="DJ Kids Show"
                fill
                className="object-cover rounded"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black">DJ Kids Show</h2>
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <span className="text-xl text-gray-700">30 minuta</span>
            <span className="text-3xl font-bold" style={{ color: '#E8972A' }}>100 €</span>
          </div>
        </div>

        {/* Beli Dvorac */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-300">
          <div className="flex items-center mb-4">
            <div className="relative w-32 h-32 mr-6">
              <Image
                src="/assets/belidvorac5.jpg"
                alt="Beli Dvorac"
                fill
                className="object-cover rounded"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black">Beli Dvorac</h2>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-3">
              <div>
                <span className="text-xl text-gray-700">60 minuta</span>
                <p className="text-sm text-gray-600">(minimum 3 sata)</p>
              </div>
              <span className="text-3xl font-bold" style={{ color: '#E8972A' }}>50 €</span>
            </div>
            <p className="text-gray-600 italic">U cenu uključena montaža, demontaža i čuvalica</p>
          </div>
        </div>

        {/* Napomena */}
        <div className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-white rounded-lg border-2" style={{ borderColor: '#E8972A' }}>
          <p className="text-lg text-gray-800 leading-relaxed font-semibold">
            ✓ U cenu je uključena kompletna oprema, rekviziti za igre i osmišljena zabava prilagođena uzrastu dece.
          </p>
        </div>

        {/* Footer - Kontakt */}
        <div className="text-center p-8 bg-black text-white rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Za rezervaciju kontaktirajte nas:</h3>
          <p className="text-4xl font-bold mb-6" style={{ color: '#E8972A' }}>069/223-55-66</p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-xl font-semibold mb-2">Marija Marić</p>
            <p className="text-gray-400">Diplomirani vaspitač na master studijama</p>
          </div>
          <div className="mt-6 text-gray-400">
            <p>www.maskotedzentlmenidama.rs</p>
            <p>Instagram: @maskote_dzentlmen_dama</p>
          </div>
        </div>

        {/* Print Button (visible only on screen) */}
        <div className="no-print text-center mt-8">
          <button 
            onClick={() => window.print()} 
            className="bg-[#E8972A] hover:bg-[#d68520] text-white px-8 py-4 rounded-sm font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            Štampaj / Sačuvaj kao PDF
          </button>
          <p className="mt-4 text-gray-600">
            Kliknite dugme ili koristite Ctrl+P (Windows) / Cmd+P (Mac) za štampanje ili čuvanje kao PDF
          </p>
        </div>
      </div>
    </div>
  );
}

