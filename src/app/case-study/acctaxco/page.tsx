import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../case-study.module.css";

export const metadata: Metadata = {
  title: "Acctaxco Digital Growth Case Study | Stratskye",
  description:
    "How Stratskye rebuilt Acctaxco's website and connected SEO, social media, and outbound into one digital growth system.",
  alternates: { canonical: "/case-study/acctaxco" },
};

const startingMetrics = [
  { value: "406", label: "Starting search clicks" },
  { value: "14", label: "Pages indexed" },
  { value: "<30", label: "Site speed score" },
  { value: "86%", label: "Starting bounce rate" },
];

const websiteWork = [
  ["Full site redesign", "A structured design built to support a growing content library and clearer service navigation."],
  ["Speed optimization", "Performance improved from below 30 to 90+ across core Lighthouse categories."],
  ["Technical cleanup", "Redirects, broken links, and indexability issues were corrected sitewide."],
  ["Security hardening", "The default admin path was replaced with a custom, non-guessable URL."],
  ["Sales tax calculator", "A visitor tool for calculating GST, HST, PST, and QST."],
  ["Automated news feed", "Relevant accounting and tax news keeps the site current between manual updates."],
];

const seoMetrics = [
  ["Search clicks", "406", "1,200", "+794"],
  ["Search impressions", "53,100", "380,000", "+326,900"],
  ["Pages indexed", "14", "83", "+69"],
  ["Top 10 keyword rankings", "5", "10", "+5"],
  ["Bounce rate", "86%", "42%", "-44 pts"],
];

const outboundWork = [
  ["Prospect research", "Companies filtered by industry, location, business type, and fit."],
  ["Verified contact discovery", "A database built with verified names, emails, industries, and company details."],
  ["Message testing", "Subject lines, opening hooks, pain points, and calls to action tested by industry."],
  ["Sequenced campaigns", "Structured outreach with automated follow-ups replaced single-touch sends."],
  ["Performance tracking", "Delivery, opens, replies, and positive responses monitored to refine the program."],
];

const socialMetrics = [
  { network: "LinkedIn", value: "70,000+", label: "content impressions" },
  { network: "LinkedIn", value: "1,419", label: "followers" },
  { network: "Facebook", value: "24,900", label: "page views" },
  { network: "Facebook", value: "386", label: "page visits" },
];

const websiteEvidence = [
  { src: "/images/Acctax-case-study/website-performance.PNG", width: 920, height: 794, alt: "Lighthouse report showing the rebuilt Acctaxco website scoring 98 for performance and 100 in accessibility, best practices, and SEO", caption: "Website performance after the rebuild" },
  { src: "/images/Acctax-case-study/canadian-sales-calculator.webp", width: 1088, height: 736, alt: "Canadian sales tax calculator built for the Acctaxco website", caption: "Interactive Canadian sales tax calculator" },
];

const searchEvidence = [
  { src: "/images/Acctax-case-study/Performance based period.PNG", width: 865, height: 371, alt: "Starting Google Search Console period showing 406 clicks and 53,100 impressions", caption: "Starting search performance", wide: false },
  { src: "/images/Acctax-case-study/current-period.webp", width: 852, height: 468, alt: "Current Google Search Console period showing 1,200 clicks and 380,000 impressions", caption: "Current search performance", wide: false },
  { src: "/images/Acctax-case-study/crawl activity.webp", width: 852, height: 354, alt: "Starting Google crawl activity showing 3,700 requests and 111 megabytes downloaded", caption: "Starting crawl activity", wide: false },
  { src: "/images/Acctax-case-study/crawl-activty-current period.webp", width: 832, height: 354, alt: "Current Google crawl activity showing 6,580 requests and 265 megabytes downloaded", caption: "Current crawl activity", wide: false },
  { src: "/images/Acctax-case-study/Monthy tracking.PNG", width: 711, height: 678, alt: "Monthly tracking sheet for Acctaxco search and Google Business Profile metrics", caption: "Monthly search and local visibility tracking", wide: true },
];

const socialEvidence = [
  { src: "/images/Acctax-case-study/linkedin engagement.webp", width: 619, height: 470, alt: "LinkedIn analytics showing 547 social engagements", caption: "LinkedIn engagement" },
  { src: "/images/Acctax-case-study/linkedin organic engagement.webp", width: 706, height: 498, alt: "LinkedIn organic impression trend chart", caption: "LinkedIn organic reach" },
  { src: "/images/Acctax-case-study/facebook visites.webp", width: 628, height: 451, alt: "Facebook analytics showing 386 page visits", caption: "Facebook page visits" },
  { src: "/images/Acctax-case-study/facebook-content-interaction.webp", width: 665, height: 425, alt: "Facebook analytics showing 135 content interactions", caption: "Facebook content interactions" },
];

const outcomes = [
  "A fast, secure, structured website that now supports every other growth channel.",
  "More than 70,000 LinkedIn impressions, 547 engagements, and two confirmed outreach leads.",
  "Facebook visibility grew from 35 page views to 24,900, with consistent engagement.",
  "Search clicks nearly tripled, impressions grew by 326,900, and bounce rate fell by more than half.",
  "A tested outbound email program positioned to scale with growing brand and search authority.",
];

export default function AcctaxcoCaseStudyPage() {
  return (
    <main className={styles.page}>
      <article>
        <header className={styles.detailHero}>
          <div className={styles.shell}>
            <Link href="/case-study" className={styles.backLink}>← All case studies</Link>
            <p className={styles.eyebrow}>Acctaxco / Accounting &amp; tax services</p>
            <h1>A full digital growth build for an <span>Ontario accounting firm.</span></h1>
            <p className={styles.detailLead}>
              Website, social media, search visibility, and outbound built into
              one connected growth system.
            </p>
            <dl className={styles.projectMeta}>
              <div><dt>Industry</dt><dd>Accounting &amp; Tax Services</dd></div>
              <div><dt>Services</dt><dd>Website, Social Media, SEO, Lead Gen</dd></div>
              <div><dt>Location</dt><dd>Ontario, Canada</dd></div>
              <div><dt>Status</dt><dd>Active, since August 2025</dd></div>
            </dl>
            <div className={styles.caseHeroMedia}>
              <Image className={styles.caseHeroDesktop} src="/images/Acctax-case-study/hero-section.webp" width={1905} height={905} sizes="(max-width: 1280px) calc(100vw - 48px), 1280px" alt="Desktop view of the redesigned Acctaxco website" />
              <Image className={styles.caseHeroMobile} src="/images/Acctax-case-study/hero-mobile.webp" width={475} height={617} sizes="calc(100vw - 36px)" alt="Mobile view of the redesigned Acctaxco website" />
            </div>
          </div>
        </header>

        <section className={styles.overviewSection} aria-labelledby="overview-title">
          <div className={`${styles.shell} ${styles.twoColumn}`}>
            <p className={styles.sectionLabel}>01 / Overview</p>
            <div className={styles.prose}>
              <h2 id="overview-title">Building from a limited digital foundation</h2>
              <p>
                Acctaxco is an Ontario-based accounting and tax firm serving small
                and mid-sized businesses with bookkeeping, tax filing, and company
                incorporation services. Stratskye began the engagement in August
                2025 to build a complete digital presence around the firm.
              </p>
              <p>
                The existing website was basic, and its technical foundation could
                not support meaningful growth work. This created an opportunity for
                a ground-up build across the website, social, search, and outbound.
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

        <section className={styles.strategySection} aria-labelledby="strategy-title">
          <div className={`${styles.shell} ${styles.twoColumn}`}>
            <p className={styles.sectionLabel}>02 / Strategy</p>
            <div className={styles.prose}>
              <h2 id="strategy-title">One connected growth build, not four isolated services</h2>
              <p>
                The website came first as the fast, structured destination for every
                other channel. Social content and direct outreach built visibility
                while search authority developed. SEO then compounded that foundation
                through commercial-intent content, technical cleanup, and publishing.
              </p>
            </div>
          </div>
          <ol className={`${styles.shell} ${styles.phaseRail}`}>
            <li><span>01</span><strong>Website</strong><small>Build the foundation</small></li>
            <li><span>02</span><strong>Search</strong><small>Grow qualified visibility</small></li>
            <li><span>03</span><strong>Outbound</strong><small>Create conversations</small></li>
            <li><span>04</span><strong>Social</strong><small>Build trust and reach</small></li>
          </ol>
        </section>

        <section className={styles.workSection} aria-labelledby="website-title">
          <div className={styles.shell}>
            <div className={styles.phaseHeading}>
              <p className={styles.sectionLabel}>Phase 01 / Website</p>
              <div className={styles.prose}>
                <h2 id="website-title">A fast, secure, conversion-ready foundation</h2>
                <p>
                  Stratskye rebuilt the dated site, corrected technical problems,
                  hardened administration, and added tools that give visitors a
                  reason to use and revisit the site.
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
              <span>Site speed</span><strong>Below 30 → 90+</strong><small>More than 60 points gained</small>
            </div>
            <div className={styles.evidenceGrid}>
              {websiteEvidence.map((item) => (
                <figure className={styles.evidenceCard} key={item.src}>
                  <Image src={item.src} width={item.width} height={item.height} sizes="(max-width: 900px) calc(100vw - 48px), 624px" alt={item.alt} />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.lightSection} aria-labelledby="seo-title">
          <div className={styles.shell}>
            <div className={styles.phaseHeading}>
              <p className={styles.sectionLabel}>Phase 02 / Search visibility</p>
              <div className={styles.prose}>
                <h2 id="seo-title">Commercial-intent SEO layered onto the rebuilt site</h2>
                <p>
                  Active SEO began in January 2026. Service, industry, and location
                  pages were rebuilt around search intent, supported by monthly
                  publishing, technical cleanup, and an optimized local profile.
                </p>
              </div>
            </div>
            <div className={styles.tableWrap}>
              <table>
                <thead><tr><th>Metric</th><th>Before</th><th>After</th><th>Change</th></tr></thead>
                <tbody>
                  {seoMetrics.map(([metric, before, after, change]) => (
                    <tr key={metric}><th scope="row">{metric}</th><td>{before}</td><td>{after}</td><td>{change}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.evidenceGrid}>
              {searchEvidence.map((item) => (
                <figure className={`${styles.evidenceCard} ${item.wide ? styles.evidenceCardWide : ""}`} key={item.src}>
                  <Image src={item.src} width={item.width} height={item.height} sizes="(max-width: 900px) calc(100vw - 48px), 624px" alt={item.alt} />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.workSection} aria-labelledby="outbound-title">
          <div className={styles.shell}>
            <div className={styles.phaseHeading}>
              <p className={styles.sectionLabel}>Phase 03 / Outbound</p>
              <div className={styles.prose}>
                <h2 id="outbound-title">Targeted outreach for industries with recurring accounting needs</h2>
                <p>
                  Restaurants, real estate businesses, IT companies, self-employed
                  professionals, and growing small businesses were prioritized over
                  a broad, untargeted database.
                </p>
              </div>
            </div>
            <div className={styles.deliverableGrid}>
              {outboundWork.map(([title, copy], index) => (
                <div className={styles.deliverable} key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3><p>{copy}</p>
                </div>
              ))}
            </div>
            <p className={styles.note}>
              The program is still maturing. Targeting, campaign structure, and
              messaging are being refined continuously from live response data.
            </p>
          </div>
        </section>

        <section className={styles.socialSection} aria-labelledby="social-title">
          <div className={styles.shell}>
            <div className={styles.phaseHeading}>
              <p className={styles.sectionLabel}>Phase 04 / Social &amp; brand</p>
              <div className={styles.prose}>
                <h2 id="social-title">A consistent brand presence built from a standing start</h2>
                <p>
                  LinkedIn and Facebook content combined educational posts, FAQs,
                  CRA updates, carousels, service content, and community engagement.
                  Personalized LinkedIn outreach ran alongside organic content.
                </p>
              </div>
            </div>
            <div className={styles.socialGrid}>
              {socialMetrics.map((metric) => (
                <div key={`${metric.network}-${metric.label}`}>
                  <span>{metric.network}</span><strong>{metric.value}</strong><small>{metric.label}</small>
                </div>
              ))}
            </div>
            <div className={styles.miniResults}>
              <p><strong>547</strong> total LinkedIn engagements</p>
              <p><strong>2</strong> leads generated via LinkedIn outreach</p>
              <p><strong>10,400</strong> Facebook viewers reached</p>
              <p><strong>135</strong> Facebook content interactions</p>
            </div>
            <div className={styles.evidenceGrid}>
              {socialEvidence.map((item) => (
                <figure className={`${styles.evidenceCard} ${styles.evidenceCardDark}`} key={item.src}>
                  <Image src={item.src} width={item.width} height={item.height} sizes="(max-width: 900px) calc(100vw - 48px), 624px" alt={item.alt} />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.resultsSection} aria-labelledby="results-title">
          <div className={`${styles.shell} ${styles.twoColumn}`}>
            <p className={styles.sectionLabel}>03 / Results</p>
            <div>
              <div className={styles.prose}>
                <h2 id="results-title">Every phase now strengthens the next</h2>
                <p>
                  The website gives search and social a credible destination. Social
                  and outreach build relationships while search visibility compounds.
                  The founder&apos;s personal brand is now a distinct growth channel.
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
            <h2>Strong channels work better together.</h2>
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
