"use client";

import { useState } from "react";

export function useTeacherFilters() {
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("");
  const [sort, setSort] = useState("");

  return {
    search,
    setSearch,
    subject,
    setSubject,
    sort,
    setSort,
  };
}