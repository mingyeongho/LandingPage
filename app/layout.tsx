import { Noto_Sans_KR } from "next/font/google";
import { StyledProvider } from "@/src/app";
import type { Metadata } from "next";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

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
      <body className={notoSansKr.className}>
        <StyledProvider>{children}</StyledProvider>
      </body>
    </html>
  );
}
