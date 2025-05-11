import React from "react";

export function SectionState({
  loading,
  error,
  empty,
  title,
  itemsPerPage = 7,
  itemWidth = "", // for loading skeleton
  itemMargin = "",
  children,
}: {
  loading?: boolean;
  error?: string | null;
  empty?: boolean;
  title?: string;
  itemsPerPage?: number;
  itemWidth?: string;
  itemMargin?: string;
  children?: React.ReactNode;
}) {
  if (loading)
    return (
      <div className="md:ml-16">
        {title && <h2 className="mb-4 text-2xl font-bold">{title}</h2>}
        <div className="flex flex-row">
          {Array.from({ length: itemsPerPage }).map((_, idx) => (
            <div
              key={idx}
              className="aspect-[2/3] animate-pulse rounded-lg bg-white/10"
              style={{
                minWidth: itemWidth
                  ? `calc(${itemWidth} + ${itemMargin} * 2)`
                  : undefined,
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
  if (empty)
    return (
      <div className="p-4 text-center">
        <p className="opacity-60">No items</p>
      </div>
    );
  return <>{children}</>;
}
