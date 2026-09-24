import { type Metadata, type Viewport } from 'next'
import localFont from 'next/font/local'
import { site } from '@/data/site'
import '@/styles/tailwind.css'
import '@/styles/premium.css'
const body = localFont({ src: '../../public/fonts/manrope-latin.woff2', display: 'swap', variable: '--font-body', weight: '200 800' })
export const viewport: Viewport = { themeColor: '#151b20' }
export const metadata: Metadata = {
 metadataBase: new URL(`https://${site.domain}`),
 title: { default: site.title, template: `%s | ${site.name}` }, description: site.description,
 alternates: { canonical: '/' }, icons: { icon: '/favicon-ravenna-generated.png' },
 openGraph: { title: site.title, description: site.description, url: `https://${site.domain}/`, siteName: site.name, locale: 'it_IT', type: 'website' },
 robots: { index: true, follow: true },
}
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="it" className={body.variable}><body>{children}</body></html> }
