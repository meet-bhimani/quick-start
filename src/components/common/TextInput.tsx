import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { cn } from "../../utils/functions";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type?: string;
  label?: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
  placeholder?: string;
  rows?: number;
  cols?: number;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  type = "text",
  label,
  error,
  register,
  placeholder,
  rows,
  cols,
  className,
  ...rest
}) => {
  return (
    <div className='w-full mb-4'>
      {label && (
        <label htmlFor={id} className='block mb-1 font-semibold'>
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          id={id}
          {...register}
          placeholder={placeholder}
          className={cn(
            "w-full p-2 border outline-none focus:border-primary py-3 px-4 text-sm placeholder:text-default placeholder:text-opacity-30",
            className
          )}
          rows={rows}
          cols={cols}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          type={type}
          {...register}
          placeholder={placeholder}
          className={cn(
            "w-full p-2 border outline-none focus:border-primary py-3 px-4 text-sm placeholder:text-default placeholder:text-opacity-30",
            className
          )}
          {...rest}
        />
      )}
      {error && <p className='text-red-500 text-[13px] mt-1'>{error.message}</p>}
    </div>
  );
};

export default TextInput;
