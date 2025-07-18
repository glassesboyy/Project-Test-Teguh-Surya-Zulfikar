import { PAGINATION, SORT_OPTIONS } from "@/lib/constants/api";
import { Idea } from "@/types/idea";
import { useCallback, useMemo, useState } from "react";

export interface UseIdeasPaginationProps {
  initialIdeas: Idea[];
  total: number;
  initialPage?: number;
  initialPageSize?: string;
  initialSort?: string;
}

export interface UseIdeasPaginationReturn {
  // State
  ideas: Idea[];
  currentPage: number;
  pageSize: string;
  sortOrder: string;
  loading: boolean;

  // Computed values
  totalPages: number;
  paginatedIdeas: Idea[];

  // Actions
  setCurrentPage: (page: number) => void;
  setPageSize: (size: string) => void;
  setSortOrder: (sort: string) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

/**
 * Custom hook for managing ideas pagination and sorting
 * Centralizes all state logic for ideas listing
 */
export function useIdeasPagination({
  initialIdeas,
  total,
  initialPage = PAGINATION.DEFAULT_PAGE,
  initialPageSize = PAGINATION.DEFAULT_CLIENT_PAGE_SIZE.toString(),
  initialSort = SORT_OPTIONS.NEWEST_FIRST,
}: UseIdeasPaginationProps): UseIdeasPaginationReturn {
  const [ideas] = useState<Idea[]>(initialIdeas);
  const [currentPage, setCurrentPageState] = useState<number>(initialPage);
  const [pageSize, setPageSizeState] = useState<string>(initialPageSize);
  const [sortOrder, setSortOrderState] = useState<string>(initialSort);
  const [loading] = useState<boolean>(false);

  // Computed values
  const totalPages = useMemo(
    () => Math.ceil(total / Number(pageSize)),
    [total, pageSize]
  );

  const sortedIdeas = useMemo(() => {
    return [...ideas].sort((a, b) => {
      const dateA = new Date(a.published_at).getTime();
      const dateB = new Date(b.published_at).getTime();

      return sortOrder === SORT_OPTIONS.NEWEST_FIRST
        ? dateB - dateA
        : dateA - dateB;
    });
  }, [ideas, sortOrder]);

  const paginatedIdeas = useMemo(() => {
    const startIndex = (currentPage - 1) * Number(pageSize);
    const endIndex = startIndex + Number(pageSize);
    return sortedIdeas.slice(startIndex, endIndex);
  }, [sortedIdeas, currentPage, pageSize]);

  // Navigation helpers
  const canGoNext = currentPage < totalPages;
  const canGoPrevious = currentPage > 1;

  // Actions
  const setCurrentPage = useCallback((page: number) => {
    setCurrentPageState(page);
  }, []);

  const goToNextPage = useCallback(() => {
    if (canGoNext) {
      setCurrentPageState(currentPage + 1);
    }
  }, [currentPage, canGoNext]);

  const goToPreviousPage = useCallback(() => {
    if (canGoPrevious) {
      setCurrentPageState(currentPage - 1);
    }
  }, [currentPage, canGoPrevious]);

  const handlePageSizeChange = useCallback((newSize: string) => {
    setPageSizeState(newSize);
    setCurrentPageState(1);
  }, []);

  const handleSortChange = useCallback((newSort: string) => {
    setSortOrderState(newSort);
    setCurrentPageState(1);
  }, []);

  return {
    // State
    ideas,
    currentPage,
    pageSize,
    sortOrder,
    loading,

    // Computed values
    totalPages,
    paginatedIdeas,

    // Actions
    setCurrentPage,
    setPageSize: handlePageSizeChange,
    setSortOrder: handleSortChange,
    goToNextPage,
    goToPreviousPage,
    canGoNext,
    canGoPrevious,
  };
}
