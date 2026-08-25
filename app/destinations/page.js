'use client';

import { useState } from 'react';
import { destinations } from '@/data/destinations';
import DestinationCard from '@/components/DestinationCard';
import { Compass, MapPin, Globe, Sparkles, Filter } from 'lucide-react';

export default function DestinationsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredDestinations = destinations.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Banner */}
      <section className="relative py-16 bg-slate-800/60 border-b border-slate-700/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Compass className="w-4 h-4" />
            Curated Experiences
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Explore All <span className="text-gradient-gold">Travel Destinations</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Discover our handpicked collection of domestic and international experiential journeys. Each package is fully customizable.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              All Destinations ({destinations.length})
            </button>

            <button
              onClick={() => setActiveTab('india')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'india'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              India (5)
            </button>

            <button
              onClick={() => setActiveTab('international')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'international'
                  ? 'bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20'
                  : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              International (5)
            </button>
          </div>
        </div>
      </section>

      {/* Destination Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>
    </div>
  );
}
