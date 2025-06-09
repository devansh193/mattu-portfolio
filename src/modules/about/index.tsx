import { Cover } from "@/components/cover";

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-start max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold tracking-wide text-[#808080] my-6">
        ABOUT
      </h1>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-semibold tracking-wide text-neutral-200 font-sans text-center">
            {" "}
            Hi there, I&apos;m{" "}
            <span className="font-instrument-serif italic">
              <Cover className="text-[#6354f3] hover:text-[#6354f3] hover:cursor-pointer">
                Kuro
              </Cover>
            </span>
          </h1>
          <p className="text-neutral-400 mx-auto text-center text-lg md:text-2xl font-sans max-w-[682px] px-[12px] md:px-0">
            I help content creators turn their ideas into videos that feel good
            to watch and drive real results. Whether it&apos;s storytelling,
            editing, or just making things look clean. I&apos;m here to make
            your content stand out.
          </p>
        </div>
      </div>
    </div>
  );
};
