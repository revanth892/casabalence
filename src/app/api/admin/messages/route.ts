import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function GET() {
  try {
    await connectDB();
    // Fetch messages sorted by newest first
    const messages = await Contact.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ 
      success: true, 
      data: messages 
    }, { status: 200 });

  } catch (error: any) {
    console.error("Database Error:", error);
    return NextResponse.json({ 
      success: false, 
      message: "Failed to fetch messages", 
      error: error.message 
    }, { status: 500 });
  }
}
