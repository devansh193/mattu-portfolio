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
    <section className="w-full px-4 md:px-6 lg:px-8 py-12 flex flex-col items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        <h1 className="text-sm md:text-2xl font-bold tracking-widest text-neutral-500 mb-6 md:mb-8">
          WORKS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-4 w-full max-w-5xl mx-auto">
          {visibleItems.map((item) => (
            <div key={item.id} className="space-y-4">
              <YouTubePlayer
                videoId={item.videoId}
                className="w-full rounded-md overflow-hidden shadow-md"
              />
            </div>
          ))}
        </div>

        {hasMore && (
          <button
            onClick={handleLoadMore}
            className="mt-6 px-6 py-2 text-sm font-semibold tracking-tight text-neutral-500 hover:text-neutral-300 underline transition-colors duration-200"
          >
            LOAD MORE
          </button>
        )}
      </div>
    </section>
  );
};
