import Image from "next/image";
import * as S from "./Service.style";
import { ServiceProps } from "./Service.type";

const Service = ({ _key, backgroundImage, href }: ServiceProps) => {
  return (
    <S.StyledLink href={href}>
      <Image
        src={backgroundImage}
        alt={_key}
        fill
        objectFit="cover"
        objectPosition="center"
      />
    </S.StyledLink>
  );
};

export default Service;
