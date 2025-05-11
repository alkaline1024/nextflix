import { Movie } from "@/entities/models/movie";
import { Tv } from "@/entities/models/tv";
import { Genre } from "@/entities/models/genre";
import { getName, getPosterUrl, getBackdropUrl } from "../../src/utils/format";
import { useMyList } from "@/interface-adapters/controllers/my-list/my-list.controller";
import { Icon } from "@iconify/react/dist/iconify.js";

const BillBoard = ({
  billboard,
  loading,
  genres,
  tagLine = "",
}: {
  billboard: Movie | Tv;
  loading: boolean;
  genres: Genre[];
  tagLine?: string;
}) => {
  const { list, add, remove } = useMyList();
  if (loading) {
    return (
      <div className="flex min-h-[30vw] items-center justify-center max-md:pt-48">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent" />
      </div>
    );
  }

  if (!billboard) {
    return (
      <div className="flex min-h-[30vw] items-center justify-center max-md:pt-48">
        <h1 className="text-2xl font-bold text-white">
          No billboard available
        </h1>
      </div>
    );
  }

  const name = getName(billboard);
  return (
    <div>
      <div className="fadeInDown absolute top-0 right-0 left-0 bg-transparent">
        <img alt={name} src={getBackdropUrl(billboard)} className="w-full" />
        <div className="absolute top-0 right-0 bottom-0 left-0 z-0 w-full bg-gradient-to-b from-transparent to-[#141414]" />
      </div>
      <div className="min-h-[30vw] flex-col items-center space-y-6 pt-32 text-white drop-shadow-lg drop-shadow-black/75 max-md:flex max-md:pt-28 md:ml-16">
        <img
          className="h-64 overflow-hidden rounded-lg shadow-md shadow-black max-md:mx-auto"
          src={getPosterUrl(billboard, "w500")}
          alt={name}
        />
        <h1 className="text-5xl font-bold max-md:text-center max-md:text-3xl">
          {name}
        </h1>
        <p className="text-2xl font-normal max-md:hidden">{tagLine}</p>
        <p className="max-w-[712px] max-md:hidden">{billboard.overview}</p>
        <div className="flex flex-wrap items-center justify-center md:hidden">
          {billboard.genre_ids.map((id, idx) => {
            const genre = genres.find((g) => g.id === id);
            return genre ? (
              <div key={id} className="flex items-center">
                {idx > 0 && (
                  <div className="px-[6px] text-[16px] opacity-60">&bull;</div>
                )}
                <span key={id}>{genre.name}</span>
              </div>
            ) : null;
          })}
        </div>
        <button
          className="flex cursor-pointer items-center justify-center gap-2 rounded bg-white/30 px-4 py-2 text-lg hover:bg-white/40"
          onClick={(e) => {
            e.stopPropagation();
            if (list.some((i) => i.id === billboard.id)) {
              remove(billboard.id);
            } else {
              add(billboard);
            }
          }}
          title={
            list.some((i) => i.id === billboard.id)
              ? "Remove from My List"
              : "Add to My List"
          }
        >
          <Icon
            className="text-2xl"
            icon={
              list.some((i) => i.id === billboard.id) ? "mdi:check" : "mdi:plus"
            }
          />
          My List
        </button>
      </div>
    </div>
  );
};

export default BillBoard;
