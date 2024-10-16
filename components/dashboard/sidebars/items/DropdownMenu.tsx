import { useState } from 'react'

export const Dropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div
            className="relative inline-block text-left"
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
    <div className="absolute -bottom-[56px] left-[230px] mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
            {['Account settings', 'Support', 'License', 'Sign out'].map(
                (item) => (
                    <a
                        key={item}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        {item}
                    </a>
                )
            )}
        </div>
    </div>
)
