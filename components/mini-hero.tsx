"use client";
import { Billboard } from "@/types";
import Link from "next/link";
import React from "react";

interface MiniHeroProps {
  data: Billboard;
}

const MiniHero = ({ data }: MiniHeroProps) => {
  return (
    <div className="flex items-center justify-center pb-2 flex-col scroll-mt-4">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="flex bg-gradient-to-r cursor-grab from-slate-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-5/6 p-4 my-2 lg:h-64 sm:h-1/2 rounded-md shadow-lg items-center justify-center"
      >
        <p className="flex  text-5xl cursor-pointer transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:text-black duration-300">
          {data.label}
        </p>
      </div>
      <div className="flex flex-col w-5/6 my-2 lg:h-64 sm:h-1/2 rounded-md items-center justify-center">
        <p className="flex text-2xl">Description</p>
        <p className="flex p-4 text-lg text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rerum
          tenetur at vero nostrum voluptatum impedit quisquam cupiditate dolores
          eos itaque officia et iusto similique, adipisci nesciunt. Odio, cumque
          pariatur.
        </p>
        <Link
          href="#"
          className="h-8 px-6 mt-4 animate-bounce rounded-md font-bold border-2 hover:text-white  hover:border-none border-blue-500  shadow-lg bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500"
        >
          Shop
        </Link>
      </div>
    </div>
  );
};

export default MiniHero;
