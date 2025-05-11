export function formatNumberShort(num: number): string {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (num >= 10_000) {
    return (num / 1_000).toFixed(0).replace(/\.0$/, "") + "K";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
}

export function getName(item: { title?: string; name?: string }): string {
  if (typeof item.title === "string" && item.title.length > 0)
    return item.title;
  if (typeof item.name === "string") return item.name;
  return "";
}

export function getPosterUrl(
  item: { poster_path?: string },
  size:
    | "w92"
    | "w154"
    | "w185"
    | "w342"
    | "w500"
    | "w780"
    | "original" = "w500",
) {
  if (!item.poster_path) return "";
  return `https://image.tmdb.org/t/p/${size}${item.poster_path}`;
}

export function getBackdropUrl(
  item: { backdrop_path?: string },
  size: "w300" | "w780" | "w1280" | "original" = "original",
) {
  if (!item.backdrop_path) return "";
  return `https://image.tmdb.org/t/p/${size}${item.backdrop_path}`;
}

export async function fetchWithErrorHandling<T>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<T> {
  try {
    const res = await fetch(input, init);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    throw err;
  }
}
