import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ROL-EMS × REBAR | Pickleball',
  description: 'Reserve a pickleball court by the hour, check live availability, or join the open play queue at ROL-EMS Resort.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1E5336',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#FDFBF7]">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
