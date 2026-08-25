# Travel Unbounded — Experiential Travel Website

## Overview

**Travel Unbounded** is a full-stack travel company website built with Next.js for India's Most Trusted Experiential Travel Experts. It showcases destination packages across India and international locations, tells the company story on the About page, and captures travel booking enquiries through a validated contact form that persists data to MongoDB and confirms submission back to the user.

The core workflow is **Form → Client Validation → POST /api/enquiry → Server Validation → Database → Success/Error UI**. Destination and pricing data are static dummy content in `data/destinations.js`; the database stores enquiry records only, each with a `createdAt` timestamp. The site is fully responsive, uses reusable components with client and server validation, and is deployed on Vercel with MongoDB Atlas.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Frontend**: React 18 & Tailwind CSS
- **Database**: MongoDB Atlas + Mongoose
- **Icons**: Lucide React

---

## Features

- **Curated Travel Packages**: Responsive showcases for India and International experiential packages.
- **Filterable Destinations**: Interactive category filtering (`All`, `India`, `International`).
- **Validated Booking Form**: Dual-layer (Client & Server) validation for clean payload processing.
- **MongoDB Persistence**: Connection-cached Mongoose singleton for serverless environments.
- **Global Presence**: Information cards for headquarters (Bangalore) and regional offices (Kochi, Nairobi).

---

## 📁 Directory Structure

```
Travel-Company/
├── app/
│   ├── about/          # About page & office cards
│   ├── api/enquiry/    # POST & GET enquiry API routes
│   ├── contact/        # Contact page & booking form
│   ├── destinations/   # Filterable destinations page
│   ├── globals.css     # Design tokens & glassmorphism utilities
│   ├── layout.js       # Root layout, navigation & footer
│   └── page.js         # Home page with hero & featured grids
├── components/         # Reusable UI components (Navbar, Footer, Cards, Form)
├── data/               # Static destination datasets
├── lib/                # Mongoose helper & validation logic
└── models/             # Mongoose Enquiry schema
```

---

## ⚙️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create a `.env.local` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📡 API Endpoints

### `POST /api/enquiry`
Submits a travel booking enquiry.

**Request Body:**
```json
{
  "fullName": "Jaya Krishna",
  "countryCode": "+91",
  "contactNumber": "9876543210",
  "email": "krishna@example.com",
  "dateOfTravel": "2026-10-15",
  "numberOfPeople": 2,
  "hotelCategory": "Deluxe",
  "numberOfChildren": 0
}
```

**Response Codes:**
- `201 Created`: Enquiry successfully saved in MongoDB.
- `400 Bad Request`: Payload validation failed.

### `GET /api/enquiry`
Retrieves recent booking enquiries sorted by creation date.

---

## Conclusion

This project prioritises correctness and clarity over extra features — delivering the complete enquiry flow from form to database on a live deployment.
It demonstrates full-stack skills across responsive frontend, reusable components, REST API design, dual-layer validation, and MongoDB persistence.
Built as a Full Stack Developer assignment submission for Travel Unbounded.
