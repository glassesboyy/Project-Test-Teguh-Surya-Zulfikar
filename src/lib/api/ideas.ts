import { API_CONFIG } from "@/lib/constants/api";
import { Idea } from "@/types/idea";

export interface IdeasResponse {
  data: Idea[];
  meta: {
    total: number;
    page: number;
    last_page: number;
  };
}

export interface FetchIdeasParams {
  page?: number;
  pageSize?: number;
  sort?: string;
}

/**
 * Fetch ideas from the API
 * Uses proper Next.js 15 fetch with caching strategy
 */
export async function fetchIdeas(
  params: FetchIdeasParams = {}
): Promise<IdeasResponse> {
  const { page = 1, pageSize = 100, sort = "-published_at" } = params;

  const url = new URL(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.IDEAS}`);
  url.searchParams.set("page[number]", page.toString());
  url.searchParams.set("page[size]", pageSize.toString());
  url.searchParams.set("append[]", "small_image");
  url.searchParams.set("append[]", "medium_image");
  url.searchParams.set("sort", sort);

  try {
    const response = await fetch(url.toString(), {
      // Next.js 15 caching strategy
      // no-store for frequently changing data such as list ideas
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ideas: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    return {
      data: data.data || [],
      meta: {
        total: data.meta?.total || 0,
        page: data.meta?.page || page,
        last_page: data.meta?.last_page || 1,
      },
    };
  } catch (error) {
    console.error("Error fetching ideas:", error);
    throw error;
  }
}

/**
 * Fetch all ideas (for initial data)
 * Improved version with better error handling and type safety
 */
export async function fetchAllIdeas(): Promise<{
  ideas: Idea[];
  total: number;
}> {
  const allIdeas: Idea[] = [];
  let page = 1;
  const pageSize = 100;
  let totalCount = 0;

  try {
    while (true) {
      const response = await fetchIdeas({ page, pageSize });

      if (response.data.length === 0) {
        break;
      }

      allIdeas.push(...response.data);
      totalCount = response.meta.total;

      // Check if we've fetched all pages
      if (page >= response.meta.last_page) {
        break;
      }

      page++;
    }

    return {
      ideas: allIdeas,
      total: totalCount,
    };
  } catch (error) {
    console.error("Error fetching all ideas:", error);
    // Return what we have so far instead of throwing
    return {
      ideas: allIdeas,
      total: allIdeas.length,
    };
  }
}

/**
 * Fetch single idea by ID
 * For future use when implementing proper detail pages
 */
export async function fetchIdeaById(id: string): Promise<Idea | null> {
  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.IDEAS}/${id}`,
      {
        // Cache single ideas for longer because they rarely change
        cache: "force-cache",
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(
        `Failed to fetch idea: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error(`Error fetching idea ${id}:`, error);
    return null;
  }
}
