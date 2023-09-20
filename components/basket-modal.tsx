import React from "react";
import Modal from "./modal";

import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

export interface BasketData {
  name: string;
  price: number;
  quantity: number;
  discount: number;
}

interface BasketModalProps {
  data: BasketData[];
  onOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

function BasketModal({ data, onOpen, children, onClose }: BasketModalProps) {
  // const sumItems = data.map(
  //   (item) => item.price * item.quantity * (100 - item.discount) * 0.01
  // );

  return (
    <div>
      <Modal isOpen={onOpen} onClose={onClose}>
        <div className="flex flex-col overflow-y-auto">
          <div className="flex justify-center pt-4">
            <p className="text-4xl">Basket</p>
          </div>
          {data.length > 0 ? (
            <div className="flex flex-col p-4 px-10">
              <div className="flex flex-col bg-blue-50 h-80 overflow-y-auto rounded-md border-blue-200 border p-2 px-4 gap-y-4">
                <p className="text-lg mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                {data.map((item, index) => (
                  <div
                    className="flex flex-row mx-2 gap-x-4 items-center  text-center flex-wrap"
                    key={index}
                  >
                    <div className="w-1/12">{index + 1}</div>
                    <div className="rounded-full h-16 w-16 bg-blue-500" />

                    <div className="w-1/4"> {item.name}</div>
                    <div className="w-1/12"> {item.price} KZT</div>

                    <div className="w-1/12 flex flex-row justify-center items-center">
                      <div className="pr-2 cursor-pointer hover:scale-105 hover:text-blue-500">
                        <AiOutlineMinusSquare />
                      </div>
                      {item.quantity}
                      <div className="pl-2 cursor-pointer hover:scale-105 hover:text-blue-500">
                        <AiOutlinePlusSquare />
                      </div>
                    </div>

                    <div className="w-1/12">- {item.discount}%</div>
                    <div className="w-1/12 font-bold">
                      {" "}
                      {item.price *
                        item.quantity *
                        (100 - item.discount) *
                        0.01}{" "}
                      KZT
                    </div>
                    <div className="w-1/12 flex justify-center items-center rounded-md bg-red-200 gap-x-2 cursor-pointer hover:scale-110 hover:bg-red-600 hover:text-white p-1">
                      <p>Delete</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 flex flex-row justify-center gap-x-4">
                <p className="text-2xl font-semibold">Total</p>
                <p className="text-2xl font-semibold">899000 KZT</p>
              </div>
              <div className="flex justify-end align-end gap-4 text-center">
                <button className="px-4 py-2 text-lg font-semibold hover:bg-red-800 hover:text-white bg-red-300 rounded-md">
                  Cancel
                </button>
                <button className="px-4 py-2 text-lg font-semibold hover:bg-blue-800 hover:text-white bg-blue-300 rounded-md">
                  Buy/Order
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-96">
              <p className="text-2xl">You didn't choose any products to buy</p>
            </div>
          )}
        </div>
      </Modal>
      {children}
    </div>
  );
}

export default BasketModal;
