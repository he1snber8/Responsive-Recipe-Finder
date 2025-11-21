import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Responsive Recipe Finder',
  description: 'Search recipes and view responsive cards',
};

export default function RootLayout({ children }:{ children:ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
