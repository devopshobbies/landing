import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Layout } from '@/components'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib'

const inter = Inter({ subsets: ['latin'] })
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Devops Hobbies | Open Source Devops Community',
  description: 'Open Source Devops Community',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'lg:h-screen lg:overflow-hidden')}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
