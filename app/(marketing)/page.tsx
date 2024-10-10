import Dashboard from '@/components/pages/Dashboard'
import Homepage from '@/components/pages/Homepage'
import { ClerkLoaded, SignedIn, SignedOut } from '@clerk/nextjs'

export default function Home() {
    return (
        <>
            <ClerkLoaded>
                <SignedIn>
                    <Dashboard />
                </SignedIn>

                <SignedOut>
                    <Homepage />
                </SignedOut>
            </ClerkLoaded>
        </>
    )
}
