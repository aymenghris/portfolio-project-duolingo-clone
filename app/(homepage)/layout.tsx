type MarketingLayoutProps = {
    children: React.ReactNode
}

export default function MarketingLayout({
    children,
}: Readonly<MarketingLayoutProps>) {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex flex-1 flex-col items-center justify-center">
                {children}
            </main>
        </div>
    )
}
