import { Montserrat, Inter } from 'next/font/google';
import '../styles/global.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata = {
  title: "Jeweller's Masterclass by Arnav Patil | Grow Your Jewellery Business",
  description:
    "Join Arnav Patil's Jeweller's Masterclass and unlock proven systems and strategies to autopilot and grow your jewellery business. Live on Zoom. Only ₹99.",
  keywords:
    'jewellery business, jewellery masterclass, arnav patil, business coach, jewellery growth, marathi business',
  openGraph: {
    title: "Jeweller's Masterclass by Arnav Patil",
    description:
      'Unlock proven Systems and Strategies to Autopilot / Grow your Jewellery Business',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
