"use client";

import HeroSection from "@/components/hero-section";
import { AdvancedPagination } from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { useIdeasPagination } from "@/lib/hooks/useIdeasPagination";
import { Idea } from "@/types/idea";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import IdeaCard from "./idea-card";
import IdeasFilter from "./ideas-filter";

type Props = {
  initialIdeas: Idea[];
  total: number;
};

export default function IdeasPage({ initialIdeas, total }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const gridRef = useRef<HTMLDivElement>(null);

  const {
    currentPage,
    pageSize,
    sortOrder,
    loading,
    totalPages,
    paginatedIdeas,
    setCurrentPage,
    setPageSize,
    setSortOrder,
  } = useIdeasPagination({
    initialIdeas,
    total,
    initialPage: parseInt(searchParams.get("page") || "1"),
    initialPageSize: searchParams.get("pageSize") || "10",
    initialSort: searchParams.get("sort") || "-published_at",
  });

  // Update URL when state changes
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("page", currentPage.toString());
    params.set("pageSize", pageSize);
    params.set("sort", sortOrder);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.replace(newUrl, { scroll: false });
  }, [currentPage, pageSize, sortOrder, router]);

  // Intersection Observer for better performance
  useEffect(() => {
    if (!gridRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const cards = gridRef.current.querySelectorAll(".idea-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [paginatedIdeas]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        title="Ideas"
        description="Where all our great things begin"
      />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-20">
        {/* Stats Card */}
        <div className="backdrop-blur-sm rounded-2xl py-6">
          <IdeasFilter
            pageSize={pageSize}
            setPageSize={setPageSize}
            sort={sortOrder}
            setSort={setSortOrder}
            total={total}
            currentPage={currentPage}
          />
        </div>

        {/* Ideas Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(parseInt(pageSize))].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-[240px] w-full rounded-xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {paginatedIdeas.map((idea, index) => (
              <div
                key={idea.id}
                className="idea-card opacity-0 translate-y-8 transition-all duration-500"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <IdeaCard idea={idea} />
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Pagination */}
        <div className="flex justify-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-border/60 p-4">
            <AdvancedPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              showFirstLast={true}
              showPrevNext={true}
              siblingCount={1}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}
