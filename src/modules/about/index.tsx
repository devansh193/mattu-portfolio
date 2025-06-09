import { Cover } from "@/components/cover";
import { cn } from "@/lib/utils";
import { Socials } from "../about/socials";

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-[#737373] py-2">ABOUT</h1>
      <div className="relative w-full max-w-5xl mx-auto rounded-3xl flex items-start justify-start overflow-hidden bg-[#0A0A0A] px-6 py-10 h-[300px]">
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
        <div className="z-20 h-full w-[75%] flex flex-col items-start justify-start ">
          <h1 className="text-5xl font-semibold tracking-wide text-white font-sans text-center">
            Hi there, I&apos;m
            <Cover className="text-[#6354f3] hover:text-[#6354f3] hover:cursor-pointer font-instrument-serif ml-2">
              Kuro
            </Cover>
          </h1>
          <p className="text-[#878585] text-start mx-auto font-sans text-xs md:text-lg font-medium leading-relaxed px-4 md:px-0">
            I help content creators transform their ideas into visually
            engaging, results-driven videos. Whether it’s storytelling, editing,
            or polishing visuals — I’m here to make your content stand out.
          </p>
          <div className="">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};
