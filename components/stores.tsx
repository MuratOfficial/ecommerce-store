import Link from "next/link";
import { FadeInBlocks } from "./animate-blocks";
import { Category } from "@/types";

interface StoreProps {
  data: Category[];
}

const Stores = ({ data }: StoreProps) => {
  const stores = data.map((item) => ({
    href: `shop/${item.id}`,
    label: item.name,
  }));

  return (
    <div>
      <section className="bg-white py-4">
        <div className="container flex-row mx-auto flex items-center flex-wrap p-4 gap-y-4 gap-x-4 ">
          {stores.map((product, index) => (
            <FadeInBlocks>
              <Link href={product.href} key={index}>
                <div className="h-screen md:w-48 xl:w-72 items-center justify-center p-1 flex flex-col border-2 rounded-md relative hover:scale-105 bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:shadow-md hover:border-none hover:text-black">
                  {/* <img className=" hover:brightness-90" src={product.img} /> */}

                  <p className="  sm:text-md text-center text-neutral-500 uppercase font-bold text-3xl hover:scale-110 hover:text-white">
                    {product.label}
                  </p>
                </div>
              </Link>
            </FadeInBlocks>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stores;
