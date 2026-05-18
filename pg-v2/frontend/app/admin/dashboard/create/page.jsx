"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import RichTextEditor from "@/components/admin/editor/RichTextEditor";
import styles from "./Create.module.scss";

const CATEGORIES = ["Operations", "Client Communications", "Systems", "Mindset", "Tools"];

export default function CreatePostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form State
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState(""); 
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [content, setContent] = useState("");
  
  // Publishing State
  const [publishState, setPublishState] = useState("draft"); 
  const [scheduledAt, setScheduledAt] = useState("");

  // The Cloudinary Upload Handler for the Cover Image Dropzone
  const handleCoverImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploadingImage(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
      const res = await fetch(`${baseUrl}/api/posts/upload-image`, {
        method: 'POST',
        body: formData,
        credentials: 'include', 
      });

      if (!res.ok) throw new Error('Cover image upload failed');
      
      const data = await res.json();
      setCoverImage(data.url); 
    } catch (err) {
      alert('Failed to upload image. Please try again.');
      console.error(err);
    } finally {
      setIsUploadingImage(false);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!content || content === "<p></p>") {
      setError("Post content cannot be empty.");
      setLoading(false);
      return;
    }

    const payload = {
      title,
      summary,
      category,
      content,
      cover_image: coverImage || null,
      read_time: Math.max(1, Math.ceil(content.split(" ").length / 200)), 
      is_published: publishState === "published",
      scheduled_at: publishState === "scheduled" && scheduledAt ? new Date(scheduledAt).toISOString() : null,
      analytics_public: false, 
    };

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
      const res = await fetch(`${baseUrl}/api/posts/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include", 
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.detail || "Failed to create post.");
      }

      router.push("/admin/dashboard");
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
        <div className={styles.header}>
          <h1>Create New Post</h1>
        </div>

        {error && <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>}

        <div className={styles.layout}>
          <div className={styles.mainColumn}>
            <div className={styles.field}>
              <label htmlFor="title">Post Title</label>
              <input
                id="title"
                type="text"
                placeholder="The secret to bulletproof systems..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className={styles.field}>
              <label>Content</label>
              <RichTextEditor content={content} onChange={setContent} />
            </div>
          </div>

          <div className={styles.sideColumn}>
            <div className={styles.field}>
              <label htmlFor="category">Category</label>
              <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            <div className={styles.field}>
              <label>Cover Image (Thumbnail)</label>
              {!coverImage ? (
                <div className={styles.dropzone}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCoverImageUpload}
                    disabled={isUploadingImage}
                  />
                  <div className={styles.dropzoneText}>
                    {isUploadingImage ? "Uploading to Cloudinary..." : "Click or drag an image here"}
                  </div>
                </div>
              ) : (
                <div>
                  <div className={styles.coverPreview}>
                    <Image 
                      src={coverImage} 
                      alt="Cover Preview" 
                      fill 
                      style={{ objectFit: "cover" }} 
                    />
                  </div>
                  <button 
                    type="button" 
                    onClick={() => setCoverImage("")} 
                    className={styles.btnSecondary} 
                    style={{ width: "100%", padding: "0.5rem" }}
                  >
                    Remove Image
                  </button>
                </div>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="summary">Excerpt / Summary (SEO)</label>
              <textarea
                id="summary"
                placeholder="A short description for the blog feed..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                maxLength={500}
                required
              />
            </div>

            <div className={styles.field}>
              <label>Publishing Status</label>
              <div className={styles.radioGroup}>
                <label>
                  <input type="radio" value="draft" checked={publishState === "draft"} onChange={() => setPublishState("draft")} />
                  Save as Draft
                </label>
                <label>
                  <input type="radio" value="published" checked={publishState === "published"} onChange={() => setPublishState("published")} />
                  Publish Immediately
                </label>
                <label>
                  <input type="radio" value="scheduled" checked={publishState === "scheduled"} onChange={() => setPublishState("scheduled")} />
                  Schedule for Later
                </label>
              </div>
            </div>

            {publishState === "scheduled" && (
              <div className={styles.field}>
                <label htmlFor="schedule">Scheduled Date & Time</label>
                <input
                  id="schedule"
                  type="datetime-local"
                  value={scheduledAt}
                  onChange={(e) => setScheduledAt(e.target.value)}
                  required={publishState === "scheduled"}
                />
              </div>
            )}

            <div className={styles.btnGroup}>
              <button type="button" onClick={() => router.back()} className={styles.btnSecondary} disabled={loading}>
                Cancel
              </button>
              <button type="submit" className={styles.btnPrimary} disabled={loading || isUploadingImage}>
                {loading ? "Saving..." : "Save Post"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}