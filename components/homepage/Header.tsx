import Image from 'next/image'

export const HomepageHeader = () => {
    return (
        <header className="mx-auto flex h-[70px] w-full lg:max-w-[988px]">
            <Image
                src="./images/homepage-logo.svg"
                width={179}
                height={42}
                alt="logo"
            />
        </header>
    )
}
