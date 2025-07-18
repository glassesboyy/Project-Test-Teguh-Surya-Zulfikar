"use client";

import { Button } from "@/components/ui/button";
import { fetchIdeaById } from "@/lib/api/ideas";
import { getSelectedIdea } from "@/lib/utils/storage";
import { Idea } from "@/types/idea";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

interface IdeaDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function IdeaDetailPage({ params }: IdeaDetailPageProps) {
  const resolvedParams = use(params);
  const [idea, setIdea] = useState<Idea | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function loadIdea() {
      try {
        setLoading(true);

        // First try to get from sessionStorage
        const storedIdea = getSelectedIdea();
        if (storedIdea && storedIdea.id.toString() === resolvedParams.id) {
          setIdea(storedIdea);
          setLoading(false);
          return;
        }

        // If not in storage, fetch from API
        const fetchedIdea = await fetchIdeaById(resolvedParams.id);
        if (fetchedIdea) {
          setIdea(fetchedIdea);
        } else {
          setError("Idea tidak ditemukan.");
        }
      } catch (e) {
        console.error("Error loading idea:", e);
        setError("Gagal memuat detail idea.");
      } finally {
        setLoading(false);
      }
    }

    loadIdea();
  }, [resolvedParams.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100/30 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Memuat detail idea...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Oops!</h1>
          <p className="text-muted-foreground mb-6">{error}</p>
          <Button onClick={() => router.back()} variant="outline">
            Kembali
          </Button>
        </div>
      </div>
    );
  }

  if (!idea) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Ide Tidak Ditemukan
          </h1>
          <p className="text-muted-foreground mb-6">
            Ide yang Anda cari tidak dapat ditemukan atau terjadi kesalahan.
          </p>
          <Button onClick={() => router.back()} variant="outline">
            Kembali
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100/30">
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <div className="mb-8">
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="mb-6 mt-6 border-primary/20 text-primary hover:bg-primary/5"
          >
            Kembali
          </Button>

          <div className="mb-4">
            <span className="text-sm text-muted-foreground">
              Dipublikasikan pada:{" "}
              {new Date(idea.published_at).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {idea.title}
          </h1>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-primary/10 p-8">
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: idea.content }}
          />
        </div>
      </div>
    </div>
  );
}
