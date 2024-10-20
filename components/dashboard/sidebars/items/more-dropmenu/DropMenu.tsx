import { useState } from 'react'
import { Item } from '../Items'
import { MenuItems } from './DropmenuItems'

export const Dropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div
            className="relative"
            // onMouseEnter={() => setIsOpen(true)}
            // onMouseLeave={() => setIsOpen(false)}
        >
            <button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">
                Options
            </button>
            {isOpen && (
                <div>
                    <DropdownMenu />
                </div>
            )}
        </div>
    )
}

const DropdownMenu = () => (
    <div className="absolute -bottom-[56px] left-[230px] h-[262px] w-[256px] rounded-2xl border-2 border-neutral-300/70 bg-white">
        <div className="py-2">
            <MenuItems />
        </div>
    </div>
)
