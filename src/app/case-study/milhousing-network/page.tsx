import type { Metadata } from "next";
import Link from "next/link";
import styles from "../case-study.module.css";

export const metadata: Metadata = {
  title: "MilHousing Network Sponsor Growth Case Study | Stratskye",
  description:
    "How Stratskye helped MilHousing Network build a sponsor-acquisition engine, rebuild its military relocation website, and expand search visibility.",
  alternates: { canonical: "/case-study/milhousing-network" },
};

const startingMetrics = [
  { value: "0", label: "Confirmed sponsor partnerships" },
  { value: "Near 0", label: "Outreach response rate" },
  { value: "276", label: "Starting search clicks" },
  { value: "36.9", label: "Starting average position" },
];

const outreachWork = [
  [
    "Sponsor-fit research",
    "Companies were qualified through existing military discounts, loan products, relocation benefits, or stated support policies.",
  ],
  [
    "Decision-maker targeting",
    "Prospecting shifted from marketing managers and founders to partnership, sponsorship, and growth leaders with authority over referral relationships.",
  ],
  [
    "Verified contact discovery",
    "Lists were built and verified by company type, role, and geography before outreach began.",
  ],
  [
    "Multi-step sequences",
    "Structured follow-ups replaced single-touch sends, with follow-up messages consistently outperforming first-contact emails.",
  ],
];

const websiteWork = [
  [
    "Dynamic military-base tool",
    "Dozens of disconnected static pages became one interface that loads base-specific information without a full page refresh.",
  ],
  [
    "Instant resource guides",
    "Visitors now exchange an email for an immediate on-site download instead of receiving credentials for a separate platform.",
  ],
  [
    "Mortgage calculator",
    "Military families can model their own numbers without leaving the platform.",
  ],
  [
    "Location-aware content",
    "Mapping data and market-report documents were consolidated into the same unified experience.",
  ],
  [
    "Behavior visibility",
    "Session recording gives the team ongoing insight into how real visitors navigate and use the site.",
  ],
  [
    "Security hardening",
    "Standard admin-access protections were applied across the rebuilt platform.",
  ],
];

const seoMetrics = [
  ["Clicks", "276", "1,990", "+1,714"],
  ["Impressions", "85,600", "792,000", "+706,400"],
  ["Average position", "36.9", "10.3", "+26.6"],
  ["Top 10 ranking keywords", "16", "104", "+88"],
];

const crawlMetrics = [
  ["Crawl requests", "~3,700", "~15,000", "+11,300"],
  ["Total download size", "~111M", "~1.09B", "Substantial increase"],
  ["Referring domains", "270", "210", "Quality cleanup"],
];

const outcomes = [
  "Two confirmed sponsor partnerships created a new revenue channel with nationally recognized brands.",
  "Correcting the target job titles turned near-zero response into a meaningful reply rate.",
  "A fragmented collection of military-base pages became one fast, dynamic relocation tool.",
  "Instant on-site guide downloads removed the highest-friction step in the lead funnel.",
  "Search clicks grew by 1,714 and impressions by 706,400 across the reporting period.",
  "Top-10 keyword rankings increased from 16 to 104 while years of redirect and crawl debt were cleaned up.",
];

export default function MilHousingNetworkCaseStudyPage() {
  return (
    <main className={styles.page}>
      <article>
        <header className={styles.detailHero}>
          <div className={styles.shell}>
            <Link href="/case-study" className={styles.backLink}>
              ← All case studies
            </Link>
            <p className={styles.eyebrow}>MilHousing Network / Military relocation</p>
            <h1>
              Turning cold outreach into <span>sponsor revenue.</span>
            </h1>
            <p className={styles.detailLead}>
              A lead generation, website, and SEO engagement for a referral-based
              platform serving military families during Permanent Change of Station moves.
            </p>
            <dl className={styles.projectMeta}>
              <div><dt>Industry</dt><dd>Military Relocation &amp; Referral Services</dd></div>
              <div><dt>Services</dt><dd>Lead Generation, Web Development, SEO</dd></div>
              <div><dt>Engagement</dt><dd>Approximately 8 months</dd></div>
              <div><dt>Status</dt><dd>Active and ongoing</dd></div>
            </dl>
          </div>
        </header>

        <section className={styles.overviewSection} aria-labelledby="mhn-overview-title">
          <div className={`${styles.shell} ${styles.twoColumn}`}>
            <p className={styles.sectionLabel}>01 / Overview</p>
            <div className={styles.prose}>
              <h2 id="mhn-overview-title">A working platform without a working sponsor pipeline</h2>
              <p>
                MilHousing Network helps military families navigate housing,
                transportation, and relocation during PCS moves. Its referral model
                depends on partnerships with companies offering military-friendly
                programs, but no structured sponsor-acquisition process existed.
              </p>
              <p>
                The website added another constraint: high platform costs, limited
                control, dozens of disconnected base pages, a high-friction resource
                guide journey, and roughly 600 to 700 accumulated pages that created
                widespread redirect and crawl problems.
              </p>
            </div>
          </div>
          <div className={`${styles.shell} ${styles.statGrid}`}>
            {startingMetrics.map((metric) => (
              <div className={styles.statCard} key={metric.label}>
                <strong>{metric.value}</strong><span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.strategySection} aria-labelledby="mhn-strategy-title">
          <div className={`${styles.shell} ${styles.twoColumn}`}>
            <p className={styles.sectionLabel}>02 / Strategy</p>
            <div className={styles.prose}>
              <h2 id="mhn-strategy-title">Fix targeting and conversion before increasing volume</h2>
              <p>
                Sponsor outreach had to reach companies already aligned with military
                families and, inside those companies, the people who could approve a
                referral relationship. The website funnel then had to convert that
                attention, while technical SEO work cleared the debt suppressing visibility.
              </p>
            </div>
          </div>
          <ol className={`${styles.shell} ${styles.phaseRail}`}>
            <li><span>01</span><strong>Targeting</strong><small>Find qualified sponsor fit</small></li>
            <li><span>02</span><strong>Outreach</strong><small>Reach real decision-makers</small></li>
            <li><span>03</span><strong>Website</strong><small>Remove conversion friction</small></li>
            <li><span>04</span><strong>Search</strong><small>Repair and expand visibility</small></li>
          </ol>
        </section>

        <section className={styles.socialSection} aria-labelledby="mhn-outreach-title">
          <div className={styles.shell}>
            <div className={styles.phaseHeading}>
              <p className={styles.sectionLabel}>Phase 01 / Sponsor outreach</p>
              <div className={styles.prose}>
                <h2 id="mhn-outreach-title">The targeting correction that changed the response rate</h2>
                <p>
                  Several hundred emails to marketing managers and founders produced
                  almost no response. The actual decision-makers were Strategic
                  Partnership Managers, Sponsorship Managers, and Growth Managers.
                  Once prospecting moved to those roles, replies began arriving.
                </p>
              </div>
            </div>
            <div className={styles.deliverableGrid}>
              {outreachWork.map(([title, copy], index) => (
                <div className={styles.deliverable} key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3><p>{copy}</p>
                </div>
              ))}
            </div>
            <div className={styles.socialGrid}>
              <div><span>Before</span><strong>0</strong><small>confirmed partnerships</small></div>
              <div><span>After</span><strong>2</strong><small>confirmed sponsor partnerships</small></div>
              <div><span>Targeting</span><strong>3</strong><small>decision-maker role families</small></div>
              <div><span>Process</span><strong>Multi-step</strong><small>verified outreach sequences</small></div>
            </div>
            <p className={styles.note}>
              Both confirmed sponsors are nationally recognized companies: one in
              insurance and one in home improvement. Their identities remain
              generalized to respect client and partnership confidentiality.
            </p>
          </div>
        </section>

        <section className={styles.workSection} aria-labelledby="mhn-website-title">
          <div className={styles.shell}>
            <div className={styles.phaseHeading}>
              <p className={styles.sectionLabel}>Phase 02 / Website</p>
              <div className={styles.prose}>
                <h2 id="mhn-website-title">From scattered static pages to one relocation tool</h2>
                <p>
                  Under a two-week delivery window, the rebuild replaced dozens of
                  near-duplicate military-base pages with one dynamic experience and
                  removed the platform&apos;s largest lead-conversion bottleneck.
                </p>
              </div>
            </div>
            <div className={styles.deliverableGrid}>
              {websiteWork.map(([title, copy], index) => (
                <div className={styles.deliverable} key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3><p>{copy}</p>
                </div>
              ))}
            </div>
            <div className={styles.callout}>
              <span>Resource-guide funnel</span><strong>Multi-step → Instant</strong><small>Email exchange and download in one place</small>
            </div>
            <p className={styles.note}>
              A licensed property-listings display was intentionally excluded.
              Market listings require a licensed broker relationship, a regulatory
              dependency outside the scope of a website rebuild.
            </p>
          </div>
        </section>

        <section className={styles.lightSection} aria-labelledby="mhn-seo-title">
          <div className={styles.shell}>
            <div className={styles.phaseHeading}>
              <p className={styles.sectionLabel}>Phase 03 / SEO</p>
              <div className={styles.prose}>
                <h2 id="mhn-seo-title">Clearing accumulated technical debt and expanding content coverage</h2>
                <p>
                  Approximately 150 to 200 pages carried redirect issues from years
                  of off-topic uploads. Technical cleanup ran alongside broader content
                  coverage so the platform could serve more real relocation situations
                  instead of relying on one narrow visitor category.
                </p>
              </div>
            </div>
            <div className={styles.tableWrap}>
              <table>
                <thead><tr><th>Search metric</th><th>Before</th><th>After</th><th>Change</th></tr></thead>
                <tbody>
                  {seoMetrics.map(([metric, before, after, change]) => (
                    <tr key={metric}><th scope="row">{metric}</th><td>{before}</td><td>{after}</td><td>{change}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.tableWrap}>
              <table>
                <thead><tr><th>Crawl and authority metric</th><th>Before</th><th>After</th><th>Change</th></tr></thead>
                <tbody>
                  {crawlMetrics.map(([metric, before, after, change]) => (
                    <tr key={metric}><th scope="row">{metric}</th><td>{before}</td><td>{after}</td><td>{change}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.note}>
              Referring domains declined intentionally as lower-value links were
              pruned in favor of a quality-over-quantity authority profile.
            </p>
          </div>
        </section>

        <section className={styles.resultsSection} aria-labelledby="mhn-results-title">
          <div className={`${styles.shell} ${styles.twoColumn}`}>
            <p className={styles.sectionLabel}>03 / Results</p>
            <div>
              <div className={styles.prose}>
                <h2 id="mhn-results-title">A new revenue channel supported by a stronger platform</h2>
                <p>
                  Across roughly eight months, MHN gained a repeatable sponsor process,
                  a website that behaves like a useful relocation tool, and a search
                  footprint no longer held back by years of technical debt.
                </p>
              </div>
              <ol className={styles.outcomeList}>
                {outcomes.map((outcome, index) => (
                  <li key={outcome}><span>{String(index + 1).padStart(2, "0")}</span><p>{outcome}</p></li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <footer className={styles.detailCta}>
          <div className={styles.shell}>
            <p className={styles.eyebrow}>Build your growth system</p>
            <h2>Reach the right people, then make every visit count.</h2>
            <div>
              <Link href="/contact-form" className={styles.primaryLink}>Start a conversation <span aria-hidden="true">→</span></Link>
              <Link href="/case-study" className={styles.secondaryLink}>Back to case studies</Link>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
