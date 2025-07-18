"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function IdeaDetailError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Idea detail error:", error);
  }, [error]);

  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="text-center space-y-4 max-w-md mx-auto">
        <div className="text-6xl">📄</div>
        <h2 className="text-2xl font-bold text-gray-900">
          Idea Tidak Ditemukan
        </h2>
        <p className="text-gray-600">
          Maaf, idea yang Anda cari tidak dapat ditemukan atau terjadi kesalahan
          saat memuat.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="default">
            Coba Lagi
          </Button>
          <Button
            onClick={() => (window.location.href = "/ideas")}
            variant="outline"
          >
            Kembali ke Daftar Ideas
          </Button>
        </div>
      </div>
    </div>
  );
}
