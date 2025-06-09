"use client";
import { useRef } from "react";
import { Landing } from "@/modules/main/landing";
import { Testimonials } from "@/modules/testimonials";
import { Work } from "@/modules/work";
import { motion, useScroll, useTransform } from "framer-motion";
import { About } from "@/modules/about";
import { Footer } from "@/modules/footer";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll(); // Will track window scroll

  // Optional: Guard against undefined scrollY (especially on SSR)
  const rotate = useTransform(scrollY, [0, 5000], [30, 360]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ rotate, originX: 0 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-40 bg-gradient-to-b from-black   via-[#4118ac] via-50% to-black w-[60%] h-[75%] blur-[100px] rounded-full will-change-transform"
      />
      <div className="min-h-screen flex flex-col items-center w-full h-full mt-12 md:mt-0">
        <Landing />
        <Work />
        <About />
        <Testimonials />
        <div className="hidden md:block">
          <Footer />
        </div>
      </div>
    </div>
  );
}
