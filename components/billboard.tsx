import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard[];
}

const Billboard = ({ data }: BillboardProps) => {
  const billboards = data.map((item) => ({
    label: item.label,
    imgUrl: item.imageUrl,
  }));

  return (
    <div className="flex flex-col items-center justify-center pb-4">
      <div
        style={{ backgroundImage: `url(${billboards[2]?.imgUrl})` }}
        className="flex cursor-grab bg-cover w-5/6 py-4 my-4 h-screen rounded-md shadow-lg items-center justify-center"
      >
        <p className="flex  text-5xl cursor-pointer transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:text-black duration-300">
          {billboards[2]?.label}
        </p>
      </div>
      {/* <div className="flex bg-gradient-to-r cursor-grab from-slate-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-5/6 py-4 my-4 h-screen rounded-md shadow-lg items-center justify-center">
        <p className="flex  text-5xl cursor-pointer transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:text-black duration-300">
          {billboards[0].label}
        </p>
      </div> */}
    </div>
  );
};

export default Billboard;
