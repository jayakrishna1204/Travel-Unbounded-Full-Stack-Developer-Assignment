import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, ArrowRight, CheckCircle2, Tag } from 'lucide-react';

export default function DestinationCard({ destination }) {
  const { id, name, country, category, image, description, price, duration, highlights } = destination;

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <div className="group rounded-2xl glass-card overflow-hidden border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col h-full">
      {/* Image Container with Badges */}
      <div className="relative h-60 w-full overflow-hidden bg-slate-800">
        <img
          src={image}
          alt={`${name}, ${country}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md backdrop-blur-md ${
            category === 'india' 
              ? 'bg-amber-500/90 text-slate-950' 
              : 'bg-cyan-500/90 text-slate-950'
          }`}>
            {category === 'india' ? 'India Destination' : 'International'}
          </span>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-slate-900/80 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-slate-700/50">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>{duration}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Header & Location */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
              {name}
            </h3>
            <div className="flex items-center gap-1 text-xs text-slate-400 shrink-0 font-medium pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{country}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* Key Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="space-y-1.5 mb-5 border-t border-slate-800/80 pt-3">
              {highlights.slice(0, 2).map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/80 shrink-0" />
                  <span className="truncate">{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Pricing & CTA */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">
              Starting from
            </span>
            <span className="text-lg font-black text-amber-400">
              {formattedPrice}
            </span>
          </div>

          <Link
            href={`/contact?destination=${encodeURIComponent(name)}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-700/80 hover:bg-amber-500 text-slate-200 hover:text-slate-950 transition-all duration-200 group/btn"
          >
            <span>Enquire</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
