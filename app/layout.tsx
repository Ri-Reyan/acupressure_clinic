import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Hind_Siliguri, Noto_Serif_Bengali } from 'next/font/google'
import './globals.css'

const hindSiliguri = Hind_Siliguri({ subsets: ['bengali'], weight: ['400', '500', '600', '700'], variable: '--font-hind-siliguri', display: 'swap' })
const notoSerifBengali = Noto_Serif_Bengali({ subsets: ['bengali'], weight: ['400', '500', '600', '700'], variable: '--font-noto-serif-bengali', display: 'swap' })

export const metadata: Metadata = {
  title: 'প্রাণ | অ্যাকুপ্রেসার ও প্রাকৃতিক চিকিৎসা ক্লিনিক',
  description: 'ওষুধ ও সার্জারি ছাড়াই দীর্ঘস্থায়ী ব্যথা, মাইগ্রেন, অনিদ্রা ও স্ট্রেসের জন্য প্রমাণিত অ্যাকুপ্রেসার থেরাপি।',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8fbfa',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} ${notoSerifBengali.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
