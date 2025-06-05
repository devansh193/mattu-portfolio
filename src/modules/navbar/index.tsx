"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const items = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT", href: "/contact" },
];

const useIsMediumUp = () => {
  const [isMediumUp, setIsMediumUp] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMediumUp(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMediumUp;
};

export const Navbar = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const isMediumUp = useIsMediumUp();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setScrolled(latestValue > 20);
  });

  return (
    <div className="w-full">
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var(--shadow-custom)" : "none",
          width: scrolled ? (isMediumUp ? "50%" : "70%") : "65%",
          y: scrolled ? 10 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn(
          "block md:flex fixed top-0 left-0 right-0 z-50 items-center mx-auto inset-x-0 justify-between rounded-3xl px-3 py-4 md:py-6 text-lg h-16 font-inter my-4",
          "bg-black/50 backdrop-blur-md text-neutral-200"
        )}
      >
        {/* Hidden on small screens */}
        <div className="hidden md:block">
          <Image
            src="/kuro.jpg"
            alt="kuro"
            width={100}
            height={100}
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* Responsive inline nav */}
        <div className="flex items-center justify-center">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-1 md:px-2 py-0.5 md:py-1"
            >
              {hovered === index && (
                <motion.span
                  layoutId="hovered-span"
                  className="-z-10 h-full w-full absolute inset-0 rounded-md bg-neutral-900 dark:bg-neutral-800"
                />
              )}
              <span className="transition-all duration-200 group-hover:scale-105 group-hover:text-[#9999A1] text-xs md:text-xs tracking-wide font-sans font-medium">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};
