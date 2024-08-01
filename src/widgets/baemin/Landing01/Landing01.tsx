import Image from "next/image";
import { MAIN_ASSETS } from "./constants";
import * as S from "./Landing01.style";
import { ICONS } from "@/src/shared";

const Landing01 = () => {
  const random = Math.floor(Math.random() * 5);

  return (
    <section>
      <S.BgImage $image={MAIN_ASSETS[random].bg} />
      <S.Contents>
        <Image
          src={MAIN_ASSETS[random].text}
          alt="메인 텍스트"
          width={462}
          height={319}
        />
        <S.DownloadContainer>
          <S.DownloadWrapper>
            <span>앱스토어 다운로드</span>
            <div className="store_download">
              <button className="apple" />
              <button className="google" />
            </div>
          </S.DownloadWrapper>
          <S.DownloadWrapper>
            <span>QR코드 다운로드</span>
            <Image
              src={ICONS.배민.QR_CODE}
              alt="QR코드"
              width={152}
              height={152}
            />
          </S.DownloadWrapper>
        </S.DownloadContainer>
      </S.Contents>
    </section>
  );
};

export default Landing01;
