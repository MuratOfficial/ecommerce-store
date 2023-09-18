import Link from "next/link";

const Subscription = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-y-4">
      <h1 className="py-4 my-2 text-4xl font-bold">Subscription</h1>
      <div className="flex py-2 mb-8 rounded-md border w-1/3 justify-center items-center bg-gradient-to-r from-neutral-50 to-neutral-100">
        <form className=" p-4 ">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-md text-center font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@de-cole.com"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-gradient-to-r from-slate-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-medium rounded-lg text-md lg:w-[300px] sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>

          <p className="text-sm py-1">
            During the subscription you're confirming our
            <Link
              href="#"
              className="  text-blue-500 hover:text-yellow-500 font-bold"
            >
              {" "}
              policy
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Subscription;
