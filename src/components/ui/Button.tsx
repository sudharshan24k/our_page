import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg";
    href?: string;
}

export function Button({
    className,
    variant = "primary",
    size = "default",
    href,
    children,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer active:scale-95";

    const variants = {
        primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground text-foreground/80 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline px-0",
    };

    const sizes = {
        default: "h-11 px-8 text-[15px]",
        sm: "h-9 px-6 text-sm",
        lg: "h-12 px-10 text-base",
    };

    const comp = cn(baseStyles, variants[variant], variant !== "link" && sizes[size], className);

    if (href) {
        return (
            <Link href={href} className={comp} onClick={props.onClick as any}>
                {children}
            </Link>
        );
    }

    return (
        <button className={comp} {...props}>
            {children}
        </button>
    );
}
