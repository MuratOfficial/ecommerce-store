"use client";
import React, {
  MouseEventHandler,
  useCallback,
  useState,
  useEffect,
} from "react";
import Modal from "./modal";
import { Product, ProductBag } from "@/types";
import useBasket from "@/hooks/useBasket";

interface ProductModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  data: Product;
}

const ProductModal = ({
  children,
  onClose,
  isOpen,
  data,
}: ProductModalProps) => {
  const basket = useBasket();

  const onAddBasket: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation;
    basket.addItem(data);
  };

  return (
    <div>
      <Modal onClose={onClose} isOpen={isOpen}>
        <div className="flex flex-row mx-4 my-4 overflow-hidden gap-x-4">
          <div className="w-2/3 h-full border flex flex-row gap-x-4 justify-center text-center">
            <div className="h-full w-4/6">Gallery would be here</div>
            <div className="h-screen w-1/6">Photos arrange</div>
          </div>
          <div className="w-1/3 h-screen flex flex-col gap-y-4 mx-4 pl-4">
            <div className="h-4/6 w-full flex flex-col mt-4 ">
              <div className="flex flex-row gap-x-4">
                <div className="flex w-1/2 flex-col">
                  <p className="font-semibold text-md leading-4">{data.name}</p>
                  <p className=" text-xs font-light uppercase">{data.id}</p>
                </div>

                <p className="flex w-1/2 font-semibold text-lg">
                  {data.price} KZT
                </p>
              </div>
              <div className="w-full flex flex-row h-2/5 items-center py-12">
                <div className=" px-4 w-1/2">
                  <div
                    className=" h-6 w-6 rounded-full"
                    style={{ backgroundColor: `${data.color.value}` }}
                  />
                </div>
                <p className="w-1/2">{data.color.name}</p>
              </div>
              <div className="w-full flex flex-col h-3/5 border-y-2 border-black">
                <p className="w-1/2 pb-4 top-0 pt-1 pl-2">Sizes</p>
                <div className=" px-4 w-1/2">
                  <div className="h-8 w-8 border-2   hover:border-blue-500 flex items-center justify-center">
                    {data.size.name}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-1/6 w-full flex flex-row gap-x-2">
              <button className="w-1/6 h-8 rounded-md border-2 border-blue-500 flex items-center justify-center">
                <svg
                  className="h-6 w-6  fill-current text-gray-500 hover:text-blue-500 text-center "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                </svg>
              </button>
              <button
                onClick={onAddBasket}
                className="w-5/6 h-8 rounded-md border-2 border-cyan-900 flex flex-row hover:bg-cyan-900 hover:text-white justify-center"
              >
                <svg
                  className="fill-current  text-neutral-500  rounded px-1 mr-1 pb-1 hover:text-white hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                  <circle cx="10.5" cy="18.5" r="1.5" />
                  <circle cx="17.5" cy="18.5" r="1.5" />
                </svg>
                <span className=" text-lg z-10 justify-center">
                  Add to the basket
                </span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
      {children}
    </div>
  );
};

export default ProductModal;
