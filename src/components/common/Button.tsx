import React from "react";
import { cn } from "../../utils/functions";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "disabled";
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
  type?: "button" | "reset" | "submit";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  rounded = false,
  type = "button",
  ...props
}) => {
  const variants = {
    primary: "bg-primary text-white hover:opacity-85 transition",
    secondary: "bg-secondary text-heading hover:opacity-85 transition",
    disabled: "bg-neutral-300 text-neutral-100 cursor-not-allowed transition",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs sm:text-sm",
    md: "px-5 py-2 text-sm sm:text-base",
    lg: "px-8 py-3 text-lg sm:text-xl",
  };

  const buttonClass = cn(
    "outline-none",
    variants[variant],
    sizes[size],
    rounded ? "rounded-full" : "rounded-md",
    className
  );

  return (
    <button className={buttonClass} type={type} disabled={variant === "disabled"} {...props}>
      {children}
    </button>
  );
};

export default Button;
