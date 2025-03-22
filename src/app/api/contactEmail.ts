// app/api/sendEmail/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type dataMailClient = {
  email: string;
  message: string;
  name: string;
};

export async function POST(req: Request) {
  try {
    const { email, message, name }: dataMailClient = await req.json();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transport.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name}`,
      text: message,
      replyTo: email,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
