"use server";

import { Resend } from "resend";

type SendContactEmailResult = {
  ok: boolean;
  message: string;
};

type SendNewsletterSignupEmailResult = {
  ok: boolean;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

const recipientEmail = "admin@stratskye.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const numberPattern = /^\d+$/;
const maxPhoneDigits = 15;
const minPhoneDigits = 10;
const maxBudgetDigits = 10;
const requiredFields = [
  ["name", "name"],
  ["company", "company"],
  ["position", "position"],
  ["industry", "industry"],
  ["email", "email"],
  ["phone", "phone number"],
  ["budget", "budget"],
  ["message", "project description"],
] as const;

function getField(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(
  formData: FormData
): Promise<SendContactEmailResult> {
  const name = getField(formData, "name");
  const email = getField(formData, "email");
  const message = getField(formData, "message");
  const company = getField(formData, "company");
  const position = getField(formData, "position");
  const industry = getField(formData, "industry");
  const phone = getField(formData, "phone");
  const budget = getField(formData, "budget");
  const budgetAmount = budget.startsWith("$") ? budget.slice(1) : budget;
  const formattedBudget = budgetAmount ? `$${budgetAmount}` : "";

  if (!process.env.RESEND_API_KEY) {
    return {
      ok: false,
      message: "Email service is not configured yet.",
    };
  }

  const missingField = requiredFields.find(
    ([fieldName]) => !getField(formData, fieldName)
  );

  if (missingField) {
    return {
      ok: false,
      message: `Please fill in your ${missingField[1]}.`,
    };
  }

  if (!emailPattern.test(email)) {
    return {
      ok: false,
      message: "Please enter a valid email address.",
    };
  }

  if (
    !numberPattern.test(phone) ||
    phone.length < minPhoneDigits ||
    phone.length > maxPhoneDigits
  ) {
    return {
      ok: false,
      message: `Please enter a valid phone number with ${minPhoneDigits} to ${maxPhoneDigits} digits.`,
    };
  }

  if (
    !numberPattern.test(budgetAmount) ||
    budgetAmount.length > maxBudgetDigits
  ) {
    return {
      ok: false,
      message: `Budget must contain numbers only and cannot be more than ${maxBudgetDigits} digits.`,
    };
  }

  const plainText = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : "",
    position ? `Position: ${position}` : "",
    industry ? `Industry: ${industry}` : "",
    phone ? `Phone: ${phone}` : "",
    formattedBudget ? `Budget: ${formattedBudget}` : "",
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");
    
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0D162F;">
      <h2 style="margin: 0 0 16px;">New Stratskye contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
      ${position ? `<p><strong>Position:</strong> ${escapeHtml(position)}</p>` : ""}
      ${industry ? `<p><strong>Industry:</strong> ${escapeHtml(industry)}</p>` : ""}
      ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
      ${formattedBudget ? `<p><strong>Budget:</strong> ${escapeHtml(formattedBudget)}</p>` : ""}
      <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Stratskye Website <admin@stratskye.com>",
      to: recipientEmail,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: plainText,
      html,
    });

    if (error) {
      return {
        ok: false,
        message: error.message || "Email could not be sent.",
      };
    }

    return {
      ok: true,
      message: "Thank you. Your message has been sent.",
    };
  } catch (error) {
    return {
      ok: false,
      message:
        error instanceof Error ? error.message : "Email could not be sent.",
    };
  }
}

export async function sendNewsletterSignupEmail(
  formData: FormData
): Promise<SendNewsletterSignupEmailResult> {
  const name = getField(formData, "name");
  const email = getField(formData, "email");

  if (!process.env.RESEND_API_KEY) {
    return {
      ok: false,
      message: "Email service is not configured yet.",
    };
  }

  if (!name) {
    return {
      ok: false,
      message: "Please enter your name.",
    };
  }

  if (!emailPattern.test(email)) {
    return {
      ok: false,
      message: "Please enter a valid email address.",
    };
  }

  const plainText = [
    "New Stratskye newsletter signup",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0D162F;">
      <h2 style="margin: 0 0 16px;">New Stratskye newsletter signup</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Stratskye Website <admin@stratskye.com>",
      to: recipientEmail,
      replyTo: email,
      subject: `New newsletter signup from ${name}`,
      text: plainText,
      html,
    });

    if (error) {
      return {
        ok: false,
        message: error.message || "Newsletter signup could not be sent.",
      };
    }

    return {
      ok: true,
      message: "Thank you. You are subscribed.",
    };
  } catch (error) {
    return {
      ok: false,
      message:
        error instanceof Error
          ? error.message
          : "Newsletter signup could not be sent.",
    };
  }
}
