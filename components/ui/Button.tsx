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
      "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "flex items-center border border-white  bg-gradient-to-r from-[#AA7130] to-[#02385A] text-white ",
      outline:
        "border border-[#C6843E] text-[#C6843E] hover:bg-[#C6843E] hover:text-white focus:ring-[#C6843E]",
      ghost: "bg-transparent text-white hover:bg-white/10 focus:ring-white",
    };

    const sizes = {
      sm: "h-9 pl-4 pr-2 text-sm",
      md: "h-11 pl-6 pr-2 text-base",
      lg: "h-14 pl-8 pr-2 text-lg",
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
          <p className="flex items-center gap-4">
            {children}{" "}
            <span className="bg-white w-8 h-8 text-[#AA7130] flex items-center justify-center rounded-full">
              <MoveRight size={18} />
            </span>
          </p>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
