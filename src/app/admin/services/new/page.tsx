"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2, Upload, CheckCircle2, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function NewService() {
  const router = useRouter();
  
  // Basic info
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [idealFor, setIdealFor] = useState("");
  const [bannerDirection, setBannerDirection] = useState("bg-gradient-to-tr");
  
  // Image
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  // Arrays
  const [features, setFeatures] = useState<string[]>([]);
  const [benefits, setBenefits] = useState<string[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [howItWorks, setHowItWorks] = useState<{title: string, desc: string}[]>([]);
  
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

  // Generic Array Helpers
  const addStringItem = (setter: React.Dispatch<React.SetStateAction<string[]>>, state: string[]) => setter([...state, ""]);
  const updateStringItem = (setter: React.Dispatch<React.SetStateAction<string[]>>, state: string[], index: number, val: string) => {
    const arr = [...state];
    arr[index] = val;
    setter(arr);
  };
  const removeStringItem = (setter: React.Dispatch<React.SetStateAction<string[]>>, state: string[], index: number) => setter(state.filter((_, i) => i !== index));

  const addHowItWorks = () => setHowItWorks([...howItWorks, {title: "", desc: ""}]);
  const removeHowItWorks = (index: number) => setHowItWorks(howItWorks.filter((_, i) => i !== index));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !slug || !category || !subtitle || !description || !imageFile) {
      setErrorMessage("Please fill out all required basic fields and upload an image.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
      const filePath = `service-covers/${fileName}`;

      const { error: uploadError } = await supabase.storage.from("service-images").upload(filePath, imageFile);
      if (uploadError) throw new Error(`Failed to upload image: ${uploadError.message}`);

      const { data: { publicUrl } } = supabase.storage.from("service-images").getPublicUrl(filePath);

      const { error: insertError } = await supabase.from("services").insert([{
        title, slug, category, subtitle, description, long_desc: longDesc, 
        ideal_for: idealFor, banner_direction: bannerDirection, image: publicUrl,
        features, benefits, technologies, how_it_works: howItWorks
      }]);

      if (insertError) throw new Error(`Database error: ${insertError.message}`);

      setStatus("success");
      setTimeout(() => {
        router.push("/admin/services");
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
        <Link href="/admin/services" className="p-2 border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors text-gray-600">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 mb-1">Create Service</h1>
          <p className="text-gray-500 font-medium">Add a new core service offering to your website.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-100 shadow-sm shadow-gray-200/50 rounded-2xl p-8">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 border border-green-100 shadow-inner">
              <CheckCircle2 size={36} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900">Service Created!</h2>
              <p className="text-gray-500 mt-2 font-medium">Redirecting you back to the services list...</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Basic Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold border-b pb-2">1. Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Title</label>
                  <input type="text" className="w-full bg-gray-50/50 border border-gray-200 focus:border-[#8a198c] focus:bg-white rounded-xl px-4 py-3 outline-none" placeholder="e.g. Custom Software" value={title} onChange={(e) => handleTitleChange(e.target.value)} disabled={status === "loading"} required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">URL Slug</label>
                  <input type="text" className="w-full bg-gray-50/50 border border-gray-200 focus:border-[#8a198c] focus:bg-white rounded-xl px-4 py-3 outline-none" placeholder="e.g. custom-software" value={slug} onChange={(e) => setSlug(e.target.value)} disabled={status === "loading"} required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                  <input type="text" className="w-full bg-gray-50/50 border border-gray-200 focus:border-[#8a198c] focus:bg-white rounded-xl px-4 py-3 outline-none" placeholder="e.g. Software Engineering" value={category} onChange={(e) => setCategory(e.target.value)} disabled={status === "loading"} required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subtitle</label>
                  <input type="text" className="w-full bg-gray-50/50 border border-gray-200 focus:border-[#8a198c] focus:bg-white rounded-xl px-4 py-3 outline-none" placeholder="e.g. Precision, Impact, and Brand Excellence." value={subtitle} onChange={(e) => setSubtitle(e.target.value)} disabled={status === "loading"} required />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Short Description</label>
                  <textarea rows={2} className="w-full bg-gray-50/50 border border-gray-200 focus:border-[#8a198c] focus:bg-white rounded-xl px-4 py-3 outline-none resize-none" placeholder="Short overview..." value={description} onChange={(e) => setDescription(e.target.value)} disabled={status === "loading"} required />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Long Description</label>
                  <textarea rows={4} className="w-full bg-gray-50/50 border border-gray-200 focus:border-[#8a198c] focus:bg-white rounded-xl px-4 py-3 outline-none resize-none" placeholder="Detailed description for the service page..." value={longDesc} onChange={(e) => setLongDesc(e.target.value)} disabled={status === "loading"} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Ideal For (Target Audience)</label>
                  <textarea rows={2} className="w-full bg-gray-50/50 border border-gray-200 focus:border-[#8a198c] focus:bg-white rounded-xl px-4 py-3 outline-none resize-none" placeholder="e.g. Medium to large enterprises..." value={idealFor} onChange={(e) => setIdealFor(e.target.value)} disabled={status === "loading"} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Banner Direction (UI class)</label>
                  <select className="w-full bg-gray-50/50 border border-gray-200 focus:border-[#8a198c] focus:bg-white rounded-xl px-4 py-3 outline-none" value={bannerDirection} onChange={(e) => setBannerDirection(e.target.value)}>
                    <option value="bg-gradient-to-tr">Top Right</option>
                    <option value="bg-gradient-to-bl">Bottom Left</option>
                    <option value="bg-gradient-to-t">Top</option>
                    <option value="bg-gradient-to-br">Bottom Right</option>
                  </select>
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
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} disabled={status === "loading"} required />
                  </label>
                )}
              </div>
            </div>

            {/* Features & Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Features */}
              <div>
                <div className="flex justify-between items-center border-b pb-2 mb-6">
                  <h3 className="text-xl font-bold">3. Features</h3>
                  <button type="button" onClick={() => addStringItem(setFeatures, features)} className="text-sm font-bold text-[#8a198c] flex items-center gap-1 hover:opacity-80">
                    <Plus size={16} /> Add Feature
                  </button>
                </div>
                <div className="space-y-3">
                  {features.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center bg-gray-50 p-2 rounded-xl border border-gray-100">
                      <input type="text" placeholder="e.g. ERP Systems" className="flex-1 px-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-[#8a198c]" value={item} onChange={(e) => updateStringItem(setFeatures, features, index, e.target.value)} />
                      <button type="button" onClick={() => removeStringItem(setFeatures, features, index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
                    </div>
                  ))}
                  {features.length === 0 && <p className="text-sm text-gray-400 italic">No features added.</p>}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <div className="flex justify-between items-center border-b pb-2 mb-6">
                  <h3 className="text-xl font-bold">4. Benefits</h3>
                  <button type="button" onClick={() => addStringItem(setBenefits, benefits)} className="text-sm font-bold text-[#8a198c] flex items-center gap-1 hover:opacity-80">
                    <Plus size={16} /> Add Benefit
                  </button>
                </div>
                <div className="space-y-3">
                  {benefits.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center bg-gray-50 p-2 rounded-xl border border-gray-100">
                      <input type="text" placeholder="e.g. Eliminate manual bottlenecks..." className="flex-1 px-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-[#8a198c]" value={item} onChange={(e) => updateStringItem(setBenefits, benefits, index, e.target.value)} />
                      <button type="button" onClick={() => removeStringItem(setBenefits, benefits, index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
                    </div>
                  ))}
                  {benefits.length === 0 && <p className="text-sm text-gray-400 italic">No benefits added.</p>}
                </div>
              </div>
              
            </div>

            {/* Technologies */}
            <div>
              <div className="flex justify-between items-center border-b pb-2 mb-6">
                <h3 className="text-xl font-bold">5. Technologies</h3>
                <button type="button" onClick={() => addStringItem(setTechnologies, technologies)} className="text-sm font-bold text-[#8a198c] flex items-center gap-1 hover:opacity-80">
                  <Plus size={16} /> Add Tech
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {technologies.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-50 pr-2 pl-3 py-1.5 rounded-full border border-gray-200">
                    <input type="text" placeholder="e.g. React" className="bg-transparent outline-none w-24 text-sm font-medium" value={item} onChange={(e) => updateStringItem(setTechnologies, technologies, index, e.target.value)} />
                    <button type="button" onClick={() => removeStringItem(setTechnologies, technologies, index)} className="text-gray-400 hover:text-red-500"><Trash2 size={14} /></button>
                  </div>
                ))}
                {technologies.length === 0 && <p className="text-sm text-gray-400 italic">No technologies added.</p>}
              </div>
            </div>

            {/* How It Works */}
            <div>
              <div className="flex justify-between items-center border-b pb-2 mb-6">
                <h3 className="text-xl font-bold">6. How It Works (Steps)</h3>
                <button type="button" onClick={addHowItWorks} className="text-sm font-bold text-[#8a198c] flex items-center gap-1 hover:opacity-80">
                  <Plus size={16} /> Add Step
                </button>
              </div>
              <div className="space-y-4">
                {howItWorks.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-gray-400 border border-gray-200 shrink-0">{index+1}</div>
                    <div className="flex-1 space-y-3">
                      <input type="text" placeholder="Step Title (e.g. Discovery)" className="w-full px-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-[#8a198c]" value={item.title} onChange={(e) => { const newArr = [...howItWorks]; newArr[index].title = e.target.value; setHowItWorks(newArr); }} />
                      <input type="text" placeholder="Step Description" className="w-full px-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-[#8a198c]" value={item.desc} onChange={(e) => { const newArr = [...howItWorks]; newArr[index].desc = e.target.value; setHowItWorks(newArr); }} />
                    </div>
                    <button type="button" onClick={() => removeHowItWorks(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
                  </div>
                ))}
                {howItWorks.length === 0 && <p className="text-sm text-gray-400 italic">No steps added. Click "Add Step" to start.</p>}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4">
              {status === "error" && (
                <div className="bg-red-50 text-red-600 border border-red-100 p-4 rounded-xl text-sm font-bold">{errorMessage}</div>
              )}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-50">
                <Link href="/admin/services" className="px-6 py-3 border border-gray-200 hover:bg-gray-50 rounded-xl text-sm font-bold text-gray-600 transition-colors">Cancel</Link>
                <button type="submit" disabled={status === "loading"} className="px-8 py-3 bg-gradient-to-r from-[#8a198c] to-pink-600 hover:opacity-90 text-white rounded-xl text-sm font-bold transition-opacity shadow-md shadow-pink-500/20 flex items-center gap-2">
                  {status === "loading" ? <><Loader2 className="animate-spin" size={16} /> Saving...</> : "Publish Service"}
                </button>
              </div>
            </div>
            
          </form>
        )}
      </div>
    </div>
  );
}
