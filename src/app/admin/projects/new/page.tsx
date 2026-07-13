"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2, Upload, FileText, CheckCircle2, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function NewProject() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [overview, setOverview] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  // Dynamic arrays
  const [whyWeBuilt, setWhyWeBuilt] = useState<{title: string, desc: string, num: string}[]>([]);
  const [coreModules, setCoreModules] = useState<{title: string, desc: string, icon: string}[]>([]);
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTitleChange = (val: string) => {
    setTitle(val);
    const generatedSlug = val.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
    setSlug(generatedSlug);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const addWhyWeBuilt = () => setWhyWeBuilt([...whyWeBuilt, {title: "", desc: "", num: String(whyWeBuilt.length + 1)}]);
  const removeWhyWeBuilt = (index: number) => setWhyWeBuilt(whyWeBuilt.filter((_, i) => i !== index));

  const addCoreModule = () => setCoreModules([...coreModules, {title: "", desc: "", icon: "box"}]);
  const removeCoreModule = (index: number) => setCoreModules(coreModules.filter((_, i) => i !== index));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !slug || !category || !overview || !imageFile) {
      setErrorMessage("Please fill out all required fields and upload an image.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
      const filePath = `project-covers/${fileName}`;

      const { error: uploadError } = await supabase.storage.from("project-images").upload(filePath, imageFile);
      if (uploadError) throw new Error(`Failed to upload image: ${uploadError.message}`);

      const { data: { publicUrl } } = supabase.storage.from("project-images").getPublicUrl(filePath);

      const { error: insertError } = await supabase.from("projects").insert([{
        title, slug, category, overview, image: publicUrl,
        why_we_built: whyWeBuilt, core_modules: coreModules
      }]);

      if (insertError) throw new Error(`Database error: ${insertError.message}`);

      setStatus("success");
      setTimeout(() => {
        router.push("/admin/projects");
        router.refresh();
      }, 1500);

    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred.");
      setStatus("error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans pb-16">
      
      <div className="flex items-center gap-4">
        <Link href="/admin/projects" className="p-2 border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors text-gray-600">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 mb-1">Create Project</h1>
          <p className="text-gray-500 font-medium">Add a new portfolio project to showcase your work.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-100 shadow-sm shadow-gray-200/50 rounded-2xl p-8">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 border border-green-100 shadow-inner">
              <CheckCircle2 size={36} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900">Project Created!</h2>
              <p className="text-gray-500 mt-2 font-medium">Redirecting you back to the projects list...</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Basic Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold border-b pb-2">1. Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Project Title</label>
                  <input type="text" className="w-full bg-gray-50/50 border border-gray-200 focus:border-[#8a198c] focus:bg-white rounded-xl px-4 py-3 outline-none" placeholder="e.g. Inventory Management Software" value={title} onChange={(e) => handleTitleChange(e.target.value)} disabled={status === "loading"} required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">URL Slug</label>
                  <input type="text" className="w-full bg-gray-50/50 border border-gray-200 focus:border-[#8a198c] focus:bg-white rounded-xl px-4 py-3 outline-none" placeholder="e.g. inventory-management" value={slug} onChange={(e) => setSlug(e.target.value)} disabled={status === "loading"} required />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                  <input type="text" className="w-full bg-gray-50/50 border border-gray-200 focus:border-[#8a198c] focus:bg-white rounded-xl px-4 py-3 outline-none" placeholder="e.g. Logistics & Operations" value={category} onChange={(e) => setCategory(e.target.value)} disabled={status === "loading"} required />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Overview</label>
                  <textarea rows={3} className="w-full bg-gray-50/50 border border-gray-200 focus:border-[#8a198c] focus:bg-white rounded-xl px-4 py-3 outline-none resize-none" placeholder="Short description of the project..." value={overview} onChange={(e) => setOverview(e.target.value)} disabled={status === "loading"} required />
                </div>
              </div>
            </div>

            {/* Cover Image Upload */}
            <div>
              <h3 className="text-xl font-bold border-b pb-2 mb-6">2. Cover Image</h3>
              <div className="border-2 border-dashed border-gray-200 hover:border-[#8a198c] rounded-2xl p-6 transition-colors relative overflow-hidden flex flex-col items-center justify-center min-h-[200px] bg-gray-50/30">
                {imagePreview ? (
                  <div className="absolute inset-0 w-full h-full bg-gray-50">
                    <img src={imagePreview} alt="Cover Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                      <label className="cursor-pointer bg-white text-gray-800 font-bold px-4 py-2 rounded-xl text-sm hover:bg-gray-100 transition-colors shadow-lg">
                        Change Image
                        <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
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
                    </div>
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} disabled={status === "loading"} />
                  </label>
                )}
              </div>
            </div>

            {/* Why We Built */}
            <div>
              <div className="flex justify-between items-center border-b pb-2 mb-6">
                <h3 className="text-xl font-bold">3. Why We Built It</h3>
                <button type="button" onClick={addWhyWeBuilt} className="text-sm font-bold text-[#8a198c] flex items-center gap-1 hover:opacity-80">
                  <Plus size={16} /> Add Item
                </button>
              </div>
              <div className="space-y-4">
                {whyWeBuilt.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="flex-1 space-y-3">
                      <input type="text" placeholder="Problem Title" className="w-full px-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-[#8a198c]" value={item.title} onChange={(e) => { const newArr = [...whyWeBuilt]; newArr[index].title = e.target.value; setWhyWeBuilt(newArr); }} />
                      <input type="text" placeholder="Problem Description" className="w-full px-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-[#8a198c]" value={item.desc} onChange={(e) => { const newArr = [...whyWeBuilt]; newArr[index].desc = e.target.value; setWhyWeBuilt(newArr); }} />
                    </div>
                    <button type="button" onClick={() => removeWhyWeBuilt(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
                  </div>
                ))}
                {whyWeBuilt.length === 0 && <p className="text-sm text-gray-400 italic">No items added. Click "Add Item" to start.</p>}
              </div>
            </div>

            {/* Core Modules */}
            <div>
              <div className="flex justify-between items-center border-b pb-2 mb-6">
                <h3 className="text-xl font-bold">4. Core Modules</h3>
                <button type="button" onClick={addCoreModule} className="text-sm font-bold text-[#8a198c] flex items-center gap-1 hover:opacity-80">
                  <Plus size={16} /> Add Module
                </button>
              </div>
              <div className="space-y-4">
                {coreModules.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="flex-1 space-y-3">
                      <div className="flex gap-3">
                        <input type="text" placeholder="Module Title" className="flex-1 px-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-[#8a198c]" value={item.title} onChange={(e) => { const newArr = [...coreModules]; newArr[index].title = e.target.value; setCoreModules(newArr); }} />
                        <input type="text" placeholder="Lucide Icon (e.g. 'box')" className="w-48 px-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-[#8a198c]" value={item.icon} onChange={(e) => { const newArr = [...coreModules]; newArr[index].icon = e.target.value; setCoreModules(newArr); }} />
                      </div>
                      <input type="text" placeholder="Module Description" className="w-full px-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-[#8a198c]" value={item.desc} onChange={(e) => { const newArr = [...coreModules]; newArr[index].desc = e.target.value; setCoreModules(newArr); }} />
                    </div>
                    <button type="button" onClick={() => removeCoreModule(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
                  </div>
                ))}
                {coreModules.length === 0 && <p className="text-sm text-gray-400 italic">No modules added. Click "Add Module" to start.</p>}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4">
              {status === "error" && (
                <div className="bg-red-50 text-red-600 border border-red-100 p-4 rounded-xl text-sm font-bold">{errorMessage}</div>
              )}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-50">
                <Link href="/admin/projects" className="px-6 py-3 border border-gray-200 hover:bg-gray-50 rounded-xl text-sm font-bold text-gray-600 transition-colors">Cancel</Link>
                <button type="submit" disabled={status === "loading"} className="px-8 py-3 bg-gradient-to-r from-[#8a198c] to-pink-600 hover:opacity-90 text-white rounded-xl text-sm font-bold transition-opacity shadow-md shadow-pink-500/20 flex items-center gap-2">
                  {status === "loading" ? <><Loader2 className="animate-spin" size={16} /> Saving...</> : "Publish Project"}
                </button>
              </div>
            </div>
            
          </form>
        )}
      </div>
    </div>
  );
}
