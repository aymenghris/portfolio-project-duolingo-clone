import { cn } from '@/lib/utils'

type Props = {
    className?: string
}

export const Exercises = ({ className }: Props) => {
    return (
        <>
            <main>
                <div className={cn('h-full bg-pink-500', className)}>
                    <h1 className="p-5 text-5xl text-slate-200">
                        لا حول ولا قوة إلا بالله
                    </h1>
                </div>
            </main>
        </>
    )
}
