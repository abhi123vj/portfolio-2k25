import { resend } from "@/lib/resend";
import ContactEmail from "../../emails/VerificationEmail";

export interface ApiResponse {
  success: boolean;
  message: string;
}

export async function sendContactEmail(
  username: string,
  email: string,
  subject: string,
  message: string
): Promise<ApiResponse> {
  try {
    const res = await resend.emails.send({
      from: "no-replay@4bh1.xyz",
      to: "4bh1ram@gmail.com",
      subject: `[Portfolio] New message from ${username}`,
      react: ContactEmail({ username, email, subject, body: message }),
    });
    console.log(res);
    return { success: true, message: "Verification email sent successfully." };
  } catch (emailError) {
    console.error("Error sending verification email:", emailError);
    return { success: false, message: "Failed to send verification email." };
  }
}
