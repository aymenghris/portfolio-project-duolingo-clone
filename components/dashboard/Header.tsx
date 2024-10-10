import { Button } from '@/components/ui/button'
import {
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'

export const DashboardHeader = () => {
    return (
        <header className="h-24 w-full border-b-2 border-slate-200 px-4">
            <div className="mx-auto h-full lg:max-w-screen-lg">
                <div className="flex justify-between pb-7 pl-4 pt-7">
                    <div className="flex flex-col items-center">
                        <Image
                            className="select-none"
                            src="/images/logo-large.svg"
                            height={30}
                            width={128}
                            alt="logo"
                        />
                        <h1 className="select-none font-bold tracking-wider text-success-120">
                            clone
                        </h1>
                    </div>
                    <ClerkLoading>
                        <Loader2 className="mr-4 mt-3 size-5 animate-spin text-gray-600" />
                    </ClerkLoading>
                    <ClerkLoaded>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton mode="modal">
                                <Button variant="primary">Login</Button>
                            </SignInButton>
                        </SignedOut>
                    </ClerkLoaded>
                </div>
            </div>
        </header>
    )
}
