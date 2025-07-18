import { Skeleton } from "@/components/ui/skeleton";

export default function IdeaDetailLoading() {
  return (
    <div className="container mx-auto p-4 mt-20 max-w-4xl">
      {/* Title skeleton */}
      <Skeleton className="h-10 w-3/4 mb-4" />

      {/* Date skeleton */}
      <Skeleton className="h-4 w-48 mb-6" />

      {/* Content skeleton */}
      <div className="space-y-4 mb-8">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />

        <div className="py-4">
          <Skeleton className="h-64 w-full rounded-lg" />
        </div>

        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      {/* Button skeleton */}
      <Skeleton className="h-10 w-48" />
    </div>
  );
}
