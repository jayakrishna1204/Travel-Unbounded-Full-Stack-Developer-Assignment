import Link from 'next/link';
import { indiaDestinations, internationalDestinations } from '@/data/destinations';
import DestinationCard from '@/components/DestinationCard';
import { Sparkles, Compass, ShieldCheck, MapPin, Users, HeartHandshake, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12">
        {/* Background Image & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=90"
            alt="Travel Unbounded Experiential Travel"
            className="w-full h-full object-cover scale-105 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 py-20">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest animate-fadeIn">
            <Sparkles className="w-4 h-4" />
            India&apos;s Premier Experiential Travel Specialists
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
            Experiential Journeys Built Around <span className="text-gradient-gold">People & Nature</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed">
            From spotting the Big Five at dawn in the Masai Mara to cruising Ha Long Bay at sunset — we go where real stories are written, and we bring you along.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Compass className="w-5 h-5" />
              Plan Your Trip Now
            </Link>

            <Link
              href="/destinations"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore All Packages
            </Link>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-slate-800/80 max-w-4xl mx-auto">
            <div>
              <span className="text-3xl font-black text-amber-400 block">100%</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Personally Vetted</span>
            </div>
            <div>
              <span className="text-3xl font-black text-amber-400 block">3</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Global Offices</span>
            </div>
            <div>
              <span className="text-3xl font-black text-amber-400 block">10,000+</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Happy Travelers</span>
            </div>
            <div>
              <span className="text-3xl font-black text-amber-400 block">4.9 / 5</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Traveler Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* India Destinations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
              <MapPin className="w-4 h-4" />
              Incredible India
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Domestic <span className="text-gradient-gold">Experiential Packages</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Handpicked journeys across Kerala backwaters, Himalayan crests, Ladakh passes, and Andaman turquoise lagoons.
          </p>
        </div>

        {/* Responsive Grid for 5 India Destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {indiaDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>

      {/* International Destinations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">
              <Compass className="w-4 h-4" />
              Global Expeditions
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              International <span className="text-gradient-cyan">Destinations</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Raw nature and ancient cultural treasures across Kenya safaris, Vietnam karst bays, Serengeti plains, and Iceland northern lights.
          </p>
        </div>

        {/* Responsive Grid for 5 International Destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {internationalDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Feature Strip */}
      <section className="bg-slate-800/60 border-y border-slate-700/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-black text-white">Why Travel Unbounded?</h2>
            <p className="text-sm text-slate-400">
              We aren&apos;t travel agents selling catalog trips. We are experiential travelers who personally test and craft every journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Personally Vetted</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every resort, safari camp, and activity has been personally experienced by our core founding team.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Local Expert Guides</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Travel alongside seasoned naturalists and local guides who unlock hidden cultural and natural treasures.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Tailor-Made Itineraries</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                No cookie-cutter tours. Every itinerary is customized to match your pace, preferences, and group dynamics.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">24/7 Dedicated Support</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enjoy complete peace of mind with round-the-clock concierge support from our Bangalore, Kochi, & Nairobi offices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass-card p-8 sm:p-12 border border-amber-500/30 text-center space-y-6">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/15 via-slate-800/60 to-cyan-500/15 pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ready to Write Your Own Travel Story?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Contact our experiential trip planners today. Tell us where you want to go and we&apos;ll handle every single detail.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-xl shadow-amber-500/20 hover:scale-105 transition-all duration-300"
            >
              <span>Submit Booking Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
