export interface Data {
  id: string;
  value: string;
  label: string;
}

interface InputRadioProps {
  data: Data[];
  header: string;
}

function InputRadio({ data, header }: InputRadioProps) {
  return (
    <div className="flex flex-row flex-wrap rounded-md p-2 w-full text-md ">
      <p className="text-xl text-neutral-700 px-6">{header}</p>
      {data.map((el) => (
        <div>
          <input
            id={el.id}
            value={el.value}
            type="radio"
            className="peer hidden"
            name="option"
          />
          <label
            htmlFor={el.id}
            className="cursor-pointer bg-blue-50 select-none mx-4 rounded-xl px-4 py-2 text-lg text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            {el.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default InputRadio;
