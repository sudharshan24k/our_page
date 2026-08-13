"use server";

import { Resend } from "resend";

export async function submitContact(formData: FormData) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not configured.");
      return { success: false, error: "Server is not configured to send emails yet." };
    }

    const resend = new Resend(resendApiKey);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const website = formData.get("website") as string;
    const challenge = formData.get("challenge") as string;

    if (!name || !email || !challenge) {
      return { success: false, error: "Missing required fields." };
    }

    const { error } = await resend.emails.send({
      from: "EduraTech Contact Form <onboarding@resend.dev>",
      to: "hello@eduratech.com",
      subject: `New Lead: ${name} from ${website || "No Website"}`,
      html: `
        <h2>New Lead from EduraTech Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website || "N/A"}</p>
        <h3>Growth Challenge:</h3>
        <p>${challenge}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Action Error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
