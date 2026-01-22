"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
// import { p } from "framer-motion/client";
import { MoveRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center cursor-pointer justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "flex items-center border border-primaryorange  bg-primaryorange text-white hover:border-primaryorange hover:text-primaryorange hover:bg-white ",
      outline:
        "border border-primaryorange text-primaryorange hover:bg-primaryorange hover:text-white focus:ring-[#C6843E]",
      ghost: "bg-transparent text-white hover:bg-white/10 focus:ring-white",
    };

    const sizes = {
      sm: " py-3  px-6 text-sm",
      md: " py-3  px-6 text-base",
      lg: " py-2  px-6 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          variant === "primary" ?<p className="flex items-center gap-4">
            {children}{" "}
            <span className="bg-primaryorange border border-white w-6 h-6 text-white flex items-center justify-center rounded-full">
              <MoveRight size={14} />
            </span>
          </p> : <p className="flex items-center gap-4">
            {children}{" "}
            {/* <span className="bg-primaryorange border border-white w-6 h-6 text-white flex items-center justify-center rounded-full">
              <MoveRight size={14} />
            </span> */}
          </p>
          
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
