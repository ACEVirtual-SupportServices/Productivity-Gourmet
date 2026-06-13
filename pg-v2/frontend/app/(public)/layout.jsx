import PublicHeader from '@/components/public/PublicHeader';
import PublicFooter from '@/components/public/PublicFooter';

export default function PublicLayout({ children }) {
  return (
    <div className="public-layout-wrapper">
      {/* This renders once and persists across all public routes */}
      <PublicHeader />
      
      <main className="public-main-content">
        {children}
      </main>

      <PublicFooter />
      {/* We will build the Footer next and drop it here */}
    </div>
  );
}