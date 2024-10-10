import { DashboardHeader } from '@/components/dashboard/Header'
import { DashboardFooter } from '@/components/dashboard/Footer'
import { ClerkLoaded, SignedIn, SignedOut } from '@clerk/nextjs'
import { HomepageHeader } from '@/components/homepage/Header'
import { HomepageFooter } from '@/components/homepage/Footer'

const AuthContent = ({
    signedInComponent,
    signedOutComponent,
}: {
    signedInComponent: JSX.Element
    signedOutComponent: JSX.Element
}) => (
    <ClerkLoaded>
        <SignedIn>{signedInComponent}</SignedIn>
        <SignedOut>{signedOutComponent}</SignedOut>
    </ClerkLoaded>
)

type MarketingLayoutProps = {
    children: React.ReactNode
}

export default function MarketingLayout({
    children,
}: Readonly<MarketingLayoutProps>) {
    return (
        <div className="flex min-h-screen flex-col">
            <AuthContent
                signedInComponent={<DashboardHeader />}
                signedOutComponent={<HomepageHeader />}
            />

            <main className="flex flex-1 flex-col items-center justify-center">
                {children}
            </main>

            <AuthContent
                signedInComponent={<DashboardFooter />}
                signedOutComponent={<HomepageFooter />}
            />
        </div>
    )
}
