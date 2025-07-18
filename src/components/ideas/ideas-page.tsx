"use client";

import HeroSection from "@/components/hero-section";
import { AdvancedPagination } from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { useIdeasPagination } from "@/lib/hooks/useIdeasPagination";
import { Idea } from "@/types/idea";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import IdeaCard from "./idea-card";
import IdeasFilter from "./ideas-filter";

type Props = {
  initialIdeas: Idea[];
  total: number;
};

export default function IdeasPage({ initialIdeas, total }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        title="Ideas"
        description="Discover creative thoughts and industry perspectives from our team of digital innovators and creative professionals."
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
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-[240px] w-full rounded-xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {paginatedIdeas.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} />
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
    </div>
  );
}
