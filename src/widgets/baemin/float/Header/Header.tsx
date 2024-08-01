import Image from "next/image";
import * as S from "./Header.style";
import { ICONS } from "@/src/shared";
import { SOCIALS } from "./constants";

const Header = () => {
  return (
    <S.Header>
      <Image src={ICONS.배민.LOGO} alt="로고" width={142} height={32} />
      <S.SocialContainer>
        {SOCIALS.map((social) => (
          <button key={social.key}>
            <Image src={social.src} alt={social.alt} width={36} height={31} />
          </button>
        ))}
      </S.SocialContainer>
    </S.Header>
  );
};

export default Header;
