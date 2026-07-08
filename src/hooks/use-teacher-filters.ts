"use client";

import { useTeacherFilterContext } from "@/context/teacher-filter-context";

export function useTeacherFilters() {
  return useTeacherFilterContext();
}