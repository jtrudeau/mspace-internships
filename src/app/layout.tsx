import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dawson makerSPACE Internships Hub",
  description:
    "Student hub for Dawson makerSPACE internships: project tracks, timeline, and launch session resources.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
          <footer className="border-t-4 border-[var(--ink)] bg-transparent py-6">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <p className="font-display text-sm font-black uppercase tracking-wide text-[var(--ink)]">
                Dawson makerSPACE Internships · DG-STEAM · CoLearn
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
