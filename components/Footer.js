import Link from 'next/link';
import { Compass, MapPin, Mail, Phone, Heart, Globe, Award, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                TRAVEL <span className="text-amber-400">UNBOUNDED</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              India&apos;s Most Trusted Experiential Travel Experts. Crafting bespoke journeys around people, culture, nature, and unforgettable lifetime memories.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Verified</span>
              <span className="flex items-center gap-1"><Award className="w-4 h-4 text-amber-400" /> Top Rated</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-amber-400 transition-colors">All Destinations</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">About Our Story</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">Plan Your Trip / Enquiry</Link>
              </li>
            </ul>
          </div>

          {/* Key Office Locations */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Global Offices
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">Bengaluru (HQ):</strong>
                  541, 7th Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru - 560008
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">Kochi Office:</strong>
                  LR Towers, S Janatha Road, Palavivatton, Kochi - 682025
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">Nairobi Office:</strong>
                  Westpark Towers, Muthithi Road, Nairobi, P.O. Box 6950
                </div>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Connect With Us
            </h3>
            <div className="space-y-3 text-xs">
              <p className="text-slate-400">
                Ready for your next extraordinary journey? Reach out directly to our experiential planners.
              </p>
              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>explore@travelunbounded.com</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>+91 98800 12345 / +254 700 000111</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Travel Unbounded. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for experiential travelers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
