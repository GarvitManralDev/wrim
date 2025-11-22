import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "WRIM - We Are Immortals | Technology That Lives Beyond Time",
  description: "Creating solutions that adapt, grow, and remain impactful - truly immortal technology.",
  keywords: ["technology", "software", "development", "innovation", "immortal tech"],
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white dark:bg-slate-900 antialiased">
        <Navbar />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
