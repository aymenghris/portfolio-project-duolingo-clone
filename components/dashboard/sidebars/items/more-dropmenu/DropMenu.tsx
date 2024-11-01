import { useState } from 'react'
import { MenuItems } from './DropMenuItems'

export const DropdownMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div>
            {isOpen && (
                <div className="absolute bottom-0 left-[230px] h-[262px] w-[256px] rounded-2xl border-2 border-neutral-300/70 bg-white">
                    <MenuItems />
                </div>
            )}
        </div>
    )
}
