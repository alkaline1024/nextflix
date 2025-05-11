import { Movie } from "@/entities/models/movie";
import { Tv } from "@/entities/models/tv";

const BillBoard = ({
  billboard,
  loading,
}: {
  billboard: Movie | Tv;
  loading: boolean;
}) => {
  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  if (loading) {
    return (
      <div className="flex min-h-[65vh] items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent" />
      </div>
    );
  }

  const name = "title" in billboard ? billboard.title : billboard.name;
  return (
    <div>
      <div className="fadeInDown absolute top-0 right-0 left-0 bg-transparent">
        <img
          alt={name}
          src={`${baseImgUrl}${billboard.backdrop_path}`}
          className="w-full"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 z-0 w-full bg-gradient-to-b from-transparent to-[#141414]" />
      </div>
      <div className="ml-16 min-h-[65vh] space-y-6 pt-32 text-white drop-shadow-lg drop-shadow-black/75">
        <img
          className="h-64 overflow-hidden rounded-lg shadow-md shadow-black"
          src={`${baseImgUrl}${billboard.poster_path}`}
          alt={name}
        />
        <h1 className="text-5xl font-bold">{name}</h1>
        <p className="text-2xl font-normal">#1 in TV Shows Today</p>
        <p className="max-w-[712px]">{billboard.overview}</p>
      </div>
    </div>
  );
};

export default BillBoard;
