import { Cover } from "@/components/cover";
import { cn } from "@/lib/utils";
import { Socials } from "../about/socials";

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-xl sm:text-2xl font-bold text-[#737373] py-4">
        ABOUT
      </h1>

      <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-[#0A0A0A] px-4 sm:px-8 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-start gap-4 h-[300px]">
        {/* Grid pattern background */}
        <div
          className={cn(
            "absolute inset-0 z-0",
            "[background-size:15px_15px]",
            "[background-image:radial-gradient(#5E5E5E_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />

        {/* Radial fade overlay */}
        <div className="absolute inset-0 z-10 bg-[#0A0A0A] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]" />

        {/* Text content */}
        <div className="z-20 w-full lg:w-3/4 flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-white font-sans text-left">
            Hi there, I&apos;m
            <Cover className="text-[#6354f3] hover:text-[#6354f3] hover:cursor-pointer font-instrument-serif ml-2">
              Kuro
            </Cover>
          </h1>

          <p className="text-[#878585] text-left font-sans text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            I help content creators transform their ideas into visually
            engaging, results-driven videos. Whether it’s storytelling, editing,
            or polishing visuals — I’m here to make your content stand out.
          </p>

          <div>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};
