"use client";

import { Landing } from "@/modules/main/landing";
import { Testimonials } from "@/modules/testimonials";
import { Work } from "@/modules/work";
import { Footer } from "@/modules/footer";
import { About } from "@/modules/about";
import { StaticGrid } from "@/components/magicui/flickering-grid"; // Keep this import

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StaticGrid
        className="fixed inset-0 z-[-10] [mask-image:radial-gradient(550px_circle_at_center,white,transparent)] h-screen w-screen"
        squareSize={4}
        gridGap={4}
        color="#60A5FA"
        maxOpacity={0.5}
      />
      <div className="relative z-10 flex flex-col items-center w-full">
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
