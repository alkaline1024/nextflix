"use client";

import { useMyList } from "@/interface-adapters/controllers/my-list/my-list.controller";
import Card from "../_components/Card";
import { SectionState } from "../_components/SectionState";

export default function MyListPage() {
  const { list } = useMyList();

  return (
    <div className="mx-16 mb-64 space-y-12 pt-24">
      <div className="mb-12 text-4xl font-bold">My List</div>
      <SectionState empty={list.length === 0}>
        <ul className="grid grid-cols-2 gap-4 space-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {list.map((item, idx) => (
            <Card
              key={item.id}
              idx={idx}
              item={item}
              genres={[]}
              dynamicTop={true}
            />
          ))}
        </ul>
      </SectionState>
    </div>
  );
}
