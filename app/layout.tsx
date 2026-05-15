import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Thread Bankruptcy Declutterer — Auto-archive overwhelming Slack threads",
  description: "Automatically identifies and archives Slack threads that have become too long or off-topic, with smart suggestions for moving discussions to proper channels."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e837f5b5-fb69-4c0a-a7a2-c1ad7b3478bb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
