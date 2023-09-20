import Input from "@/components/input";
import InputRadio, { Data } from "@/components/input-radio";
import { useState } from "react";

function CabinetForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");
  const [currPass, setCurrPass] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  const inputRadioData: Data[] = [
    {
      id: "man",
      value: "Man",
      label: "Man",
    },
    {
      id: "woman",
      value: "Woman",
      label: "Woman",
    },
    {
      id: "other",
      value: "Other",
      label: "Other",
    },
  ];

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
        <div className="flex w-1/2 pl-6 mt-4 font-bold text-3xl">User Data</div>
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
                <InputRadio data={inputRadioData} header="Sex" />
                <Input
                  onChange={(e: any) => setPhone(e.target.value)}
                  value={phone}
                  label="Phone"
                  type="tel"
                  id="phone"
                />
              </div>

              <button
                type="submit"
                className="text-white bg-gradient-to-r from-slate-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-medium rounded-lg text-md lg:w-[300px] sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-row p-8 h-full w-full rounded-2xl bg-blue-100 gap-x-4 justify-center">
        <div className="flex w-1/2 pl-6 font-bold text-3xl mt-4">Password</div>
        <div className="flex w-1/2">
          <div className="py-2 justify-center items-center w-full">
            <form className=" p-4 flex flex-col">
              <div className="flex flex-col mb-6 gap-y-4">
                <Input
                  onChange={(e: any) => setCurrPass(e.target.value)}
                  value={currPass}
                  label="Current Password"
                  type="text"
                  id="currPass"
                />
                <Input
                  onChange={(e: any) => setPass1(e.target.value)}
                  value={pass1}
                  label="New Password"
                  type="text"
                  id="pass1"
                />
                <Input
                  onChange={(e: any) => setPass2(e.target.value)}
                  value={pass2}
                  label="Repeat Password"
                  type="text"
                  id="pass2"
                />
              </div>

              <button
                type="submit"
                className="text-white bg-gradient-to-r from-slate-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-medium rounded-lg text-md lg:w-[300px] sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CabinetForm;
