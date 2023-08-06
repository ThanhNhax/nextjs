import './globals.css'
import type { Metadata } from 'next'
import Narbar from './components/Narbar'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800 bg-slate-800'>
        <Narbar></Narbar>
        {children}
      </body>
    </html>
  )
}
