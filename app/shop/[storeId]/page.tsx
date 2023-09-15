import FavProducts from "@/components/fav-products";
import MiniHero from "@/components/mini-hero";
import React from "react";

function StorePage() {
  return (
    <div className="flex p-2 flex-col">
      <MiniHero />
      <FavProducts />
    </div>
  );
}

export default StorePage;
