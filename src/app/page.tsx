import { Landing } from "@/modules/main/landing";
import { Testimonials } from "@/modules/testimonials";
import { Work } from "@/modules/work";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="min-h-screen flex flex-col items-center w-full h-full mt-12 md:mt-0">
        <Landing />
        <Work />
        <Testimonials />
      </div>
    </div>
  );
}
