"use client";
const Filter = () => {
  const data = [
    { name: "Brilliant", onActive: false },
    { name: "Gold", onActive: false },
    { name: "Platinum", onActive: false },
    { name: "Diamond", onActive: false },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-x-4 px-16 flex-wrap justify-center items-center">
        {data.map((el, index) => (
          <button
            className="rounded-md text-lg text-white font-bold bg-gradient-to-r from-slate-400 to-blue-500 px-6 py-3 hover:scale-110 cursor-pointer focus:scale-110 focus:from-pink-500 focus:to-yellow-500"
            key={index}
          >
            {el.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
