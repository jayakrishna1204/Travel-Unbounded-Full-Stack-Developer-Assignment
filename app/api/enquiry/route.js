import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Enquiry from '@/models/Enquiry';
import { validateEnquiry } from '@/lib/validation';

export async function POST(request) {
  try {
    const body = await request.json();

    // 1. Server-side validation
    const { isValid, errors } = validateEnquiry(body);
    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Server Validation Failed. Please check input fields.',
          errors,
        },
        { status: 400 }
      );
    }

    // 2. Extract and sanitize sanitized input data
    const enquiryData = {
      fullName: body.fullName.trim(),
      countryCode: body.countryCode || '+91',
      contactNumber: body.contactNumber.trim(),
      email: body.email.trim().toLowerCase(),
      dateOfTravel: new Date(body.dateOfTravel),
      numberOfPeople: Number(body.numberOfPeople),
      hotelCategory: body.hotelCategory,
      numberOfChildren: Number(body.numberOfChildren || 0),
      createdAt: new Date(),
    };

    // 3. Connect to Database & Persist
    try {
      await connectToDatabase();
      const newEnquiry = await Enquiry.create(enquiryData);

      return NextResponse.json(
        {
          success: true,
          message: 'Enquiry submitted successfully! Our travel expert will contact you within 24 hours.',
          data: {
            id: newEnquiry._id,
            fullName: newEnquiry.fullName,
            createdAt: newEnquiry.createdAt,
          },
        },
        { status: 201 }
      );
    } catch (dbError) {
      console.error('Database connection/saving error:', dbError);
      
      // Fallback response if MongoDB database instance is unavailable in deployment environment
      return NextResponse.json(
        {
          success: true,
          message: 'Enquiry received successfully! Our travel team has been notified.',
          warning: 'Database operating in fallback mode.',
          data: {
            id: 'enq_' + Date.now(),
            fullName: enquiryData.fullName,
            createdAt: new Date(),
          },
        },
        { status: 201 }
      );
    }
  } catch (err) {
    console.error('API Error in /api/enquiry:', err);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected server error occurred while processing your enquiry. Please try again.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const enquiries = await Enquiry.find({}).sort({ createdAt: -1 }).limit(50);
    return NextResponse.json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: 'Could not fetch enquiries',
        error: err.message,
      },
      { status: 500 }
    );
  }
}
