import { Product, ProductBag } from "@/types";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface BasketPriceProps {
  prices: ProductBag[];
  increaseItem: (data: ProductBag, id: string) => void;
  decreaseItem: (data: ProductBag, id: string) => void;
}

const useBasketPrice = create(
  persist<BasketPriceProps>(
    (set, get) => ({
      prices: [],
      increaseItem: (data: ProductBag, id: string) => {
        data.id = id;
        data.discount = 0;
        data.quantity = +1;

        set({
          prices: [...get().prices, data],
        });
      },
      decreaseItem: (data: ProductBag, id: string) => {
        data.id = id;
        data.discount = 0;
        data.quantity = +1;
        if (data.quantity < 0) {
          set({ prices: [...get().prices] });
          toast("Product has been removed");
        } else {
          set({ prices: [...get().prices, data] });
        }
      },
      //   decreaseItem: (data: ProductBag) => {
      //     data.quantity -= 1;

      //     if (data.quantity < 0) {
      //       set({ items: [...get().items] });
      //     } else {
      //       set({ items: [...get().items, data] });
      //     }
      //   },
      //   increaseItem: (data: ProductBag) => {
      //     data.quantity += 1;

      //     set({ items: [...get().items, data] });
      //   },
    }),
    {
      name: "price-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useBasketPrice;
