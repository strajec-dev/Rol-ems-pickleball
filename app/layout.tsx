import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import { PickleballProvider } from '@/context/PickleballContext'

export const metadata: Metadata = {
  title: {
    default: 'ROL-EMS Pickleball',
    template: '%s | ROL-EMS Pickleball',
  },
  description:
    'Book pickleball courts, join open play, track tournaments and brackets at ROL-EMS Resort.',
  keywords: ['pickleball', 'court booking', 'ROL-EMS', 'open play', 'tournament', 'paddle rental'],
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
        <PickleballProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <footer className="border-t border-[rgba(17,17,17,0.08)] bg-[#111111] py-10 text-center">
            <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-[#E1A728]">
              ROL-EMS Pickleball
            </p>
            <p className="mt-1 text-[11px] text-white/40">
              © {new Date().getFullYear()} ROL-EMS Resort × Rebar Sports Center. All rights reserved.
            </p>
          </footer>
        </PickleballProvider>
      </body>
    </html>
  )
}
