import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Blog Front',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
