import { useRef, useState } from "react";
import { Movie } from "@/entities/models/movie";
import { Tv } from "@/entities/models/tv";
import { Icon } from "@iconify/react";
import { Genre } from "@/entities/models/genre";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

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
  let hoverTimeout: NodeJS.Timeout;
  const [currentHoverIndex, setCurrentHoverIndex] = useState(-1);
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

  if (loading)
    return (
      <div>
        <h1
          className="mb-4 text-2xl font-bold"
          style={{ paddingLeft: buttonWidth }}
        >
          {title}
        </h1>
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

  if (error)
    return (
      <div className="bg-white/10 p-2 text-center">
        <p className="text-red-500">Something went wrong</p>
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
          className="group/carousel-button absolute top-0 bottom-0 left-0 z-20 flex cursor-pointer items-center justify-center bg-black/25 text-white shadow-lg transition hover:bg-black/50 disabled:opacity-30"
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
              const name = "title" in item ? item.title : item.name;
              const releaseDate =
                "release_date" in item
                  ? item.release_date
                  : item.first_air_date;

              let currentLeft = 0;
              const isHover = currentHoverIndex === idx;
              const currentItem = scrollRef.current?.children?.item(idx);
              const rect = currentItem?.getBoundingClientRect();
              if (rect) {
                currentLeft = rect.left;
              }

              const getTransformOrigin = () => {
                if (currentLeft < window.innerWidth / 4) {
                  return "left";
                } else if (currentLeft > (window.innerWidth * 3) / 4) {
                  return "right";
                } else {
                  return "center";
                }
              };

              return (
                <div
                  id={`carousel-item-${idx}`}
                  key={`carousel-item-${idx}`}
                  className="group/carousel-item cursor-pointer snap-start overflow-hidden rounded-lg transition-transform duration-300"
                  style={{
                    minWidth: itemWidth,
                    marginLeft: idx === 0 ? buttonWidth : itemMargin,
                    marginRight:
                      idx === items.length - 1 ? buttonWidth : itemMargin,
                  }}
                  onMouseEnter={() => {
                    hoverTimeout = setTimeout(() => {
                      setCurrentHoverIndex(idx);
                    }, 500);
                  }}
                  onMouseLeave={() => {
                    console.log("Mouse leave");
                    clearTimeout(hoverTimeout);
                    setCurrentHoverIndex(-1);
                  }}
                >
                  <img
                    alt={name}
                    src={`${baseImgUrl}${item.poster_path}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  {/* Preview Component */}
                  <div
                    className="overflow-visibility absolute top-0 z-50 cursor-default"
                    style={{
                      width: itemWidth,
                      left: currentLeft ?? undefined,
                      visibility: isHover ? "visible" : "hidden",
                    }}
                  >
                    <div
                      className="overflow-hidden rounded-lg bg-[#181818] shadow-lg shadow-black transition-all duration-300"
                      style={{
                        scale: isHover ? 1.5 : 1,
                        transformOrigin: getTransformOrigin(),
                      }}
                    >
                      <img
                        src={`${baseImgUrl}${item.poster_path}`}
                        alt={name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <div
                        className="space-y-1 p-3 transition-all delay-100 duration-200"
                        style={{
                          opacity: isHover ? 1 : 0,
                        }}
                      >
                        <div className="flex items-center justify-start gap-1 text-sm">
                          <Icon icon="mdi:star" className="text-yellow-400" />
                          <span className="opacity-60">
                            {item.vote_average.toFixed(1)} (
                            {formatNumberShort(item.vote_count)})
                          </span>
                        </div>
                        <h3 className="text-start text-base font-semibold">
                          {name}
                          <span className="text-sm font-normal opacity-60">
                            &nbsp; {new Date(releaseDate).getFullYear()}
                          </span>
                        </h3>
                        <div className="text-xs">
                          <div className="flex flex-wrap items-center">
                            {item.genre_ids.map((id, idx) => {
                              const genre = genres.find((g) => g.id === id);
                              return genre ? (
                                <div className="flex items-center">
                                  {idx > 0 && (
                                    <div className="px-[6px] text-[16px] opacity-60">
                                      &bull;
                                    </div>
                                  )}
                                  <span key={id}>{genre.name}</span>
                                </div>
                              ) : null;
                            })}
                          </div>
                        </div>
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
          className="group/carousel-button absolute top-0 right-0 bottom-0 z-20 flex cursor-pointer items-center justify-center bg-black/25 text-white shadow-lg transition hover:bg-black/50 disabled:opacity-30"
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
