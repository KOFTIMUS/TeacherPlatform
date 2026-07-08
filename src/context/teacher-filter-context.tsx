"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type TeacherFilterContextType = {
  search: string;
  setSearch: (value: string) => void;
  subject: string;
  setSubject: (value: string) => void;
  minRating: string;
  setMinRating: (value: string) => void;
  priceRange: string;
  setPriceRange: (value: string) => void;
};

const TeacherFilterContext = createContext<
  TeacherFilterContextType | undefined
>(undefined);

function TeacherFilterProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("all");
  const [minRating, setMinRating] = useState("0");
  const [priceRange, setPriceRange] = useState("all");

  const value = useMemo(
    () => ({
      search,
      setSearch,
      subject,
      setSubject,
      minRating,
      setMinRating,
      priceRange,
      setPriceRange,
    }),
    [search, subject, minRating, priceRange],
  );

  return (
    <TeacherFilterContext.Provider value={value}>
      {children}
    </TeacherFilterContext.Provider>
  );
}

function useTeacherFilterContext() {
  const context = useContext(TeacherFilterContext);

  if (!context) {
    throw new Error(
      "useTeacherFilterContext must be used within TeacherFilterProvider",
    );
  }

  return context;
}

export { TeacherFilterProvider, useTeacherFilterContext };