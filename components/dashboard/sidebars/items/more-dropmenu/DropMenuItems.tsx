import Image from 'next/image'
import { ffDinBold } from '@/public/font/fonts'

type SidebarItemProps = {
    itemTitle: string
    itemIcon: string
    itemPath: string
    isSecondary?: boolean
}

const MenuItemsInfo = [
    {
        title: 'schools',
        path: '',
        icon: '/images/more-dropmenu/planet.svg',
    },
    {
        title: 'podcast',
        path: '',
        icon: '/images/more-dropmenu/headphone.svg',
    },
]

export const MenuItems = () => {
    return (
        <div className="flex flex-col gap-2">
            {MenuItemsInfo.map((item) => (
                <MenuItem
                    key={item.title}
                    itemTitle={item.title}
                    itemPath={item.path}
                    itemIcon={item.icon}
                />
            ))}
        </div>
    )
}

const MenuItem = ({
    itemTitle,
    itemIcon,
    isSecondary = false,
}: SidebarItemProps) => {
    return (
        <div className="flex h-[52px] w-[252px] items-center justify-start border-2 border-transparent px-5 hover:bg-zinc-100/60">
            <div className="flex clg:mr-5">
                <Image
                    src={itemIcon}
                    height={32}
                    width={32}
                    alt="icon"
                    className="clg:ml-[6px]"
                />
            </div>

            <div
                className={
                    'hidden text-[15px] uppercase tracking-wider text-zinc-500 clg:block' +
                    ' ' +
                    ffDinBold.className
                }
            >
                {itemTitle}
            </div>
        </div>
    )
}
