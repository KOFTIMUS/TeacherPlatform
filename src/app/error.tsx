"use client";

import { useEffect } from "react";

import { Container, ErrorState } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Uygulama Hatası:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center py-20">
      <Container>
        <ErrorState
          title="Sistemde Bir Hata Oluştu"
          description="Beklenmedik bir sorunla karşılaştık. Lütfen tekrar deneyin."
          onRetry={reset}
          className="mx-auto max-w-xl"
        />
      </Container>
    </main>
  );
}