import "@/config/db";
import UserSchema from "@/schema/user.Schema";
import { NextResponse } from "next/server";
import { createAccessToken, createRefreshToken } from "@/config/token";

export const POST = async (request) => {
  try {
    const { name, email, password, mobile } = await request.json();

    if (!name || !email || !password || !mobile) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const user = await UserSchema.findOne({ email });
    if (user) {
      return NextResponse.json(
        { success: false, message: "Email already exists" },
        { status: 400 }
      );
    }

    const newUser = new UserSchema({ name, email, password, mobile });
    await newUser.save();

    const AccessToken = createAccessToken(newUser._id);
    const RefreshToken = createRefreshToken(newUser._id);

    const response = NextResponse.json(
      { success: true, message: "Signup Successfully" },
      { status: 200 }
    );

    response.cookies.set("AccessToken", AccessToken, {
      httpOnly: true,
      secure: false,
      maxAge: 3600,
      path: "/",
    });

    response.cookies.set("RefreshToken", RefreshToken, {
      httpOnly: true,
      secure: false,
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    return response;
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};
