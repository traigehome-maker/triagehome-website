# Contact Page Setup Guide

## Overview
The contact page includes two main sections:
1. **Contact Form** - A fully functional form with validation and email integration
2. **Contact Info** - Information about different service categories

## Components Created

### 1. ContactForm Component
**Location:** `components/sections/contact/ContactForm.tsx`

**Features:**
- ✅ Form validation (name, email, message required)
- ✅ Email format validation
- ✅ Loading states during submission
- ✅ Success/error messages
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations with Framer Motion
- ✅ Accessible form inputs with proper error handling

**Fields:**
- Name (required)
- Email (required)
- Phone (optional)
- Message (required)

### 2. ContactInfo Component
**Location:** `components/sections/contact/ContactInfo.tsx`

**Features:**
- ✅ Three service categories displayed
- ✅ Responsive grid layout
- ✅ Hover animations
- ✅ Email links and app download links
- ✅ Staggered animations on scroll

**Service Categories:**
1. VIP Concierge Service
2. Standard Nursing Services
3. Hospital & Corporate Partnerships

### 3. API Route
**Location:** `app/api/contact/route.ts`

**Features:**
- ✅ Server-side validation
- ✅ Sends email to admin (triage_home@gmail.com)
- ✅ Sends confirmation email to user
- ✅ Beautiful HTML email templates
- ✅ Error handling and logging
- ✅ Uses Nodemailer for email delivery

## Setup Instructions

### Step 1: Install Dependencies
The required packages have already been installed:
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### Step 2: Configure Environment Variables

1. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

2. Update the `.env.local` file with your email credentials:

```env
# For Gmail (recommended)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
ADMIN_EMAIL=triage_home@gmail.com
```

### Step 3: Gmail App Password Setup (if using Gmail)

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password
6. Use this password in your `.env.local` file as `EMAIL_PASSWORD`

**Important:** Never use your regular Gmail password. Always use an App Password.

### Step 4: Alternative Email Services

If you're not using Gmail, update the transporter configuration in `app/api/contact/route.ts`:

#### For Outlook/Hotmail:
```typescript
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

#### For Custom SMTP:
```typescript
const transporter = nodemailer.createTransport({
  host: "smtp.your-email-provider.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

### Step 5: Test the Contact Form

1. Start the development server:
```bash
npm run dev
```

2. Navigate to `/contact` page
3. Fill out the form and submit
4. Check both:
   - Admin email (triage_home@gmail.com)
   - User's email (the one entered in the form)

## Customization

### Updating Email Templates

The email templates are in `app/api/contact/route.ts`. You can customize:
- Colors (currently using #003D5B and #B8860B)
- Layout and styling
- Content and messaging
- Logo/branding (add image URLs)

### Updating Contact Information

Edit `components/sections/contact/ContactInfo.tsx` to update:
- Service categories
- Email addresses
- App download links
- Descriptions

### Styling Customization

Both components use Tailwind CSS. Key colors used:
- Primary: `#003D5B` (dark blue)
- Accent: `#B8860B` (gold)
- Background: `bg-white`, `bg-gray-50`

## Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

All components are fully responsive across these breakpoints.

## Form Validation Rules

1. **Name:** Required, must not be empty
2. **Email:** Required, must be valid email format
3. **Phone:** Optional
4. **Message:** Required, must not be empty

## Security Considerations

1. ✅ Server-side validation implemented
2. ✅ Environment variables for sensitive data
3. ✅ Email format validation
4. ✅ Error messages don't expose sensitive information
5. ⚠️ Add rate limiting for production (recommended)
6. ⚠️ Add CAPTCHA for spam prevention (recommended)

## Troubleshooting

### Email not sending?
1. Check `.env.local` file exists and has correct values
2. Verify Gmail App Password is correct
3. Check console for error messages
4. Ensure 2-Step Verification is enabled for Gmail

### Form not submitting?
1. Check browser console for errors
2. Verify API route is accessible at `/api/contact`
3. Check network tab for failed requests

### Styling issues?
1. Ensure Tailwind CSS is properly configured
2. Check that all imports are correct
3. Verify Framer Motion is installed

## Production Deployment

Before deploying to production:

1. Add environment variables to your hosting platform (Vercel, Netlify, etc.)
2. Consider adding rate limiting
3. Add CAPTCHA (Google reCAPTCHA recommended)
4. Test email delivery thoroughly
5. Monitor email delivery logs

## Support

For issues or questions:
- Check the console for error messages
- Review the API route logs
- Verify email configuration
- Test with a simple email first

## License

This component is part of the Triage Home website project.
