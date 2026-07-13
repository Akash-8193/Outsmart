import Link from "next/link";
import { Plus, Trash2, Calendar, FileText, Image } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export const revalidate = 0; // Disable caching so it's always live

export default async function AdminBlogList() {
  const { data: blogs, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 mb-2">Manage Blogs</h1>
          <p className="text-gray-500 font-medium">Create, edit, or remove blog posts on your website.</p>
        </div>
        <Link 
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 py-3 px-5 bg-gradient-to-r from-[#8a198c] to-pink-600 hover:opacity-90 text-white rounded-xl text-sm font-bold transition-opacity shadow-md shadow-pink-500/20"
        >
          <Plus size={16} />
          Create Blog Post
        </Link>
      </div>

      {/* Blog List Table */}
      <div className="bg-white border border-gray-100 shadow-sm shadow-gray-200/50 rounded-2xl p-6">
        {error ? (
          <div className="text-center py-10 text-red-500 font-medium">
            Failed to load blogs. Error: {error.message}
          </div>
        ) : !blogs || blogs.length === 0 ? (
          <div className="text-center py-16 flex flex-col items-center justify-center gap-4 text-gray-400">
            <FileText size={48} className="text-gray-300" />
            <div>
              <p className="text-lg font-bold text-gray-700">No blog posts found</p>
              <p className="text-sm font-medium mt-1">Get started by creating your very first post!</p>
            </div>
            <Link 
              href="/admin/blog/new"
              className="mt-2 text-sm font-bold text-[#8a198c] hover:underline"
            >
              Write a post now
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-500 text-sm border-b border-gray-100">
                  <th className="pb-3 font-bold px-4 w-[100px]">Cover</th>
                  <th className="pb-3 font-bold px-4">Title</th>
                  <th className="pb-3 font-bold px-4">Slug</th>
                  <th className="pb-3 font-bold px-4">Published Date</th>
                  <th className="pb-3 font-bold px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id} className="border-b border-gray-50 hover:bg-gray-50/80 transition-colors">
                    <td className="py-4 px-4 align-middle">
                      {blog.image_url ? (
                        <div className="w-16 h-12 rounded-lg overflow-hidden border border-gray-100 bg-gray-50 relative">
                          <img 
                            src={blog.image_url} 
                            alt={blog.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                          <Image size={18} />
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4 align-middle">
                      <p className="font-bold text-gray-900 line-clamp-1">{blog.title}</p>
                    </td>
                    <td className="py-4 px-4 align-middle text-sm text-gray-500 font-medium">
                      <code>/{blog.slug}</code>
                    </td>
                    <td className="py-4 px-4 align-middle text-gray-500 text-sm font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-gray-400" />
                        {new Date(blog.created_at).toLocaleDateString('en-US', {
                          year: 'numeric', month: 'short', day: 'numeric'
                        })}
                      </span>
                    </td>
                    <td className="py-4 px-4 align-middle text-right">
                      <form action={async () => {
                        "use server";
                        // Server Action to delete a blog
                        const { supabase } = await import("@/lib/supabaseClient");
                        await supabase.from("blogs").delete().eq("id", blog.id);
                        // Trigger revalidation dynamically in Next.js
                        const { revalidatePath } = await import("next/cache");
                        revalidatePath("/admin/blog");
                        revalidatePath("/blog");
                      }}>
                        <button 
                          type="submit"
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors inline-flex items-center justify-center"
                          title="Delete Post"
                        >
                          <Trash2 size={18} />
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
