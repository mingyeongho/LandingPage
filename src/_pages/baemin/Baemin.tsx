import { FloatingHeader, FloatingScroll, FloatingRider } from "@/src/widgets";
import { FullPage, FullPageSection } from "@/src/features";
import { BaeminLayout } from "@/src/entities";
import { ICONS, THEMES } from "@/src/shared";

const Baemin = () => {
  return (
    <FullPage style={{ backgroundColor: THEMES.COLORS.배민.ACCENT }}>
      <FullPageSection>
        <div></div>
      </FullPageSection>
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
      <FullPageSection>
        <BaeminLayout
          textImage={ICONS.배민.LANDING4_TEXT}
          alt="1등 배달앱의 멤버십"
          thumbnailImage={ICONS.배민.LANDING4_IMAGE}
        ></BaeminLayout>
      </FullPageSection>
      <FullPageSection>
        <BaeminLayout
          textImage={ICONS.배민.LANDING5_TEXT}
          alt="365일 초신속 배민 B마트"
          thumbnailImage={ICONS.배민.LANDING5_IMAGE}
        ></BaeminLayout>
      </FullPageSection>
      <FullPageSection>
        <BaeminLayout
          textImage={ICONS.배민.LANDING6_TEXT}
          alt="장보기도 쇼핑도 배민에서 "
          thumbnailImage={ICONS.배민.LANDING6_IMAGE}
        ></BaeminLayout>
      </FullPageSection>
      <FullPageSection>
        <BaeminLayout
          textImage={ICONS.배민.LANDING7_TEXT}
          alt="많이 살수록 더 저렴하죠 대용량 특가"
          thumbnailImage={ICONS.배민.LANDING7_IMAGE}
        ></BaeminLayout>
      </FullPageSection>
      <FullPageSection>
        <BaeminLayout
          textImage={ICONS.배민.LANDING8_TEXT}
          alt="너에게 밥을 보낸다 배민 선물하기"
          thumbnailImage={ICONS.배민.LANDING8_IMAGE}
        ></BaeminLayout>
      </FullPageSection>
      <FullPageSection>
        <BaeminLayout
          textImage={ICONS.배민.LANDING9_TEXT}
          alt="어떤 결제방법이든 10초면 끗!"
          thumbnailImage={ICONS.배민.LANDING9_IMAGE}
        ></BaeminLayout>
      </FullPageSection>
      <FloatingHeader />
      <FloatingScroll />
      <FloatingRider />
    </FullPage>
  );
};

export default Baemin;
