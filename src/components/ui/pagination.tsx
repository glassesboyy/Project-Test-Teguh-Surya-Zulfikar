import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps extends React.ComponentProps<"nav"> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPrevNext?: boolean;
  showFirstLast?: boolean;
  siblingCount?: number;
}

interface PaginationRange {
  type: "page" | "start-ellipsis" | "end-ellipsis";
  value: number;
}

function usePagination({
  currentPage,
  totalPages,
  siblingCount = 1,
}: {
  currentPage: number;
  totalPages: number;
  siblingCount: number;
}): PaginationRange[] {
  return React.useMemo(() => {
    // If total pages is less than or equal to 5, show all pages
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => ({
        type: "page" as const,
        value: i + 1,
      }));
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftEllipsis = leftSiblingIndex > 2;
    const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    // Case 1: No left ellipsis, show right ellipsis
    if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => ({
        type: "page" as const,
        value: i + 1,
      }));

      return [
        ...leftRange,
        { type: "end-ellipsis" as const, value: 0 },
        { type: "page" as const, value: lastPageIndex },
      ];
    }

    // Case 2: Show left ellipsis, no right ellipsis
    if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = Array.from({ length: rightItemCount }, (_, i) => ({
        type: "page" as const,
        value: totalPages - rightItemCount + i + 1,
      }));

      return [
        { type: "page" as const, value: firstPageIndex },
        { type: "start-ellipsis" as const, value: 0 },
        ...rightRange,
      ];
    }

    // Case 3: Show both ellipses
    if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => ({
          type: "page" as const,
          value: leftSiblingIndex + i,
        })
      );

      return [
        { type: "page" as const, value: firstPageIndex },
        { type: "start-ellipsis" as const, value: 0 },
        ...middleRange,
        { type: "end-ellipsis" as const, value: 0 },
        { type: "page" as const, value: lastPageIndex },
      ];
    }

    return [];
  }, [currentPage, totalPages, siblingCount]);
}

function AdvancedPagination({
  className,
  currentPage,
  totalPages,
  onPageChange,
  showPrevNext = true,
  showFirstLast = true,
  siblingCount = 1,
  ...props
}: PaginationProps) {
  const paginationRange = usePagination({
    currentPage,
    totalPages,
    siblingCount,
  });

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const handlePageClick = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    >
      <div className="flex flex-row items-center gap-1">
        {/* First page button */}
        {showFirstLast && currentPage > 1 && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageClick(1)}
            className="hover:bg-primary/10 hover:text-primary transition-colors duration-200"
            aria-label="Go to first page"
          >
            {"<<"}
          </Button>
        )}

        {/* Previous button */}
        {showPrevNext && (
          <Button
            variant="outline"
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={!canGoPrevious}
            className={cn(
              "gap-1 px-2.5 sm:pl-2.5",
              canGoPrevious
                ? "hover:bg-primary/10 hover:text-primary"
                : "opacity-50"
            )}
            aria-label="Go to previous page"
          >
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="hidden sm:block">Previous</span>
          </Button>
        )}

        {/* Page numbers */}
        {paginationRange.map((item, index) => {
          if (item.type === "start-ellipsis" || item.type === "end-ellipsis") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="flex size-9 items-center justify-center"
                aria-hidden
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">More pages</span>
              </span>
            );
          }

          const isActive = item.value === currentPage;

          return (
            <Button
              key={item.value}
              variant={isActive ? "default" : "outline"}
              size="icon"
              onClick={() => handlePageClick(item.value)}
              className={cn(
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10 hover:text-primary",
                "transition-colors duration-200"
              )}
              aria-current={isActive ? "page" : undefined}
              aria-label={`Go to page ${item.value}`}
            >
              {item.value}
            </Button>
          );
        })}

        {/* Next button */}
        {showPrevNext && (
          <Button
            variant="outline"
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={!canGoNext}
            className={cn(
              "gap-1 px-2.5 sm:pr-2.5",
              canGoNext
                ? "hover:bg-primary/10 hover:text-primary"
                : "opacity-50"
            )}
            aria-label="Go to next page"
          >
            <span className="hidden sm:block">Next</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        )}

        {/* Last page button */}
        {showFirstLast && currentPage < totalPages && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageClick(totalPages)}
            className="hover:bg-primary/10 hover:text-primary transition-colors duration-200"
            aria-label="Go to last page"
          >
            {">>"}
          </Button>
        )}
      </div>
    </nav>
  );
}

// Keep original pagination components for backward compatibility
function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  AdvancedPagination,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
