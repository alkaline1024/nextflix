"use client";

import { useRef } from "react";
import { Icon } from "@iconify/react";
import { Tv } from "@/entities/models/tv";
import { Movie } from "@/entities/models/movie";
import { Genre } from "@/entities/models/genre";
import Card from "./Card";

export function Carousel({
  title,
  items,
  genres,
  loading,
  error,
}: {
  title: string;
  items: Movie[] | Tv[];
  genres: Genre[];
  loading: boolean;
  error: string | null;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const buttonWidth = "64px";

  const itemsPerPage = 7;
  const itemMargin = "4px";
  const itemWidth = `calc(100% / ${itemsPerPage} - (${buttonWidth} * 2) / ${itemsPerPage} - (${itemMargin} * 2) + ((${itemMargin} * 2) / ${itemsPerPage}))`;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
    const isScrollingRight = direction === "right";

    let targetScroll = isScrollingRight
      ? scrollLeft + clientWidth
      : scrollLeft - clientWidth;

    if (isScrollingRight && targetScroll == scrollWidth) {
      targetScroll = 0; // Reset to the start
    } else if (!isScrollingRight && targetScroll == -clientWidth) {
      targetScroll = scrollWidth; // Reset to the end
    }

    scrollRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  if (loading)
    return (
      <div>
        <h2
          className="mb-4 text-2xl font-bold"
          style={{ paddingLeft: buttonWidth }}
        >
          {title}
        </h2>
        <div className="flex flex-row" style={{ paddingLeft: buttonWidth }}>
          {Array.from({ length: itemsPerPage }).map((_, idx) => (
            <div
              key={idx}
              className="aspect-[2/3] animate-pulse rounded-lg bg-white/10"
              style={{
                minWidth: `calc(${itemWidth} + ${itemMargin} * 2)`,
                marginLeft: itemMargin,
                marginRight: itemMargin,
              }}
            />
          ))}
        </div>
      </div>
    );

  if (error || !items)
    return (
      <div className="bg-white/10 p-2 text-center">
        <p className="text-red-500">Something went wrong</p>
      </div>
    );

  if (items.length === 0)
    return (
      <div className="bg-white/10 p-2 text-center">
        <p className="text-red-500">No items</p>
      </div>
    );

  return (
    <div>
      <h1
        className="mb-4 text-2xl font-bold"
        style={{ paddingLeft: buttonWidth }}
      >
        {title}
      </h1>

      <div className="group/carousel relative">
        <button
          aria-label="previous"
          className="group/carousel-button absolute top-0 bottom-0 left-0 z-20 flex cursor-pointer items-center justify-center bg-transparent text-white shadow-lg transition hover:bg-black/40 disabled:opacity-30"
          style={{
            display: items.length > itemsPerPage ? undefined : "none",
            width: buttonWidth,
          }}
          onClick={() => scroll("left")}
        >
          <Icon
            icon="mdi:chevron-left"
            className="hidden text-5xl transition group-hover/carousel:block group-hover/carousel-button:scale-[1.3]"
          />
        </button>
        <div className="relative w-full overflow-visible">
          <div
            ref={scrollRef}
            className="no-scrollbar flex w-full snap-x snap-mandatory flex-row overflow-x-scroll"
            style={{
              scrollPaddingLeft: buttonWidth,
              scrollPaddingRight: buttonWidth,
            }}
          >
            {items.map((item, idx) => {
              return (
                <Card
                  key={`carousel-item-${idx}`}
                  idx={idx}
                  item={item}
                  genres={genres}
                  itemWidth={itemWidth}
                  itemMarginLeft={idx === 0 ? buttonWidth : itemMargin}
                  itemMarginRight={
                    idx === items.length - 1 ? buttonWidth : itemMargin
                  }
                />
              );
            })}
          </div>
        </div>
        <button
          aria-label="previous"
          className="group/carousel-button absolute top-0 right-0 bottom-0 z-20 flex cursor-pointer items-center justify-center bg-transparent text-white shadow-lg transition hover:bg-black/40 disabled:opacity-30"
          style={{
            display: items.length > itemsPerPage ? undefined : "none",
            width: buttonWidth,
          }}
          onClick={() => scroll("right")}
        >
          <Icon
            icon="mdi:chevron-right"
            className="hidden text-5xl transition group-hover/carousel:block group-hover/carousel-button:scale-[1.3]"
          />
        </button>
      </div>
    </div>
  );
}
