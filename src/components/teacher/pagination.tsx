"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-md border border-border px-4 py-2 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:bg-background-subtle"
      >
        ← Önceki
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`rounded-md border px-4 py-2 text-sm transition-colors ${
              currentPage === page
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border hover:bg-background-subtle"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-md border border-border px-4 py-2 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:bg-background-subtle"
      >
        Sonraki →
      </button>
    </div>
  );
}

export { Pagination };