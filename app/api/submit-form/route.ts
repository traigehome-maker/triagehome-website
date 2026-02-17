import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, userType, services, service } = body;

    // Extract the primary fields
    const identifier = email || name;
    const serviceSelection = Array.isArray(services)
      ? services.join(", ")
      : service;

    // Validate input
    if (!identifier || !userType || !serviceSelection) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Set up Google Sheets authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n",
        ),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Append data to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:D", // Adjust sheet name if needed
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [new Date().toLocaleString(), identifier, userType, serviceSelection],
        ],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error: unknown) {
    console.error("Error submitting to Google Sheets:", error);
    return NextResponse.json(
      {
        error: "Failed to submit form",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
