"use client";

import {
  ComponentPropsWithRef,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./FullPage.style.css";

export const FullPageContext = createContext<null | {
  currentSection: number;
  onClickPage: (page: number) => void;
}>(null);

export const FullPage = ({
  children,
  ...props
}: ComponentPropsWithRef<"div">) => {
  const [currentSection, setCurrentSection] = useState(0);
  const FullPageRef = useRef<HTMLDivElement>(null);
  const scrollingLocked = useRef(false);

  const onClickPage = (page: number) => {
    setCurrentSection(page);
  };

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

  // 새로고침 시 스크롤이 맨 위로 가도록 설정
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <FullPageContext.Provider value={{ currentSection, onClickPage }}>
      <div ref={FullPageRef} {...props}>
        {children}
      </div>
    </FullPageContext.Provider>
  );
};

export const FullPageSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <section className="fullPageSection">{children}</section>;
};
