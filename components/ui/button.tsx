import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide",
    {
        variants: {
            variant: {
                default:
                    "bg-white text-black border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 text-slate-500",
                primary:
                    "bg-sky-400 text-white hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0",
                primaryOutline: "bg-white text-sky-500 hover:bg-sky-400/5",
                secondary:
                    "bg-success-100 text-white hover:bg-success-110 border-success-120 border-b-4 active:border-b-0",
                secondaryOutline:
                    "bg-white text-success-100 hover:bg-success-100/5",
                danger: "bg-danger-100 text-white hover:bg-danger-110 border-danger-120 border-b-4 active:border-b-0",
                dangerOutline:
                    "bg-white text-danger-100 hover:bg-danger-110/5",
            },
            size: {
                default: "h-11 px-4 py-2",
                sm: "h-9 px-3",
                lg: "h-12 px-8",
                icon: "h-10 w-10",
                rounded: "rounded-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
