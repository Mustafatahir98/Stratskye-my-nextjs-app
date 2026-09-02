import type { Metadata } from "next";
import Link from "next/link";
import styles from "./case-study.module.css";

export const metadata: Metadata = {
  title: "Case Studies | Stratskye",
  description:
    "See how Stratskye builds connected B2B growth systems across websites, SEO, social media, and lead generation.",
  alternates: { canonical: "/case-study" },
};

const acctaxHighlights = [
  { value: "90+", label: "site speed score" },
  { value: "380K", label: "search impressions" },
  { value: "70K+", label: "LinkedIn impressions" },
];

const m1Highlights = [
  { value: "7.1M", label: "LinkedIn impressions" },
  { value: "35", label: "podcast appearances" },
  { value: "95", label: "site speed score" },
];

const mhnHighlights = [
  { value: "2", label: "sponsor partnerships" },
  { value: "792K", label: "search impressions" },
  { value: "104", label: "top 10 keywords" },
];

export default function CaseStudiesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.indexHero} aria-labelledby="case-studies-title">
        <div className={styles.shell}>
          <p className={styles.eyebrow}>Case studies</p>
          <div className={styles.indexIntro}>
            <h1 id="case-studies-title">
              The work, <span>documented.</span>
            </h1>
            <p>
              A closer look at the strategy, execution, and measurable outcomes
              behind the growth systems we build.
            </p>
          </div>

          <article className={styles.featureCard}>
            <Link
              href="/case-study/acctaxco"
              className={styles.featureVisual}
              aria-label="Read the Acctaxco case study"
            >
              <div className={styles.visualTopline}>
                <span>Ontario, Canada</span>
                <span>Active since 2025</span>
              </div>
              <div className={styles.visualMark} aria-hidden="true">AC</div>
              <div className={styles.visualMetrics}>
                {acctaxHighlights.map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </Link>

            <div className={styles.featureCopy}>
              <div>
                <p className={styles.caseNumber}>01 / Acctaxco</p>
                <h2>A full digital growth build for an Ontario accounting firm</h2>
                <p className={styles.featureDescription}>
                  Website, social media, search visibility, and outbound built
                  into one connected growth system.
                </p>
              </div>
              <div className={styles.cardFooter}>
                <ul aria-label="Services delivered">
                  <li>Website</li>
                  <li>Social media</li>
                  <li>SEO</li>
                  <li>Lead generation</li>
                </ul>
                <Link href="/case-study/acctaxco" className={styles.textLink}>
                  Read the case study <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </article>

          <article className={`${styles.featureCard} ${styles.featureCardSecond}`}>
            <Link
              href="/case-study/m1-performance"
              className={`${styles.featureVisual} ${styles.m1Visual}`}
              aria-label="Read the M1 Performance case study"
            >
              <div className={styles.visualTopline}>
                <span>Financial sector</span>
                <span>Active since 2024</span>
              </div>
              <div className={styles.visualMark} aria-hidden="true">M1</div>
              <div className={styles.visualMetrics}>
                {m1Highlights.map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </Link>

            <div className={styles.featureCopy}>
              <div>
                <p className={styles.caseNumber}>02 / M1 Performance</p>
                <h2>Building a founder&apos;s pipeline from the ground up</h2>
                <p className={styles.featureDescription}>
                  Lead generation, website infrastructure, and search visibility
                  built for a founder-led performance coaching practice.
                </p>
              </div>
              <div className={styles.cardFooter}>
                <ul aria-label="Services delivered">
                  <li>Lead generation</li>
                  <li>Website development</li>
                  <li>SEO</li>
                </ul>
                <Link href="/case-study/m1-performance" className={styles.textLink}>
                  Read the case study <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </article>

          <article className={`${styles.featureCard} ${styles.featureCardSecond}`}>
            <Link
              href="/case-study/milhousing-network"
              className={`${styles.featureVisual} ${styles.mhnVisual}`}
              aria-label="Read the MilHousing Network case study"
            >
              <div className={styles.visualTopline}>
                <span>Military relocation</span>
                <span>Active engagement</span>
              </div>
              <div className={styles.visualMark} aria-hidden="true">MHN</div>
              <div className={styles.visualMetrics}>
                {mhnHighlights.map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </Link>

            <div className={styles.featureCopy}>
              <div>
                <p className={styles.caseNumber}>03 / MilHousing Network</p>
                <h2>Turning cold outreach into sponsor revenue</h2>
                <p className={styles.featureDescription}>
                  Lead generation, website development, and SEO for a referral
                  platform serving military families during PCS moves.
                </p>
              </div>
              <div className={styles.cardFooter}>
                <ul aria-label="Services delivered">
                  <li>Lead generation</li>
                  <li>Web development</li>
                  <li>SEO</li>
                </ul>
                <Link href="/case-study/milhousing-network" className={styles.textLink}>
                  Read the case study <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.indexCta} aria-labelledby="case-study-cta">
        <div className={styles.shell}>
          <p className={styles.eyebrow}>Your growth system</p>
          <div className={styles.ctaRow}>
            <h2 id="case-study-cta">Ready to build what comes next?</h2>
            <Link href="/contact-form" className={styles.primaryLink}>
              Start a conversation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
