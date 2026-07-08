"use client";

import { useMemo, useState } from "react";

export function usePagination<T>(items: T[], itemsPerPage = 6) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(items.length / itemsPerPage),
  );

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;

    return items.slice(start, start + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  const goToPage = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(nextPage);
  };

  return {
    currentPage,
    totalPages,
    paginatedItems,
    goToPage,
    setCurrentPage,
  };
}