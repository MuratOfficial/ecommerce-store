import React from "react";
import Billboard from "@/components/billboard";
import Subcription from "@/components/subscription";
import FavProducts from "@/components/fav-products";

const HomePage = () => {
  return (
    <>
      <Billboard />
      <FavProducts />
      <Subcription />
    </>
  );
};

export default HomePage;
