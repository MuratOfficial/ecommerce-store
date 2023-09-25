import Link from "next/link";
import { FadeInBlocks } from "./animate-blocks";

const Stores = () => {
  const stores = [
    {
      img: "https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      name: "Product 1",
      href: `/shop/product1/`,
    },
    {
      img: "https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      name: "Product 2",
      href: `/shop/product2/`,
    },
    {
      img: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      name: "Product 3",
      href: `/shop/product3/`,
    },
    {
      img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      name: "Product 4",
      href: `/shop/product4/`,
    },
    {
      img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
      name: "Product 5",
      href: `/shop/product5/`,
    },
  ];

  return (
    <div>
      <section className="bg-white py-4">
        <div className="container mx-auto flex items-center flex-wrap p-4 gap-y-4 ">
          {stores.map((product, index) => (
            <div className="w-full md:w-1/2 xl:w-1/3 p-1 flex flex-col relative hover:scale-105 ">
              <FadeInBlocks>
                <Link href={product.href} key={index}>
                  <img className=" hover:brightness-90" src={product.img} />

                  <p className="lg:absolute md:absolute lg:inset-x-36 lg:inset-y-44 sm:text-md text-center text-neutral-500 uppercase font-bold text-3xl hover:scale-110 hover:text-neutral-800">
                    {product.name}
                  </p>
                </Link>
              </FadeInBlocks>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stores;
