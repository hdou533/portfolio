import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import Header from './../components/Header';
import Footer from './../components/Footer';
import { poppins } from './fonts';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sally Dou | Software Developer | Frontend Specialist | UX Design Enthusiast',
  description: 'Welcome to Sally\'s Portfoio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        
        <Header />

        <div className='w-full bg-background text-white flex flex-col justify-center items-center '>

          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  )
}
