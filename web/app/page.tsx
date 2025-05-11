import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Nextflix Clean Architecture Demo
      </h1>
      <div className="space-x-4">
        <Link href="/movies" className="hover:opacity-90">
          Movies
        </Link>
        <Link href="/tv" className="hover:opacity-90">
          TV Shows
        </Link>
      </div>
    </div>
  );
}
