import { FloatingHeader, FloatingScroll, FloatingRider } from "@/src/widgets";
import { FullPage, FullPageSection } from "@/src/features";
import { BaeminLayout } from "@/src/entities";
import { ICONS, THEMES } from "@/src/shared";

const Baemin = () => {
  return (
    <FullPage style={{ backgroundColor: THEMES.COLORS.배민.ACCENT }}>
      <FullPageSection>
        <BaeminLayout
          textImage={ICONS.배민.LANDING2_TEXT}
          alt="대한민국 1등 배달앱"
          thumbnailImage={ICONS.배민.LANDING2_IMAGE}
        ></BaeminLayout>
      </FullPageSection>
      <FullPageSection>
        <BaeminLayout
          textImage={ICONS.배민.LANDING3_TEXT}
          alt="배달을 더 빠르게 더 알뜰하게"
          thumbnailImage={ICONS.배민.LANDING3_IMAGE}
        ></BaeminLayout>
      </FullPageSection>
      <FloatingHeader />
      <FloatingScroll />
      <FloatingRider />
    </FullPage>
  );
};

export default Baemin;
