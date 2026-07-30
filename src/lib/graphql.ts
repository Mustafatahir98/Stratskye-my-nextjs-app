const GRAPHQL_ENDPOINT =
  process.env.WORDPRESS_GRAPHQL_ENDPOINT || "https://uob.ktb.temporary.site/website_60303ed2/graphql"

type GraphQLFetchOptions = {
  revalidate?: number
  tags?: string[]
}

// GraphQL response shapes are supplied by callers when strict typing is needed.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchGraphQL<T = any>(
  query: string,
  variables?: Record<string, unknown>,
  options?: GraphQLFetchOptions
): Promise<T> {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    ...(options
      ? {
          next: {
            revalidate: options.revalidate,
            tags: options.tags,
          },
        }
      : { cache: "no-store" as const }),
  })

  if (!response.ok) {
    throw new Error(`GraphQL request failed with status ${response.status}`)
  }

  const result = await response.json()

  if (result.errors?.length) {
    throw new Error(result.errors[0]?.message || "GraphQL request failed")
  }

  return result.data
}
