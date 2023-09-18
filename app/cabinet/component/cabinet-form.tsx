import Input from "@/components/input";
import Link from "next/link";
import { useState } from "react";

function CabinetForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [sex, setSex] = useState("");

  return (
    <div className="flex flex-col m-8 px-16 gap-y-4 flex-wrap">
      <div className="flex flex-row p-8 h-48 w-full rounded-2xl bg-blue-100 gap-x-4">
        <div className="rounded-md w-32 h-32 bg-blue-400" />
        <div className="flex flex-col text-left gap-y-4 pl-4">
          <div className="flex h-1/2 pt-6 font-bold text-3xl">Name Surname</div>
          <div className="flex h-1/2 pb-6 text-xl font-light lowercase">
            Email
          </div>
        </div>
      </div>
      <div className="flex flex-row p-8 h-full w-full rounded-2xl bg-blue-100 gap-x-4 justify-center">
        <div className="flex w-1/2 pl-6 font-bold text-3xl">User Data</div>
        <div className="flex w-1/2">
          <div className="py-2 justify-center items-center w-full">
            <form className=" p-4 flex flex-col">
              <div className="flex flex-col mb-6 gap-y-4">
                <Input
                  onChange={(e: any) => setName(e.target.value)}
                  value={name}
                  label="Name"
                  type="text"
                  id="name"
                />
                <Input
                  onChange={(e: any) => setSurname(e.target.value)}
                  value={surname}
                  label="Surname"
                  type="text"
                  id="surname"
                />
                <Input
                  onChange={(e: any) => setBirthdate(e.target.value)}
                  value={birthdate}
                  label="Birthdate"
                  type="text"
                  id="birthdate"
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
      </div>
      <div>Password</div>
      <div>History</div>
    </div>
  );
}

export default CabinetForm;
