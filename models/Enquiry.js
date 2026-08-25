import mongoose from 'mongoose';

const EnquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      maxlength: [100, 'Full name cannot exceed 100 characters'],
    },
    countryCode: {
      type: String,
      required: [true, 'Country code is required'],
      default: '+91',
    },
    contactNumber: {
      type: String,
      required: [true, 'Contact number is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address'],
    },
    dateOfTravel: {
      type: Date,
      required: [true, 'Date of travel is required'],
    },
    numberOfPeople: {
      type: Number,
      required: [true, 'Number of people is required'],
      min: [1, 'Number of people must be at least 1'],
    },
    hotelCategory: {
      type: String,
      required: [true, 'Hotel category is required'],
      enum: {
        values: ['Standard', 'Deluxe', 'Luxury'],
        message: '{VALUE} is not a valid hotel category',
      },
      default: 'Deluxe',
    },
    numberOfChildren: {
      type: Number,
      default: 0,
      min: [0, 'Number of children cannot be negative'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false,
  }
);

// Reuse compiled model if it already exists, otherwise compile it
export default mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema);
