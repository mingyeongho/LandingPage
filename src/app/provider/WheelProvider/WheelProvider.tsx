"use client";

import React, { useEffect, useRef, useState } from "react";

const MAX_SECTION = 5;

const WheelProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollingLocked = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (scrollingLocked.current) return;

      const deltaY = e.deltaY;

      if (deltaY < 0 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      } else if (deltaY > 0 && currentSection < MAX_SECTION) {
        setCurrentSection((prev) => prev + 1);
      }

      scrollingLocked.current = true;

      setTimeout(() => {
        scrollingLocked.current = false;
      }, 1500);
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

  return <>{children}</>;
};

export default WheelProvider;
