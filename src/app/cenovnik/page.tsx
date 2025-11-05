"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, MapPin } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CenovnikPage() {
  const [displayedCount, setDisplayedCount] = useState(25);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 25;

  const usluge = [
    { sifra: 1, usluga: "Pregled lekara opšte prakse", cena: "3.000" },
    { sifra: 2, usluga: "Kontrolni pregled lekara opšte prakse", cena: "1.500" },
    { sifra: 3, usluga: "Pregled lekara opšte prakse sa EKG-om", cena: "3.200" },
    { sifra: 4, usluga: "Kontrolni pregled lekara opšte prakse sa EKG-om", cena: "1.700" },
    { sifra: 5, usluga: "Ultrazvuk abdomena i male karlice", cena: "3.000" },
    { sifra: 6, usluga: "Ultrazvuk štitne žlezde", cena: "3.000" },
    { sifra: 7, usluga: "Ultrazvuk dojke i aksile", cena: "3.000" },
    { sifra: 8, usluga: "Primena Zomete u ordinaciji", cena: "10.000" },
    { sifra: 9, usluga: "Davanje th u ord IV, IM, SC (sa ličnim lekom)", cena: "1.000" },
    { sifra: 10, usluga: "Polivitaminska infuzija u ordinaciji", cena: "3.000" },
    { sifra: 11, usluga: "G-Vitaminska infuzija u ordinaciji", cena: "6.500" },
    { sifra: 12, usluga: "Primena Fe u ordinaciji", cena: "3.600" },
    { sifra: 13, usluga: "Pregled lekara u kućnim uslovima", cena: "4.000" },
    { sifra: 14, usluga: "Kontrola lekara u kućnim uslovima", cena: "2.800" },
    { sifra: 15, usluga: "Nadoknada Humanih albumina u kućnim uslovima (1 bočica) sa našim lekom", cena: "7.800" },
    { sifra: 16, usluga: "Nadoknada Humanih albumina u kućnim uslovima (1 bočica) sa ličnim lekom", cena: "5.000" },
    { sifra: 17, usluga: "Primena Zomete u kućnim uslovima sa našim lekom", cena: "11.600" },
    { sifra: 18, usluga: "Primena Zomete u kućnim uslovima sa ličnim lekom", cena: "5.000" },
    { sifra: 19, usluga: "Davanje th IV, IM, SC (sa ličnim lekom) u kućnim uslovima", cena: "1.800" },
    { sifra: 20, usluga: "Davanje th IV, IM, SC (sa našim lekom) u kućnim uslovima", cena: "3.000" },
    { sifra: 21, usluga: "Polivitaminska infuz. sa prisustvom med sestre/tehničara u kućnim uslovima", cena: "3.500" },
    { sifra: 22, usluga: "Polivitaminska infuz. sa prisustvom med sestre/tehničara i dr. u kućnim uslovima", cena: "5.500" },
    { sifra: 23, usluga: "G-Vitaminska infuzija sa prisustvom med. sestre/tehničara u kućnim uslovima", cena: "8.000" },
    { sifra: 24, usluga: "Uzorkovanje krvi za lab. analize 50 RSD + cena koštanja analiza", cena: "/" },
    { sifra: 25, usluga: "Patronaža grad", cena: "350" },
    { sifra: 26, usluga: "Patronaža širi centar (5-10 min.) I", cena: "450" },
    { sifra: 27, usluga: "Patronaža (sela do 15 km) II", cena: "500" },
    { sifra: 28, usluga: "Patronaža (sela preko 15 km) III", cena: "800" },
    { sifra: 29, usluga: "Malo previjanje", cena: "1.500" },
    { sifra: 30, usluga: "Veliko previjanje", cena: "2.000" },
    { sifra: 31, usluga: "KKS", cena: "400" },
    { sifra: 32, usluga: "KKS + biohemija", cena: "1.800" },
    { sifra: 33, usluga: "Davanja IV, IM u ordinaciji sa našim Longacephom", cena: "4.000" },
    { sifra: 34, usluga: "Davanje infuzije u ordinaciji sa ličnim lekom", cena: "1.200" },
    { sifra: 35, usluga: "Celokupni pregled urina", cena: "400" },
    { sifra: 36, usluga: "Urinokultura", cena: "700" },
    { sifra: 37, usluga: "Glukoza", cena: "150" },
    { sifra: 38, usluga: "HBA1C (tromesečni)", cena: "1.100" },
    { sifra: 39, usluga: "Kortizol", cena: "1.200" },
    { sifra: 40, usluga: "Reuma faktor", cena: "900" },
    { sifra: 41, usluga: "Biohemija za trudnice + gratis KKS", cena: "1.500" },
    { sifra: 42, usluga: "Fe", cena: "250" },
    { sifra: 43, usluga: "FT4", cena: "800" },
    { sifra: 44, usluga: "T3", cena: "750" },
    { sifra: 45, usluga: "T4", cena: "750" },
    { sifra: 46, usluga: "FT3", cena: "800" },
    { sifra: 47, usluga: "Anti TPO antitela", cena: "1.400" },
    { sifra: 48, usluga: "TSH", cena: "750" },
    { sifra: 49, usluga: "Kreatinin u urinu", cena: "250" },
    { sifra: 50, usluga: "Urea u urinu", cena: "250" },
    { sifra: 51, usluga: "Krvna grupa sa RH faktorom", cena: "2.800" },
    { sifra: 52, usluga: "Urea", cena: "250" },
    { sifra: 53, usluga: "Kreatinin", cena: "250" },
    { sifra: 54, usluga: "CRP", cena: "250" },
    { sifra: 55, usluga: "Albumini", cena: "290" },
    { sifra: 56, usluga: "Ukupni proteini", cena: "290" },
    { sifra: 57, usluga: "AST", cena: "2.500" },
    { sifra: 58, usluga: "ALT", cena: "250" },
    { sifra: 59, usluga: "D-dimer", cena: "2.000" },
    { sifra: 60, usluga: "Free PSA", cena: "1.300" },
    { sifra: 61, usluga: "PSA", cena: "1.200" },
    { sifra: 62, usluga: "CA 19.9 (tumor marker za debelo crevo)", cena: "1.600" },
    { sifra: 63, usluga: "Folna kiselina", cena: "1.300" },
    { sifra: 64, usluga: "Vitamin D u krvi", cena: "2.300" },
    { sifra: 65, usluga: "Beta HCG", cena: "1.100" },
    { sifra: 66, usluga: "Bris uha", cena: "700" },
    { sifra: 67, usluga: "Feritin", cena: "1.300" },
    { sifra: 68, usluga: "Fekalni kalprotektin", cena: "4.500" },
    { sifra: 69, usluga: "Uslužno rađenje EKG-a", cena: "500" },
    { sifra: 70, usluga: "Testosteron", cena: "900" },
    { sifra: 71, usluga: "Estradiol", cena: "900" },
    { sifra: 72, usluga: "Prolaktin", cena: "900" },
    { sifra: 73, usluga: "UZ mekih tkiva", cena: "3.000" },
    { sifra: 74, usluga: "Anti TG antitela", cena: "1.400" },
    { sifra: 75, usluga: "Mokraćna kiselina", cena: "250" },
    { sifra: 76, usluga: "Lipidni status (HOL, HDL, LDL, TG, INDEXI)", cena: "880" },
    { sifra: 77, usluga: "Helicobacter iz fecesa", cena: "1.600" },
    { sifra: 78, usluga: "Bris rane", cena: "1.000" },
    { sifra: 79, usluga: "PT", cena: "500" },
    { sifra: 80, usluga: "ACTH (adenokortikotropni hormon)", cena: "1.350" },
    { sifra: 81, usluga: "HbsAg (hepatitis B virus) - radi Bebafarm", cena: "1.500" },
    { sifra: 82, usluga: "aPTT", cena: "500" },
    { sifra: 83, usluga: "Bris grla", cena: "700" },
    { sifra: 84, usluga: "AMH (Anti-Milerov hormon) - slati aqlab", cena: "3.600" },
    { sifra: 85, usluga: "Double test (slati aqlab)", cena: "3.000" },
    { sifra: 86, usluga: "Mikološki pregled stolice (candida)", cena: "700" },
    { sifra: 87, usluga: "Bris nosa", cena: "700" },
    { sifra: 88, usluga: "Bris jezika", cena: "700" },
    { sifra: 89, usluga: "ALP (alkalna fosfataza)", cena: "220" },
    { sifra: 90, usluga: "Bris usne duplje", cena: "700" },
    { sifra: 91, usluga: "Koprokultura", cena: "900" },
    { sifra: 92, usluga: "Toxoplazma IgG", cena: "1.400" },
    { sifra: 93, usluga: "Toxoplazma IgM", cena: "1.400" },
    { sifra: 94, usluga: "Stolica na parazite", cena: "700" },
    { sifra: 95, usluga: "FOB (okultno krvarenje-stolica)", cena: "1.100" },
    { sifra: 96, usluga: "Fibrinogen", cena: "400" },
    { sifra: 97, usluga: "LDH", cena: "300" },
    { sifra: 98, usluga: "Natrijum", cena: "290" },
    { sifra: 99, usluga: "Kalijum", cena: "290" },
    { sifra: 100, usluga: "Hloridi", cena: "290" },
    { sifra: 101, usluga: "Kalcijum ukupni", cena: "370" },
    { sifra: 102, usluga: "HDL holesterol", cena: "250" },
    { sifra: 103, usluga: "Holesterol", cena: "250" },
    { sifra: 104, usluga: "Trigliceridi", cena: "250" },
    { sifra: 105, usluga: "Helicobacter pylori IgA iz krvi", cena: "1.600" },
    { sifra: 106, usluga: "Spermogram", cena: "2.000" },
    { sifra: 107, usluga: "InR", cena: "500" },
    { sifra: 108, usluga: "Pruzanje med. usluga 3 sestre i 1 dr med. (za aptiv)", cena: "625.000" },
    { sifra: 109, usluga: "CEA", cena: "1.200" },
    { sifra: 110, usluga: "Imunoglobulin E", cena: "1.200" },
    { sifra: 111, usluga: "Calcitonin", cena: "1.700" },
    { sifra: 112, usluga: "Aldosteron", cena: "1.850" },
    { sifra: 113, usluga: "Pruzanje zdravstvene usluge subotom", cena: "24.000" },
    { sifra: 114, usluga: "BNP", cena: "3.700" },
    { sifra: 115, usluga: "Antitetanusna zaštita Tetavaksal", cena: "2.890" },
    { sifra: 116, usluga: "OGTT 0,60,120, glik 75gr", cena: "1.200" },
    { sifra: 117, usluga: "Magnezijum", cena: "250" },
    { sifra: 118, usluga: "Vitamin B12", cena: "1.300" },
    { sifra: 119, usluga: "Kks za trudnice", cena: "1" },
    { sifra: 120, usluga: "CA 125", cena: "1.600" },
    { sifra: 121, usluga: "He4", cena: "2.900" },
    { sifra: 122, usluga: "AFP (alfa-feto protein)", cena: "1.200" },
    { sifra: 123, usluga: "HOLTER EKG-a 24h", cena: "3.500" },
    { sifra: 124, usluga: "Transglutaminska antitela IgG", cena: "1.600" },
    { sifra: 125, usluga: "Transglutaminska antitela IgA", cena: "1.600" },
    { sifra: 126, usluga: "Antiglijadinska antitela IgG", cena: "2.500" },
    { sifra: 127, usluga: "Antiglijadinska antitela IgA", cena: "2.500" },
    { sifra: 128, usluga: "Endomizijalna antitela IgA", cena: "2.500" },
    { sifra: 129, usluga: "Endomizijalna antitela IgG", cena: "2.500" },
    { sifra: 130, usluga: "FSH (folikulistimulirajući hormon)", cena: "950" },
    { sifra: 131, usluga: "GDH (Clostridium difficillet toksina A i B) uzorak stolica", cena: "2.600" },
    { sifra: 132, usluga: "Perianalni otisak", cena: "600" },
    { sifra: 133, usluga: "Kalprotektin EIA metod (šalje aqualab za Nemačku) gotov za 15 dana", cena: "2.800" },
    { sifra: 134, usluga: "LH (luteinizirajući hormon)", cena: "950" },
    { sifra: 135, usluga: "Se (sedimentacija)", cena: "120" },
    { sifra: 136, usluga: "Vitamin D3", cena: "5.000" },
    { sifra: 137, usluga: "TPHA", cena: "1.200" },
    { sifra: 138, usluga: "Paracetamol Flakon vensi", cena: "1.500" },
    { sifra: 139, usluga: "eGFR (urea, kreatinin) Aq", cena: "400" },
    { sifra: 140, usluga: "Diklofen", cena: "400" },
    { sifra: 141, usluga: "Gentamicin 80mg", cena: "400" },
    { sifra: 142, usluga: "Gentamicin 120mg", cena: "400" },
    { sifra: 143, usluga: "Longaceph 1gr", cena: "900" },
    { sifra: 144, usluga: "Klometol", cena: "250" },
    { sifra: 145, usluga: "Ketonal ampula", cena: "400" },
    { sifra: 146, usluga: "Novalgetol", cena: "450" },
    { sifra: 147, usluga: "NaCl 0.9 100 ml", cena: "800" },
    { sifra: 148, usluga: "Sol Vit infuz", cena: "4.500" },
    { sifra: 149, usluga: "Contraloc flakon", cena: "550" },
    { sifra: 150, usluga: "Buscopane amp", cena: "400" },
    { sifra: 151, usluga: "Vit c", cena: "80" },
    { sifra: 152, usluga: "Spermokultura", cena: "700" },
    { sifra: 153, usluga: "Lemod-solu 40mg", cena: "250" },
    { sifra: 154, usluga: "Progesteron", cena: "900" },
    { sifra: 155, usluga: "Vitamin D", cena: "2.250" },
    { sifra: 156, usluga: "Triple", cena: "3.200" },
    { sifra: 157, usluga: "Berlition NL", cena: "3.600" },
    { sifra: 158, usluga: "Berlition LL", cena: "2.800" },
    { sifra: 159, usluga: "Alfa Amilaza (serum)", cena: "550" },
    { sifra: 160, usluga: "CA 15-3", cena: "1.600" },
    { sifra: 161, usluga: "Lipaza", cena: "600" },
    { sifra: 162, usluga: "Pregled i infuzija", cena: "4.000" },
    { sifra: 163, usluga: "Davanje gvožđa sa ličnim lekom", cena: "1.000" },
  ];

  const loadMore = () => {
    setDisplayedCount(prev => Math.min(prev + itemsPerPage, usluge.length));
  };

  // Filtriranje usluga na osnovu search query-ja
  const filteredUsluge = searchQuery
    ? usluge.filter(
        (usluga) =>
          usluga.usluga.toLowerCase().includes(searchQuery.toLowerCase()) ||
          usluga.sifra.toString().includes(searchQuery) ||
          usluga.cena.includes(searchQuery)
      )
    : usluge;

  // Ako postoji search query, prikaži sve filtrirane rezultate, inače koristi paginaciju
  const displayedUsluge = searchQuery
    ? filteredUsluge
    : filteredUsluge.slice(0, displayedCount);

  const hasMore = !searchQuery && displayedCount < usluge.length;

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#Fafdf2' }}>
      <Header currentPage="cenovnik" />

      <section 
        style={{ 
          marginTop: '80px',
          paddingTop: '60px',
          paddingBottom: '80px',
          paddingLeft: '16px',
          paddingRight: '16px',
          backgroundColor: '#Fafdf2'
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Naslov */}
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
              TIM-D MEDICAL Cenovnik
            </h1>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <div className="relative max-w-md mx-auto">
              <Search 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Pretraži usluge..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setDisplayedCount(25); // Resetuj paginaciju kada se pretražuje
                }}
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#039F87] focus:outline-none transition-colors duration-300"
                style={{ fontSize: '16px', fontFamily: 'Montserrat, sans-serif' }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  style={{ fontSize: '18px', fontWeight: 'bold' }}
                >
                  ×
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-center mt-2 text-gray-600" style={{ fontSize: '14px' }}>
                Pronađeno: {filteredUsluge.length} {filteredUsluge.length === 1 ? 'usluga' : 'usluga'}
              </p>
            )}
          </motion.div>

          {/* Tabela */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg overflow-hidden"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
          >
            {displayedUsluge.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-gray-500" style={{ fontSize: '18px' }}>
                  Nema rezultata za pretragu "{searchQuery}"
                </p>
                <p className="text-gray-400 mt-2" style={{ fontSize: '14px' }}>
                  Pokušajte sa drugim pojmom
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full" style={{ borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#039F87' }}>
                      <th 
                        className="text-left font-bold text-white py-4 px-6"
                        style={{ fontSize: '16px', borderRight: '1px solid rgba(255,255,255,0.2)' }}
                      >
                        Šifra
                      </th>
                      <th 
                        className="text-left font-bold text-white py-4 px-6"
                        style={{ fontSize: '16px', borderRight: '1px solid rgba(255,255,255,0.2)' }}
                      >
                        Usluge
                      </th>
                      <th 
                        className="text-right font-bold text-white py-4 px-6"
                        style={{ fontSize: '16px' }}
                      >
                        Cena
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedUsluge.map((usluga, index) => (
                    <motion.tr
                      key={usluga.sifra}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.01 }}
                      style={{ 
                        borderBottom: index < displayedUsluge.length - 1 ? '1px solid #e5e5e5' : 'none',
                        backgroundColor: index % 2 === 0 ? '#fff' : '#fafafa'
                      }}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td 
                        className="py-4 px-6 font-semibold"
                        style={{ fontSize: '15px', color: '#333', borderRight: '1px solid #e5e5e5', width: '80px' }}
                      >
                        {usluga.sifra}
                      </td>
                      <td 
                        className="py-4 px-6"
                        style={{ fontSize: '15px', color: '#333', borderRight: '1px solid #e5e5e5' }}
                      >
                        {usluga.usluga}
                      </td>
                      <td 
                        className="py-4 px-6 text-right font-semibold"
                        style={{ fontSize: '15px', color: '#039F87', width: '150px' }}
                      >
                        {usluga.cena === "/" ? "/" : `${usluga.cena} RSD`}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            )}
          </motion.div>

          {/* Load More Button */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-8 text-center"
            >
              <button
                onClick={loadMore}
                className="font-semibold text-white transition-all duration-300 cursor-pointer"
                style={{ 
                  backgroundColor: '#039F87',
                  fontSize: '16px',
                  padding: '12px 32px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(3, 159, 135, 0.3)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#027F6C'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#039F87'}
              >
                Prikaži više ({usluge.length - displayedCount} preostalo)
              </button>
            </motion.div>
          )}

          {/* Footer info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p 
              style={{ 
                fontSize: '18px', 
                color: '#666',
                fontStyle: 'italic',
                marginBottom: '24px'
              }}
            >
              u službi Vaše lepote i zdravlja
            </p>
            <p 
              style={{ 
                fontSize: '16px', 
                color: '#333',
                marginBottom: '8px'
              }}
            >
              Specijalistički pregledi - Ultrazvučna dijagnostika - Ekg - Kućno lečenje - Uzorkovanje krvi - Estetska medicina
            </p>
            <p 
              style={{ 
                fontSize: '14px', 
                color: '#666',
                marginTop: '24px',
                marginBottom: '24px'
              }}
            >
              TIM-D MEDICAL LESKOVAC
            </p>
            <Link href="/lokacija">
              <button
                className="font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 mx-auto"
                style={{
                  backgroundColor: 'transparent',
                  border: '2px solid #039F87',
                  color: '#039F87',
                  fontSize: '16px',
                  padding: '12px 32px',
                  borderRadius: '8px',
                  marginTop: '16px'
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
                <MapPin className="w-5 h-5" />
                Kako do nas?
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

