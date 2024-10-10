'use client'

import {
    ClerkLoaded,
    useAuth,
    useEffect,
    useRouter,
    HomepageHeader,
    HomepageMain,
    HomepageFooter,
} from './typescript/homepage-imports'

export default function HomePage() {
    const { isSignedIn } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (isSignedIn) {
            router.push('/learn')
        }
    }, [isSignedIn, router])

    return (
        <>
            <ClerkLoaded>
                <HomepageHeader />
                <HomepageMain />
                <HomepageFooter />
            </ClerkLoaded>
        </>
    )
}
