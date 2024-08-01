import { Service } from "@/src/entities";
import * as S from "./Home.style";
import { ICONS } from "@/src/shared";

const Home = () => {
  return (
    <S.FullContainer>
      <section>
        <Service
          _key="배달의 민족"
          backgroundImage={ICONS.배민.THUMBNAIL}
          href="baemin"
        />
        {/* <Service _key="anonymouse1" /> */}
        {/* <Service _key="anonymouse2" /> */}
        {/* <Service _key="anonymouse3" /> */}
      </section>
    </S.FullContainer>
  );
};

export default Home;
