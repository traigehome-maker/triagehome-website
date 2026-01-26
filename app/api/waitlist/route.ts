import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const webAppUrl = process.env.NEXT_PUBLIC_WEB_APP_URL || process.env.WEB_APP_URL;
  
  console.log("Using Web App URL:", webAppUrl);

  try {
    if (!webAppUrl) {
      throw new Error("WEB_APP_URL is missing in environment variables");
    }

    const data = await req.json();
    console.log("Waitlist Form Data:", data);

    const res = await fetch(webAppUrl, {
      method: "POST",
      body: JSON.stringify(data),
      // Removing explicit JSON header can sometimes help Google handle the POST better
    });

    const contentType = res.headers.get("content-type");
    
    if (contentType && contentType.includes("application/json")) {
      const result = await res.json();
      console.log("Apps Script success response:", result);
      return NextResponse.json({ success: true, result });
    } else {
      const textResult = await res.text();
      console.warn("Apps Script returned non-JSON response. Status:", res.status);
      
      // Check if it's a Google Login page (indicates permissions issue)
      if (textResult.includes("Service Login") || textResult.includes("login.google.com")) {
        return NextResponse.json(
          { 
            success: false, 
            message: "Google Script Permissions Error: Make sure the Script is deployed as 'Anyone' (not 'Anyone with Google Account' or 'Only myself')." 
          },
          { status: 500 }
        );
      }

      // If it's a generic success text or 200 OK without JSON
      if (res.ok) {
        return NextResponse.json({ success: true, message: "Submitted successfully (Text response)" });
      }
      
      throw new Error(`Apps Script returned an HTML error (check script deployment/syntax)`);
    }

  } catch (err: any) {
    console.error("Error in /api/waitlist:", err);
    return NextResponse.json(
      { success: false, message: err.message || "Failed to submit waitlist" },
      { status: 500 }
    );
  }
}
