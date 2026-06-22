import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { blogs } from "@/lib/blogData";
import PageTransition from "@/components/PageTransition";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <PageTransition>
      <article className="min-h-screen bg-[#F9F8F6] pb-16">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] min-h-[500px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${blog.image})` }}
          />
          {/* Overlay gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16">
            <div className="max-w-4xl mx-auto w-full">
              <Link 
                href="/" 
                className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors text-sm font-semibold tracking-wider uppercase"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
              </Link>
              
              <div className="inline-flex items-center gap-2 bg-[--primary] text-white px-4 py-1.5 rounded-full mb-6 text-xs font-bold tracking-widest uppercase">
                {blog.category}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6 uppercase">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" /> {blog.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {blog.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {blog.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-3xl mx-auto px-6 pt-20">
          <div className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-12 border-l-4 pl-6" style={{ borderColor: "var(--primary)" }}>
            {blog.excerpt}
          </div>
          
          {/* Render HTML content safely since it's hardcoded trusted data */}
          <div 
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
        
        {/* Custom Styles for the injected HTML content */}
        <style dangerouslySetInnerHTML={{__html: `
          .prose-custom {
            color: #374151; /* gray-700 */
            font-size: 1.125rem; /* 18px */
            line-height: 1.8;
          }
          .prose-custom p {
            margin-bottom: 2rem;
          }
          .prose-custom h3 {
            color: #111827; /* gray-900 */
            font-size: 1.875rem; /* 30px */
            font-weight: 900;
            margin-top: 3.5rem;
            margin-bottom: 1.5rem;
            text-transform: uppercase;
            letter-spacing: -0.025em;
          }
          .prose-custom ul {
            list-style-type: none;
            padding-left: 0;
            margin-bottom: 2rem;
          }
          .prose-custom li {
            position: relative;
            padding-left: 2rem;
            margin-bottom: 1rem;
          }
          .prose-custom li::before {
            content: "•";
            color: var(--primary);
            position: absolute;
            left: 0;
            font-size: 1.5rem;
            line-height: 1;
            top: 0.1rem;
          }
          .prose-custom strong {
            color: #111827;
            font-weight: 700;
          }
        `}} />
      </article>
    </PageTransition>
  );
}
