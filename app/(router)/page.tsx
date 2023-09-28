import React from "react";
import Billboard from "@/components/billboard";
import Subscription from "@/components/subscription";
import FavProducts from "@/components/fav-products";
import Filter, { FilterData } from "@/components/filter";
import getBillboards from "@/services/get-billboards";
import getProducts from "@/services/get-products";

export const revalidate = 0;

const HomePage = async () => {
  const billboards = await getBillboards();
  const products = await getProducts({ isFeatured: true });
  const favProducts: FilterData[] = [
    {
      name: "Favorite Products",
      onActive: false,
    },
  ];

  return (
    <>
      <Billboard data={billboards} />

      <Filter data={favProducts} />
      <FavProducts data={products} />
      <Subscription />
    </>
  );
};

export default HomePage;
