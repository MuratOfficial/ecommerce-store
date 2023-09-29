import FavProducts from "@/components/fav-products";
import Filter from "@/components/filter";
import MiniHero from "@/components/mini-hero";
import ProductModal from "@/components/product-modal";
import getBillboard from "@/services/get-billboard";
import getCategory from "@/services/get-category";
import getColors from "@/services/get-colors";
import getProducts from "@/services/get-products";
import getSizes from "@/services/get-sizes";

import React from "react";

export const revalidate = 0;

interface StorePageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    sizeId: string;
    colorId: string;
  };
}

const StorePage = async ({ params, searchParams }: StorePageProps) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  });
  const category = await getCategory(params.categoryId);
  const billboard = await getBillboard(category.billboardId);
  const colors = await getColors();
  const sizes = await getSizes();

  return (
    <div className="flex p-2 flex-col ">
      <MiniHero data={billboard} />
      <div className="flex flex-row justify-center">
        <Filter name="Size" data={sizes} valueKey="sizeId" />
        <Filter name="Color" data={colors} valueKey="colorId" />
      </div>

      <FavProducts data={products} />
    </div>
  );
};

export default StorePage;
