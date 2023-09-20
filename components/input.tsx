interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

function Input({ id, onChange, value, label, type }: InputProps) {
  return (
    <div className="relative">
      <input
        id={id}
        onChange={onChange}
        value={value}
        type={type}
        className="
      block rounded-lg p-6 pb-2 w-full text-md bg-blue-50 focus:outline-blue-500 peer appearance-none
      "
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-xl text-neutral-700 duration-150 top-4 transform -translate-y-4 scale-75 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
