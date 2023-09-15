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
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-4 ">
          {stores.map((product) => (
            <div className="w-full md:w-1/3 xl:w-1/4 p-1 flex flex-col relative hover:text-white">
              <a href={product.href} key={product.name}>
                <img className=" hover:brightness-90" src={product.img} />

                <p className="lg:absolute md:absolute lg:inset-x-20 lg:inset-y-36 sm:text-md hover:uppercase font-bold text-3xl">
                  {product.name}
                </p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stores;
