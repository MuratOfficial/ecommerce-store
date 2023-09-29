"use client";
import { Color, Size } from "@/types";
import { FadeInScroll } from "./animate-blocks";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { cn } from "@/lib/utils";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter = ({ data, name, valueKey }: FilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);
  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className=" flex flex-col">
      <div className="flex flex-row gap-x-4 px-16 flex-wrap justify-center items-center scroll-mt-4">
        {data.map((el, index) => (
          <FadeInScroll>
            <button
              className={cn(
                " rounded-md text-lg text-white font-bold bg-gradient-to-r from-slate-400 to-blue-500 px-6 py-3 hover:scale-110 cursor-pointer focus:scale-110",
                selectedValue === el.id && "from-pink-500 to-yellow-500"
              )}
              key={index}
              onClick={() => onClick(el.id)}
            >
              {el.name}
            </button>
          </FadeInScroll>
        ))}
      </div>
    </div>
  );
};

export default Filter;
