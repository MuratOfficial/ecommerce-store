import FavProducts from "@/components/fav-products";
import Filter from "@/components/filter";
import MiniHero from "@/components/mini-hero";
import React from "react";

function StorePage() {
  return (
    <div className="flex p-2 flex-col scroll-smooth">
      <MiniHero />
      <Filter />
      <FavProducts />
    </div>
  );
}

export default StorePage;
