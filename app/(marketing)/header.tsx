import Image from 'next/image'

export const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="mx-auto h-full lg:max-w-screen-lg">
                <div className="flex flex-col items-center justify-start gap-x-3 pb-7 pl-4 pt-7">
                    <Image
                        src="/logo-large.svg"
                        height={30}
                        width={128}
                        alt="logo"
                    />
                    <h1>clone</h1>
                </div>
            </div>
        </header>
    )
}
