'use client'

import { Items } from './items/Items'
import { Logo } from './Logo'

export const Sidebar = () => (
    <aside className="fixed left-0 top-0 flex h-screen w-[88px] flex-col border-r-2 border-neutral-300/70 px-4 clg:w-[256px]">
        <Logo />
        <Items />
    </aside>
)
