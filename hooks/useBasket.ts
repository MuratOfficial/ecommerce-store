import { Product } from "@/types";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface BasketStoreProps {
  items: Product[];
  addItem: (data: Product) => void;
  deleteItem: (id: string) => void;
}

const useBasket = create(
  persist<BasketStoreProps>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItems = currentItems.find((item) => item.id === data.id);

        if (existingItems) {
          return toast("Item is already in the basket");
        }

        set({
          items: [...get().items, data],
        });
        toast.success("Product added to the basket");
      },
      deleteItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] }),
          toast.success("Product removed from basket");
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
      name: "basket-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useBasket;
