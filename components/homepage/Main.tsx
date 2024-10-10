import { MainDuoAnimation } from '@/components/homepage/animations/MainDuoAnimation'
import { Button } from '@/components/ui/button'
import { ffDinBold } from '@/public/font/fonts'

export const HomepageMain = () => {
    return (
        <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
            <MainDuoAnimation />
            <h1
                className={`${ffDinBold.className} w-[480px] text-center text-[32px] text-zinc-600`}
            >
                The free, fun, and effective way to learn a language!
            </h1>
            <Button>Click me</Button>
        </div>
    )
}
