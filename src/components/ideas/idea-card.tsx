"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { saveSelectedIdea } from "@/lib/utils/storage";
import { Idea } from "@/types/idea";
import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  idea: Idea;
};

export default function IdeaCard({ idea }: Props) {
  const [imageError, setImageError] = useState(false);

  const publishDate = new Date(idea.published_at).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleClick = () => {
    saveSelectedIdea(idea);
  };

  const getPlaceholderImage = () => {
    const placeholders = ["/placeholder1.jpg", "/placeholder2.jpg"];
    return placeholders[Math.floor(Math.random() * placeholders.length)];
  };

  return (
    <Link
      href={`/ideas/${idea.id}`}
      passHref
      onClick={handleClick}
      className="group block"
    >
      <Card className="h-full bg-white/90 backdrop-blur-sm border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          {!imageError && idea.medium_image[0]?.url ? (
            <Image
              src={idea.medium_image[0].url}
              alt={idea.title}
              width={400}
              height={250}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <Image
              src={getPlaceholderImage()}
              alt={idea.title}
              width={400}
              height={250}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Arrow Icon */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
              <ArrowRight className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>

        {/* Publish Date */}
        <div className="px-6">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <CalendarDays className="w-3 h-3" />
            <span>{publishDate}</span>
          </div>
        </div>

        <CardHeader>
          <h3 className="-mt-3 font-semibold text-lg leading-tight line-clamp-3 group-hover:text-primary transition-colors duration-200 h-[4.5rem] overflow-hidden">
            {idea.title}
          </h3>
        </CardHeader>
      </Card>
    </Link>
  );
}
