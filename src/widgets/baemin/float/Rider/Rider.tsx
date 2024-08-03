"use client";

import { ICONS } from "@/src/shared";
import * as S from "./Rider.style";
import { useFullPage } from "@/src/features";

const Rider = () => {
  const { currentSection } = useFullPage();

  return (
    <S.RiderButton
      src={ICONS.배민.RIDER_BUTTON}
      alt="배민 라이더 모집 버튼"
      width={173}
      height={226}
      aria-disabled={currentSection !== 0}
    />
  );
};

export default Rider;
