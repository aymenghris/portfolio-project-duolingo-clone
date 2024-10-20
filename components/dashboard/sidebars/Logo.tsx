import Image from 'next/image'

export const Logo = () => {
    return (
        <div className="pb-[25px] pl-[10px] pt-9 clg:h-[92px] clg:w-[222px] clg:pb-[30px] clg:pl-4 clg:pt-8">
            <Image
                src="/images/logo-large.svg"
                height={30}
                width={128}
                alt="logo"
                className="hidden cursor-pointer select-none clg:block"
            />
            <Image
                src="/images/logo-small.svg"
                height={40}
                width={40}
                alt="logo"
                className="block cursor-pointer select-none clg:hidden"
            />
        </div>
    )
}
