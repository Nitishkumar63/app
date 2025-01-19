import "@/config/db";
import UserSchema from "@/schema/user.Schema";
import { NextResponse } from "next/server";
import { createAccessToken, createRefreshToken } from "@/config/token";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  try {
    // Parse the request body
    const { email, password } = await request.json();

    // Validate request fields
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and Password are required" },
        { status: 400 }
      );
    }

    // Find the user by email
    const user = await UserSchema.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Compare provided password with hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate Access and Refresh Tokens
    const AccessToken = createAccessToken(user._id);
    const RefreshToken = createRefreshToken(user._id);

    // Return success response with tokens as cookies
    const response = NextResponse.json(
      { success: true, message: "Login successful" },
      { status: 200 }
    );

    response.cookies.set("AccessToken", AccessToken, {
      httpOnly: true,
      secure: false, // Set to `true` in production
      maxAge: 3600, // 1 hour
      path: "/",
    });

    response.cookies.set("RefreshToken", RefreshToken, {
      httpOnly: true,
      secure: false, // Set to `true` in production
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: "/",
    });

    return response;
  } catch (err) {
    // Catch and handle errors
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};
