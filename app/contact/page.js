import BookingForm from '@/components/BookingForm';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Contact & Travel Booking Enquiry | Travel Unbounded',
  description:
    'Submit your travel booking enquiry to Travel Unbounded. Our experiential travel experts in Bangalore, Kochi, and Nairobi will curate your custom itinerary.',
};

export default function ContactPage({ searchParams }) {
  const selectedDestination = searchParams?.destination || '';

  return (
    <div className="space-y-16 pb-20">
      {/* Banner Header */}
      <section className="relative py-16 bg-slate-800/60 border-b border-slate-700/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            Start Your Journey
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Plan Your <span className="text-gradient-gold">Tailor-Made Trip</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Fill out the booking enquiry form below. Our travel experts will craft a personalized day-by-day itinerary and get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Sidebar Contact Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Form Column (7 Cols) */}
          <div className="lg:col-span-7">
            <BookingForm initialDestination={selectedDestination} />
          </div>

          {/* Sidebar Info Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-400" />
                Direct Desk Contacts
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block text-sm">Bangalore Headquarters</strong>
                    <span className="text-slate-400">
                      541, 7th Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru - 560008
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block text-sm">Email Enquiries</strong>
                    <span className="text-slate-400">explore@travelunbounded.com</span>
                    <span className="block text-[11px] text-amber-400/80">Guaranteed response within 24h</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block text-sm">Working Hours</strong>
                    <span className="text-slate-400">Monday - Saturday: 9:00 AM - 7:30 PM (IST)</span>
                    <span className="block text-slate-400">24/7 Emergency Support for Active Travelers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Assurance Card */}
            <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-3">
              <div className="flex items-center gap-2 font-bold text-amber-400 text-sm">
                <ShieldCheck className="w-5 h-5" />
                The Travel Unbounded Guarantee
              </div>
              <p className="leading-relaxed">
                Your enquiry will be assigned directly to an experiential trip manager based in India or Kenya. No automated chatbots — only real travel experts who have traveled the routes.
              </p>
            </div>

            {/* Quick Office Directory */}
            <div className="glass-card rounded-3xl p-6 border border-slate-800 text-xs space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider text-slate-300">
                Regional Hubs
              </h4>
              <div className="space-y-2">
                <p className="text-slate-400">
                  <strong className="text-slate-200">Kochi Office:</strong> LR Towers, S Janatha Road, Palavivatton, Kochi
                </p>
                <p className="text-slate-400">
                  <strong className="text-slate-200">Nairobi Office:</strong> Westpark Towers, Muthithi Road, Nairobi, P.O. Box 6950
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-2">
            <h3 className="font-bold text-sm text-white">How quickly will I receive my itinerary?</h3>
            <p className="text-slate-400 leading-relaxed">
              Our travel specialists will reach out via email or phone within 24 hours of receiving your form submission to present your customized itinerary option.
            </p>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-2">
            <h3 className="font-bold text-sm text-white">Can I customize the hotel category or dates?</h3>
            <p className="text-slate-400 leading-relaxed">
              Yes, absolutely! Every package can be tailored to Standard, Deluxe, or Luxury stays, and travel dates can be adjusted to your exact schedule.
            </p>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-2">
            <h3 className="font-bold text-sm text-white">Are international flight tickets included?</h3>
            <p className="text-slate-400 leading-relaxed">
              We provide comprehensive ground arrangements, resort stays, safaris, and internal transfers. Flight ticketing can be added upon request.
            </p>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-2">
            <h3 className="font-bold text-sm text-white">Is my booking enquiry binding?</h3>
            <p className="text-slate-400 leading-relaxed">
              No, submitting an enquiry is 100% free and non-binding. It simply allows our travel planners to craft a personalized proposal for your review.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
