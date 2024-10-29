import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ffDinBold } from '@/public/font/fonts'
import { itemsInfo } from '@/components/dashboard/sidebars/items/data/itemsInfo'

type SidebarItemProps = {
    itemTitle: string
    itemIcon: string
    itemPath: string
}

export const Items = () => {
    return (
        <div className="flex flex-col gap-2">
            {itemsInfo.map((item) => (
                <Item
                    key={item.title}
                    itemTitle={item.title}
                    itemPath={item.path}
                    itemIcon={item.icon}
                />
            ))}
        </div>
    )
}

const routeChecker = (itemPath: string) => {
    const path = usePathname()

    if (path === itemPath) {
        return true
    }

    return false
}

export const Item = ({ itemTitle, itemIcon, itemPath }: SidebarItemProps) => {
    return (
        <div
            className={
                'flex h-[52px] w-14 items-center justify-center rounded-xl px-2 py-1 clg:w-[222px] clg:justify-start' +
                ' ' +
                (routeChecker(itemPath)
                    ? 'border-2 border-primary-110 bg-primary-100'
                    : 'border-2 border-transparent hover:bg-zinc-100/60') +
                ' ' +
                (itemTitle === 'more' ? 'cursor-default' : 'cursor-pointer')
            }
        >
            <ItemIcon itemIcon={itemIcon} />
            <ItemTitle itemTitle={itemTitle} itemPath={itemPath} />
        </div>
    )
}

type ItemIconProps = Pick<SidebarItemProps, 'itemIcon'>
const ItemIcon = ({ itemIcon }: ItemIconProps) => {
    return (
        <div className="flex clg:mr-5">
            <Image
                src={itemIcon}
                height={32}
                width={32}
                alt="icon"
                className="clg:ml-[6px]"
            />
        </div>
    )
}

type ItemTitleProps = Pick<SidebarItemProps, 'itemTitle' | 'itemPath'>
const ItemTitle = ({ itemTitle, itemPath }: ItemTitleProps) => {
    return (
        <div
            className={
                'hidden text-[15px] uppercase tracking-wider clg:block' +
                ' ' +
                (routeChecker(itemPath) ? 'text-sky-500' : ' text-zinc-500') +
                ' ' +
                ffDinBold.className
            }
        >
            {itemTitle}
        </div>
    )
}
