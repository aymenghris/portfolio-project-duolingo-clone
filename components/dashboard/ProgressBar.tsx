import { cn } from '@/lib/utils'

type Props = {
    className?: string
}

export const ProgressBar = ({ className }: Props) => (
    <div
        className={cn('h-screen w-[368px] self-end bg-teal-500', className)}
    ></div>
)
