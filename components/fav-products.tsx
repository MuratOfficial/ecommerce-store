"use client";
import { AnimateBlocks } from "./animate-blocks";
import { Product } from "@/types";
import Image from "next/image";
import ProductModal from "./product-modal";
import { useState, useCallback, MouseEventHandler, useEffect } from "react";

interface FavProductsProps {
  data: Product[];
}

const FavProducts = ({ data }: FavProductsProps) => {
  const [hidden, setHidden] = useState(false);

  const handleClose = () => {
    setHidden(false);
  };

  const toggleModal = useCallback(() => {
    setHidden(true);
  }, []);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="bg-white">
      {data.length > 0 ? (
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {data.map((el, index) => (
            <div className="w-1/4 h-full p-6 flex flex-col relative">
              <ProductModal onClose={handleClose} isOpen={hidden} data={el}>
                <AnimateBlocks key={index}>
                  <div className="w-full p-6 object-cover aspect-square flex flex-col relative rounded-md">
                    <svg
                      className="h-6 w-6 z-10 fill-current text-gray-500 hover:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                    </svg>
                    <Image
                      className="hover:grow hover:shadow-lg cursor-pointer"
                      alt={el.name}
                      src={el.images?.[0]?.url}
                      fill
                      onClick={toggleModal}
                    />
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <p className="">{el.name}</p>
                    <div className="flex flex-row ">
                      <button onClick={toggleModal}>
                        <svg
                          className="fill-current hover:text-blue-500 hover:scale-110 rounded p-1 mx-1 "
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                          <circle cx="10.5" cy="18.5" r="1.5" />
                          <circle cx="17.5" cy="18.5" r="1.5" />
                        </svg>
                      </button>
                      <p className="pt-1 p-1 text-gray-900">{el.price} KZT</p>
                    </div>
                  </div>
                </AnimateBlocks>
              </ProductModal>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-48 h-full flex items-center justify-center my-8">
          <p className="text-2xl text-center">
            Sorry, something goes wrong... please, wait a little bit 🙏
          </p>
        </div>
      )}
    </section>
  );
};

export default FavProducts;
