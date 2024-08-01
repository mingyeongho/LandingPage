import { Inter } from "next/font/google";
import { StyledProvider } from "@/src/app";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "랜딩페이지 연습",
  description: "랜딩페이지 연습하기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <StyledProvider>{children}</StyledProvider>
      </body>
    </html>
  );
}
