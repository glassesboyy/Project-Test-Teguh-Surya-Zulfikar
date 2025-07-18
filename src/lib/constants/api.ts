// API Configuration
export const API_CONFIG = {
  BASE_URL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://suitmedia-backend.suitdev.com/api",
  ENDPOINTS: {
    IDEAS: "/ideas",
  },
  DEFAULT_PAGE_SIZE: 100,
  DEFAULT_SORT: "-published_at",
} as const;

// Pagination Constants
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  PAGE_SIZE_OPTIONS: [10, 20, 50] as const,
  DEFAULT_CLIENT_PAGE_SIZE: 10,
} as const;

// Sort Options
export const SORT_OPTIONS = {
  NEWEST_FIRST: "-published_at",
  OLDEST_FIRST: "published_at",
} as const;

// Cache Tags
export const CACHE_TAGS = {
  IDEAS: "ideas",
  IDEA_DETAIL: "idea-detail",
} as const;

// Session Storage Keys
export const STORAGE_KEYS = {
  SELECTED_IDEA: "selectedIdea",
} as const;
