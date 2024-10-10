import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { ffDinRegular } from '../public/font/fonts'

import './globals.css'

export const metadata: Metadata = {
    title: 'Duolingo Clone',
    description:
        'Warning: This is not the official Duolingo app. It is a clone created solely for educational purposes.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ClerkProvider afterSignOutUrl="/">
            <html lang="en">
                <body className={ffDinRegular.className}>{children}</body>
            </html>
        </ClerkProvider>
    )
}
