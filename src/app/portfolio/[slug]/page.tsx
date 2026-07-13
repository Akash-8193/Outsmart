import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

// For server components, we can't easily pass framer-motion directly without "use client".
// But we want to use Lucide icons dynamically.
// We will create a Client Component specifically for the page content, or just make the whole page "use client" if needed, but Next.js 13+ prefers keeping the page server-side and only making interactive parts client-side.
// Since we want framer-motion animations everywhere, let's make the entire page "use client" by creating a Client component wrapper.

import ProjectClientPage from "./ProjectClientPage";
import { supabase } from "@/lib/supabaseClient";

export const revalidate = 0; // Ensure dynamic rendering

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Try fetching from Supabase first
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", resolvedParams.slug)
    .single();

  let project = data;

  // Fallback to static data if not found in Supabase
  if (!project || error) {
    project = projectsData.find((p) => p.slug === resolvedParams.slug);
  }

  if (!project) {
    notFound();
  }

  // Map database fields to the static expected format for the client page if necessary
  const formattedProject = {
    ...project,
    whyWeBuilt: project.why_we_built || project.whyWeBuilt,
    coreModules: project.core_modules || project.coreModules
  };

  return <ProjectClientPage project={formattedProject} />;
}
