"use client";

import { createContext, useEffect, useRef, useState } from "react";
import * as S from "./FullPage.style";

export const FullPageContext = createContext<null | {}>(null);

export const FullPage = ({ children }: { children: React.ReactNode }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const FullPageRef = useRef<HTMLDivElement>(null);
  const scrollingLocked = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (scrollingLocked.current) return;

      const sectionCount =
        FullPageRef.current?.querySelectorAll("& > .fullPageSection").length ??
        0;

      const deltaY = e.deltaY;

      if (deltaY < 0 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      } else if (deltaY > 0 && currentSection < sectionCount - 1) {
        setCurrentSection((prev) => prev + 1);
      }

      scrollingLocked.current = true;

      setTimeout(() => {
        scrollingLocked.current = false;
      }, 1200);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection, children]);

  useEffect(() => {
    const sectionHeight = window.innerHeight;
    window.scrollTo({
      top: currentSection * sectionHeight,
      behavior: "smooth",
    });
  }, [currentSection]);

  return (
    <FullPageContext.Provider value={{ currentSection }}>
      <div ref={FullPageRef}>{children}</div>
    </FullPageContext.Provider>
  );
};

export const FullPageSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <S.Section className="fullPageSection">{children}</S.Section>;
};
