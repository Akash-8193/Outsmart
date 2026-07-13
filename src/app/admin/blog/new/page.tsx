"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2, Upload, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function NewBlogPost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTitleChange = (val: string) => {
    setTitle(val);
    // Generate clean URL slug automatically
    const generatedSlug = val
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
    setSlug(generatedSlug);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !slug.trim() || !content.trim() || !imageFile) {
      setErrorMessage("All fields are required, including a cover image.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // 1. Upload cover image to Supabase Storage Bucket 'blog-images'
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
      const filePath = `blog-covers/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, imageFile);

      if (uploadError) {
        console.error("Storage upload error:", uploadError);
        throw new Error(`Failed to upload cover image: ${uploadError.message}`);
      }

      // 2. Get Public URL of the uploaded image
      const { data: { publicUrl } } = supabase.storage
        .from("blog-images")
        .getPublicUrl(filePath);

      // 3. Insert Blog Post Record into public.blogs Table
      const { error: insertError } = await supabase
        .from("blogs")
        .insert([
          {
            title,
            slug,
            content,
            image_url: publicUrl,
          }
        ]);

      if (insertError) {
        console.error("Database insert error:", insertError);
        throw new Error(`Failed to save blog post: ${insertError.message}`);
      }

      setStatus("success");
      setTimeout(() => {
        router.push("/admin/blog");
        router.refresh();
      }, 1500);

    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred.");
      setStatus("error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans pb-16">
      
      {/* Top Breadcrumb Header */}
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/blog"
          className="p-2 border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors text-gray-600"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 mb-1">Create Blog Post</h1>
          <p className="text-gray-500 font-medium">Compose a beautiful new article for your readers.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-100 shadow-sm shadow-gray-200/50 rounded-2xl p-8">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 border border-green-100 shadow-inner">
              <CheckCircle2 size={36} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900">Blog Post Created!</h2>
              <p className="text-gray-500 mt-2 font-medium">Your new article is published and redirects you back...</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Title & Slug */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Blog Title</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50/50 border border-gray-200 hover:border-gray-300 focus:border-[#8a198c] focus:bg-white focus:ring-0 rounded-xl px-4 py-3 outline-none transition-colors font-medium text-gray-800"
                  placeholder="e.g. 5 AI Agents That Will Revolutionize Your Business"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  disabled={status === "loading"}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">URL Slug</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50/50 border border-gray-200 hover:border-gray-300 focus:border-[#8a198c] focus:bg-white focus:ring-0 rounded-xl px-4 py-3 outline-none transition-colors font-medium text-gray-800"
                  placeholder="e.g. 5-ai-agents-for-business"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  disabled={status === "loading"}
                />
              </div>
            </div>

            {/* Cover Image Upload */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Cover Image</label>
              <div className="border-2 border-dashed border-gray-200 hover:border-[#8a198c] rounded-2xl p-6 transition-colors relative overflow-hidden flex flex-col items-center justify-center min-h-[200px] bg-gray-50/30">
                {imagePreview ? (
                  <div className="absolute inset-0 w-full h-full bg-gray-50">
                    <img 
                      src={imagePreview} 
                      alt="Cover Preview" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                      <label className="cursor-pointer bg-white text-gray-800 font-bold px-4 py-2 rounded-xl text-sm hover:bg-gray-100 transition-colors shadow-lg">
                        Change Image
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer py-10 gap-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-sm text-gray-400">
                      <Upload size={20} />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-bold text-gray-800">Click to upload cover photo</p>
                      <p className="text-xs text-gray-400 mt-1 font-medium">Supports PNG, JPG, JPEG, WEBP</p>
                    </div>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleImageChange}
                      disabled={status === "loading"}
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Content Textarea */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                <FileText size={16} className="text-gray-400" />
                Blog Content
              </label>
              <textarea 
                rows={12}
                className="w-full bg-gray-50/50 border border-gray-200 hover:border-gray-300 focus:border-[#8a198c] focus:bg-white focus:ring-0 rounded-2xl px-5 py-4 outline-none transition-colors resize-none text-gray-800 leading-relaxed font-medium"
                placeholder="Write your article body here. Supports standard plain text paragraphs..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                disabled={status === "loading"}
              ></textarea>
            </div>

            {/* Actions & Feedback */}
            <div className="flex flex-col gap-4">
              {status === "error" && (
                <div className="bg-red-50 text-red-600 border border-red-100 p-4 rounded-xl text-sm font-bold">
                  {errorMessage}
                </div>
              )}
              
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-50">
                <Link 
                  href="/admin/blog"
                  className="px-6 py-3 border border-gray-200 hover:bg-gray-50 rounded-xl text-sm font-bold text-gray-600 transition-colors"
                >
                  Cancel
                </Link>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="px-8 py-3 bg-gradient-to-r from-[#8a198c] to-pink-600 hover:opacity-90 text-white rounded-xl text-sm font-bold transition-opacity shadow-md shadow-pink-500/20 flex items-center gap-2 disabled:opacity-75 disabled:hover:opacity-75"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      Publishing...
                    </>
                  ) : (
                    "Publish Post"
                  )}
                </button>
              </div>
            </div>
            
          </form>
        )}
      </div>

    </div>
  );
}
