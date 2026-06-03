"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Posts.module.scss";

function getPostStatus(post) {
  if (post.is_archived) return "Archived";
  if (post.is_published) return "Published";
  if (post.scheduled_at) return "Scheduled";
  return "Draft";
}

export default function ManagePosts() {
  const [activeTab, setActiveTab] = useState("active");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [postToDelete, setPostToDelete] = useState(null);
  const [deleteInput, setDeleteInput] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [archivingId, setArchivingId] = useState(null);

  useEffect(() => {
  let cancelled = false;

  async function load() {
    setLoading(true);
    setError("");
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
      const res = await fetch(
        `${baseUrl}/api/admin/posts?archived=${activeTab === "archived"}`,
        { credentials: "include" }
      );
      if (!res.ok) throw new Error("Failed to load posts");
      const data = await res.json();
      if (!cancelled) setPosts(data);
    } catch (err) {
      if (!cancelled) setError(err.message);
    } finally {
      if (!cancelled) setLoading(false);
    }
  }

  load();
  return () => { cancelled = true; };
}, [activeTab]);

  // useEffect(() => {
  //   fetchPosts(activeTab);
  // }, [activeTab, fetchPosts]);

  const handleTabChange = (tab) => {
  if (tab === activeTab) return;
  setPosts([]);
  setActiveTab(tab);
};

  const handleArchiveToggle = async (post) => {
    setArchivingId(post.id);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
      const res = await fetch(`${baseUrl}/api/admin/posts/${post.id}/archive`, {
        method: "PATCH",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to update post.");
      // Remove from current tab's list since it moved to the other tab
      setPosts((prev) => prev.filter((p) => p.id !== post.id));
    } catch (err) {
      alert(err.message);
    } finally {
      setArchivingId(null);
    }
  };

  const confirmDelete = async () => {
    if (!postToDelete) return;
    setIsDeleting(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
      const res = await fetch(`${baseUrl}/api/posts/${postToDelete.id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to delete post from the server.");
      setPosts(posts.filter((p) => p.id !== postToDelete.id));
    } catch (err) {
      alert(err.message);
    } finally {
      setIsDeleting(false);
      setPostToDelete(null);
      setDeleteInput("");
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Manage Posts</h1>
        <Link href="/admin/dashboard/create" className={styles.newBtn}>
          Create New Post
        </Link>
      </header>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === "active" ? styles.tabActive : ""}`}
          onClick={() => handleTabChange("active")}
        >
          Active Posts
        </button>
        <button
          className={`${styles.tab} ${activeTab === "archived" ? styles.tabActive : ""}`}
          onClick={() => handleTabChange("archived")}
        >
          Archived
        </button>
      </div>

      {loading ? (
        <div className={styles.message}>Loading posts...</div>
      ) : error ? (
        <div className={styles.message}>Error: {error}</div>
      ) : (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.length === 0 ? (
                <tr>
                  <td colSpan="4" className={styles.empty}>
                    {activeTab === "archived" ? "No archived posts." : "No posts found."}
                  </td>
                </tr>
              ) : (
                posts.map((post) => (
                  <tr key={post.id}>
                    <td className={styles.postTitle}>{post.title}</td>
                    <td>
                      <span className={`${styles.badge} ${styles[getPostStatus(post).toLowerCase()]}`}>
                        {getPostStatus(post)}
                      </span>
                    </td>
                    <td className={styles.dateCell}>
                      {new Date(post.created_at).toLocaleDateString("en-GB")}
                    </td>
                    <td className={styles.actions}>
                      {activeTab === "active" && (
                        <Link href={`/admin/dashboard/edit/${post.id}`} className={styles.editBtn}>
                          Edit
                        </Link>
                      )}
                      <button
                        onClick={() => handleArchiveToggle(post)}
                        className={styles.archiveBtn}
                        disabled={archivingId === post.id}
                      >
                        {archivingId === post.id
                          ? "..."
                          : activeTab === "archived"
                          ? "Unarchive"
                          : "Archive"}
                      </button>
                      {activeTab === "archived" && (
                        <button
                          onClick={() => setPostToDelete(post)}
                          className={styles.deleteBtn}
                        >
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {postToDelete && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Are you absolutely sure?</h2>
            <p>
              This action cannot be undone. This will permanently delete the post
              <strong> &quot;{postToDelete.title}&quot;</strong> and remove all associated data.
            </p>
            <div className={styles.modalInputGroup}>
              <label>
                Please type <strong>delete my post</strong> to confirm.
              </label>
              <input
                type="text"
                value={deleteInput}
                onChange={(e) => setDeleteInput(e.target.value)}
                placeholder="delete my post"
                className={styles.modalInput}
                disabled={isDeleting}
              />
            </div>
            <div className={styles.modalActions}>
              <button
                className={styles.cancelBtn}
                onClick={() => { setPostToDelete(null); setDeleteInput(""); }}
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                className={styles.confirmDeleteBtn}
                onClick={confirmDelete}
                disabled={deleteInput !== "delete my post" || isDeleting}
              >
                {isDeleting ? "Deleting..." : "I understand the consequences, delete this post"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}