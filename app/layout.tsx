import Footer from './(shared)/Footer'
import Navbar from './(shared)/Navbar'
import './globals.css'
import { Open_Sans } from 'next/font/google'


const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'ExoteTech',
  description: 'Get the latest information about AI and Technology!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <Navbar />
        {children}
        <Footer /> 
      </body>
    </html>
  )
}
