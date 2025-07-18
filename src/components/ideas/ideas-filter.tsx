"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PAGINATION, SORT_OPTIONS } from "@/lib/constants/api";
import { Eye, Filter, Grid3X3 } from "lucide-react";

type IdeasFilterProps = {
  pageSize: string;
  setPageSize: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
  total: number;
};

export default function IdeasFilter({
  pageSize,
  setPageSize,
  sort,
  setSort,
  total,
}: IdeasFilterProps) {
  // Calculate display range
  const start = 1;
  const end = Math.min(Number(pageSize), total);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
      {/* Results Info */}
      <div className="flex items-center gap-2 text-muted-foreground">
        <Eye className="w-4 h-4" />
        <span className="text-sm font-medium">
          Showing{" "}
          <span className="text-primary font-semibold">
            {start} - {end}
          </span>{" "}
          of <span className="text-primary font-semibold">{total}</span> ideas
        </span>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Show per page */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Grid3X3 className="w-4 h-4" />
            <span>Show per page:</span>
          </div>
          <Select value={pageSize} onValueChange={setPageSize}>
            <SelectTrigger className="cursor-pointer w-[80px] bg-background/50 border-border/60 hover:border-primary/50 transition-colors focus:ring-2 focus:ring-primary/20">
              <SelectValue placeholder={pageSize} />
            </SelectTrigger>
            <SelectContent className="bg-background/95 backdrop-blur-sm border-border/60">
              {PAGINATION.PAGE_SIZE_OPTIONS.map((size) => (
                <SelectItem
                  key={size}
                  value={size.toString()}
                  className="hover:bg-primary/5 focus:bg-primary/10 cursor-pointer"
                >
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sort by */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span>Sort by:</span>
          </div>
          <Select
            value={sort === SORT_OPTIONS.NEWEST_FIRST ? "newest" : "oldest"}
            onValueChange={(value) =>
              setSort(
                value === "newest"
                  ? SORT_OPTIONS.NEWEST_FIRST
                  : SORT_OPTIONS.OLDEST_FIRST
              )
            }
          >
            <SelectTrigger className="cursor-pointer w-[130px] bg-background/50 border-border/60 hover:border-primary/50 transition-colors focus:ring-2 focus:ring-primary/20">
              <SelectValue placeholder="Newest" />
            </SelectTrigger>
            <SelectContent className="bg-background/95 backdrop-blur-sm border-border/60">
              <SelectItem
                value="newest"
                className="hover:bg-primary/5 focus:bg-primary/10 cursor-pointer"
              >
                Newest First
              </SelectItem>
              <SelectItem
                value="oldest"
                className="hover:bg-primary/5 focus:bg-primary/10 cursor-pointer"
              >
                Oldest First
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
