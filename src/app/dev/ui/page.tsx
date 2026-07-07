import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { UIShowcase } from "@/components/dev/ui-showcase";

export const metadata: Metadata = {
  title: "UI Showcase (Dev)",
  robots: { index: false, follow: false },
};

export default function DevUIPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return <UIShowcase />;
}
