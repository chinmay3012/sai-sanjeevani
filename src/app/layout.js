import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Sai Sanjeevani Hospital - Multispecialty Healthcare Center in Sitapur',
  description: 'Sai Sanjeevani Hospital is a premier multispecialty hospital near the Bus Stand on Station Road in Sitapur, UP. Officially empaneled under Ayushman Bharat PM-JAY. Offering 24/7 emergency & trauma, ICU, HDU, maternity and orthopedic surgeries.',
  keywords: ['Sai Sanjeevani Hospital', 'Sitapur Hospital', 'Hospital in Sitapur', 'Ayushman Bharat Sitapur', 'Orthopedic Surgery Sitapur', 'ICU Sitapur', 'Trauma Care Sitapur'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main style={{ flex: '1 0 auto' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
