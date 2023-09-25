import { AnimateBlocks } from "./animate-blocks";

export interface FilterData {
  name: string;
  onActive: boolean;
}

interface FilterProps {
  data: FilterData[];
}

const Filter = ({ data }: FilterProps) => {
  return (
    <div className=" flex flex-col">
      <div className="flex flex-row gap-x-4 px-16 flex-wrap justify-center items-center scroll-mt-4">
        {data.map((el, index) => (
          <AnimateBlocks>
            <button
              className=" rounded-md text-lg text-white font-bold bg-gradient-to-r from-slate-400 to-blue-500 px-6 py-3 hover:scale-110 cursor-pointer focus:scale-110 focus:from-pink-500 focus:to-yellow-500"
              key={index}
            >
              {el.name}
            </button>
          </AnimateBlocks>
        ))}
      </div>
    </div>
  );
};

export default Filter;
