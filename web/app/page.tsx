import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Nextflix Clean Architecture Demo
      </h1>
      <div className="space-x-4">
        <Link href="/movies" className="text-blue-500 underline">
          Popular Movies
        </Link>
        <Link href="/tv" className="text-blue-500 underline">
          Popular TV Shows
        </Link>
      </div>
    </div>
  );
}
