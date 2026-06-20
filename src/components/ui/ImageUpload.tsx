"use client";
/* eslint-disable */

import { useState, useRef } from "react";
import { Upload, X, Loader2, Image as ImageIcon } from "lucide-react";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  folder?: string;
  className?: string;
}

export function ImageUpload({ value, onChange, label = "Image", folder = "corevita", className = "" }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const uploadFile = async (file: File) => {
    setError(null);
    setUploading(true);
    try {
      const token = localStorage.getItem("access_token");
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", folder);

      const res = await fetch(`${BASE_URL}/media/upload?folder=${folder}`, {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: "Upload failed" }));
        throw new Error(err.detail || "Upload failed");
      }

      const data = await res.json();
      onChange(data.url);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setUploading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) uploadFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setDragActive(true); };
  const handleDragLeave = () => setDragActive(false);

  const clearImage = () => {
    onChange("");
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className={className}>
      <label className="text-xs font-bold text-slate-600 mb-1.5 block">{label}</label>

      {/* Preview */}
      {value && value.startsWith("http") ? (
        <div className="relative group mb-2 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
          <img
            src={value}
            alt="Preview"
            className="w-full h-auto object-contain rounded-xl max-h-64"
            style={{ display: "block" }}
          />
          <button
            type="button"
            onClick={clearImage}
            className="absolute top-2 right-2 p-1.5 rounded-lg bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-600"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded-md text-[10px] text-white font-semibold">
            Uploaded ✓
          </div>
        </div>
      ) : null}

      {/* Upload Area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => !uploading && fileRef.current?.click()}
        className={`
          relative cursor-pointer rounded-xl border-2 border-dashed transition-all duration-200 p-4
          ${dragActive
            ? "border-blue-400 bg-blue-50"
            : "border-slate-200 hover:border-blue-300 hover:bg-blue-50/50"
          }
          ${uploading ? "pointer-events-none opacity-60" : ""}
        `}
      >
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
          onChange={handleFileSelect}
          className="hidden"
        />

        <div className="flex flex-col items-center gap-2 py-2">
          {uploading ? (
            <>
              <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
              <span className="text-xs font-semibold text-blue-600">Uploading...</span>
            </>
          ) : (
            <>
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <Upload className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-center">
                <span className="text-xs font-bold text-slate-700">
                  {value ? "Replace image" : "Click to upload"}
                </span>
                <span className="block text-[10px] text-slate-400 mt-0.5">
                  or drag & drop • JPEG, PNG, WebP • Max 10MB
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* URL fallback input */}
      <div className="mt-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Or paste image URL directly..."
          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
        />
      </div>

      {error && (
        <p className="text-xs text-red-500 font-semibold mt-1.5">{error}</p>
      )}
    </div>
  );
}
