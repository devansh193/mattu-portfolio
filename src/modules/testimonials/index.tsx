import { GridItem } from "@/components/grid-item";
import { Box, Settings, Lock, Sparkles, Search } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-16 flex flex-col items-center">
      <h2 className="text-sm md:text-2xl font-semibold text-neutral-500 mb-5">
        WHAT PEOPLE SAY
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-12 xl:grid-rows-2 md:grid-rows-3 gap-4 w-full max-w-5xl text-white">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-white" />}
          title="Do things the right way"
          description="Running out of copy so I'll write anything."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-4 w-4 text-white" />}
          title="The best AI code editor ever."
          description="Running out of copy so I'll write anything."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-4 w-4 text-white" />}
          title="You should buy Pro"
          description="Running out of copy so I'll write anything."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-4 w-4 text-white" />}
          title="This card is also built by Cursor"
          description="Running out of copy so I'll write anything."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-4 w-4 text-white" />}
          title="Coming soon on Aceternity UI"
          description="Running out of copy so I'll write anything."
        />
      </ul>
    </section>
  );
};
