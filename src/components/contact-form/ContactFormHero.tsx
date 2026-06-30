"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState, useTransition } from "react";
import Image from "next/image";
import { sendContactEmail } from "@/app/actions/email";

const formFields = [
  {
    id: "name",
    label: "Name",
    placeholder: "Enter your name",
    type: "text",
  },
  {
    id: "company",
    label: "Company",
    placeholder: "Enter your company name",
    type: "text",
  },
  {
    id: "position",
    label: "Position",
    placeholder: "Enter your position or role",
    type: "text",
  },
  {
    id: "industry",
    label: "Industry",
    placeholder: "Enter your industry",
    type: "text",
  },
  {
    id: "email",
    label: "Email Address",
    placeholder: "Enter your email address",
    type: "email",
  },
  {
    id: "phone",
    label: "Phone Number",
    placeholder: "Enter your phone number",
    type: "tel",
  },
  {
    id: "budget",
    label: "Budget",
    placeholder: "Enter your budget range",
    type: "text",
  },
  {
    id: "message",
    label: "Project Description",
    placeholder: "Describe your project",
    type: "text",
  },
] as const;

type ContactFieldId = (typeof formFields)[number]["id"];
type ContactFormValues = Record<ContactFieldId, string>;
type ContactFieldWarnings = Partial<Record<ContactFieldId, string>>;

const initialFormValues: ContactFormValues = {
  name: "",
  company: "",
  position: "",
  industry: "",
  email: "",
  phone: "",
  budget: "",
  message: "",
};

const numericFieldIds = new Set<ContactFieldId>(["phone", "budget"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const numberPattern = /^\d+$/;
const maxPhoneDigits = 15;
const minPhoneDigits = 10;
const maxBudgetDigits = 10;

function getFieldValidationMessage(
  fieldId: ContactFieldId,
  value: string
) {
  if (!value.trim()) {
    return "";
  }

  if (fieldId === "email" && !emailPattern.test(value)) {
    return "Enter a valid email address.";
  }

  if (fieldId === "phone") {
    if (!numberPattern.test(value)) {
      return "Phone number can contain numbers only.";
    }

    if (value.length < minPhoneDigits) {
      return `Phone number must be at least ${minPhoneDigits} digits.`;
    }

    if (value.length > maxPhoneDigits) {
      return `Phone number cannot be more than ${maxPhoneDigits} digits.`;
    }
  }

  if (fieldId === "budget") {
    if (!numberPattern.test(value)) {
      return "Budget can contain numbers only.";
    }

    if (value.length > maxBudgetDigits) {
      return `Budget cannot be more than ${maxBudgetDigits} digits.`;
    }
  }

  return "";
}

function getBudgetDisplayValue(value: string) {
  return value ? `$${value}` : "";
}

export default function ContactFormHero() {
  const [formValues, setFormValues] =
    useState<ContactFormValues>(initialFormValues);
  const [fieldWarnings, setFieldWarnings] = useState<ContactFieldWarnings>({});
  const [status, setStatus] = useState<{
    type: "success" | "error" | "idle";
    message: string;
  }>({ type: "idle", message: "" });
  const [isPending, startTransition] = useTransition();
  const isFormValid = useMemo(() => {
    const allFieldsFilled = formFields.every(
      (field) => formValues[field.id].trim().length > 0
    );
    const hasFieldWarnings = Object.values(fieldWarnings).some(Boolean);

    return (
      allFieldsFilled &&
      !hasFieldWarnings &&
      formFields.every(
        (field) => !getFieldValidationMessage(field.id, formValues[field.id])
      )
    );
  }, [fieldWarnings, formValues]);

  function handleInputChange(
    fieldId: ContactFieldId,
    event: ChangeEvent<HTMLInputElement>
  ) {
    const rawValue = event.target.value;
    let nextValue = rawValue;
    let warning = "";

    if (fieldId === "phone") {
      const digits = rawValue.replace(/\D/g, "");
      const hasNonDigits = /\D/.test(rawValue);
      const hasTooManyDigits = digits.length > maxPhoneDigits;

      nextValue = digits.slice(0, maxPhoneDigits);

      if (hasNonDigits) {
        warning = "Phone number can contain numbers only.";
      } else if (hasTooManyDigits) {
        warning = `Phone number cannot be more than ${maxPhoneDigits} digits.`;
      } else {
        warning = getFieldValidationMessage(fieldId, nextValue);
      }
    } else if (fieldId === "budget") {
      const valueWithoutLeadingDollar = rawValue.startsWith("$")
        ? rawValue.slice(1)
        : rawValue;
      const digits = rawValue.replace(/\D/g, "");
      const hasInvalidCharacters = /[^\d]/.test(valueWithoutLeadingDollar);
      const hasTooManyDigits = digits.length > maxBudgetDigits;

      nextValue = digits.slice(0, maxBudgetDigits);

      if (hasInvalidCharacters) {
        warning = "Budget can contain numbers only.";
      } else if (hasTooManyDigits) {
        warning = `Budget cannot be more than ${maxBudgetDigits} digits.`;
      } else {
        warning = getFieldValidationMessage(fieldId, nextValue);
      }
    } else {
      warning = getFieldValidationMessage(fieldId, nextValue);
    }

    setFormValues((currentValues) => ({
      ...currentValues,
      [fieldId]: nextValue,
    }));
    setFieldWarnings((currentWarnings) => ({
      ...currentWarnings,
      [fieldId]: warning,
    }));

    if (status.type === "error") {
      setStatus({ type: "idle", message: "" });
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isFormValid) {
      setStatus({
        type: "error",
        message:
          "Please fill all fields with a valid email, phone number, and budget.",
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus({ type: "idle", message: "" });

    startTransition(async () => {
      const result = await sendContactEmail(formData);

      if (result.ok) {
        form.reset();
        setFormValues(initialFormValues);
        setFieldWarnings({});
        setStatus({ type: "success", message: result.message });
        return;
      }

      setStatus({ type: "error", message: result.message });
    });
  }

  return (
    <section className="contact-form-hero" aria-labelledby="contact-form-title">
      <style>{`
        .contact-form-hero {
          --blue: #0D162F;
          --orange: #F26E35;
          min-height: 100vh;
          background: #f7f2ee;
          color: var(--blue);
          font-family: "Google Sans Flex";
          padding: clamp(112px, 9vw, 150px) clamp(28px, 4vw, 72px) clamp(82px, 10vw, 150px);
        }
        .contact-form-shell {
          width: min(100%, 1328px);
          margin: 0 auto;
        }
        .contact-form-top {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(230px, 38%);
          gap: clamp(28px, 5vw, 76px);
          align-items: start;
        }
        .contact-form-title {
          max-width: 980px;
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: 80px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -2.4px;
          font-optical-sizing: auto;
          font-variation-settings: "opsz" 96, "wdth" 104, "GRAD" 0, "ROND" 0;
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
        }
        .contact-form-title span {
          color: var(--orange);
          font-family: "Google Sans Flex";
          font-size: 80px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -2.4px;
        }
        .contact-form-scroll-note {
          width: min(100%, 430px);
          height: auto;
          justify-self: end;
          margin-top: 58px;
        }
        .contact-form-intro {
          max-width: 650px;
          margin-top: clamp(58px, 6vw, 86px);
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          color: rgba(13, 22, 47, 0.60);
          font-family: "Google Sans Flex";
          font-size: 28px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.84px;
        }
        .contact-form {
          width: min(100%, 1070px);
          margin-top: clamp(92px, 10vw, 150px);
          margin-left: auto;
          margin-right: auto;
        }
        .contact-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 54px clamp(64px, 7vw, 104px);
        }
        .contact-field {
          min-width: 0;
        }
        .contact-field-wide {
          grid-column: 1 / -1;
        }
        .contact-field label {
          display: block;
          color: rgba(13, 22, 47, 0.40);
          text-align: left;
          font-family: "Google Sans Flex";
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 90%;
          letter-spacing: -0.48px;
        }
        .contact-field input {
          width: 100%;
          margin-top: 30px;
          border: 0;
          border-bottom: 1px solid rgba(13, 22, 47, 0.20);
          border-radius: 0;
          background: transparent;
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 90%;
          letter-spacing: -0.48px;
          padding: 0 0 18px;
          outline: none;
        }
        .contact-field input::placeholder {
          color: rgba(13, 22, 47, 0.40);
          opacity: 1;
        }
        .contact-field input:focus {
          border-bottom-color: var(--orange);
        }
        .contact-field input[aria-invalid="true"] {
          border-bottom-color: #b42318;
        }
        .contact-field-error {
          margin-top: 12px;
          color: #b42318;
          font-family: "Google Sans Flex";
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 140%;
          letter-spacing: 0;
        }
        .contact-form-submit {
          width: 100%;
          min-height: 70px;
          margin-top: 78px;
          border: 1px solid rgba(13, 22, 47, 0.08);
          border-radius: 999px;
          background: #fffaf6;
          color: var(--blue);
          font-family: "Google Sans Flex";
          font-size: 26px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.36px;
          box-shadow: 0 14px 28px rgba(13, 22, 47, 0.08);
          cursor: pointer;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }
        .contact-form-submit:hover,
        .contact-form-submit:focus-visible {
          transform: translateY(-2px);
          border-color: rgba(242, 110, 53, 0.36);
          box-shadow: 0 18px 32px rgba(13, 22, 47, 0.12);
          outline: none;
        }
        .contact-form-submit:disabled {
          cursor: not-allowed;
          opacity: 0.68;
          transform: none;
        }
        .contact-form-status {
          margin-top: 22px;
          color: rgba(13, 22, 47, 0.68);
          font-family: "Google Sans Flex";
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 140%;
          letter-spacing: 0;
        }
        .contact-form-status[data-state="success"] {
          color: #167a3f;
        }
        .contact-form-status[data-state="error"] {
          color: #b42318;
        }
        @media (max-width: 980px) {
          .contact-form-top {
            grid-template-columns: 1fr;
          }
          .contact-form-scroll-note {
            justify-self: start;
            width: min(78vw, 370px);
            margin-top: 0;
          }
          .contact-form-title,
          .contact-form-title span {
            font-size: clamp(48px, 9vw, 72px);
            letter-spacing: -1.8px;
          }
          .contact-form-intro {
            margin-left: auto;
            margin-right: auto;
          }
          .contact-form {
            margin-right: auto;
          }
        }
        @media (max-width: 620px) {
          .contact-form-hero {
            padding: 104px 18px 82px;
          }
          .contact-form-title,
          .contact-form-title span {
            font-size: clamp(38px, 12vw, 52px);
            letter-spacing: -1.2px;
            line-height: 112%;
          }
          .contact-form-intro {
            margin-top: 38px;
            font-size: 22px;
            letter-spacing: -0.66px;
          }
          .contact-form {
            margin-top: 68px;
          }
          .contact-form-grid {
            grid-template-columns: 1fr;
            gap: 34px;
          }
          .contact-field label {
            font-size: 20px;
          }
          .contact-field input {
            margin-top: 18px;
            font-size: 18px;
          }
          .contact-form-submit {
            min-height: 58px;
            margin-top: 46px;
            font-size: 20px;
          }
        }
      `}</style>

      <div className="contact-form-shell">
        <div className="contact-form-top">
          <h1 id="contact-form-title" className="contact-form-title">
           Contact Us
          </h1>

          <Image
            className="contact-form-scroll-note"
            src="/images/Scroll to fill _).png"
            width={548}
            height={118}
            alt="Scroll to fill"
            priority
          />
        </div>

        <p className="contact-form-intro">
         Tell us what you are building, what is getting in the way, and we will look at it properly and show you what actually needs to change.

        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-grid">
            {formFields.map((field) => {
              const warning = fieldWarnings[field.id];

              return (
                <div
                  className={`contact-field ${
                    field.id === "budget" || field.id === "message"
                      ? "contact-field-wide"
                      : ""
                  }`}
                  key={field.id}
                >
                  <label htmlFor={field.id}>{field.label}</label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    value={
                      field.id === "budget"
                        ? getBudgetDisplayValue(formValues.budget)
                        : formValues[field.id]
                    }
                    onChange={(event) => handleInputChange(field.id, event)}
                    placeholder={field.placeholder}
                    autoComplete="off"
                    inputMode={
                      numericFieldIds.has(field.id) ? "numeric" : undefined
                    }
                    pattern={
                      field.id === "phone"
                        ? "[0-9]*"
                        : field.id === "budget"
                          ? "\\$?[0-9]*"
                          : undefined
                    }
                    title={
                      field.id === "phone"
                        ? "Use numbers only"
                        : field.id === "budget"
                          ? "Budget is formatted with $ and accepts numbers only"
                          : undefined
                    }
                    maxLength={
                      field.id === "phone"
                        ? maxPhoneDigits
                        : field.id === "budget"
                          ? maxBudgetDigits + 1
                          : undefined
                    }
                    aria-invalid={Boolean(warning)}
                    aria-describedby={warning ? `${field.id}-error` : undefined}
                    required
                  />
                  {warning ? (
                    <p className="contact-field-error" id={`${field.id}-error`}>
                      {warning}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>

          <button
            className="contact-form-submit"
            type="submit"
            disabled={isPending || !isFormValid}
          >
            {isPending ? "Sending..." : "Submit"}
          </button>
          {status.message ? (
            <p className="contact-form-status" data-state={status.type}>
              {status.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
