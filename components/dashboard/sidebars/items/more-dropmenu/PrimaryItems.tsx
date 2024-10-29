import Image from 'next/image'
import { primaryMenuItemsInfo } from './data/primaryItemsInfo'
import { ffDinBold } from '@/public/font/fonts'

type PrimaryItemProps = {
    itemIcon: string
    itemTitle: string
    itemPath: string
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

type PrimaryItemTitleProps = Pick<PrimaryItemProps, 'itemTitle' | 'itemPath'>
const PrimaryItemTitle = ({ itemTitle, itemPath }: PrimaryItemTitleProps) => {
    return (
        <div
            className={
                'hidden text-[15px] uppercase tracking-wider text-zinc-500 clg:block' +
                ' ' +
                ffDinBold.className
            }
        >
            {itemTitle}
        </div>
    )
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
