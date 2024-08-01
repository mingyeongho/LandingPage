import { ICONS } from "@/src/shared";
import * as S from "./Rider.style";

const Rider = () => {
  return (
    <S.RiderButton
      src={ICONS.배민.RIDER_BUTTON}
      alt="배민 라이더 모집 버튼"
      width={173}
      height={226}
    />
  );
};

export default Rider;
