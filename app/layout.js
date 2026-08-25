import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Travel Unbounded | India's Most Trusted Experiential Travel Experts",
  description:
    'Customized luxury experiential trips across India and top international destinations. Crafted around people, culture, and nature.',
  keywords: [
    'Travel Unbounded',
    'Experiential Travel',
    'Kerala Backwaters',
    'Himachal Tour Packages',
    'Ladakh Motorcycle Safari',
    'Masai Mara Wildlife Safari',
    'Vietnam Ha Long Bay Cruise',
    'Iceland Northern Lights',
    'Custom Luxury Travel India',
  ],
  authors: [{ name: 'Travel Unbounded' }],
  openGraph: {
    title: 'Travel Unbounded | Experiential Travel Experts',
    description: 'Bespoke journeys built around people, culture and raw nature.',
    url: 'https://travelunbounded.com',
    siteName: 'Travel Unbounded',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-slate-900 text-slate-100 antialiased min-h-screen flex flex-col font-sans relative overflow-x-hidden">
        {/* Ambient background glows for extra brightness & vibrant aesthetic */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[35rem] h-[35rem] bg-amber-500/15 rounded-full blur-3xl opacity-70" />
          <div className="absolute top-1/3 -right-32 w-[35rem] h-[35rem] bg-sky-500/15 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-20 left-1/4 w-[40rem] h-[40rem] bg-indigo-500/15 rounded-full blur-3xl opacity-50" />
        </div>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
