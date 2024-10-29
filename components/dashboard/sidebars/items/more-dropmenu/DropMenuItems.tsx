import { PrimaryItems } from './PrimaryItems'
import { SecondaryItems } from './SecondaryItems'

export const MenuItems = () => {
    return (
        <div className="flex flex-col gap-2 divide-y">
            <PrimaryItems />
            <SecondaryItems />
        </div>
    )
}
