import { HTMLInputTypeAttribute, ReactElement } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = ({
  placeholder,
  inputName,
  label,
  type ='text',
  register,
  errorMessage,
  max,
  min,
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
        max={max}
        min={min}
        {...register}
      />
      <div className="h-3">
        {errorMessage && (
          <span className="text-sm text-cancelRed">
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  );
};

interface Props {
  placeholder: string;
  inputName: string;
  label: string;
  type?: HTMLInputTypeAttribute,
  register?: UseFormRegisterReturn,
  errorMessage?: string;
  max?: string;
  min?: string;
}

export default Input;
