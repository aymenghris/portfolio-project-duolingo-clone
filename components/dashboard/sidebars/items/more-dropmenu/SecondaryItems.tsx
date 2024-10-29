import { secondaryMenuItemsInfo } from './data/secondaryItemsInfo'
import { ffDinBold } from '@/public/font/fonts'

type SecondaryItemProps = {
    itemTitle: string
    itemPath: string
}

export const SecondaryItems = () => {
    return (
        <>
            {secondaryMenuItemsInfo.map((item) => (
                <SecondaryItem
                    key={item.title}
                    itemTitle={item.title}
                    itemPath={item.path}
                />
            ))}
        </>
    )
}

const SecondaryItem = ({ itemTitle }: SecondaryItemProps) => {
    return (
        <div className="flex h-[52px] w-[252px] items-center justify-start border-2 border-transparent px-5 hover:bg-zinc-100/60">
            <PrimaryItemTitle itemTitle={itemTitle} itemPath="" />
        </div>
    )
}

type SecondaryItemTitleProps = Pick<
    SecondaryItemProps,
    'itemTitle' | 'itemPath'
>
const PrimaryItemTitle = ({ itemTitle, itemPath }: SecondaryItemTitleProps) => {
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
