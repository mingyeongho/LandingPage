import * as S from "./Baemin.style";
import { Landing01, Landing02 } from "@/src/widgets";

const Baemin = () => {
  return (
    // Landing 페이지들은 section tag 여야함.
    <S.Container>
      <Landing01 />
      <Landing02 />
    </S.Container>
  );
};

export default Baemin;
