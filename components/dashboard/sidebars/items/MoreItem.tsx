import Image from 'next/image'
import { ffDinBold } from '@/public/font/fonts'
import { moreItemInfo } from '@/components/dashboard/sidebars/items/data/itemsInfo'
import { DropdownMenu } from './more-dropmenu/DropMenu'

type SidebarMoreItemProps = {
    itemTitle: string
    itemIcon: string
    itemPath: string
}

export const MoreItem = () => {
    return (
        <>
            <Item />
        </>
    )
}

export const Item = () => {
    return (
        <div
            className={
                'flex h-[52px] w-14 cursor-default items-center justify-center rounded-xl border-2 border-transparent px-2 py-1 hover:bg-zinc-100/60 clg:w-[222px] clg:justify-start'
            }
        >
            <ItemIcon itemIcon={moreItemInfo.icon} />
            <ItemTitle itemTitle={moreItemInfo.title} />
            <DropdownMenu />
        </div>
    )
}

type ItemIconProps = Pick<SidebarMoreItemProps, 'itemIcon'>
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

type ItemTitleProps = Pick<SidebarMoreItemProps, 'itemTitle'>
const ItemTitle = ({ itemTitle }: ItemTitleProps) => {
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
