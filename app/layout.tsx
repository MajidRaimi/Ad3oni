import { ClerkProvider } from '@clerk/nextjs'
import classNames from 'classnames';
import type { Metadata } from 'next'
import { Rakkas, Tajawal } from 'next/font/google'
import { Toaster } from 'sonner';

import './globals.css';
import './styles.css'


const rakkas = Rakkas({ weight: "400", subsets: ['arabic'] })
const tajawal = Tajawal({ weight: "400", subsets: ['arabic'] })

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
    <ClerkProvider>
      <html lang="en">
        <body className={classNames(rakkas.className, 'bg-[#07012a]')}>
          <Toaster dir='rtl' className={tajawal.className}/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
