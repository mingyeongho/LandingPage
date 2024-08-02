import Image from "next/image";
import * as S from "./Landing02.style";
import { ICONS } from "@/src/shared";

const Landing02 = () => {
  return (
    <section>
      <S.Contents>
        <div className="title">
          <Image
            src={ICONS.배민.LANDING2_TEXT}
            alt="대한민국 1등 배달앱"
            width={0}
            height={0}
            sizes="100vw"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </div>
        <span className="text">오늘도 당신에게 행복을 배달 중입니다.</span>
        <div></div>
      </S.Contents>
    </section>
  );
};

export default Landing02;
