import './globals.css';
import { ClerkProvider } from '@clerk/nextjs'

import classNames from 'classnames';
import type { Metadata } from 'next'
import { Rakkas } from 'next/font/google'

const rakkas = Rakkas({ weight: "400", subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'ادْعُونِي',
  description: 'وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ ۚ إِنَّ الَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِي سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    >
      <html lang="en">
        <body className={classNames(rakkas.className, 'bg-[#07012a]')}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
