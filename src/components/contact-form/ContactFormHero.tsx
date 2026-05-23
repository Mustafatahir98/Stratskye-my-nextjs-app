import Image from "next/image";

const formFields = [
  {
    id: "name",
    label: "Name*",
    placeholder: "Enter you name please",
    type: "text",
  },
  {
    id: "company",
    label: "Company",
    placeholder: "Enter you company name",
    type: "text",
  },
  {
    id: "email",
    label: "Email*",
    placeholder: "Enter you email",
    type: "email",
  },
  {
    id: "phone",
    label: "Phone number",
    placeholder: "Enter your phone number",
    type: "tel",
  },
  {
    id: "budget",
    label: "Budget*",
    placeholder: "Please describe your budget",
    type: "text",
  },
  {
    id: "project-description",
    label: "Project description*",
    placeholder: "Please describe your project description",
    type: "text",
  },
];

export default function ContactFormHero() {
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
          margin-left: min(40%, 510px);
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
          margin-right: 0;
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
            margin-left: 0;
          }
          .contact-form {
            margin-right: 0;
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
            Contact us &amp; start the Conversation That{" "}
            <span>Changes Everything</span>
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
          Tell us about your business, your ambitions, and the roadblocks in the
          way, we&apos;ll bring the clarity, direction, and execution to help you grow.
        </p>

        <form className="contact-form">
          <div className="contact-form-grid">
            {formFields.map((field) => (
              <div
                className={`contact-field ${
                  field.id === "budget" || field.id === "project-description"
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
                  placeholder={field.placeholder}
                  autoComplete="off"
                />
              </div>
            ))}
          </div>

          <button className="contact-form-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
