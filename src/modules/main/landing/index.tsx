import { motion } from "framer-motion";
import { sampleAvatars } from "@/data";
import { Cover } from "@/components/cover";
import { Button } from "@/components/ui/button";
import { AvatarGroup } from "@/components/avatar-circle";

export const Landing = () => {
  const gradientVariants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };
  return (
    <div className="flex flex-col items-center justify-center px-4 h-screen text-center ">
      <div className="relative flex flex-col items-center justify-center h-full max-w-[1000px] mx-auto px-4 text-center gap-y-8">
        {/* Gradient backgrounds with noise overlay */}
        <div className="absolute inset-0 flex items-center justify-center space-x-6 -z-10 w-full">
          <div className="relative max-w-xl w-full h-[400px]">
            <motion.div
              className="absolute inset-0 opacity-40 bg-gradient-to-br from-black via-[#4118ac] to-black blur-[100px] will-change-transform"
              style={{
                backgroundSize: "200% 200%",
              }}
              variants={gradientVariants}
              animate="animate"
            />
          </div>
          <div className="relative max-w-xl w-full h-[400px]">
            <motion.div
              className="absolute inset-0 opacity-40 bg-gradient-to-bl from-black via-[#4118ac] to-black blur-[100px] will-change-transform"
              style={{
                backgroundSize: "200% 200%",
              }}
              variants={gradientVariants}
              animate="animate"
            />
          </div>
        </div>

        {/* Twinkling stars */}
        <div className="absolute inset-0 -z-5 max-w-3xl mx-auto">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[0.5px] h-[0.5px] bg-white rounded-full opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <h1 className="text-neutral-200 text-4xl sm:text-5xl md:text-6xl font-medium text-wrap">
          Partnering with content creators to unlock next level of
          <Cover className="text-[#6354f3] hover:text-[#6354f3] bg-transparent hover:cursor-pointer">
            <span className="text-[#6354f3] font-instrument-serif italic ml-2">
              growth and success
            </span>
          </Cover>
        </h1>
        <p className="text-neutral-400 font-sans text-md sm:text-lg max-w-2xl leading-relaxed">
          Showcase your talent, convert more clients, and start building your
          brand with a beautiful portfolio page - completely free.
        </p>
        <AvatarGroup avatars={sampleAvatars} size="lg" />
        <Button
          className="text-white border border-neutral-800 font-medium py-4 px-8 rounded-lg"
          size={"lg"}
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
};
