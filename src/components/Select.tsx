import { SelectHTMLAttributes } from "react";

type Props = {
  options: Array<{ name: string; value: string }>;
  label: string;
  id: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ options, label, id, ...props }: Props) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label htmlFor={id} className="ml-1 text-xs text-gray-300">
        {label}
      </label>
      <select
        {...props}
        id={id}
        className="min-w-[200px] cursor-pointer rounded bg-gray-700 p-2 transition ease-in hover:bg-gray-800 active:border-0 active:ring-0 sm:min-w-full">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
