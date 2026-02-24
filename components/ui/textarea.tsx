import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "border border-white/20 bg-transparent rounded-md px-3 py-2 w-full text-sm outline-none focus:ring-2 focus:ring-purple-500",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };