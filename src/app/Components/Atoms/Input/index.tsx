import { HTMLInputTypeAttribute, ReactElement } from "react";

const Input = ({
  placeholder,
  inputName,
  label,
  type ='text',
}: Props): ReactElement => {
  return (
    <div>
      <div className="mb-2">
        <span className="text-sm">
          {label}
        </span>
      </div>
      <input
        className="bg-lightGray w-full rounded px-3 py-2"
        placeholder={placeholder}
        name={inputName}
        type={type}
      />
    </div>
  );
};

interface Props {
  placeholder: string;
  inputName: string;
  label: string;
  type?: HTMLInputTypeAttribute
}

export default Input;
