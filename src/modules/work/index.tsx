"use client";

import { useState } from "react";
import YouTubePlayer from "../youtube/youtube-player";

const data = [
  {
    id: 1,
    videoId: "9tjM627dvLk",
    title: "Sample Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 2,
    videoId: "kYLBNEn7KVI",
    title: "Sample Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 3,
    videoId: "Y76PMmZnYQY",
    title: "Sample Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 4,
    videoId: "9i_WVxL2MnQ",
    title: "Sample Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 5,
    videoId: "BoXnzcOdALw",
    title: "Sample Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 6,
    videoId: "0H6bGdsGpOs",
    title: "SAMPLE TITLE",
    description: "SAMPLE DESCRIPTION",
  },
];

const ITEMS_PER_PAGE = 4;

export const Work = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, data.length));
  };

  const visibleItems = data.slice(0, visibleCount);
  const hasMore = visibleCount < data.length;

  return (
    <section className="flex flex-col items-center justify-start md:mt-12 pt-12 px-4 overflow-hidden w-full">
      <div className="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-lg md:text-2xl font-bold tracking-wide text-[#808080] mb-4">
          WORKS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full pt-4 max-w-5xl mx-auto">
          {visibleItems.map((item) => (
            <div key={item.id} className="space-y-4">
              <YouTubePlayer
                videoId={item.videoId}
                className="w-full min-w-[300px]"
              />
            </div>
          ))}
        </div>
        {hasMore && (
          <button
            onClick={handleLoadMore}
            className="pt-6 px-6 py-2 text-[#808080] underline hover:text-neutral-400 text-xs font-bold tracking-tight hover:underline transition-all"
          >
            LOAD MORE
          </button>
        )}
      </div>
    </section>
  );
};
