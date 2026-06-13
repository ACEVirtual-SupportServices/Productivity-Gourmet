"use client";

import { useState } from "react";
import styles from "./ContactForm.module.scss";

const BUDGET_OPTIONS = [
  "Under $500/month",
  "$500 – $1,000/month",
  "$1,000 – $2,500/month",
  "$2,500+/month",
  "Not sure yet",
];

const SERVICE_OPTIONS = [
  "Virtual / Executive Assistance",
  "Client Communications",
  "Operations Support",
  "Social Media Management",
  "Systems & Process Setup",
  "Not sure — I need guidance",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    budget_range: "",
    service_interested: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.detail || "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err.message);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.successState}>
        <div className={styles.successIcon}>✓</div>
        <h3>Message Received</h3>
        <p>
          Thanks for reaching out. I review every submission personally and
          will be in touch within 24 hours on business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="full_name">Full Name <span>*</span></label>
        <input
          id="full_name"
          name="full_name"
          type="text"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="Jane Doe"
          required
          disabled={status === "loading"}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email <span>*</span></label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jane@company.com"
          required
          disabled={status === "loading"}
        />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="budget_range">Monthly Budget Range <span>*</span></label>
          <select
            id="budget_range"
            name="budget_range"
            value={formData.budget_range}
            onChange={handleChange}
            required
            disabled={status === "loading"}
          >
            <option value="" disabled>Select a range</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="service_interested">Service Interested In <span>*</span></label>
          <select
            id="service_interested"
            name="service_interested"
            value={formData.service_interested}
            onChange={handleChange}
            required
            disabled={status === "loading"}
          >
            <option value="" disabled>Select a service</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Tell Me About Your Needs <span>*</span></label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="What's slowing you down? What would make the biggest difference right now?"
          rows={5}
          required
          disabled={status === "loading"}
        />
      </div>

      {status === "error" && (
        <p className={styles.errorMsg}>{errorMsg}</p>
      )}

      <button type="submit" className={styles.submitBtn} disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message →"}
      </button>

      <p className={styles.disclaimer}>
        I typically respond within 24 hours on business days. All enquiries are treated confidentially.
      </p>
    </form>
  );
}