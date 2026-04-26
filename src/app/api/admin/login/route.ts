import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();
    
    // Explicitly reading from process.env
    const validUser = process.env.ADMIN_USER;
    const validPass = process.env.ADMIN_PASS;

    // Server-side logging (visible to me in logs) to verify variables are loaded
    console.log("Login attempt for:", username);
    console.log("Env User Loaded:", !!validUser);
    console.log("Env Pass Loaded:", !!validPass);

    if (!validUser || !validPass) {
      return NextResponse.json({ 
        success: false, 
        message: "Server Configuration Error: Admin credentials not loaded." 
      }, { status: 500 });
    }

    if (username.trim() === validUser.trim() && password.trim() === validPass.trim()) {
      return NextResponse.json({ success: true, message: "Login successful" }, { status: 200 });
    } else {
      // Intentionally being a bit vague for security, but 401 is correct
      return NextResponse.json({ success: false, message: "Invalid username or password." }, { status: 401 });
    }

  } catch (error: any) {
    console.error("Login API Error:", error);
    return NextResponse.json({ success: false, message: "Internal server error during login." }, { status: 500 });
  }
}
