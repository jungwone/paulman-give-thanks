import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "폴맨의 감사노트",
  description: "산본교회 바울청년부(폴맨)의 감사 노트 웹사이트입니다.",
};

// const sunflower = Sunflower({
//   subsets: ["latin"],
//   weight: ["300", "500", "700"],
// });

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSans.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-screen-lg mx-auto px-4 md:px-5">
            <Navbar />
            <main className="min-h-screen flex flex-col items-center">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
