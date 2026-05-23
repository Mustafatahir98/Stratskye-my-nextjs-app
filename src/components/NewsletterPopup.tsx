"use client";

import { type FormEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function NewsletterPopup() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpen(false);
  };

  if (!isMounted || !isOpen) {
    return null;
  }

  return createPortal(
    <div className="newsletter-popup" role="presentation" onMouseDown={() => setIsOpen(false)}>
      <style>{`
        .newsletter-popup {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(13, 16, 28, 0.26);
          backdrop-filter: blur(7px);
          -webkit-backdrop-filter: blur(7px);
        }
        .newsletter-dialog {
          width: min(94vw, 528px);
          border-radius: 22px;
          background: #f5f1ec;
          color: #11192e;
          padding: 22px;
          box-shadow: 0 22px 70px rgba(9, 14, 28, 0.22);
          font-family: "Google Sans Flex";
        }
        .newsletter-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 14px;
        }
        .newsletter-title {
          margin: 0;
          color: #121a31;
          font-size: clamp(30px, 5.6vw, 36px);
          font-weight: 500;
          line-height: 0.98;
          letter-spacing: -1.2px;
        }
        .newsletter-title span {
          color: #f26e35;
        }
        .newsletter-close {
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          margin-top: -2px;
          border: 0;
          border-radius: 50%;
          background: transparent;
          color: #121a31;
          cursor: pointer;
          transition: background 180ms ease, transform 180ms ease;
        }
        .newsletter-close:hover,
        .newsletter-close:focus-visible {
          background: rgba(18, 26, 49, 0.08);
          transform: scale(1.04);
          outline: none;
        }
        .newsletter-fields {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 28px 22px 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.86);
        }
        .newsletter-field {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .newsletter-field label {
          color: #8e96aa;
          font-size: 13px;
          font-weight: 500;
          line-height: 1;
        }
        .newsletter-field input {
          width: 100%;
          border: 0;
          border-bottom: 1px solid #c8ccd5;
          border-radius: 0;
          background: transparent;
          color: #121a31;
          padding: 5px 0 8px;
          font: inherit;
          font-size: 13px;
          outline: none;
        }
        .newsletter-field input::placeholder {
          color: #9aa1b1;
          opacity: 1;
        }
        .newsletter-field input:focus {
          border-bottom-color: #f26e35;
        }
        .newsletter-submit {
          width: 100%;
          min-height: 38px;
          margin-top: 14px;
          border: 1px solid rgba(18, 26, 49, 0.08);
          border-radius: 999px;
          background: #fff;
          color: #11192e;
          font: inherit;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(17, 25, 46, 0.08);
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }
        .newsletter-submit:hover,
        .newsletter-submit:focus-visible {
          transform: translateY(-1px);
          border-color: rgba(242, 110, 53, 0.34);
          box-shadow: 0 13px 24px rgba(17, 25, 46, 0.12);
          outline: none;
        }
        .newsletter-note {
          margin: 13px 0 0;
          color: #747c90;
          font-size: 12px;
          line-height: 1.45;
        }
        @media (max-width: 560px) {
          .newsletter-popup {
            padding: 14px;
          }
          .newsletter-dialog {
            padding: 18px;
            border-radius: 20px;
          }
          .newsletter-header {
            margin-bottom: 12px;
          }
          .newsletter-title {
            max-width: 340px;
          }
          .newsletter-fields {
            padding: 22px 18px 18px;
            border-radius: 16px;
          }
        }
      `}</style>

      <section
        className="newsletter-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="newsletter-header">
          <h2 id="newsletter-title" className="newsletter-title">
            Stay Ahead of <span>the Noise</span>
          </h2>
          <button className="newsletter-close" type="button" aria-label="Close newsletter popup" onClick={() => setIsOpen(false)}>
            <X size={19} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="newsletter-fields">
            <div className="newsletter-field">
              <label htmlFor="newsletter-name">Name*</label>
              <input id="newsletter-name" name="name" type="text" placeholder="Enter your Name" autoComplete="name" required />
            </div>
            <div className="newsletter-field">
              <label htmlFor="newsletter-email">Email*</label>
              <input id="newsletter-email" name="email" type="email" placeholder="Enter you Email" autoComplete="email" required />
            </div>
          </div>
          <button className="newsletter-submit" type="submit">
            Submit
          </button>
        </form>

        <p className="newsletter-note">Weekly growth ideas, zero clutter. Opt out whenever you want.</p>
      </section>
    </div>,
    document.body,
  );
}
