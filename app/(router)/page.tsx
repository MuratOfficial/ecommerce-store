import React from "react";
import Billboard from "@/components/billboard";
import Subscription from "@/components/subscription";
import FavProducts, { ProductSet } from "@/components/fav-products";
import Filter, { FilterData } from "@/components/filter";
import getBillboards from "@/services/get-billboard";

export const revalidate = 0;

const HomePage = async () => {
  const billboards = await getBillboards();
  const favProducts: FilterData[] = [
    {
      name: "Favorite Products",
      onActive: false,
    },
  ];

  const favProductsSet: ProductSet[] = [
    {
      href: "#",
      img: "https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      name: "Product1",
      price: 9.99,
    },
    {
      href: "#",
      img: "https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      name: "Product1",
      price: 9.99,
    },
    {
      href: "#",
      img: "https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      name: "Product1",
      price: 9.99,
    },
    {
      href: "#",
      img: "https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      name: "Product1",
      price: 9.99,
    },
    {
      href: "#",
      img: "https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      name: "Product1",
      price: 9.99,
    },
    {
      href: "#",
      img: "https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      name: "Product1",
      price: 9.99,
    },
    {
      href: "#",
      img: "https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      name: "Product1",
      price: 9.99,
    },
    {
      href: "#",
      img: "https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      name: "Product1",
      price: 9.99,
    },
  ];

  return (
    <>
      <Billboard data={billboards} />

      <Filter data={favProducts} />
      <FavProducts data={favProductsSet} />
      <Subscription />
    </>
  );
};

export default HomePage;
