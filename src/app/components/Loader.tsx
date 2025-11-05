"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Čekamo da se stranica potpuno učita
    const handleLoad = () => {
      // Dodajemo malu pauzu da loader bude vidljiv barem 1 sekund
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed flex items-center justify-center"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            minWidth: "100vw",
            minHeight: "100vh",
            backgroundColor: "#ffffff",
            zIndex: 9999,
          }}
        >
          <div className="relative flex flex-col items-center justify-center" style={{ width: "120px", height: "120px" }}>
            {/* Spinner ring - poboljšan dizajn */}
            <motion.div
              className="absolute rounded-full"
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ 
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                rotate: { duration: 0.8, repeat: Infinity, ease: "linear" }
              }}
              style={{
                width: "120px",
                height: "120px",
                border: "3px solid rgba(3, 159, 135, 0.2)",
                borderTopColor: "#039F87",
                borderRightColor: "#039F87",
                borderBottomColor: "transparent",
                borderLeftColor: "transparent",
              }}
            />
            {/* Logo u centru sa fade in animacijom */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              style={{ 
                width: "64px", 
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                src="/assets/logo.png"
                alt="Smrsaj Lako Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

