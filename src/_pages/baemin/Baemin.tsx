import { FloatingHeader, FloatingScroll, FloatingRider } from "@/src/widgets";
import { FullPage, FullPageSection } from "@/src/features";

const Baemin = () => {
  return (
    <FullPage>
      <FullPageSection>
        <div>1</div>
      </FullPageSection>
      <FullPageSection>
        <div>2</div>
      </FullPageSection>
      <FloatingHeader />
      <FloatingScroll />
      <FloatingRider />
    </FullPage>
  );
};

export default Baemin;
