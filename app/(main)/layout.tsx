type MainLayoutProps = {
    children: React.ReactNode
}

export default function MarketingLayout({
    children,
}: Readonly<MainLayoutProps>) {
    return (
        <>
            <main className="h-screen pl-[256px]">
                <div className="h-screen bg-red-500">{children}</div>
            </main>
        </>
    )
}
