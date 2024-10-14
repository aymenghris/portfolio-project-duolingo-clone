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

export const Header = () => {
    return (
        <header className="sticky top-0 h-24 w-full border-b-2 border-slate-200 bg-white px-4 pl-[256px]">
            <div className="mx-auto h-full lg:max-w-screen-lg">
                <div className="flex justify-between pb-7 pl-4 pt-8">
                    <Image
                        className="select-none"
                        src="/images/logo-large.svg"
                        height={30}
                        width={128}
                        alt="logo"
                    />

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
