import '@/styles/globals.scss';

export const metadata = {
  title: 'Productivity Gourmet',
  description: 'Virtual Assistant & Operations Support',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* We will add the accessible skip-link and Navbar here in a later step */}
        {children}
      </body>
    </html>
  );
}