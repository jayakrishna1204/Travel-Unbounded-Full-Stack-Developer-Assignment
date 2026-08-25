export function validateEnquiry(data) {
  const errors = {};

  // 1. Full Name Validation
  if (!data.fullName || typeof data.fullName !== 'string' || !data.fullName.trim()) {
    errors.fullName = 'Full name is required';
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters';
  }

  // 2. Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || typeof data.email !== 'string' || !data.email.trim()) {
    errors.email = 'Email address is required';
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address (e.g. user@example.com)';
  }

  // 3. Contact Number Validation
  const phoneDigitsOnly = (data.contactNumber || '').replace(/\D/g, '');
  if (!data.contactNumber || typeof data.contactNumber !== 'string' || !data.contactNumber.trim()) {
    errors.contactNumber = 'Contact number is required';
  } else if (phoneDigitsOnly.length < 7 || phoneDigitsOnly.length > 15) {
    errors.contactNumber = 'Please enter a valid contact number (7-15 digits)';
  }

  // 4. Date of Travel Validation (Must be a future date)
  if (!data.dateOfTravel) {
    errors.dateOfTravel = 'Date of travel is required';
  } else {
    const travelDate = new Date(data.dateOfTravel);
    const today = new Date();
    // Reset time components for clear date-only comparison
    today.setHours(0, 0, 0, 0);

    if (isNaN(travelDate.getTime())) {
      errors.dateOfTravel = 'Invalid date format';
    } else if (travelDate <= today) {
      errors.dateOfTravel = 'Travel date must be in the future';
    }
  }

  // 5. Number of People Validation
  const people = Number(data.numberOfPeople);
  if (data.numberOfPeople === undefined || data.numberOfPeople === null || data.numberOfPeople === '') {
    errors.numberOfPeople = 'Number of people is required';
  } else if (isNaN(people) || people < 1) {
    errors.numberOfPeople = 'Number of people must be at least 1';
  }

  // 6. Number of Children Validation
  const children = Number(data.numberOfChildren);
  if (data.numberOfChildren !== undefined && data.numberOfChildren !== null && data.numberOfChildren !== '') {
    if (isNaN(children) || children < 0) {
      errors.numberOfChildren = 'Number of children cannot be negative';
    }
  }

  // 7. Hotel Category Validation
  const allowedCategories = ['Standard', 'Deluxe', 'Luxury'];
  if (!data.hotelCategory || !allowedCategories.includes(data.hotelCategory)) {
    errors.hotelCategory = 'Please select a valid hotel category (Standard, Deluxe, or Luxury)';
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
  };
}
