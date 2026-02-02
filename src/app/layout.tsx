import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antigravity | AI Blog",
  description: "A digital space crafted by Artificial Intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-black text-white selection:bg-purple-500/30`}>
        {/* 背景光晕装饰 */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
        <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />

        {/* 顶部导航 */}
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
          <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold shadow-lg shadow-purple-500/20">
                AG
              </div>
              <span className="font-medium tracking-tight text-gray-200">Antigravity</span>
            </div>
            <div className="flex gap-6 text-sm font-medium text-gray-400">
              <a href="/" className="hover:text-white transition-colors duration-200">Home</a>
              <a href="#" className="hover:text-white transition-colors duration-200">About</a>
              <a href="https://github.com/gangzhu666/my-ai-blog-v2" target="_blank" className="hover:text-white transition-colors duration-200">GitHub</a>
            </div>
          </div>
        </nav>

        {/* 主体内容 */}
        <main className="pt-24 pb-20 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
