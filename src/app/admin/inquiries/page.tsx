import { supabase } from "@/lib/supabaseClient";
import { MessageSquare, Calendar, Mail, User, Briefcase } from "lucide-react";

export const revalidate = 0; // Disable cache to always fetch latest data

export default async function AdminInquiries() {
  // Fetch from Supabase
  const { data: inquiries, error } = await supabase
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false });

  const allInquiries = inquiries || [];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans">
      
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-black tracking-tight text-gray-900 mb-2">All Inquiries</h1>
        <p className="text-gray-500 font-medium">View and manage all contact requests received from the website.</p>
      </div>

      {/* Inquiries List */}
      <div className="bg-white border border-gray-100 shadow-sm shadow-gray-200/50 rounded-2xl p-6">
        {error ? (
          <div className="text-center py-10 text-red-500 font-medium">
            Failed to load inquiries. Error: {error.message}
          </div>
        ) : allInquiries.length === 0 ? (
          <div className="text-center py-16 flex flex-col items-center justify-center gap-4 text-gray-400">
            <MessageSquare size={48} className="text-gray-300" />
            <div>
              <p className="text-lg font-bold text-gray-700">No inquiries yet</p>
              <p className="text-sm font-medium mt-1">When users contact you through the website, their messages will appear here.</p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-500 text-sm border-b border-gray-100">
                  <th className="pb-3 font-bold px-4">Contact Info</th>
                  <th className="pb-3 font-bold px-4">Project Type</th>
                  <th className="pb-3 font-bold px-4">Message</th>
                  <th className="pb-3 font-bold px-4">Date Received</th>
                  <th className="pb-3 font-bold px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {allInquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="border-b border-gray-50 hover:bg-gray-50/80 transition-colors">
                    <td className="py-5 px-4 align-top">
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-gray-900 flex items-center gap-1.5">
                          <User size={14} className="text-[#8a198c]" />
                          {inquiry.full_name}
                        </p>
                        <p className="text-sm text-gray-500 flex items-center gap-1.5">
                          <Mail size={14} className="text-gray-400" />
                          <a href={`mailto:${inquiry.email_address}`} className="hover:text-[#8a198c] transition-colors">{inquiry.email_address}</a>
                        </p>
                      </div>
                    </td>
                    <td className="py-5 px-4 align-top whitespace-nowrap">
                      <p className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
                        <Briefcase size={14} className="text-gray-400" />
                        {inquiry.project_type}
                      </p>
                    </td>
                    <td className="py-5 px-4 align-top max-w-md">
                      <div className="bg-gray-50/50 p-3 rounded-xl border border-gray-100 text-sm text-gray-700 font-medium leading-relaxed">
                        {inquiry.message}
                      </div>
                    </td>
                    <td className="py-5 px-4 text-gray-500 text-sm font-medium align-top whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-gray-400" />
                        {new Date(inquiry.created_at).toLocaleDateString('en-US', {
                          year: 'numeric', month: 'short', day: 'numeric',
                          hour: '2-digit', minute: '2-digit'
                        })}
                      </div>
                    </td>
                    <td className="py-5 px-4 align-top text-center">
                      <span className={`inline-flex items-center justify-center text-xs px-3 py-1.5 rounded-full font-bold border ${
                        inquiry.status === "New" || !inquiry.status ? "bg-blue-50 text-blue-600 border-blue-100" :
                        inquiry.status === "In Progress" ? "bg-yellow-50 text-yellow-600 border-yellow-100" :
                        "bg-green-50 text-green-600 border-green-100"
                      }`}>
                        {inquiry.status || "New"}
                      </span>
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
