'use client';

import { useState, useEffect } from 'react';
import { validateEnquiry } from '@/lib/validation';
import { 
  User, Mail, Phone, Calendar, Users, Hotel, Baby, 
  Send, Loader2, CheckCircle2, AlertTriangle, Sparkles, RefreshCw
} from 'lucide-react';

const COUNTRY_CODES = [
  { code: '+91', label: '🇮🇳 India (+91)' },
  { code: '+1', label: '🇺🇸 / 🇨🇦 USA/Canada (+1)' },
  { code: '+44', label: '🇬🇧 UK (+44)' },
  { code: '+254', label: '🇰🇪 Kenya (+254)' },
  { code: '+971', label: '🇦🇪 UAE (+971)' },
  { code: '+61', label: '🇦🇺 Australia (+61)' },
  { code: '+49', label: '🇩🇪 Germany (+49)' },
  { code: '+84', label: '🇻🇳 Vietnam (+84)' },
  { code: '+354', label: '🇮🇸 Iceland (+354)' },
  { code: '+94', label: '🇱🇰 Sri Lanka (+94)' },
];

export default function BookingForm({ initialDestination = '' }) {
  // Set default travel date to 7 days in the future
  const getTomorrowString = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getDefaultTravelDate = () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 14);
    return futureDate.toISOString().split('T')[0];
  };

  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '+91',
    contactNumber: '',
    email: '',
    dateOfTravel: getDefaultTravelDate(),
    numberOfPeople: 2,
    hotelCategory: 'Deluxe',
    numberOfChildren: 0,
    preferredDestination: initialDestination,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successResponse, setSuccessResponse] = useState(null);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    if (initialDestination) {
      setFormData((prev) => ({ ...prev, preferredDestination: initialDestination }));
    }
  }, [initialDestination]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for field being edited
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
    setApiError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(null);

    // 1. Client-side Validation
    const { isValid, errors: validationErrors } = validateEnquiry(formData);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    // 2. Submit to API
    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessResponse(data);
      } else {
        if (data.errors) {
          setErrors(data.errors);
        }
        setApiError(data.message || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setApiError('Network connection error. Please verify your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSuccessResponse(null);
    setApiError(null);
    setErrors({});
    setFormData({
      fullName: '',
      countryCode: '+91',
      contactNumber: '',
      email: '',
      dateOfTravel: getDefaultTravelDate(),
      numberOfPeople: 2,
      hotelCategory: 'Deluxe',
      numberOfChildren: 0,
      preferredDestination: '',
    });
  };

  // SUCCESS CONFIRMATION STATE (Custom UI, No native alert)
  if (successResponse) {
    return (
      <div className="glass-card rounded-3xl p-8 border border-emerald-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden animate-fadeIn">
        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mx-auto border border-emerald-500/40">
          <CheckCircle2 className="w-10 h-10 animate-bounce" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-black text-white">Enquiry Submitted Successfully!</h3>
          <p className="text-emerald-400 font-semibold text-sm">
            {successResponse.message}
          </p>
        </div>

        <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700/80 text-left space-y-3 text-xs text-slate-300">
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-400">Enquiry ID:</span>
            <span className="font-mono text-amber-400">{successResponse.data?.id || 'ENQ-CONFIRMED'}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-400">Lead Traveler:</span>
            <span className="font-semibold text-slate-100">{formData.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-400">Contact Email:</span>
            <span className="text-slate-100">{formData.email}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-400">Travel Date:</span>
            <span className="text-slate-100">{formData.dateOfTravel}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Party Size:</span>
            <span className="text-slate-100">{formData.numberOfPeople} Adults ({formData.numberOfChildren} Children) • {formData.hotelCategory}</span>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-amber-400 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            Book Your Custom Experience
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Fill out your preferences below & receive a tailored itinerary within 24 hours.
          </p>
        </div>
      </div>

      {/* Global API Error Alert */}
      {apiError && (
        <div className="p-4 rounded-2xl bg-red-950/60 border border-red-500/50 flex items-start gap-3 text-red-200 text-xs animate-shake">
          <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold">Submission Error</strong>
            <span>{apiError}</span>
          </div>
        </div>
      )}

      {/* Field 1: Full Name */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
          Full Name <span className="text-amber-400">*</span>
        </label>
        <div className="relative">
          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className={`w-full bg-slate-800/90 border ${
              errors.fullName ? 'border-red-500' : 'border-slate-700/80 focus:border-amber-400'
            } rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-400 focus:outline-none transition-colors`}
          />
        </div>
        {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
      </div>

      {/* Grid: Phone with Country Code & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Field 2: Country Code + Phone */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Contact Number <span className="text-amber-400">*</span>
          </label>
          <div className="flex gap-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="bg-slate-800 border border-slate-700 text-xs text-slate-200 rounded-xl px-2.5 py-2.5 focus:outline-none focus:border-amber-400 shrink-0"
            >
              {COUNTRY_CODES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code}
                </option>
              ))}
            </select>
            <div className="relative flex-grow">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="9876543210"
                className={`w-full bg-slate-800/90 border ${
                  errors.contactNumber ? 'border-red-500' : 'border-slate-700/80 focus:border-amber-400'
                } rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-400 focus:outline-none transition-colors`}
              />
            </div>
          </div>
          {errors.contactNumber && <p className="text-xs text-red-400 mt-1">{errors.contactNumber}</p>}
        </div>

        {/* Field 3: Email */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Email Address <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="rahul@example.com"
              className={`w-full bg-slate-800/90 border ${
                errors.email ? 'border-red-500' : 'border-slate-700/80 focus:border-amber-400'
              } rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-400 focus:outline-none transition-colors`}
            />
          </div>
          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Grid: Travel Date & Party Size */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Field 4: Date of Travel */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Date of Travel <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="date"
              name="dateOfTravel"
              min={getTomorrowString()}
              value={formData.dateOfTravel}
              onChange={handleChange}
              className={`w-full bg-slate-800/90 border ${
                errors.dateOfTravel ? 'border-red-500' : 'border-slate-700/80 focus:border-amber-400'
              } rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 focus:outline-none transition-colors`}
            />
          </div>
          {errors.dateOfTravel && <p className="text-xs text-red-400 mt-1">{errors.dateOfTravel}</p>}
        </div>

        {/* Field 5: Number of People */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Adult Travelers (1+) <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="number"
              name="numberOfPeople"
              min="1"
              max="50"
              value={formData.numberOfPeople}
              onChange={handleChange}
              className={`w-full bg-slate-800/90 border ${
                errors.numberOfPeople ? 'border-red-500' : 'border-slate-700/80 focus:border-amber-400'
              } rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 focus:outline-none transition-colors`}
            />
          </div>
          {errors.numberOfPeople && <p className="text-xs text-red-400 mt-1">{errors.numberOfPeople}</p>}
        </div>

        {/* Field 7: Children */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Children (0+)
          </label>
          <div className="relative">
            <Baby className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="number"
              name="numberOfChildren"
              min="0"
              max="20"
              value={formData.numberOfChildren}
              onChange={handleChange}
              className={`w-full bg-slate-800/90 border ${
                errors.numberOfChildren ? 'border-red-500' : 'border-slate-700/80 focus:border-amber-400'
              } rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 focus:outline-none transition-colors`}
            />
          </div>
          {errors.numberOfChildren && <p className="text-xs text-red-400 mt-1">{errors.numberOfChildren}</p>}
        </div>
      </div>

      {/* Field 6: Hotel Category Selector */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
          Hotel Stay Category <span className="text-amber-400">*</span>
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['Standard', 'Deluxe', 'Luxury'].map((cat) => {
            const isSelected = formData.hotelCategory === cat;
            return (
              <button
                type="button"
                key={cat}
                onClick={() => handleChange({ target: { name: 'hotelCategory', value: cat } })}
                className={`py-3 px-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                  isSelected
                    ? 'bg-amber-500/20 border-amber-400 text-amber-400 shadow-lg shadow-amber-500/10'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white'
                }`}
              >
                <Hotel className="w-4 h-4" />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
        {errors.hotelCategory && <p className="text-xs text-red-400 mt-1">{errors.hotelCategory}</p>}
      </div>

      {/* Submit Button with Loading State */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-wider bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center gap-2 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.01] active:scale-[0.99]'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Submit Booking Enquiry</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
