import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: "wide" | "narrow" | "default";
}

export function Container({ className, width = "default", children, ...props }: ContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto px-6 md:px-8",
                width === "wide" && "max-w-[1400px]",
                width === "default" && "max-w-6xl",
                width === "narrow" && "max-w-3xl",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
