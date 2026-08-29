import { NextResponse } from "next/server";
import { Resend } from "resend";

// Where enquiries are delivered
const TO_EMAIL = process.env.CONTACT_EMAIL || "hello@connectcabsindia.com";
// Verified sender. Until connectcabsindia.com is verified in Resend,
// keep this as Resend's shared sender: "ConnectCabs <onboarding@resend.dev>"
const FROM_EMAIL = process.env.CONTACT_FROM || "ConnectCabs <onboarding@resend.dev>";

function esc(v: unknown) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      website, // honeypot
      fullName,
      company,
      email,
      phone,
      city,
      requirement,
      passengers,
      serviceDate,
      message,
    } = body ?? {};

    // Honeypot: pretend success, send nothing
    if (website) {
      return NextResponse.json({ ok: true });
    }

    // Required-field validation
    if (!fullName || !company || !email || !phone || !city || !requirement) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured yet. Please try WhatsApp or email us directly." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const html = `
      <div style="font-family:Arial,sans-serif;font-size:14px;color:#0B1F3A;">
        <h2 style="color:#0B3B78;margin:0 0 12px;">New Enquiry — ConnectCabs</h2>
        <table style="border-collapse:collapse;">
          <tr><td style="padding:4px 12px 4px 0;color:#64748B;">Name</td><td style="padding:4px 0;"><strong>${esc(fullName)}</strong></td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#64748B;">Company</td><td style="padding:4px 0;">${esc(company)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#64748B;">Email</td><td style="padding:4px 0;">${esc(email)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#64748B;">Phone</td><td style="padding:4px 0;">${esc(phone)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#64748B;">City</td><td style="padding:4px 0;">${esc(city)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#64748B;">Requirement</td><td style="padding:4px 0;">${esc(requirement)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#64748B;">Passengers</td><td style="padding:4px 0;">${esc(passengers) || "—"}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#64748B;">Service date</td><td style="padding:4px 0;">${esc(serviceDate) || "—"}</td></tr>
        </table>
        <p style="margin:16px 0 4px;color:#64748B;">Message</p>
        <p style="margin:0;white-space:pre-wrap;">${esc(message) || "—"}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: String(email),
      subject: `New enquiry: ${esc(requirement)} — ${esc(company)}`,
      html,
    });

    if (error) {
      return NextResponse.json({ error: "Could not send your enquiry. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
