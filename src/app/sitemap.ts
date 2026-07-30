import type { MetadataRoute } from "next"

import { fetchGraphQL } from "@/lib/graphql"

const SITE_URL = "https://stratskye.com"
const LAST_MODIFIED = new Date("2026-07-16T02:20:38+00:00")

export const dynamic = "force-dynamic"

type WordPressPost = {
  slug: string
  date?: string | null
  modified?: string | null
}

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: `${SITE_URL}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "daily",
    priority: 1,
  },
  {
    url: `${SITE_URL}/services`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/about`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/our-approach`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/contact-form`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/work`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: `${SITE_URL}/case-study`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: `${SITE_URL}/blog`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    url: `${SITE_URL}/privacy-policy`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${SITE_URL}/terms-of-services`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "yearly",
    priority: 0.3,
  },
]

async function getBlogRoutes(): Promise<MetadataRoute.Sitemap> {
  try {
    const data = await fetchGraphQL<{
      posts?: { nodes?: WordPressPost[] }
    }>(`
      {
        posts(first: 100) {
          nodes {
            slug
            date
            modified
          }
        }
      }
    `)

    return (data.posts?.nodes || [])
      .filter((post) => post.slug)
      .map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.modified || post.date || LAST_MODIFIED),
        changeFrequency: "monthly",
        priority: 0.5,
      }))
  } catch (error) {
    console.error("Unable to add blog posts to sitemap", error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogRoutes = await getBlogRoutes()

  return [...staticRoutes, ...blogRoutes]
}
