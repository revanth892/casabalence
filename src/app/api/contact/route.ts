import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    
    const newContact = await Contact.create(body);
    
    return NextResponse.json({ 
      success: true, 
      message: "Contact inquiry saved successfully",
      data: newContact 
    }, { status: 201 });

  } catch (error: any) {
    console.error("Database Error:", error);
    return NextResponse.json({ 
      success: false, 
      message: "Failed to save inquiry", 
      error: error.message 
    }, { status: 500 });
  }
}
