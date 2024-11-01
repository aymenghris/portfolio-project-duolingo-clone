import { PrimaryItems } from './PrimaryItems'
import { SecondaryItems } from './SecondaryItems'

export const MenuItems = () => {
    return (
        <div className="flex flex-col divide-y-2 divide-neutral-300/70">
            <div className="py-2">
                <PrimaryItems />
            </div>
            <div className="py-2">
                <SecondaryItems />
            </div>
        </div>
    )
}
