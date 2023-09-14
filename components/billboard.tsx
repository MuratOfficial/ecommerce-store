const Billboard = () => {
  return (
    <div className="flex flex-row items-center justify-center pb-4">
      <div className="flex bg-gradient-to-r cursor-grab from-slate-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-5/6 py-4 my-4 h-screen rounded-md shadow-lg items-center justify-center">
        <p className="flex  text-5xl cursor-pointer transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:text-black duration-300">
          Billboard
        </p>
      </div>
    </div>
  );
};

export default Billboard;
