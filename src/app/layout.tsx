import { type Metadata, type Viewport } from 'next'
import { DM_Serif_Display, Manrope } from 'next/font/google'
import { site } from '@/data/site'
import '@/styles/tailwind.css'
import '@/styles/premium.css'
const display = DM_Serif_Display({ subsets: ['latin'], display: 'swap', variable: '--font-display', weight: '400', style: ['normal','italic'] })
const body = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-body' })
export const viewport: Viewport = { themeColor: '#0d1926' }
export const metadata: Metadata = {
 metadataBase: new URL(`https://${site.domain}`),
 title: { default: site.title, template: `%s | ${site.name}` }, description: site.description,
 alternates: { canonical: '/' }, icons: { icon: '/favicon.svg' },
 openGraph: { title: site.title, description: site.description, url: `https://${site.domain}/`, siteName: site.name, locale: 'it_IT', type: 'website' },
 robots: { index: true, follow: true },
}
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="it" className={`${display.variable} ${body.variable}`}><body>{children}</body></html> }
