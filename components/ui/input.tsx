import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "border border-white/20 bg-transparent rounded-md px-3 py-2 w-full text-sm outline-none focus:ring-2 focus:ring-purple-500",
        className
      )}
      {...props}
    />
  );
}

export { Input };