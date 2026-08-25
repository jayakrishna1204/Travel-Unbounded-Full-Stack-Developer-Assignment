import OfficeCard from '@/components/OfficeCard';
import Link from 'next/link';
import { Compass, Sparkles, MapPin, Award, CheckCircle, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About Travel Unbounded | Experiential Travel Experts',
  description:
    'Learn about Travel Unbounded, India’s most trusted experiential travel team. Headquartered in Bangalore with offices in Kerala and Nairobi.',
};

export default function AboutPage() {
  const offices = [
    {
      city: 'Bengaluru',
      title: 'Global Headquarters',
      isHQ: true,
      addressLines: [
        '541, 7th Main Rd',
        'HAL 2nd Stage, Indiranagar',
        'Bengaluru – 560008',
      ],
      country: 'India',
      phone: '+91 98800 12345',
      email: 'bangalore@travelunbounded.com',
    },
    {
      city: 'Kochi',
      title: 'Kerala Regional Office',
      isHQ: false,
      addressLines: [
        'LR Towers, S Janatha Road',
        'Palavivatton',
        'Kochi – 682025',
      ],
      country: 'India',
      phone: '+91 484 2345678',
      email: 'kochi@travelunbounded.com',
    },
    {
      city: 'Nairobi',
      title: 'East Africa Regional Office',
      isHQ: false,
      addressLines: [
        'Westpark Towers, Muthithi Road',
        'Nairobi, P.O. Box 6950',
        'Postal Code 00100',
      ],
      country: 'Kenya',
      phone: '+254 700 000111',
      email: 'nairobi@travelunbounded.com',
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Banner */}
      <section className="relative py-24 bg-slate-800/60 border-b border-slate-700/80 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=80"
            alt="Masai Mara Safari"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Compass className="w-4 h-4" />
            Our Story & Legacy
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            India&apos;s Most Trusted <br />
            <span className="text-gradient-gold">Experiential Travel Experts</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
            Travel Unbounded was born from a simple belief — that the best journeys aren&apos;t sold from a catalogue. They&apos;re built around the people taking them.
          </p>
        </div>
      </section>

      {/* Main Story & Philosophy */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              The Travel Unbounded Difference
            </div>
            <h2 className="text-3xl font-black text-white leading-tight">
              We Don&apos;t Sell Packages. <br />
              <span className="text-gradient-gold">We Craft Lifetime Memories.</span>
            </h2>
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                Headquartered in Bangalore with regional offices in Kerala and Nairobi, we design trips that blend comfort, culture, and raw nature. Every destination, resort, and activity we recommend has been personally experienced by our team.
              </p>
              <p>
                From spotting the Big Five at dawn in the Masai Mara to cruising Ha Long Bay at sunset — we go where real stories are written, and we bring you along.
              </p>
              <p>
                Whether you&apos;re seeking a tranquil houseboat retreat in Alleppey, a high-octane motorbiking expedition across Khardung La, or an exclusive African safari lodge stay, our planners handle every single detail with precision.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden glass-card p-3 border border-slate-800 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80"
                alt="Kerala Backwaters Houseboat"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="p-4 bg-slate-800/90 rounded-xl mt-3 border border-slate-700/80 flex items-center gap-3">
                <Award className="w-8 h-8 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">Personally Vetted Guarantee</h4>
                  <p className="text-xs text-slate-400">100% of our recommended itineraries are field-tested.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <MapPin className="w-4 h-4" />
            Our Global Presence
          </div>
          <h2 className="text-3xl font-black text-white">Our Office Locations</h2>
          <p className="text-sm text-slate-400">
            With headquarters in Bangalore and regional hubs in Kochi and Nairobi, our team is always on the ground to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office) => (
            <OfficeCard key={office.city} office={office} />
          ))}
        </div>
      </section>

      {/* Why Choose Us - 4 Pillars */}
      <section className="bg-slate-800/40 border-y border-slate-700/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl font-black text-white">Core Commitments</h2>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
              The four pillars behind every Travel Unbounded expedition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-white">Personally Vetted</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We stay at the hotels, drive the safari routes, and taste the food before recommending them to you.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-white">Local Guides & Naturalists</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Unlock authentic cultural insights and wildlife tracking with indigenous experts who know every trail.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-white">Tailor-Made Flex Packages</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Customize every stay, vehicle type, and activity schedule around your family or group preferences.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-base font-bold text-white">24x7 Ground Concierge</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Real-time support throughout your tour ensures seamless travel with zero unexpected surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl font-black text-white">Ready to Design Your Next Expedition?</h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Reach out to our Bangalore, Kochi, or Nairobi office team to begin planning your tailor-made holiday today.
        </p>
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/20"
          >
            <span>Plan Your Journey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
