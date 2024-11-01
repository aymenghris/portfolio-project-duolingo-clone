import Image from 'next/image'
import { primaryMenuItemsInfo } from './data/primaryItemsInfo'
import { ffDinBold } from '@/public/font/fonts'

type PrimaryItemProps = {
    itemIcon: string
    itemTitle: string
    itemPath: string
}

export const PrimaryItems = () => {
    return (
        <>
            {primaryMenuItemsInfo.map((item) => (
                <PrimaryItem
                    key={item.title}
                    itemTitle={item.title}
                    itemPath={item.path}
                    itemIcon={item.icon}
                />
            ))}
        </>
    )
}

const PrimaryItem = ({ itemTitle, itemIcon }: PrimaryItemProps) => {
    return (
        <div className="flex h-[52px] w-[252px] items-center justify-start border-2 border-transparent px-5 hover:bg-zinc-100/60">
            <PrimaryItemIcon itemIcon={itemIcon} />
            <PrimaryItemTitle itemTitle={itemTitle} itemPath="" />
        </div>
    )
}

type PrimaryItemIconProps = Pick<PrimaryItemProps, 'itemIcon'>
const PrimaryItemIcon = ({ itemIcon }: PrimaryItemIconProps) => {
    return (
        <div className="mr-5 flex">
            <Image
                src={itemIcon}
                height={32}
                width={32}
                alt="icon"
                className="ml-[6px]"
            />
        </div>
    )
}

type PrimaryItemTitleProps = Pick<PrimaryItemProps, 'itemTitle' | 'itemPath'>
const PrimaryItemTitle = ({ itemTitle, itemPath }: PrimaryItemTitleProps) => {
    return (
        <div
            className={
                'text-[15px] uppercase tracking-wider text-zinc-500' +
                ' ' +
                ffDinBold.className
            }
        >
            {itemTitle}
        </div>
    )
}
