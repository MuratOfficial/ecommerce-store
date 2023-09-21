"use client";
import React from "react";
import Billboard from "@/components/billboard";
import Subscription from "@/components/subscription";
import FavProducts from "@/components/fav-products";
import Filter, { FilterData } from "@/components/filter";

const HomePage = () => {
  const favProducts: FilterData[] = [
    {
      name: "Favorite Products",
      onActive: false,
    },
  ];

  return (
    <>
      <Billboard />
      <div className="flex flex-row gap-x-4 px-16 flex-wrap justify-center items-center">
        <Filter data={favProducts} />
      </div>

      <FavProducts />
      <Subscription />
    </>
  );
};

export default HomePage;
