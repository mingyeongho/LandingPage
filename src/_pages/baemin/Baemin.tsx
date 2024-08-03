import {
  FloatingHeader,
  FloatingScroll,
  FloatingRider,
  IndexSection,
} from "@/src/widgets";
import { FullPage, FullPageSection } from "@/src/features";
import { BaeminLayout } from "@/src/entities";
import { THEMES } from "@/src/shared";
import { CONTENTS } from "./constants";

const Baemin = () => {
  return (
    <FullPage style={{ backgroundColor: THEMES.COLORS.배민.ACCENT }}>
      <FullPageSection>
        <IndexSection />
      </FullPageSection>
      {CONTENTS.map(({ textImage, alt, thumbnailImage }) => (
        <FullPageSection key={alt}>
          <BaeminLayout
            textImage={textImage}
            alt={alt}
            thumbnailImage={thumbnailImage}
          ></BaeminLayout>
        </FullPageSection>
      ))}
      <FloatingHeader />
      <FloatingRider />
      <FloatingScroll />
    </FullPage>
  );
};

export default Baemin;
