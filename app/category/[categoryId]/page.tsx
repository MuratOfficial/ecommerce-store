import FavProducts from "@/components/fav-products";
import Filter from "@/components/filter";
import MiniHero from "@/components/mini-hero";
import getBillboard from "@/services/get-billboard";
import getCategory from "@/services/get-category";
import getProducts from "@/services/get-products";

import React from "react";

export const revalidate = 0;

interface StorePageProps {
  params: {
    categoryId: string;
  };
}

const StorePage = async ({ params }: StorePageProps) => {
  const products = await getProducts({ categoryId: params.categoryId });
  const category = await getCategory(params.categoryId);
  const billboard = await getBillboard(category.billboardId);

  const filterData = [
    { name: "Brilliant", onActive: false },
    { name: "Gold", onActive: false },
    { name: "Platinum", onActive: false },
    { name: "Diamond", onActive: false },
  ];

  return (
    <div className="flex p-2 flex-col ">
      <MiniHero data={billboard} />
      <Filter data={filterData} />
      <FavProducts data={products} />
    </div>
  );
};

export default StorePage;
