import IdeasPage from "@/components/ideas/ideas-page";
import { fetchAllIdeas } from "@/lib/api/ideas";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ideas & Insights | Suitmedia - Zul",
  description:
    "Discover creative ideas and insights from Suitmedia team. Browse through our collection of innovative thoughts and industry perspectives.",
  keywords: "ideas, insights, innovation, creative, suitmedia, digital agency",
  openGraph: {
    title: "Ideas & Insights | Suitmedia",
    description: "Discover creative ideas and insights from Suitmedia team.",
    type: "website",
  },
};

export default async function Page() {
  const { ideas, total } = await fetchAllIdeas();
  return <IdeasPage initialIdeas={ideas} total={total} />;
}
