import { MapPin, Building2, Phone, Mail } from 'lucide-react';

export default function OfficeCard({ office }) {
  const { city, title, addressLines, country, isHQ, phone, email } = office;

  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 relative group overflow-hidden">
      {/* HQ Badge if Applicable */}
      {isHQ && (
        <span className="absolute top-4 right-4 bg-amber-500/20 text-amber-400 border border-amber-500/40 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
          Headquarters
        </span>
      )}

      {/* Office Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
          <Building2 className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-lg font-extrabold text-white group-hover:text-amber-400 transition-colors">
            {city}
          </h4>
          <span className="text-xs text-slate-400 font-medium">{title}</span>
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2 mb-6">
        <div className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
          <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            {addressLines.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
            <span className="block font-semibold text-slate-200 mt-1">{country}</span>
          </div>
        </div>
      </div>

      {/* Contact Metadata */}
      {(phone || email) && (
        <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
          {phone && (
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{phone}</span>
            </div>
          )}
          {email && (
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{email}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
