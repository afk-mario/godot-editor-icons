import "./reset.css";
import "./globals.css";
import "./app.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Godot Editor Icons",
  description: "Small tool to view all the Godot editor icons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
