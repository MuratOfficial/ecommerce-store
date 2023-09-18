"use client";
import React from "react";
import Billboard from "@/components/billboard";
import Subscription from "@/components/subscription";
import FavProducts from "@/components/fav-products";

const HomePage = () => {
  return (
    <>
      <Billboard />
      <div className="flex flex-row gap-x-4 px-16 flex-wrap justify-center items-center">
        <button className="rounded-md text-lg text-white font-bold bg-gradient-to-r from-slate-400 to-blue-500 px-6 py-3 hover:scale-110 cursor-pointer focus:scale-110 focus:from-pink-500 focus:to-yellow-500">
          Popular Products
        </button>
      </div>

      <FavProducts />
      <Subscription />
    </>
  );
};

export default HomePage;
