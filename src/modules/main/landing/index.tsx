import { AvatarGroup } from "@/components/avatar-circle";
import { Button } from "@/components/ui/button";
import { sampleAvatars } from "@/data";

export const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 py-2 text-center">
      <div className="flex flex-col items-center justify-center h-full w-full max-w-[736px] mx-auto px-4 text-center gap-y-8">
        <h1 className="text-neutral-200 text-4xl sm:text-5xl md:text-6xl font-medium leading-tight">
          Create a Video That Lands You More Editing
          <span className="text-[#6133e2] italic"> Clients</span>
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

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl xl:text-9xl bg-gradient-to-b from-white via-neutral-500 to-neutral-950 bg-clip-text text-transparent font-geist-sans w-full">
          work with kuro
        </h1>
        <span className="text-xs sm:text-base md:text-sm font-semibold text-[#808080]">
          producing for impact and delight
        </span>
      </div>
    </div>
  );
};
