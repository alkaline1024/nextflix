import { useEffect, useRef } from "react";
import { Movie } from "@/entities/models/movie";
import { Tv } from "@/entities/models/tv";
import { Icon } from "@iconify/react";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

export function Carousel({ items }: { items: Movie[] | Tv[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 5;
  const buttonWidth = "40px";
  const itemMargin = "4px";

  const minItemWidth = `calc(100% / ${itemsPerPage} - (${buttonWidth} * 2) / ${itemsPerPage} - (${itemMargin} * 2) + ((${itemMargin} * 2) / ${itemsPerPage}))`;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
    }
  }, [items]);

  // infinity loop carousel logic
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollAmount = clientWidth;
      let newScrollLeft =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      if (direction === "left" && scrollLeft <= 0) {
        scrollRef.current.scrollLeft = scrollWidth / 2;
        newScrollLeft = scrollRef.current.scrollLeft - scrollAmount;
      } else if (
        direction === "right" &&
        scrollLeft + clientWidth >= scrollWidth - 5
      ) {
        scrollRef.current.scrollLeft = scrollWidth / 2 - clientWidth;
        newScrollLeft = scrollRef.current.scrollLeft + scrollAmount;
      }
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const displayItems = [...items, ...items];

  if (!items.length) return <div>No items found.</div>;
  return (
    <div className="group/carousel relative">
      <button
        aria-label="previous"
        className="group/carousel-button absolute top-0 bottom-0 left-0 z-20 cursor-pointer bg-black/25 text-white shadow-lg transition hover:bg-black/50 disabled:opacity-30"
        style={{
          display: items.length > itemsPerPage ? undefined : "none",
          width: buttonWidth,
        }}
        onClick={() => scroll("left")}
      >
        <Icon
          icon="mdi:chevron-left"
          className="hidden text-4xl transition group-hover/carousel:block group-hover/carousel-button:scale-125"
        />
      </button>
      <div
        ref={scrollRef}
        className="no-scrollbar flex w-full snap-x snap-mandatory flex-row overflow-x-auto"
        style={{
          scrollPaddingLeft: `${buttonWidth}`,
          scrollPaddingRight: `${buttonWidth}`,
        }}
      >
        {displayItems.map((item, idx) => {
          const name = "title" in item ? item.title : item.name;
          const releaseDate =
            "release_date" in item ? item.release_date : item.first_air_date;
          return (
            <div
              key={`carousel-item-${idx}`}
              className="group relative snap-start overflow-hidden rounded-lg transition-transform duration-300 hover:z-10 hover:scale-110"
              style={{
                minWidth: minItemWidth,
                marginLeft: `${itemMargin}`,
                marginRight: `${itemMargin}`,
              }}
            >
              <img
                src={`${baseImgUrl}${item.poster_path}`}
                alt={name}
                loading="lazy"
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="mb-1 text-lg font-bold text-white">{name}</div>
                <div className="text-xs text-gray-300">{releaseDate}</div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        aria-label="previous"
        className="group/carousel-button absolute top-0 right-0 bottom-0 z-20 cursor-pointer bg-black/25 text-white shadow-lg transition hover:bg-black/50 disabled:opacity-30"
        style={{
          display: items.length > itemsPerPage ? undefined : "none",
          width: buttonWidth,
        }}
        onClick={() => scroll("right")}
      >
        <Icon
          icon="mdi:chevron-right"
          className="hidden text-4xl transition group-hover/carousel:block group-hover/carousel-button:scale-125"
        />
      </button>
    </div>
  );
}
