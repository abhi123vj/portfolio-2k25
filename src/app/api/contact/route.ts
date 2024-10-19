import { sendContactEmail } from "@/helpers/sendContactEmail";

export async function POST(request: Request) {
  try {
    const { username, email, subject, message } = await request.json();

    const emailResponse = await sendContactEmail(
      username,
      email,
      subject,
      message,
    );
    if (!emailResponse.success) {
      return Response.json(
        {
          success: false,
          message: emailResponse.message,
        },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "User registered successfully. Please verify your account.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return Response.json(
      {
        success: false,
        message: "Error registering user",
      },
      { status: 500 }
    );
  }
}
