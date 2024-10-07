import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide',
    {
        variants: {
            variant: {
                default:
                    'bg-white text-black border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 text-slate-500',
                primary:
                    'bg-sky-400 text-white hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0',
                primaryOutline: 'bg-white text-sky-500 hover:bg-sky-400/10',
                secondary:
                    'bg-success-120 text-white hover:bg-success-110 hover:border-success-130/70 border-success-130 border-b-4 active:border-b-0',
                secondaryOutline:
                    'bg-white text-success-120 hover:bg-success-120/10',
                danger: 'bg-danger-110 text-white hover:bg-danger-110/90 hover:border-danger-120/70 border-danger-120 border-b-4 active:border-b-0',
                dangerOutline:
                    'bg-white text-danger-110 hover:bg-danger-110/10',
                super: 'bg-indigo-500 text-white hover:bg-indigo-400 border-indigo-600 border-b-4 active:border-b-0',
                superOutline: 'bg-white text-indigo-500 hover:bg-indigo-400/10',
                ghost: 'bg-transparent text-slate-500 hover:bg-slate-100 border-transparent border-0 hover:bg-slate-100',
                sidebar:
                    'bg-transparent text-slate-500 hover:bg-slate-100 border-transparent border-2 hover:bg-slate-100 transition-none',
                sidebarOutline:
                    'bg-sky-500/15 text-sky-500  border-sky-300 border-2 hover:bg-sky-500/20 transition-none',
            },
            size: {
                default: 'h-11 px-4 py-2',
                sm: 'h-9 px-3',
                lg: 'h-12 px-8',
                icon: 'h-10 w-10',
                rounded: 'rounded-full',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
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
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
