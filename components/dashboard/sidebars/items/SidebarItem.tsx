import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ffDinBold } from '@/public/font/fonts'
import { itemsInfo } from '@/components/dashboard/sidebars/items/itemsInfo'

type SidebarItemProps = {
    itemTitle: string
    itemIcon: string
    itemPath: string
}

export const SidebarItems = () => {
    return (
        <div className="flex flex-col gap-2">
            {itemsInfo.map((item) => (
                <SidebarItem
                    key={item.title}
                    itemTitle={item.title}
                    itemPath={item.path}
                    itemIcon={item.icon}
                />
            ))}
        </div>
    )
}

const SidebarItem = ({ itemTitle, itemIcon, itemPath }: SidebarItemProps) => {
    const path = usePathname()

    const routeChecker = () => {
        if (path === itemPath) {
            return true
        }

        return false
    }
    return (
        <div
            className={
                'flex h-[52px] w-14 cursor-pointer items-center justify-center rounded-xl px-2 py-1 clg:w-[222px] clg:justify-start' +
                ' ' +
                (routeChecker()
                    ? 'border-2 border-primary-110 bg-primary-100'
                    : 'border-2 border-transparent hover:bg-zinc-100/60')
            }
        >
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
                    'hidden text-[15px] uppercase tracking-wider clg:block' +
                    ' ' +
                    (routeChecker() ? 'text-sky-500' : ' text-zinc-500') +
                    ' ' +
                    ffDinBold.className
                }
            >
                {itemTitle}
            </div>
        </div>
    )
}
