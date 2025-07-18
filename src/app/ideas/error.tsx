"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function IdeasError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log error untuk monitoring
    console.error("Ideas page error:", error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center space-y-4 max-w-md mx-auto p-6">
        <div className="text-6xl">😵</div>
        <h2 className="text-2xl font-bold text-gray-900">
          Oops! Terjadi Kesalahan
        </h2>
        <p className="text-gray-600">
          Maaf, terjadi kesalahan saat memuat daftar ideas. Silakan coba lagi.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="default">
            Coba Lagi
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
          >
            Kembali ke Beranda
          </Button>
        </div>
        {process.env.NODE_ENV === "development" && (
          <details className="mt-4 text-left">
            <summary className="cursor-pointer text-sm text-gray-500">
              Detail Error (Development)
            </summary>
            <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
