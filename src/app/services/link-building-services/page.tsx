import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Link2, X } from "lucide-react";
import sections from "./content";
import shared from "../b2b-lead-generation-services/page.module.css";
import styles from "./page.module.css";

const pageUrl = "/services/link-building-services/";
const heroImage = "/images/services/white-paper-writing/research-editorial-review.png";
const title = "Link Building Services for B2B SEO | Stratskye";
const description = "Link building services for B2B brands focused on relevant editorial links, authority and organic visibility. Book a strategy call with Stratskye.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: { title, description, url: pageUrl, type: "website", images: [{ url: heroImage, width: 1536, height: 1024, alt: "Research and editorial review of resources worth citing" }] },
  twitter: { card: "summary_large_image", title, description, images: [heroImage] },
};

const relatedRoutes: Record<string, string> = {
  "B2B SEO Services": "/services/b2b-seo-services",
  "B2B Content Marketing Services": "/services/b2b-content-marketing-services",
  "Lead Generation Landing Pages": "/services/lead-generation-landing-pages",
};
const eyebrows = ["", "At a glance", "The authority gap", "Your deliverables", "Fit check", "Why Stratskye", "Our process", "Measurement", "Scope & investment", "Connected services", "Your questions"];

function CallToAction({ label }: { label: string }) {
  return <Link className={`${shared.primaryButton} ${styles.button}`} href="/contact-form">{label}<ArrowUpRight size={18} aria-hidden="true" /></Link>;
}

function DataTable({ table, related = false }: { table: typeof sections[number]["tables"][number]; related?: boolean }) {
  return <div className={styles.tableWrap}><table className={styles.table}><thead><tr>{table.headings.map(heading => <th scope="col" key={heading}>{heading}</th>)}</tr></thead><tbody>{table.rows.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{related ? <Link href={relatedRoutes[value] ?? "/services"}>{value}<ArrowUpRight size={16} aria-hidden="true" /></Link> : value}</td></tr>)}</tbody></table></div>;
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", name: sections[0].title, serviceType: "B2B link building", description, url: `https://stratskye.com${pageUrl}`, provider: { "@id": "https://stratskye.com/#organization" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://stratskye.com/" }, { "@type": "ListItem", position: 2, name: "Services", item: "https://stratskye.com/services" }, { "@type": "ListItem", position: 3, name: "Link Building Services", item: `https://stratskye.com${pageUrl}` }] },
    { "@type": "FAQPage", mainEntity: sections[10].faqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ],
};

export default function LinkBuildingServicesPage() {
  const hero = sections[0];
  const final = sections[11];
  return <main className={`${shared.page} ${styles.page}`}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className={shared.hero}>
      <div className={shared.heroGlow} aria-hidden="true" />
      <div className={shared.shell}><div className={shared.heroGrid}>
        <div className={shared.heroCopy}>
          <p className={shared.kicker}>B2B editorial authority</p>
          <h1 className={styles.heroTitle}>Link Building Services <span>for B2B Companies</span></h1>
          {hero.paragraphs.map(p => <p className={shared.lede} key={p}>{p}</p>)}
          <div className={shared.heroActions}><CallToAction label={hero.cta} /></div>
        </div>
        <div className={shared.heroVisual}>
          <Image src={heroImage} alt="Reviewing research and expert resources for editorial citations" fill preload sizes="(max-width: 900px) 100vw, 44vw" className={shared.coverImage} />
          <div className={shared.visualOverlay} />
          <div className={shared.pipelineCard}><div className={shared.pipelineTop}><span>Relevant independent references</span><Link2 size={18} aria-hidden="true" /></div><div className={shared.pipelineFlow}><span>Research</span><ArrowRight size={15} aria-hidden="true" /><span>Outreach</span><ArrowRight size={15} aria-hidden="true" /><span>Review</span></div></div>
        </div>
      </div></div>
    </section>

    {sections.slice(1, 11).map((section, offset) => {
      const index = offset + 1;
      const dark = index === 2 || index === 5 || index === 6;
      return <section className={`${styles.section} ${dark ? styles.dark : styles.light}`} key={section.title} aria-labelledby={`section-${index}`}>
        <div className={shared.shell}>
          <div className={shared.sectionIntro}><p className={shared.eyebrow}>{eyebrows[index]}</p><h2 id={`section-${index}`}>{section.title}</h2></div>
          {index === 5 ? <div className={styles.editorialGrid}>
            <div className={styles.reasonList}>{section.paragraphs.map(p => { const split = p.indexOf("."); return <article key={p}><h3>{p.slice(0, split)}</h3><p>{p.slice(split + 1).trim()}</p></article>; })}</div>
            <div className={styles.editorialImage}><Image src="/images/services/b2b-seo/technical-seo-analysis.png" alt="Specialists reviewing website data and SEO opportunities" fill sizes="(max-width: 900px) 100vw, 45vw" className={shared.coverImage} /></div>
          </div> : <div className={styles.copy}>{section.paragraphs.map(p => <p key={p}>{p}</p>)}</div>}

          {section.steps.length > 0 && <ol className={styles.steps}>{section.steps.map((step, n) => { const split = step.indexOf("."); return <li key={step}><span className={styles.stepNumber}>{String(n + 1).padStart(2, "0")}</span><h3>{step.slice(0, split)}</h3><p>{step.slice(split + 1).trim()}</p></li>; })}</ol>}

          {index === 4 ? <div className={shared.fitGrid}>{section.tables[0].headings.map((heading, column) => <div className={`${shared.fitCard} ${column === 0 ? shared.fitCardYes : shared.fitCardNo}`} key={heading}><h3 className={shared.fitHeading}>{column === 0 ? <Check size={22} aria-hidden="true" /> : <X size={22} aria-hidden="true" />}{heading}</h3><ul>{section.tables[0].rows.map(row => <li key={row[column]}>{row[column]}</li>)}</ul></div>)}</div> : section.tables.map(table => <div key={table.headings[0]}>{index === 6 && <h3 className={styles.tableTitle}>{table.headings[0] === "Phase" ? "Your first 90 days" : "What we need from your team"}</h3>}<DataTable table={table} related={index === 9} /></div>)}

          {section.faqs.length > 0 && <div className={shared.faqList}>{section.faqs.map((faq, n) => <details className={shared.faqItem} key={faq.question} open={n === 0}><summary><span>{faq.question}</span><span className={shared.faqPlus} aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>}
          {section.cta && <div className={styles.sectionAction}><CallToAction label={section.cta} /></div>}
        </div>
      </section>;
    })}

    <section className={`${shared.finalCta} ${styles.finalCta}`} aria-labelledby="final-cta-title">
      <div className={shared.finalGlow} aria-hidden="true" />
      <div className={shared.shell}><div className={`${shared.ctaInner} ${styles.ctaInner}`}>
        <p className={shared.eyebrow}>Build relevant authority</p>
        <h2 id="final-cta-title">{final.title}</h2>
        {final.paragraphs.map(p => <p key={p}>{p}</p>)}
        <CallToAction label={final.cta} />
      </div></div>
    </section>
  </main>;
}
