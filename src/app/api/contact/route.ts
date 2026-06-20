import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // In a real application, you would send an email using SendGrid/Resend
    // or save the contact to a database.
    console.log("Contact form submission received:", data);
    
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
  }
}
