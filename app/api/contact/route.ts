import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create transporter
    // NOTE: You'll need to configure these environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASSWORD, // Your email password or app password
      },
    });

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || "triage_home@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
          <div style="background-color: #003D5B; color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h2 style="color: #003D5B; font-size: 18px; margin-bottom: 10px; border-bottom: 2px solid #B8860B; padding-bottom: 5px;">Contact Details</h2>
              
              <div style="margin: 15px 0;">
                <strong style="color: #003D5B; display: inline-block; width: 100px;">Name:</strong>
                <span style="color: #333;">${name}</span>
              </div>
              
              <div style="margin: 15px 0;">
                <strong style="color: #003D5B; display: inline-block; width: 100px;">Email:</strong>
                <a href="mailto:${email}" style="color: #B8860B; text-decoration: none;">${email}</a>
              </div>
              
              ${
                phone
                  ? `
              <div style="margin: 15px 0;">
                <strong style="color: #003D5B; display: inline-block; width: 100px;">Phone:</strong>
                <span style="color: #333;">${phone}</span>
              </div>
              `
                  : ""
              }
            </div>
            
            <div style="margin-top: 25px;">
              <h2 style="color: #003D5B; font-size: 18px; margin-bottom: 10px; border-bottom: 2px solid #B8860B; padding-bottom: 5px;">Message</h2>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; color: #333; line-height: 1.6;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This email was sent from the Triage Home contact form</p>
          </div>
        </div>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Triage Home",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
          <div style="background-color: #003D5B; color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Dear ${name},</p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for contacting Triage Home. We have received your message and our team will get back to you as soon as possible.
            </p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #B8860B;">
              <h3 style="color: #003D5B; margin-top: 0; font-size: 16px;">Your Message:</h3>
              <p style="color: #666; line-height: 1.6; margin: 0;">${message.replace(
                /\n/g,
                "<br>"
              )}</p>
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              In the meantime, feel free to explore our services or download our app.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="#" style="display: inline-block; background-color: #B8860B; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 0 10px;">Visit Our Website</a>
            </div>
            
            <p style="color: #666; font-size: 14px; line-height: 1.6; margin-top: 30px;">
              Best regards,<br>
              <strong style="color: #003D5B;">The Triage Home Team</strong>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>© 2026 Triage Home. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
