import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

type SidebarProps = {
    className?: string
}

type ListItemProps = {
    itemTitle: string
    itemIcon: React.ReactNode
    itemPath: string
}

export const Sidebar = ({ className }: SidebarProps) => (
    <aside
        className={cn(
            'fixed left-0 top-0 flex h-screen w-[256px] flex-col border-r-2 border-neutral-300/70 p-4',
            className
        )}
    ></aside>
)

const Logo = () => {
    return <div className=""></div>
}

const ListItem = ({ itemTitle, itemIcon, itemPath }: ListItemProps) => {
    const path = usePathname()

    const routeChecker = () => {
        if (path === itemPath) {
            return true
        }
    }
    return (
        <div
            className={
                'h-10 w-[202px] rounded-full bg-slate-500 px-2 py-1' +
                ' ' +
                (routeChecker()
                    ? 'border-primary-110 text-primary-110 bg-primary-100 rounded-xl border-2'
                    : '')
            }
        >
            {itemIcon}
            {itemTitle}
        </div>
    )
}
