import React from "react";
import Billboard from "@/components/billboard";
import Subscription from "@/components/subscription";
import FavProducts from "@/components/fav-products";
import getBillboards from "@/services/get-billboards";
import getProducts from "@/services/get-products";
import { FadeInScroll } from "@/components/animate-blocks";

export const revalidate = 0;

const HomePage = async () => {
  const billboards = await getBillboards();
  const products = await getProducts({ isFeatured: true });

  return (
    <>
      <Billboard data={billboards} />

      <FadeInScroll>
        <div className="flex items-center justify-center">
          <p className=" text-4xl font-bold mt-12 mb-8 text-center p-2 rounded-md border-2 border-blue-400 text-blue-500">
            Popular
          </p>
        </div>
      </FadeInScroll>

      <FavProducts data={products} />
      <Subscription />
    </>
  );
};

export default HomePage;
