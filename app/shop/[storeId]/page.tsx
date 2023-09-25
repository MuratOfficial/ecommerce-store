"use client";
import FavProducts from "@/components/fav-products";
import Filter from "@/components/filter";
import MiniHero from "@/components/mini-hero";

import React from "react";

function StorePage() {
  const data = [
    { name: "Brilliant", onActive: false },
    { name: "Gold", onActive: false },
    { name: "Platinum", onActive: false },
    { name: "Diamond", onActive: false },
  ];

  return (
    <div className="flex p-2 flex-col ">
      <MiniHero />
      <Filter data={data} />
      <FavProducts data={[]} />
    </div>
  );
}

export default StorePage;
