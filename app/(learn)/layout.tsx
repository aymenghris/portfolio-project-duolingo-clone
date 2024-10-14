import { Exercises } from '@/components/learn/Exercises'
import { ProgressBar } from '@/components/learn/ProgressBar'
import { Sidebar } from '@/components/learn/sidebars/Sidebar'

type MainLayoutProps = {
    children: React.ReactNode
}

export default function MarketingLayout({
    children,
}: Readonly<MainLayoutProps>) {
    return (
        <>
            <main className="pl-[256px]">
                <Sidebar />
                {/* <section className="mx-auto max-w-[1056px] bg-slate-800 pt-6">
                    <section className="flex bg-orange-500 px-6 pb-6">
                        <Exercises className="min-w-[316px] max-w-[592px] p-4" />
                        <ProgressBar className="" />
                    </section>
                </section> */}
            </main>
        </>
    )
}
