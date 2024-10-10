import { ClerkLoaded } from '@clerk/nextjs'
import { useAuth } from '@clerk/nextjs'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { HomepageHeader } from '@/components/homepage/Header'
import { HomepageMain } from '@/components/homepage/Main'
import { HomepageFooter } from '@/components/homepage/Footer'

export {
    ClerkLoaded,
    useAuth,
    useEffect,
    useRouter,
    HomepageHeader,
    HomepageMain,
    HomepageFooter,
}
