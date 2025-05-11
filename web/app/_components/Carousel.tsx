import { useEffect, useRef } from "react";
import { Movie } from "@/entities/models/movie";
import { Tv } from "@/entities/models/tv";
import { Icon } from "@iconify/react";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

export function Carousel({ items }: { items: Movie[] | Tv[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const buttonWidth = "40px";

  const itemsPerPage = 5;
  const itemMargin = "4px";
  const itemWidth = `calc(100% / ${itemsPerPage} - (${buttonWidth} * 2) / ${itemsPerPage} - (${itemMargin} * 2) + ((${itemMargin} * 2) / ${itemsPerPage}))`;

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

  function formatNumberShort(num: number): string {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 10_000) {
      return (num / 1_000).toFixed(0).replace(/\.0$/, "") + "K";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num.toString();
  }

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
      <div className="relative w-full overflow-visible">
        <div
          ref={scrollRef}
          className="no-scrollbar flex w-full snap-x snap-mandatory flex-row overflow-x-scroll"
          style={{
            scrollPaddingLeft: buttonWidth,
            scrollPaddingRight: buttonWidth,
          }}
        >
          {displayItems.map((item, idx) => {
            const name = "title" in item ? item.title : item.name;
            const releaseDate =
              "release_date" in item ? item.release_date : item.first_air_date;

            const currentIndex = idx % itemsPerPage;
            const getTransformOrigin = () => {
              if (currentIndex === 0) {
                return "left";
              } else if (currentIndex === itemsPerPage - 1) {
                return "right";
              } else {
                return "center";
              }
            };

            return (
              <div
                key={`carousel-item-${idx}`}
                className="group/carousel-item relative snap-start overflow-hidden rounded-lg transition-transform duration-300"
                style={{
                  minWidth: itemWidth,
                  marginLeft: itemMargin,
                  marginRight: itemMargin,
                }}
              >
                <img
                  src={`${baseImgUrl}${item.poster_path}`}
                  alt={name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div
                  className="invisible fixed z-50 min-h-[calc(50%)] w-[calc(50%)] -translate-y-[calc(100%-5rem)] scale-105 overflow-hidden rounded-lg bg-[#181818] opacity-0 shadow-lg shadow-black transition-all delay-0 group-hover/carousel-item:visible hover:scale-125 hover:opacity-100 hover:delay-500"
                  style={{
                    left: `calc(${buttonWidth} + ${idx % itemsPerPage} * (${itemMargin} * 2) + ${idx % itemsPerPage} * (${itemWidth}))`,
                    width: itemWidth,
                    transformOrigin: getTransformOrigin(),
                  }}
                >
                  <img
                    src={`${baseImgUrl}${item.poster_path}`}
                    alt={name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="h-[5rem] p-4">
                    <h3 className="text-center text-base font-semibold">
                      {name}
                      <span className="text-sm font-normal opacity-60">
                        &nbsp; {new Date(releaseDate).getFullYear()}
                      </span>
                    </h3>
                    <div className="flex items-center gap-2 text-xs">
                      <Icon icon="mdi:star" className="text-yellow-400" />
                      <span className="opacity-60">
                        {item.vote_average.toFixed(1)} (
                        {formatNumberShort(item.vote_count)})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
