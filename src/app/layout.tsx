import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Toast } from '@/components/Torrada';

const poppins = Poppins({ weight: ['100', '200', '400', '500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Webhook',
  description: 'Webhook',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
    <html lang="en">



      <body className={poppins.className}>
        <Toast></Toast>
        {children}
        </body>
    </html>
  )
}
