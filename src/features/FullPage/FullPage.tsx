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
}>(null);

export const FullPage = ({
  children,
  ...props
}: ComponentPropsWithRef<"div">) => {
  const [currentSection, setCurrentSection] = useState(0);
  const FullPageRef = useRef<HTMLDivElement>(null);
  const scrollingLocked = useRef(false);
  const firstMounted = useRef(true);

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
    // 새로고침 시 스크롤이 맨 위로 천천히 올라가서 각 섹션의 애니메이션이 미리 실행되어지는 문제 해결
    // 처음 로딩 시 스크롤이 스무스하지 않고 위로 올라가도록
    if (firstMounted.current) {
      window.scrollTo({
        top: 0,
      });
      firstMounted.current = false;
      return;
    }

    const sectionHeight = window.innerHeight;
    window.scrollTo({
      top: currentSection * sectionHeight,
      behavior: "smooth",
    });
  }, [currentSection]);

  return (
    <FullPageContext.Provider value={{ currentSection }}>
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
