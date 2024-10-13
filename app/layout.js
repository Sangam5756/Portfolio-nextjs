// app/layout.js

import './globals.css'; // Import global styles

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
