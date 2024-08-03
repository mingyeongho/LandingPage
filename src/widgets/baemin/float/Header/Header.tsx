"use client";

import Image from "next/image";
import * as S from "./Header.style";
import { ICONS } from "@/src/shared";
import { SOCIALS } from "./constants";
import { useFullPage } from "@/src/features";

const Header = () => {
  const { currentSection } = useFullPage();

  return (
    <S.Header aria-expanded={currentSection !== 0}>
      <Image src={ICONS.배민.LOGO} alt="로고" width={142} height={32} />
      <S.SocialContainer>
        {SOCIALS.map((social) => (
          <button key={social.key}>
            <Image src={social.src} alt={social.alt} width={36} height={31} />
          </button>
        ))}
        <div aria-disabled={currentSection === 0}></div>
      </S.SocialContainer>
    </S.Header>
  );
};

export default Header;
