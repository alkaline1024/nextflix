import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";
import { useMyList } from "@/interface-adapters/controllers/my-list/my-list.controller";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Tv } from "@/entities/models/tv";
import { Movie } from "@/entities/models/movie";
import { Genre } from "@/entities/models/genre";
import {
  formatNumberShort,
  getName,
  getPosterUrl,
} from "../../src/utils/format";

export default function Card({
  item,
  idx,
  genres,
  itemWidth = "",
  itemMarginLeft = "",
  itemMarginRight = "",
  cardPreviewScale = 1.4,
  dynamicTop = false,
}: {
  item: Movie | Tv;
  idx: number;
  genres: Genre[];
  itemWidth?: string;
  itemMarginLeft?: string;
  itemMarginRight?: string;
  cardPreviewScale?: number;
  dynamicTop?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);
  const { list, add, remove } = useMyList();
  let hoverTimeout: NodeJS.Timeout;
  const uniqueId = `carousel-item-${idx}-${uuidv4()}`;
  const name = getName(item);
  const releaseDate =
    "release_date" in item ? item.release_date : item.first_air_date;
  const [currentTop, setCurrentTop] = useState(0);
  const [currentLeft, setCurrentLeft] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(itemWidth);
  useEffect(() => {
    if (!currentWidth || currentWidth === "") {
      if (cardRef.current) {
        setCurrentWidth(cardRef.current.offsetWidth + "px");
      }
    }
  }, [currentWidth]);
  useEffect(() => {
    const currentItem = document.getElementById(uniqueId);
    const rect = currentItem?.getBoundingClientRect();
    if (rect) {
      setCurrentLeft(rect.left);
      if (dynamicTop) {
        setCurrentTop(rect.top);
      }
    }
  }, [isHover, uniqueId, dynamicTop]);
  return (
    <div
      ref={cardRef}
      id={uniqueId}
      className="group/carousel-item cursor-pointer snap-start overflow-hidden rounded-lg transition-transform duration-300"
      style={{
        minWidth: currentWidth,
        marginLeft: itemMarginLeft,
        marginRight: itemMarginRight,
      }}
      onMouseEnter={() => {
        hoverTimeout = setTimeout(() => {
          setIsHover(true);
        }, 500);
      }}
      onMouseLeave={() => {
        clearTimeout(hoverTimeout);
        setIsHover(false);
      }}
    >
      <img
        alt={name}
        src={getPosterUrl(item)}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      {/* Preview Component */}
      <div
        className="overflow-visibility absolute z-50 cursor-default"
        style={{
          width: currentWidth,
          top: currentTop ?? undefined,
          left: currentLeft ?? undefined,
          right: currentLeft
            ? `calc(${currentLeft} + ${currentWidth})`
            : undefined,
          visibility: isHover ? "visible" : "hidden",
        }}
      >
        <div
          className="overflow-hidden rounded-lg bg-[#181818] shadow-lg shadow-black transition-all delay-100 duration-400"
          style={{
            scale: isHover ? cardPreviewScale : 1,
            transformOrigin: "center",
          }}
        >
          <img
            src={getPosterUrl(item)}
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
            <div className="flex items-center justify-between gap-1 text-sm">
              <div className="flex items-center gap-1">
                <Icon icon="mdi:star" className="text-yellow-400" />
                <span className="opacity-60">
                  {item.vote_average.toFixed(1)} (
                  {formatNumberShort(item.vote_count)})
                </span>
              </div>
              <button
                className="flex cursor-pointer items-center justify-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  if (list.some((i) => i.id === item.id)) {
                    remove(item.id);
                  } else {
                    add(item);
                  }
                }}
                title={
                  list.some((i) => i.id === item.id)
                    ? "Remove from Watchlist"
                    : "Add to Watchlist"
                }
              >
                <Icon
                  className="text-lg"
                  icon={
                    list.some((i) => i.id === item.id)
                      ? "mdi:check"
                      : "mdi:plus"
                  }
                />
                Watchlist
              </button>
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
                    <div key={id} className="flex items-center">
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
}
