import { fetchGraphQL } from "@/lib/graphql"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const data = await fetchGraphQL(`
      {
        posts(first: 12) {
          nodes {
            databaseId
            title
            slug
            excerpt
            date
            featuredImage {
              node {
                mediaItemUrl
                altText
              }
            }
            author {
              node {
                name
              }
            }
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    `)

    return NextResponse.json(data)
  } catch (error) {
    console.error("Unable to fetch WordPress posts", error)

    return NextResponse.json(
      { posts: { nodes: [] }, error: "Unable to fetch posts" },
      { status: 500 }
    )
  }
}
