import Sidebar from "@/components/admin/Sidebar";
import { Inconsolata } from 'next/font/google';
import styles from "./layout.module.scss";
import AdminAuthGuard from "@/components/admin/AdminAuthGuard";

const inconsolata = Inconsolata({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-admin-inter',
});

// Because there is no "use client" here, Next.js can safely read this on the server
export const metadata = {
  title: "Admin Dashboard | Productivity Gourmet",
};

export default function DashboardLayout({ children }) {
  return (
    <AdminAuthGuard>
      <div className={`${styles.dashboardWrapper} ${inconsolata.variable}`}>
        <Sidebar />
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </AdminAuthGuard>
  );
}