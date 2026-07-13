import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Insert into Supabase
    const { error } = await supabase
      .from('inquiries')
      .insert([
        {
          full_name: data.name,
          email_address: data.email,
          project_type: data.type,
          message: data.message,
          status: 'New'
        }
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ success: false, message: 'Failed to process request.' }, { status: 500 });
  }
}
