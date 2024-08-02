"use client";

import Image from "next/image";
import * as S from "./Layout.style";
import { LayoutProps } from "./Layout.type";
import { useEffect, useRef } from "react";

const Layout = ({ textImage, alt, thumbnailImage }: LayoutProps) => {
  const thumbnailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = thumbnailRef.current;

    if (!current) return;

    const observer = new IntersectionObserver((e) => {
      const { isIntersecting } = e[0];

      if (isIntersecting) {
        thumbnailRef.current?.classList.add("active");
      }
    });
    observer.observe(current);
  }, []);

  return (
    <S.Container $thumbnailImage={thumbnailImage}>
      <div className="title">
        <Image
          src={textImage}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </div>
      <div></div>
      <div className="thumbnail" ref={thumbnailRef}>
        <i></i>
      </div>
    </S.Container>
  );
};

export default Layout;
