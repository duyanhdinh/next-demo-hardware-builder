import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Header} from "@components/header/header";
import StoreProvider from "@store/provider";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App demo',
    description: 'Generated by create next app??????????',
}

export default function RootLayout({
                                       children,
                                       modal
                                   }: {
    children: React.ReactNode,
    modal: React.ReactNode,
}) {
    return (
        <html lang="en">
        <head>
            <link rel="shortcut icon" href="/icon.svg"></link>
        </head>
        <body className={`${inter.className} bg-white`}>
        <Header/>
        <StoreProvider>
            <div className="w-full min-h-body flex justify-center pt-[16px]">
                <div className="w-[1080px] h-full">{children}</div>
            </div>
            {modal}
        </StoreProvider>
        </body>
        </html>
    )
}
