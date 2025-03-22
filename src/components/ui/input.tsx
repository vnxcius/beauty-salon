"use client";

import { cn } from "@/lib/utils";

interface InputProps {
  type?: string;
  className?: string;
  placeholder?: string;
  name?: string;
  autoFocus?: boolean;
}

export default function Input(props: InputProps) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      id={props.name}
      autoFocus={props.autoFocus}
      className={cn(
        "ring ring-neutral-300 rounded-md p-2 text-sm",
        "focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:outline-none font-medium",
        "placeholder:text-neutral-500 shadow-sm",
      )}
      {...props}
    />
  );
}