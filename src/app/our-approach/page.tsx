import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach - Stratskye",
  description:
    "How Stratskye researches, plans, executes, and reports on B2B technology marketing work.",
};

const introCopy = [
  "We do not start with services. We start with what the business needs.",
  "At Stratskye, every client relationship begins with understanding.",
  "Before we recommend a website, a campaign, a social media plan, or a retainer, we look at the business, the audience, the market, and the gaps that are holding growth back.",
  "Our job is not to make you do more marketing.",
  "Our job is to help you do the right marketing, in the right order, with a clear reason behind every move.",
];

const workSteps = [
  {
    label: "Step 1",
    title: "Research",
    copy: [
      "Before we speak, we do our homework.",
      "When a client comes to us, whether directly or through a referral, we review what is already available publicly. This includes the website, social media channels, Google search results, competitors, industry positioning, and any other digital touchpoints we can find.",
      "This gives us context before the discovery call, so the conversation starts from a place of understanding instead of guesswork.",
    ],
  },
  {
    label: "Step 2",
    title: "Discovery Call",
    copy: [
      "The discovery call helps us understand where the business is today and where it needs to go next.",
      "We look at your goals, audience, current marketing efforts, sales process, challenges, and internal capacity.",
      "This is where we identify what needs attention first. For some businesses, that may be the website. For others, it may be positioning, content, lead generation, social media, SEO, or a stronger marketing system.",
      "We do not assume the answer before we understand the problem.",
    ],
  },
  {
    label: "Step 3",
    title: "Proposal",
    copy: [
      "After discovery, we build a proposal around the areas where marketing can create the most value.",
      "If your website needs to be rebuilt, we recommend that. If the website is already in place but needs better structure, messaging, or conversion flow, we focus there.",
      "If social media matters for your audience, we identify the platforms where your ideal clients are actually present.",
      "We do not push every service on every client. We recommend what makes sense for the business, the audience, and the stage you are in.",
    ],
  },
];

const valueFramework = [
  {
    range: "First 30 Days",
    title: "Understand, Align, and Set the Foundation",
    copy: [
      "The first 30 days are focused on research, onboarding, strategy, and setup.",
      "We review your current marketing, understand your audience, align on priorities, and define the first set of actions.",
      "This phase creates the foundation for the work ahead.",
    ],
  },
  {
    range: "Days 31 to 60",
    title: "Execute, Test, and Build Momentum",
    copy: [
      "The next 30 days are focused on execution.",
      "This is where we begin implementing the approved priorities, whether that means improving the website, building content, refining messaging, setting up campaigns, improving visibility, or strengthening your marketing systems.",
      "We also start reviewing what is working and what needs adjustment.",
    ],
  },
  {
    range: "Days 61 to 90",
    title: "Measure, Improve, and Plan What Comes Next",
    copy: [
      "By 90 days, we want to see clearer direction, stronger execution, and measurable progress.",
      "We review the work completed, the results achieved, the gaps still present, and the next stage of growth.",
      "From there, we move into a retainer model based on the support your business needs going forward.",
    ],
  },
];

const clientExperience = [
  {
    title: "One Main Point of Contact",
    copy: [
      "Every client has one primary point of contact. This may be Noor, or one of our marketing managers.",
      "That person leads the relationship, manages communication, keeps the internal team aligned, and makes sure you always know what is happening.",
      "You do not have to speak to five different people to understand your marketing. You have one person who knows your business and keeps the work moving.",
    ],
  },
  {
    title: "Weekly Strategy Meetings",
    copy: [
      "We hold weekly performance meetings to review progress, priorities, and next steps.",
      "These meetings keep everyone aligned and give you regular visibility into the work being done.",
    ],
  },
  {
    title: "Weekly Progress Updates",
    copy: [
      "Along with weekly meetings, we send progress updates so you know what has been completed, what is currently in progress, and what is coming next.",
    ],
  },
  {
    title: "Monthly Reporting",
    copy: [
      "At the end of each month, we send a report that reviews the targets, progress, results, and recommendations for the next month.",
      "The goal is simple. You should always know what we are doing, why we are doing it, and how it is helping the business move forward.",
    ],
  },
];

const closingCopy = [
  "Our approach is structured, but not rigid.",
  "We use research, discovery, planning, execution, and reporting to make sure your marketing has direction.",
  "Whether you need a website, content, SEO, social media, lead generation, or ongoing marketing leadership, we focus on what creates the most value first.",
  "That is how we build marketing systems that are easier to understand, easier to manage, and easier to grow.",
];

function CopyBlock({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </>
  );
}

export default function OurApproachPage() {
  return (
    <main className="approach-page">
      <style>{`
        .approach-page {
          --approach-blue: #0d162f;
          --approach-orange: #f26e35;
          --approach-paper: #f7f2ee;
          --approach-ink: rgba(13, 22, 47, 0.72);
          --approach-muted: rgba(245, 247, 255, 0.68);
          --approach-line: rgba(13, 22, 47, 0.12);
          min-height: 100vh;
          background: var(--approach-paper);
          color: var(--approach-blue);
          font-family: "Google Sans Flex";
        }
        .approach-shell {
          width: min(100% - 40px, 1180px);
          margin: 0 auto;
        }
        .approach-hero {
          position: relative;
          overflow: hidden;
          padding: clamp(120px, 12vw, 168px) 0 clamp(72px, 8vw, 108px);
          background:
            radial-gradient(circle at 78% 28%, rgba(242, 110, 53, 0.24), transparent 28%),
            linear-gradient(135deg, #0d162f 0%, #101d3d 56%, #1c2c53 100%);
          color: #fff;
        }
        .approach-hero::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.32), transparent);
        }
        .approach-eyebrow {
          margin: 0 0 18px;
          color: #ff9565;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.2;
          text-transform: uppercase;
        }
        .approach-title {
          max-width: 820px;
          margin: 0;
          color: #fff;
          font-size: clamp(56px, 8vw, 112px);
          font-weight: 500;
          line-height: 0.98;
        }
        .approach-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(280px, 0.58fr);
          gap: clamp(36px, 7vw, 96px);
          align-items: end;
        }
        .approach-intro {
          display: grid;
          gap: 16px;
          color: var(--approach-muted);
          font-size: clamp(17px, 1.55vw, 21px);
          line-height: 1.5;
        }
        .approach-intro p {
          margin: 0;
        }
        .approach-section {
          padding: clamp(64px, 7vw, 104px) 0;
        }
        .approach-section-dark {
          background: var(--approach-blue);
          color: #fff;
        }
        .approach-section-head {
          display: grid;
          grid-template-columns: minmax(0, 0.42fr) minmax(0, 0.7fr);
          gap: clamp(28px, 6vw, 84px);
          align-items: start;
          margin-bottom: clamp(34px, 5vw, 64px);
        }
        .approach-kicker {
          margin: 0;
          color: var(--approach-orange);
          font-size: 12px;
          font-weight: 700;
          line-height: 1.2;
          text-transform: uppercase;
        }
        .approach-heading {
          margin: 0;
          font-size: clamp(34px, 4.8vw, 64px);
          font-weight: 500;
          line-height: 1.02;
        }
        .approach-lede {
          margin: 16px 0 0;
          color: var(--approach-ink);
          font-size: clamp(17px, 1.35vw, 20px);
          line-height: 1.55;
        }
        .approach-section-dark .approach-lede {
          color: var(--approach-muted);
        }
        .approach-step-list {
          display: grid;
          gap: 18px;
        }
        .approach-step {
          display: grid;
          grid-template-columns: minmax(160px, 0.34fr) minmax(0, 1fr);
          gap: clamp(22px, 4vw, 58px);
          padding: clamp(24px, 3vw, 34px) 0;
          border-top: 1px solid var(--approach-line);
        }
        .approach-step:last-child {
          border-bottom: 1px solid var(--approach-line);
        }
        .approach-step-label {
          display: block;
          margin-bottom: 12px;
          color: var(--approach-orange);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .approach-step h3 {
          margin: 0;
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 500;
          line-height: 1.05;
        }
        .approach-copy {
          display: grid;
          gap: 13px;
          color: var(--approach-ink);
          font-size: clamp(15px, 1.15vw, 17px);
          line-height: 1.56;
        }
        .approach-copy p {
          margin: 0;
        }
        .approach-section-dark .approach-copy {
          color: var(--approach-muted);
        }
        .approach-framework {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.14);
        }
        .approach-framework-card {
          min-height: 100%;
          padding: clamp(24px, 3vw, 34px);
          background: var(--approach-blue);
        }
        .approach-framework-card span {
          display: inline-flex;
          margin-bottom: 22px;
          color: #ff9565;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .approach-framework-card h3 {
          margin: 0 0 18px;
          color: #fff;
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 500;
          line-height: 1.08;
        }
        .approach-experience-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(18px, 2vw, 24px);
        }
        .approach-experience-item {
          padding: clamp(24px, 3vw, 34px);
          border: 1px solid var(--approach-line);
          border-radius: 8px;
          background: rgba(255,255,255,0.42);
        }
        .approach-experience-item h3 {
          margin: 0 0 16px;
          font-size: clamp(23px, 2.4vw, 32px);
          font-weight: 500;
          line-height: 1.08;
        }
        .approach-closing {
          padding: clamp(72px, 9vw, 128px) 0;
          background:
            radial-gradient(circle at 22% 18%, rgba(242, 110, 53, 0.24), transparent 30%),
            #101a34;
          color: #fff;
        }
        .approach-closing-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.55fr) minmax(0, 0.72fr);
          gap: clamp(30px, 7vw, 92px);
          align-items: start;
        }
        .approach-closing h2 {
          margin: 0;
          font-size: clamp(36px, 5vw, 72px);
          font-weight: 500;
          line-height: 1;
        }
        .approach-closing .approach-copy {
          color: rgba(245, 247, 255, 0.76);
        }
        @media (max-width: 860px) {
          .approach-shell {
            width: min(100% - 32px, 1180px);
          }
          .approach-hero-grid,
          .approach-section-head,
          .approach-step,
          .approach-closing-grid {
            grid-template-columns: 1fr;
          }
          .approach-framework,
          .approach-experience-grid {
            grid-template-columns: 1fr;
          }
          .approach-hero {
            padding-top: 112px;
          }
          .approach-title {
            font-size: clamp(48px, 16vw, 78px);
          }
          .approach-step {
            gap: 16px;
          }
        }
      `}</style>

      <section className="approach-hero">
        <div className="approach-shell approach-hero-grid">
          <div>
            <p className="approach-eyebrow">Our Approach</p>
            <h1 className="approach-title">We start with what the business needs.</h1>
          </div>
          <div className="approach-intro">
            <CopyBlock items={introCopy} />
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="approach-shell">
          <div className="approach-section-head">
            <p className="approach-kicker">How We Work</p>
            <div>
              <h2 className="approach-heading">Research before recommendation.</h2>
              <p className="approach-lede">
                We do not assume the solution before we understand the business, the market, and the gaps.
              </p>
            </div>
          </div>

          <div className="approach-step-list">
            {workSteps.map((step) => (
              <article className="approach-step" key={step.title}>
                <div>
                  <span className="approach-step-label">{step.label}</span>
                  <h3>{step.title}</h3>
                </div>
                <div className="approach-copy">
                  <CopyBlock items={step.copy} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section approach-section-dark">
        <div className="approach-shell">
          <div className="approach-section-head">
            <p className="approach-kicker">30, 60, 90 Days</p>
            <div>
              <h2 className="approach-heading">The Stratskye 30, 60, 90-Day Value Framework.</h2>
              <p className="approach-lede">
                Every client starts with a clear roadmap for what happens first, what progress should look like, and how early value will be measured.
              </p>
            </div>
          </div>

          <div className="approach-framework">
            {valueFramework.map((item) => (
              <article className="approach-framework-card" key={item.range}>
                <span>{item.range}</span>
                <h3>{item.title}</h3>
                <div className="approach-copy">
                  <CopyBlock items={item.copy} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="approach-shell">
          <div className="approach-section-head">
            <p className="approach-kicker">A Clear Client Experience</p>
            <div>
              <h2 className="approach-heading">You always know what is happening and why.</h2>
              <p className="approach-lede">
                Communication is structured around clarity, ownership, and regular visibility into the work.
              </p>
            </div>
          </div>

          <div className="approach-experience-grid">
            {clientExperience.map((item) => (
              <article className="approach-experience-item" key={item.title}>
                <h3>{item.title}</h3>
                <div className="approach-copy">
                  <CopyBlock items={item.copy} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-closing">
        <div className="approach-shell approach-closing-grid">
          <div>
            <p className="approach-kicker">Built Around the Right Work</p>
            <h2>Not more work.</h2>
          </div>
          <div className="approach-copy">
            <CopyBlock items={closingCopy} />
          </div>
        </div>
      </section>
    </main>
  );
}
